#!/usr/bin/env bash
# ==============================================================================
# SHP Technology - Django Backend Production Deployment Script
# ==============================================================================

set -e # Exit immediately if a command exits with a non-zero status

# Text Formatting
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo -e "${BLUE}====================================================${NC}"
echo -e "${BLUE}🚀 Starting Django Backend Deployment...${NC}"
echo -e "${BLUE}====================================================${NC}"

# 1. Environment file check
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        echo -e "${YELLOW}⚠️  .env file not found. Creating .env from .env.example...${NC}"
        cp .env.example .env
    else
        echo -e "${RED}❌ Error: Neither .env nor .env.example found!${NC}"
        exit 1
    fi
fi

# 2. Virtual Environment Setup
if [ ! -d "venv" ]; then
    echo -e "${YELLOW}📦 Creating Python virtual environment (venv)...${NC}"
    python3 -m venv venv
fi

echo -e "${GREEN}⚡ Activating virtual environment & updating pip...${NC}"
source venv/bin/activate
pip install --upgrade pip --quiet

# 3. Dependency Installation
echo -e "${GREEN}📥 Installing / Updating dependencies from requirements.txt...${NC}"
pip install -r requirements.txt --quiet

# 4. Database Migrations
echo -e "${GREEN}🗄️  Running database migrations...${NC}"
python manage.py makemigrations --noinput
python manage.py migrate --noinput

# 5. Data Seeding
echo -e "${GREEN}🌱 Seeding initial data (FAQs, Team Members, Testimonials)...${NC}"
python manage.py seed_data || true

# 6. Collect Static Files (for Django Admin & Jazzmin assets)
echo -e "${GREEN}🎨 Collecting static files for production...${NC}"
python manage.py collectstatic --noinput

echo -e "${BLUE}====================================================${NC}"
echo -e "${GREEN}✅ Deployment Build Prepared Successfully!${NC}"
echo -e "${BLUE}====================================================${NC}"

# 7. Start options
if [ "$1" == "--start" ] || [ "$1" == "-s" ]; then
    echo -e "${GREEN}🔥 Launching production server with Gunicorn on port 8000...${NC}"
    exec gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 120
else
    echo -e "${YELLOW}💡 To start the production server with Gunicorn, run:${NC}"
    echo -e "   ${GREEN}./deploy.sh --start${NC}"
    echo -e "   or manually:"
    echo -e "   ${GREEN}source venv/bin/activate && gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers 3${NC}"
fi
