# persisted-state-vuex

`v1.1.0`

_Vue and Nuxt takes effect immediately in case of any mutation (state change) in your project and keeps the current data in localstorage. Then it returns the last data after the page is loaded._

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
  plugins: [persistedStateVuex.init],
});
```

## With modular state

```js
import { createStore } from "vuex";
import persistedStateVuex from "persisted-state-vuex";

persistedStateVuex.config({
  paths: ["exampleData"], // Modules names
});

const store = createStore({
  // ...
  plugins: [persistedStateVuex.init],
});
```

### With storage key

```js
persistedStateVuex.config({
  storageKey: "vuex", // default key(string)
});
```

### Optimum dependencies version

```json
"vue": "^3.2.13",
"vuex": "^4.0.0",
"nuxt": "^2.15.8"
```

- For usage with for Vue3
- Clean and faster
- No-async -> With sync
- Module support
- Storage limit control (localstorage = 5mb -> chrome)
- Support for SSR project

`Author by Ahmet ilhan`
