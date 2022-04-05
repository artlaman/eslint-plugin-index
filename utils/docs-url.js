const packageJson = require("../package.json");

module.exports = function docsUrl(name) {
  return `${packageJson.repository}/blob/v${packageJson.version}/rules/${name}/${name}.md`;
};
