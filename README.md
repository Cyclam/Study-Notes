### 收集一些前端资源
#### Git相关

`git init`  
`git commit -m 'stumansys`  
`git remote add origin https://github.com/Flowerowl/stumansys.git`  
`git push origin master`  
如果执行`git remote add origin https://github.com/Flowerowl/stumansys.git`，出现错误：   
　　`fatal: remote origin already exists`  
则执行以下语句：  
　　`git remote rm origin`  
再往后执行`git remote add origin https://github.com/Flowerowl/stumansys.git `即可。  
在执行`git push origin master`时，报错：  
　　`error:failed to push som refs to...`  
则执行以下语句：  
　　`git pull origin master`  
先把远程服务器github上面的文件拉先来，再`push`上去。
