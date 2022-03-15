const rule = require("./forbid");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
});
const code = "export { Card } from './card'";

ruleTester.run("index/forbid", rule, {
  valid: [
    {
      code: code,
      filename: "page.js",
    },
    {
      code: code,
      filename: "page.ts",
    },
    {
      code: code,
      filename: "/src/entities/book/ui/page.js",
    },
  ],

  invalid: [
    {
      code: code,
      filename: "index.ts",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.ts" },
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: code,
      filename: "index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: code,
      filename: "/src/entities/book/ui/index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});
