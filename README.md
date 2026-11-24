<<<<<<< HEAD
# Manas Ranjan Aran — Data Science & AI Portfolio

A responsive personal portfolio built with React + Vite and custom CSS. It uses no Tailwind, no backend, and no environment variables.

## Prerequisites
Install:
- Node.js LTS (includes npm)
- Visual Studio Code (optional but recommended)

## Run locally (Windows)
1. Extract the ZIP folder.
2. Open the extracted `manas-ai-ml-portfolio` folder in VS Code.
3. In VS Code, open **Terminal → New Terminal**.
4. Run these commands one at a time:

```bash
npm install
npm run dev
```

5. In the terminal, open the local URL shown by Vite (usually `http://localhost:5173`).

## Build production version
```bash
npm run build
npm run preview
```
The production build is created in the `dist` folder.

## IMPORTANT: Personalize before publishing
Open `src/main.jsx` and update the `profile` object:
- `email`: your actual email address
- `linkedin`: your LinkedIn profile URL
- `github`: your GitHub profile URL
- `resume`: leave as `/resume.pdf` and place your PDF resume in the `public` folder

Then update the project links in the `projects` array:
- Replace all `YOUR-GITHUB` placeholders with the correct repositories.
- Replace the RetailPulse demo URL with your actual deployed URL.
- Remove or replace project descriptions if they don't match your final repository.

### Resume file
Create the `public` folder if it does not exist, and put your PDF resume there named `resume.pdf`. A download button is already configured.

### Before you deploy
Search in `src/main.jsx` for `YOUR-` and replace each placeholder. Check links and project details carefully. Some projects are described from the user's previously shared project background; ensure every description reflects your actual implementation.

## Deploy
You can deploy the Vite app to Vercel, Netlify, or GitHub Pages. The easiest option for beginners is usually Vercel:
1. Create a GitHub repository and push this project.
2. Import that repository in Vercel.
3. Framework preset: Vite; build command: `npm run build`; output folder: `dist`.
4. Deploy. Vercel will provide a public URL.

## Stack
- React
- Vite
- Lucide icons
- Custom CSS
=======
# Portfolio
>>>>>>> ef620d44919d759d2eb16555efe19d77465506fa
