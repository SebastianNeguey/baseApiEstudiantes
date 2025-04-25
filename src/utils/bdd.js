const fs = require('fs').promises;  // Usamos el módulo de promesas de fs
const path = require('path');

const pathJson = path.join(__dirname, '../data/bdd.json');

// Template por defecto
const template = {
  estudiante: [],
};

const readJson = async () => {
  try {
    // Intentamos leer el archivo
    const data = await fs.readFile(pathJson, 'utf-8');
    return JSON.parse(data);  // Si hay datos, los parseamos
  } catch (error) {
    // Si ocurre un error (probablemente si el archivo no existe), escribimos el archivo con el template
    if (error.code === 'ENOENT') {
      await fs.writeFile(pathJson, JSON.stringify(template, null, 4), 'utf-8');
    }
    // Retornamos el template si no existe el archivo o si ocurre otro error
    return template;
  }
};

const writeJson = async (data) => {
  const template = { estudiante: data };
  try {
    // Escribimos el archivo de manera asíncrona
    await fs.writeFile(pathJson, JSON.stringify(template, null, 4), 'utf-8');
  } catch (error) {
    console.error('Error al escribir el archivo:', error);
    throw new Error('No se pudo escribir el archivo JSON.');
  }
};

module.exports = {
  readJson,
  writeJson,
};
