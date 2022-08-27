const storageLimit: number = 5242878; // optimum limit for chrome
export const storageLimitControl = async (
  valueToAdd: string
): Promise<boolean> => {
  const storage = window?.localStorage;
  let concatenatedString: string = valueToAdd;
  if (storage) {
    //@ts-ignore
    await Promise.all(
      //@ts-ignore
      Object.values(storage).map((val: string) => {
        concatenatedString += val;
      })
    );
  }
  return concatenatedString.length < storageLimit;
};
