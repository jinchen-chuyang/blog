:: 显示命令
@echo on

:: 切换到当前的bat的路径下
cd %~dp0
%~d0

:: 防止报错 code: 'ERR_OSSL_EVP_UNSUPPORTED'
set NODE_OPTIONS=--openssl-legacy-provider

:: 重新构建
del /s /q /f docs\\.vuepress\\dist
call npm run docs:build

:: 显示命令
@echo on
cd docs/.vuepress/dist

:: 提交
call git init
call git add -A
call git commit -m "deploy"
call git push -f git@github.com:jinchen-chuyang/blog.git master:pages


:: 延迟15秒退出
timeout /t 10

:: 打开网页
start chrome "https://jinchen-chuyang.github.io/blog"