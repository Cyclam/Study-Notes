### os.path.join()
os.path.join()函数用于路径拼接文件路径。 
os.path.join()函数中可以传入多个路径：

会从第一个以'/'开头的参数开始拼接，之前的参数全部丢弃。

以上一种情况为先。在上一种情况确保情况下，若出现'./'开头的参数，会从'./'开头的参数的上一个参数开始拼接，'../'，则从上上个参数开始拼接。

```javascript
import os
print("1:",os.path.join('aaaa','/bbbb','ccccc.txt'))
print("2:",os.path.join('/aaaa','/bbbb','/ccccc.txt'))
print("3:",os.path.join('aaaa','./bbb','ccccc.txt'))

/bbbb\ccccc.txt
/ccccc.txt
aaaa\./bbb\ccccc.txt

```

### os.path.resolve()

给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径