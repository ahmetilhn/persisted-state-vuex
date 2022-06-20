export default interface IStore {
  subscribe: (...args: object[]) => void;
}
