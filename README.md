# persisted-state-vuex

`v1.0.1`

_Vue takes effect immediately in case of any mutation (state change) in your project and keeps the current data in localstorage. Then it returns the last data after the page is loaded._

## Install

```bash
npm install --save persisted-state-vuex
```

## Usage

```js
import { createStore } from "vuex";
import persistedStateVuex from "persisted-state-vuex";

const store = createStore({
  // ...
  plugins: [persistedStateVuex],
});
```

### Optimum dependencies version

```
  "vue": "^3.2.13",
  "vuex": "^4.0.0",
```

- For usage with for Vue3
- Clean and faster
- No-async -> With sync

`Author by Ahmet ilhan`
