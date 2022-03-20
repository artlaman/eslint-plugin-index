const pathParse = require("../../utils/path-parse");
const isIndex = require("../../utils/is-index");
const docsUrl = require("../../utils/docs-url");

const types = {
  ImportDeclaration: "ImportDeclaration",
  ExportAllDeclaration: "ExportAllDeclaration",
  ExportDefaultDeclaration: "ExportDefaultDeclaration",
  ExportNamedDeclaration: "ExportNamedDeclaration",
  Identifier: "Identifier",
};

function allowed(node) {
  const { type, declaration } = node;
  if (type === types.ImportDeclaration || type === types.ExportAllDeclaration) {
    return true;
  }
  if (type === types.ExportDefaultDeclaration) {
    return declaration.type === types.Identifier;
  }
  if (type === types.ExportNamedDeclaration) {
    return declaration === null;
  }
  return false;
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Allow only import and export statements in index files",
      category: "Quality",
      recommended: true,
      url: docsUrl("only-import-export"),
    },
    messages: {
      error:
        "Only import and export statements are allowed in {{ baseName }} files.",
      suggestion:
        "Rename {{ baseName }} or move irrelevant code to another file.",
    },
    hasSuggestions: true,
  },
  create(context) {
    return {
      Program: function (node) {
        const { body } = node;
        const filename = context.getFilename();
        const parsedPath = pathParse(filename);
        const index = isIndex(parsedPath);

        if (index) {
          for (let i = 0; i < body.length; i++) {
            const node = body[i];
            if (!allowed(node)) {
              context.report({
                node: node,
                messageId: "error",
                data: { baseName: parsedPath.base },
                suggest: {
                  messageId: "suggestion",
                  data: { baseName: parsedPath.base },
                },
              });
            }
          }
        }
      },
    };
  },
};
