# 确保脚本抛出遇到的错误
set -e

time=$(date "+%Y-%m-%d %H:%M:%S")

 git add .
 git commit -m "$time --更新--"
 git push -f git@github.com:Guan101/booklet.git note

npm run build

git add docs/.vuepress/dist
git commit -m "dist subtree commit"
git subtree push --prefix docs/.vuepress/dist origin page
