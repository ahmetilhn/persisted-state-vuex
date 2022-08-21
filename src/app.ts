import IStore from "./interfaces/IStore";
import IStorage from "./interfaces/IStorage";
import IOptions from "./interfaces/IOptions";
import { STORAGE_KEY } from "./constants/storage.constants";

let options: IOptions = {};

export default {
  //Config for moduler state
  config: (configOptions: IOptions) => {
    if (configOptions) {
      options = configOptions;
    }
  },
  init: (store: IStore) => {
    const storage: IStorage = window.localStorage;
    // Set storage
    const setStorage = async (payload: object) => {
      storage.setItem(STORAGE_KEY, JSON.stringify(payload));
    };
    // Remove storage
    const removeStorage = (key: string) => {
      storage.removeItem(key);
    };
    // Get storage
    const getStorage: any = (key: string) => {
      return JSON.parse(storage.getItem(key));
    };
    //Replace store
    const replaceState = () => {
      const storedState: object = getStorage(STORAGE_KEY);
      if (storedState && typeof storedState === "object") {
        if (options.paths) {
          const filteredState = store.state;
          options.paths.forEach((module, key) => {
            filteredState[module] = storedState[module];
            if (options.paths?.length === key + 1) {
              store.replaceState(filteredState);
            }
          });
          return;
        }
        // no modules
        store.replaceState(storedState);
      }
    };
    //Watch VUE store
    store.subscribe((_, state) => {
      removeStorage(STORAGE_KEY);
      if (options.paths) {
        const payload: object = {};
        options.paths.forEach((module, key) => {
          payload[module] = state[module];
          if (options.paths?.length === key + 1) {
            setStorage(payload);
          }
        });
      }
      // no modules
      setStorage(state);
    });
    // Inital function project after created for replace state
    replaceState();
  },
};
