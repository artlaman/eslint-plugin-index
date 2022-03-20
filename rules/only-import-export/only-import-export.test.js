const rule = require("./only-import-export");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
});

ruleTester.run("index/only-import-export", rule, {
  valid: [
    {
      code: "import { Sidebar } from './sidebar';\
             export { Sidebar }",
      filename: "index.js",
    },
    {
      code: "import { Sidebar } from './sidebar';\
             export { Sidebar }",
      filename: "index.ts",
    },
    {
      code: "import { Sidebar } from './sidebar';\
             export default Sidebar",
      filename: "index.js",
    },
    {
      code: "import Sidebar from './sidebar';",
      filename: "index.js",
    },
    {
      code: "export * from './sidebar';",
      filename: "index.js",
    },
    {
      code: "export const Page = () => <div />;",
      filename: "/src/pages/catalog/page.js",
      parserOptions: {
        ecmaFeatures: { jsx: true, modules: true },
      },
    },
  ],
  invalid: [
    {
      code: "import { Sidebar } from './sidebar';\
              const count = 0;",
      filename: "index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
        },
      ],
    },
    {
      code: "import { Sidebar } from './sidebar';\
              export const count = 0;",
      filename: "index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
        },
      ],
    },
    {
      code: "import { Sidebar } from './sidebar';\
              export function Page() {}",
      filename: "/src/pages/catalog/index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
        },
      ],
      parserOptions: {
        ecmaFeatures: { jsx: true, modules: true },
      },
    },
    {
      code: "export default function() {}",
      filename: "index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
        },
      ],
    },
    {
      code: "export const Component = () => <div />;",
      filename: "index.js",
      errors: [
        {
          messageId: "error",
          data: { baseName: "index.js" },
        },
      ],
      parserOptions: {
        ecmaFeatures: { jsx: true, modules: true },
      },
    },
  ],
});
