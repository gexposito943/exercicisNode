import fs from "fs/promises";
import path from "path";
const readFiles = async (relativePath) => {
  const rute = await fs.stat(relativePath);
  try {
    if (rute.isDirectory()) {
      const files = await fs.readdir(relativePath);
      const results = await Promise.all(files.map(async (file) => {
        const absolutePath = path.join(relativePath, file);
        const fsStat = await fs.stat(absolutePath);

        return {
          name: file,
          absolutePath: absolutePath,
          dirName: path.dirname(absolutePath),
          type: fsStat.isDirectory() ? "subdirectory" : "file",
          extension: path.extname(file) || "",
          size: fsStat.size,
        };
      }));
      console.table(results);
    } else {
      console.log(`${relativePath} no es un directori!`);
    }
  } catch (err) {
    console.error("Error al llegir la ruta: ", err);
  }
};

readFiles("../exercici-crypto");
