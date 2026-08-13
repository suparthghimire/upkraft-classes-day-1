function upperCaseFirstLetter(str) {
    if (!str || typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerCaseFirstLetter(str) {
    if (!str || typeof str !== "string") return "";
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export { upperCaseFirstLetter, lowerCaseFirstLetter };


// import * as str from "./string.utilis.js";
// default export default import
// named export and named import  
// named export and default import as */


// equivalent code 
