const path = require('path');

// The parse method returns all the information about the file, including the directory, root, base , extension and name.
const pathObj = path.parse(__filename);
console.log(pathObj);

// The basename returns the basename of the file. 
// Syntax : path.basename(path, extension);
// The second argument is the extension which is optional. But if we include the extension then it will be excluded in the result.
const pathBase = path.basename(__filename, '.js');
console.log(pathBase);

// dirname : returns the directory part of the path.

const dirname = path.dirname(__filename);
console.log(dirname);

// extname : returns the extension of the file.

// isAbsolute : Checks if the path is absolute path or not. 
//? Absolute Path : absolute path refers to the complete details needed to locate a file or folder, starting from the root element and ending with the other subdirectories.
//? Aka also known as an absolute pathname or full path,

// join : join two or more part of the path

// path.relative() : Accepts 2 paths as arguments. Returns the the relative path from the first path to the second, based on the current working directory.