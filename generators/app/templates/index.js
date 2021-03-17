const fs = require('fs');

const list = []

function generateDirArray(dir) {
    let parent = dir;

    if (fs.statSync(dir).isDirectory()) {
        fs.readdirSync(dir).forEach(item => {
            generateDirArray(`${parent}/${item}`)
        })
        return;
    }

    list.push(parent.replace(/\.\/\//ig, ''))

}

generateDirArray('./')

console.log(list)

