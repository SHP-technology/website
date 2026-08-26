/**
 * Google Apps Script Webhook
 * Paste this script into your Google Sheet's Extensions -> Apps Script editor.
 * It will capture all website form submissions, categorize them into tabs,
 * and dynamically add new columns if the form fields are modified.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write collisions
  
  try {
    var data = JSON.parse(e.postData.contents);
    var sheetName = data.source || 'General Inquiries';
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    
    // 1. Auto-create sheet tab if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(["Timestamp"]); // Default initial header
    }
    
    // 2. Read existing headers
    var lastCol = Math.max(1, sheet.getLastColumn());
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    
    // 3. Find new payload keys (ignoring the source tag)
    var payloadKeys = Object.keys(data).filter(function(k) { 
      return k !== 'source' && k !== 'timestamp'; 
    });
    
    // 4. Dynamically append new header columns if fields expand
    payloadKeys.forEach(function(key) {
      if (headers.indexOf(key) === -1) {
        headers.push(key);
      }
    });
    
    // Rewrite headers row
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // 5. Map payload data values to header columns
    var rowValues = headers.map(function(header) {
      if (header === 'Timestamp') {
        return data.timestamp ? new Date(data.timestamp) : new Date();
      }
      return data[header] !== undefined ? data[header] : "";
    });
    
    // Append the row
    sheet.appendRow(rowValues);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Enable CORS
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
