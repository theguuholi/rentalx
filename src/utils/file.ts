import fs from "fs";
export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (error) {
    return;
  }

  return fs.promises.unlink(filename);
};
