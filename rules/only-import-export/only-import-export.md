# index/only-import-export

Use this rule to allow only `import` and `export` statements in `index` files.

## :thumbsdown: Fail

The following file structure will fail the check

```
pages
└── catalog
    ├── content/
    ├── sidebar/
    └── index.tsx
```

If `pages/catalog/index.ts` looks like this:

```js
import Content from "./content";
import Sidebar from "./sidebar";

export const Page = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Content />
    </React.Fragment>
  );
};
```

## :thumbsup: Pass

To pass the check, the file structure can be changed as follows

```
pages
└── catalog
    ├── content/
    ├── sidebar/
    └── page.tsx
```

`index.js` files should be either deleted or renamed.
