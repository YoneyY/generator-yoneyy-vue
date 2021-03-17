/*
 * @Author: Yoney Y 
 * @Date: 2021-03-17 15:28:26 
 * @Last Modified by: YoneyY
 * @Last Modified time: 2021-03-17 17:32:17
 */

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // 用于接收用户输入
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name', // 是我们最终得到结果的建
                message: 'Your project name :',
                default: this.appname
            }
        ]).then(answers => this.answers = answers)
    }

    // 写入
    writing() {

        // 把每一个文件都通过模版转换到目标路径

        const templates = [
            'README.md',
            'babel.config.js',
            'package-lock.json',
            'package.json',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/main.js',
            'src/router/index.js',
            'src/views/About.vue',
            'src/views/Home.vue'
        ]

        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}