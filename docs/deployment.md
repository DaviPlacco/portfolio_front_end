# Deploying a Vite Project with Tailwind CSS on GitHub Pages

This guide explains how to deploy a Vite project using Tailwind CSS on GitHub Pages.

## Prerequisites

- Node.js and npm installed.
- GitHub account and repository configured.

## Deployment Steps

### 1. Install `gh-pages`

First, you need to install the `gh-pages` package to facilitate deployment.

```bash
npm install gh-pages --save-dev
```

## 2. Configure package.json
Open the package.json file and add the following lines:

a. Add the homepage
```json
"homepage": "https://<your-username>.github.io/<repository-name>"
```
Replace <your-username> with your GitHub username and <repository-name> with your repository name.

b. Add the deployment scripts
Add the following scripts:
```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 3. Configure Vite for deployment
Create or edit the vite.config.js file to set the correct base path:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<repository-name>/'
})
```
Replace <repository-name> with your repository name.

## 4. Build and Deploy
Now you can run the commands to build your project and deploy it to GitHub Pages:

```bash
npm run deploy
```

## 5. Verify the Deployment
After the above command executes successfully, your project will be available on GitHub Pages at the URL specified in the homepage property of your package.json.

## Summary of Steps

- Install gh-pages.
- Configure package.json with the homepage and deployment scripts.
- Configure vite.config.js with the base path.
- Run the npm run deploy command to build and deploy.

Now your Vite project with Tailwind CSS should be available on GitHub Pages!

# Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [gh-pages Documentation](https://www.npmjs.com/package/gh-pages)