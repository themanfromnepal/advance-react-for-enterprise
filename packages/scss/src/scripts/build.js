const Fs = require("fs");
const Path = require("path");
const Sass = require("sass");

// Ensure the `lib` directory exists
const ensureLibDirectory = () => {
  const libPath = Path.resolve("lib");
  if (!Fs.existsSync(libPath)) {
    Fs.mkdirSync(libPath, { recursive: true });
  }
};

// Get all component files from atoms, molecules, and organisms directories
const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules", "organisms"];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(Path.resolve(`src/${type}`)).map(
      (file) => ({
        input: `${type}/${file}`,
        output: `lib/${file.slice(0, -4) + "css"}`,
      })
    );

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

// Function to compile the scss to css
const compile = (path, fileName) => {
  const result = Sass.compileString(
    Fs.readFileSync(Path.resolve(path)).toString(),
    {
      style: "expanded",
      loadPaths: [
        Path.resolve("src"),
        Path.resolve("src/foundation"),
        Path.resolve("node_modules"), // Add node_modules to load paths
      ],
    }
  );
  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};

// Ensure the `lib` directory exists
ensureLibDirectory();

// Compile global styles
compile("src/global.scss", "lib/global.css");

// Compile component styles
getComponents().forEach(({ input, output }) => {
  compile(`src/${input}`, output);
});
