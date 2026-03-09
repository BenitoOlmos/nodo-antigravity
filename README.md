<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/12f78ef5-a023-49bf-844c-2368e8bb88b4

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment via MobaXterm

### Preparation
1. Build the production application locally:
   `npm run build`
2. This will generate a `dist` folder with the optimized files.

### MobaXterm SFTP Upload
1. Open MobaXterm and connect to your server via SSH.
2. In the left panel (SFTP browser), navigate to your server's web root directory (e.g., `/usr/share/nginx/html` or `/var/www/html`).
3. Drag and drop the **contents** of your local `dist` folder into this directory.
4. Drag and drop the local `nginx/nginx.conf` file to your server's Nginx configuration directory (e.g., `/etc/nginx/conf.d/miapp.conf`).
5. In the MobaXterm terminal, restart Nginx to apply changes:
   ```bash
   sudo systemctl restart nginx
   ```

### Automated Script (Optional, for Linux environments)
You can use the included `deploy.sh` script if you configure your server variables in it:
```bash
./deploy.sh
```
