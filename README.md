# onepush  一条命令，三种体验！
## Features
 执行命令后，会自动执行打包并提交到仓库
## Caveats
一定要先在自己提交过项目后，该仓库才好使，该仓库只会自动执行以下4条命令
```
npm run build
git add .
git commit -m 'commit message'
git push
```
除此不会有其它功能，适用于个人项目提交。
## Simple usage
```
下载：
npm install onepush

首先注册命令到全局:

npm link 

直接运行:

1push

添加提交信息:

1push -m 'not first commit'

如果你想打包

1push -b
```