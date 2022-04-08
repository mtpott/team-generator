const fs = require('fs');

function writeFile(teamObj) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', teamObj, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created.'
            });
        });
    }
)};

function copyFile() {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
            }
            resolve({
                ok: true,
                message: 'style sheet created.'
            });
        });
    }
)};

module.exports = { writeFile, copyFile };