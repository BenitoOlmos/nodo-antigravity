#!/bin/bash

# ==============================================================================
# Deployment Script for React SPA + Nginx (via MobaXterm / SSH)
# ==============================================================================

# Variables (Update these with your specific server details)
SERVER_USER="tu_usuario"
SERVER_IP="tu_ip_del_servidor"
SERVER_DIR="/var/www/webnodo/dist" # Updated to match your Nginx root
NGINX_CONF_DIR="/etc/nginx/sites-available"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Deployment Process...${NC}"

# 1. Build the React project
echo -e "${YELLOW}Installing dependencies and building the project...${NC}"
npm install
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed! Exiting."
  exit 1
fi

echo -e "${GREEN}Build successful!${NC}"

# 2. Uploading files via scp/rsync
# Note: If using MobaXterm, you can run this script in the MobaXterm local terminal, 
# or use the built-in SFTP drag-and-drop feature to upload the 'dist' folder and 'nginx.conf'

echo -e "${YELLOW}Uploading files to server at $SERVER_USER@$SERVER_IP...${NC}"

# Uncomment the following lines and ensure your SSH keys are set up to use auto-upload
# echo "Uploading Nginx Config..."
# scp ./nginx/nginx.conf $SERVER_USER@$SERVER_IP:$NGINX_CONF_DIR/mi-app.conf

# echo "Uploading React Build..."
# scp -r ./dist/* $SERVER_USER@$SERVER_IP:$SERVER_DIR/

# echo "Restarting Nginx on the server..."
# ssh $SERVER_USER@$SERVER_IP "sudo systemctl restart nginx"

echo -e "${GREEN}Deployment ready!${NC}"
echo "------------------------------------------------------------------"
echo "If you are using MobaXterm SFTP (Drag and Drop):"
echo "1. Upload the contents of the 'dist' folder to your server's public html directory (e.g. /var/www/webnodo/dist)."
echo "2. Upload the 'nginx/nginx.conf' to your Nginx configuration directory (e.g. /etc/nginx/sites-available/nodoesit.org)."
echo "3. Restart Nginx on your server: sudo systemctl restart nginx"
echo "------------------------------------------------------------------"
