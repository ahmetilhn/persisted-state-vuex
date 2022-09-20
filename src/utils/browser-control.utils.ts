export const isOnClient = (): boolean => {
  if (typeof window !== "undefined") {
    return true;
  } else {
    return false;
  }
};
