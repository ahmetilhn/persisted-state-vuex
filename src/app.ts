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
  //Watch VUE store
  store.subscribe((mutation, state) => {
    removeStorage(STORAGE_KEY);
    setStorage(state);
  });
}
