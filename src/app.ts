// import { STORAGE_KEY } from "./constants/storage.constants";
import IStore from "./interfaces/IStore";
import IStorage from "./interfaces/IStorage";
import { STORAGE_KEY } from "./constants/storage.constants";
export default function (store: IStore) {
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
    const state: object = getStorage(STORAGE_KEY);
    if (state && typeof state === "object") {
      store.replaceState(state);
    }
  };
  //Watch VUE store
  store.subscribe((_, state) => {
    removeStorage(STORAGE_KEY);
    setStorage(state);
  });
  // Inital function project after created for replace state
  replaceState();
}
