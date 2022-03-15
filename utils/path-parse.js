const path = require("path");

module.exports = function pathParse(pathString) {
  const { base, name, ext } = path.parse(pathString);

  return {
    base,
    name,
    ext,
  };
};
