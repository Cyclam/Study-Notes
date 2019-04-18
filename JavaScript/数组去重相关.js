// 可以参考 JavaScript专题之数组去重：https://github.com/mqyqingfeng/Blog/issues/27

var arrs = [1, 5, 7, 1, 2, 2, 4, 5];

// 1. 使用 Set 集合

var uniqueArr = [...new Set(arrs)];
var uniqueArr = Array.from(new Set(arrs));

// 2. 使用 includes或者indexOf同理

function getUniqueArr(arrs) {
    var result = [];
    for(let i = 0; i < arrs.length; i++) {
        // if (result.indexOf(arrs[i] === -1))
        if (!result.includes(arrs[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 3. 


/* 获取数组中重复出现的数字 */

// 输入如下
var arr = [1, 1, 2, 3, 4, 4, 5, 3, 3];
// 输出 [1, 3, 4]

function getWith(arr) {
  var arr = arr.sort();
  var result = [];
  for(let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i]) && arr[i] == arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}