## Install Tailwind CSS

Step 1: 
- Install tailwindcss and @tailwindcss/cli via npm in terminal.

```
npm install tailwindcss @tailwindcss/cli 
```

Step 2: 
- Import Tailwind in your CSS
- Add the @import "tailwindcss"; import to your main CSS file.
- src/input.css

``` 
@import "tailwindcss";
```

Step 3: 
- Start the Tailwind CLI build process
- Run the CLI tool to scan your source files for classes and build your CSS.
- Run the below command in your Terminal

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Step 4: 
- Create a tailwind.config.js file
- Enter the following things in file 
```
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], // Or your project structure, e.g., "./*.html"
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Step 5: 
- Start using Tailwind in your HTML
- Add the below command in your file
```
<link href="./output.css" rel="stylesheet">
```