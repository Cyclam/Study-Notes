1. 首先保证你本地有一份完整的库

2. 在github组织里新建一份裸库

3. 本地库移除所有远程库
git remote //查看所有远程库
git remote remove origin //移除远程库

4. 本地库添加新远程库
git add remote origin [your remote git url]
eg: `git remote add origin git@github.com:Cyclam/koa2-admin.git`

5. 推送所有到新远程库(含所有提交历史和分支)
git push -u origin master