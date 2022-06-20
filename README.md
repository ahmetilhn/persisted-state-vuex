# persisted-state

`v1.0.0`

_Vue takes effect immediately in case of any mutation (state change) in your project and keeps the current data in localstorage. Then it returns the last data after the page is loaded._

## Install

```bash
npm install --save persisted-state
```

## Usage

```js
import { createStore } from "vuex";
import persistedState from "persisted-state";

const store = createStore({
  // ...
  plugins: [persistedState],
});
```

- For usage with for Vue3
- Clean and faster
- No-async -> With sync

`Author by Ahmet ilhan`
