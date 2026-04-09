# array-to-obj (deprecated)

> **This package is deprecated.** Native JavaScript and modern utility libraries cover this use case better. No further updates will be published.

## Migration

### Native `Object.fromEntries` (recommended — zero dependencies)

```js
// Before
const arrayToObj = require('array-to-obj');
arrayToObj(users);
arrayToObj(users, { key: 'name' });
arrayToObj(users, { key: u => u.name.toLowerCase() });

// After (ES2019+)
Object.fromEntries(users.map(u => [u.id, u]));
Object.fromEntries(users.map(u => [u.name, u]));
Object.fromEntries(users.map(u => [u.name.toLowerCase(), u]));
```

### Utility libraries

If you prefer a helper function, both of these provide TypeScript generics, tree-shaking, and value transformation:

- **[es-toolkit](https://es-toolkit.dev/)** — `keyBy(arr, item => item.id)` for keying, `groupBy(arr, fn)` for grouping duplicates.
- **[radashi](https://radashi.js.org/)** — `objectify(arr, getKey, getValue)` supports key _and_ value mapping in a single call.

## License

MIT © [Chris Vogt](https://chrisvogt.me)
