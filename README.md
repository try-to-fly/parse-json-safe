## parseJsonSafe

### Features

1. parse json without try catch。
2. support default value;
3. object value will be returned as it self;

### Usage

```typescript
import { parseJsonSafe } from "parse-json-safe";
// normal
const json = parseJsonSafe(`{ "a": 1 }`);
// { a: 1 }

// when catch error, output default value
const json = parseJsonSafe("err", { a: 0 });
// { a: 0 }

// support object type
const json = parseJsonSafe({ a: 1 });
// { a: 1 }
```
