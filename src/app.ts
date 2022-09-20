import IStore from "./interfaces/IStore";
import IStorage from "./interfaces/IStorage";
import IOptions from "./interfaces/IOptions";
import { getStorageKey } from "./config";
import { storageLimitControl } from "./plugins/storage-limit-control";
import { isOnClient } from "./utils/browser-control.utils";

let options: IOptions = {};

export default {
  //Config for moduler state
  config: (configOptions: IOptions) => {
    if (configOptions) {
      options = configOptions;
    }
  },
  init: (store: IStore) => {
    if (isOnClient()) {
      const storage: IStorage = window?.localStorage;
      // Set storage
      const setStorage = async (payload: object) => {
        const isBelowLimit: boolean | undefined = await storageLimitControl(
          String(payload)
        );
        if (isBelowLimit) {
          storage.setItem(getStorageKey(options), JSON.stringify(payload));
        }
      };
      // Remove storage
      const removeStorage = () => {
        storage.removeItem(getStorageKey(options));
      };
      // Get storage
      const getStorage: any = () => {
        return JSON.parse(storage.getItem(getStorageKey(options)));
      };
      //Replace store
      const replaceState = () => {
        const storedState: object = getStorage();
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
        removeStorage();
        if (options.paths) {
          const payload: object = {};
          options.paths.forEach((module, key) => {
            payload[module] = state[module];
            if (options.paths?.length === key + 1) {
              setStorage(payload);
            }
          });
          return;
        }
        // no modules
        setStorage(state);
      });
      // Inital function project after created for replace state
      replaceState();
    }
  },
};
