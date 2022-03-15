const pathParse = require("../../utils/path-parse");
const isIndex = require("../../utils/is-index");
const docsUrl = require("../../utils/docs-url");

const messages = {
  error: "{{ baseName }} is not a valid filename.",
  suggestion: "Choose a more descriptive filename.",
};

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Forbid files named index",
      category: "Quality",
      recommended: false,
      url: docsUrl("forbid"),
    },
    messages,
    hasSuggestions: true,
  },
  create(context) {
    return {
      Program: function (node) {
        const filename = context.getFilename();
        const parsedPath = pathParse(filename);
        const index = isIndex(parsedPath);

        if (index) {
          context.report({
            node: node,
            messageId: "error",
            data: { baseName: parsedPath.base },
            suggest: {
              messageId: "suggestion",
            },
          });
        }
      },
    };
  },
};
