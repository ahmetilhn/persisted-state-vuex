export default interface IStorage {
  setItem: (key: string, payload: string) => void;
  getItem: (key: string) => any;
  removeItem: (key: string) => void;
}
