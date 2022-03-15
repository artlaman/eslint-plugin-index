# index/forbid

Use this rule to forbid files named `index`

## :thumbsdown: Fail

The following file structure will fail the check

```
entities
└── book
    ├── model
    |   └── index.ts
    └── ui
        ├── card.tsx
        ├── row.tsx
        └── index.ts
```

If `entities/book/ui/index.ts` looks like this:

```js
export { Card } from "./card";
export { Row } from "./row";
```

And `entities/book/model/index.ts` looks like this:

```js
import { createEvent, createStore } from "effector";

const addBook = createEvent();

export const $books = createStore([]).on(addBook, (list, book) => [
  ...list,
  book,
]);
```

## :thumbsup: Pass

To pass the check, the file structure can be changed as follows

```
entities
└── book
    ├── model.ts
    └── ui
        ├── card.tsx
        └── row.tsx
```

`index.js` files containing only re-exports should be deleted, other modules should be renamed.
