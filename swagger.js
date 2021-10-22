const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "3.0.1",
        title: "API SERVER - node-falemais",
        description: "Documentação automática gerada pelo modulo <b>swagger</b>."
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Servidor",
            "description": "Teste conexão"
        }
    ],

    securityDefinitions: {
      
        Bearer: {
            name: "x-access-token",
            type: "apiKey",
            description: "Enter JWT Bearer token",          
            bearerFormat: "JWT",
            in: "header"
        },
    },

}


const fs = require('fs');
const dir = './src/routes'
var path = process.cwd()

const arquivos = fs.readdirSync(dir);
let dir_arquivos = []

const getFiles = function (path, files) {
    fs.readdirSync(path).forEach(function (file) {
        var subpath = path + '/' + file;
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, dir_arquivos);
        } else {
            dir_arquivos.push(path + '/' + file);
        }
    });
}

getFiles(dir, dir_arquivos)

const outputFile = './swagger_output.json'
const endpointsFiles = dir_arquivos

swaggerAutogen(outputFile, endpointsFiles, doc);