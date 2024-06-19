# Getting Started with Vite, Tailwind CSS, and Aceternity.ui

This guide will help you get started with a new Vite project and install Tailwind CSS and Aceternity.ui.

## Prerequisites

- Node.js and npm installed.

## 1. Create a New Vite Project

First, you need to create a new Vite project. You can do this using the following command:

```bash
npm create vite@latest
```
Follow the prompts to set up your project. Choose a project name and select the framework you want to use. For this example, we'll use React.

## 2. Navigate to Your Project Directory
Once the project is created, navigate to your project directory:

```bash
cd your-project-name
```
Replace your-project-name with the name of your project.

## 3. Install Dependencies
Install the necessary dependencies:

```bash
npm install
```

## 4. Install Tailwind CSS
Next, install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will create a tailwind.config.js file and a postcss.config.js file in your project.

## 5. Configure Tailwind CSS
Add the paths to all of your template files in your tailwind.config.js file:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Next, add the Tailwind directives to your CSS file. Create a src/index.css file if it doesn't exist, and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then, import this CSS file in your src/main.js or src/main.jsx file:

```js
import './index.css';
```

## 6. Install Aceternity.ui
Install Aceternity.ui using npm:

```bash
npm install aceternity.ui
```

## 7. Configure Aceternity.ui
Import Aceternity.ui components into your project. For example, in src/App.jsx:

```js
import React from 'react';
import { Button } from 'aceternity.ui';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button label="Click me" />
    </div>
  );
}

export default App;
```

## 8. Start the Development Server
Now you can start the development server to see your project in action:

```bash
npm run dev
```
Open your browser and navigate to the URL provided (usually http://localhost:3000).


# Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Aceternity.ui Documentation](https://ui.aceternity.com/)

