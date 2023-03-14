# deploy page

 git add .
 git commit -m "update"
 git push -f git@github.com:Guan101/booklet.git note

npm run build
git add docs/.vuepress/dist
git commit -m "Initial dist subtree commit"
git subtree push --prefix docs/.vuepress/dist origin page

# npm publish
# npm login
# npm version patch
# npm publish