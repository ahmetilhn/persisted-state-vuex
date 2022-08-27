import IOptions from "../interfaces/IOptions";
import { STORAGE_KEY } from "../constants/storage.constants";
export const getStorageKey = (options: IOptions): string => {
  return options.storageKey ? String(options.storageKey) : STORAGE_KEY;
};
