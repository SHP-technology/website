/**
 * Google Apps Script Webhook for SHP Technology Forms
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet where you want form responses to be saved.
 * 2. Click on Extensions -> Apps Script.
 * 3. Replace all code in the editor with this script.
 * 4. Click Deploy -> New deployment.
 * 5. Choose "Web app":
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Critical for public form submissions)
 * 6. Copy the Web App URL and paste it as VITE_GOOGLE_SHEET_WEBHOOK_URL in your .env file.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write collisions
  
  try {
    var data = {};
    
    // Support both JSON payload body and form-encoded data
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    var sheetName = data.source || 'General Inquiries';
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    
    // 1. Auto-create sheet tab if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Initialize with standard headers
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Company", "Subject/Interest", "Message/Notes"]);
    }
    
    // 2. Read existing headers
    var lastCol = Math.max(1, sheet.getLastColumn());
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    
    // 3. Find payload keys to map (ignoring source and timestamp)
    var payloadKeys = Object.keys(data).filter(function(k) { 
      return k !== 'source' && k !== 'timestamp'; 
    });
    
    // 4. Dynamically append new header columns if fields expand (case-insensitive check)
    payloadKeys.forEach(function(key) {
      var exists = headers.some(function(h) {
        return h.toLowerCase() === key.toLowerCase();
      });
      if (!exists) {
        headers.push(key);
      }
    });
    
    // Rewrite headers row
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // 5. Map payload data values to header columns (case-insensitive matching)
    var rowValues = headers.map(function(header) {
      if (header.toLowerCase() === 'timestamp') {
        return data.timestamp ? new Date(data.timestamp) : new Date();
      }
      
      var matchingKey = Object.keys(data).find(function(k) {
        return k.toLowerCase() === header.toLowerCase();
      });
      
      return (matchingKey !== undefined && data[matchingKey] !== undefined) ? data[matchingKey] : "";
    });
    
    // Append the row to Google Sheet
    sheet.appendRow(rowValues);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", result: "Row appended" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Enable GET testing
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "online", message: "SHP Technology Webhook Endpoint Active" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Enable CORS
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
