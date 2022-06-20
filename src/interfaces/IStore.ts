export default interface IStore {
  subscribe: (...args: object[]) => void;
  replaceState: (state: object) => void;
}
