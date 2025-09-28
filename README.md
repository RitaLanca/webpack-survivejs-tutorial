# About 
This project serves as a practical exercise for the Webpack book tutorial. The primary objectives are to:
- Gain proficiency in setting up and configuring Webpack.
- Understand and implement webpack-plugin-serve for development.
- Explore and apply advanced Webpack configurations.

# Steps to reporduce
1. **Create a project directory**  
 - create a directory for the project
 - run `npm init -y` to generate package.json with default values

2. **Install Webpack and webpack-nano**  
- run:
  ```bash 
    npm add webpack webpack-nano -D
  ``` 

   [!NOTE]
   It was used webpack-nano↗ over the official webpack-cli↗ as it has enough features for the book project while being directly compatible with webpack 4 and 5.
   **webpack-cli** comes with additional functionality, including init and migrate commands that allow you to create new webpack configuration fast and update from an older version to a newer one.

3. **Run Webpack locally**  
- run either: 
  ```bash
  node_modules/.bin/wp
  ```    
  or 
  ```bash
  npx wp
  ``` 
This executes the locally installed webpack-nano and generates the output in `/dist
 
4. **Install mini-html-webpack-plugin**  
- Run:
     ```bash
     npm add mini-html-webpack-plugin -D
     ```

 [!NOTE]  
  Webpack produces the bundles (e.g., main.js), but it’s the index.html that must include them for the application to run in the browser.
  The **mini-html-webpack-plugin** automates this process through configuration in thw webpack.config file:
  - Automatically generates an index.html during the build.
  - Injects the correct <script> and <link> tags based on Webpack’s output.
  - Allows customization of the HTML (title, meta tags, etc.).
  This avoids maintaining an index.html manually and ensures it always stays in sync with the generated files.

5. **Create `webpack.config.js`**  
  - create **webpack.config.js** and configure the mini-html-webpack-plugin and the mode so it receives the value from the command line
  Check out this [mini-html-webpack-plugin documentation][https://github.com/styleguidist/mini-html-webpack-plugin]

6. **Build and serve the project**  
  - run in production mode to generate the HTML and bundle: 
 ```bash
     node_modules/.bin/wp --mode production
  ```
  - start a static server to serve the HTML file:
  ```bash
    npx serve dist
  ```
  - check browser on "localhost:3000" to see the output


# Plugins used
- mini-html-webpack-plugin - automatically generates simple HTML files, and injects the javascript and CSS created during build process.









