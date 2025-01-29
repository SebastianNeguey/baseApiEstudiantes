const fs = require("fs");
const path = require("path");

const pathJson = path.join(__dirname, "./bdd.json")

const readJson = () => {
    const template= {
        estudiante: [],
    }
    try {
        const data = fs.readFileSync(pathJson, "utf-8")
        if(data.length === 0){
            return template
        }
    }
    catch (error){
        fs.writeFileSync(pathJson, JSON.stringify(template, null, 4), "utf-8")
    }
    const data = fs.readFileSync(pathJson, "utf-8")
    return JSON.parse(data)
}

const writeJson = (data) => {
    const template = {
        estudiante: data,
    }
    fs.writeFileSync(pathJson, JSON.stringify(template, null, 4), "utf-8")   
}

module.exports = {
    readJson,
    writeJson
}