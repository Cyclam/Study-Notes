/*
 * @Author: Roger 
 * @Date: 2021-05-21 17:03:46 
 * @Last Modified by: Roger
 * @Last Modified time: 2021-05-21 17:58:20
 * @Description: 面试斗鱼问到了，ennnnn，不会就补吧，谁让我菜呢，面试完逼着自己看才发现这特么不难啊！（所以说碰到这些数据结构的问题一定要自己认真理解到位，不要怕~
 */

<docs>
  先看看链表的特点：
  链表因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；
  如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，
  时间复杂度 O(1)。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以不能随机访问；
  而且由于每个元素必须存储指向前后元素位置的指针，会消耗相对更多的储存空间。

  特性：链表查找操作同数组时间复杂度O(n)，因为需要从头开始遍历，而且非连续内存，所以性能上查找是不如数组的；删除、插入、删除时间复杂度O(1)，优于数组。
  使用场景：撤销功能、图、hashMap等高级功能
</docs>

function LinkedList() {
  /**
   * 单向链表节点的构造函数
   * 
   * @param {any} element 要传入链表的节点
   */
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }
  // 单向链表的长度
  var length = 0;
  // 单向链表的头节点，初始化为null
  var head = null;


  /**
   * 添加元素到链表尾部
   * 
   * @param {any} element 要传入链表的节点
   */
  this.append = function (element) {
    var node = new Node(element),
      current;

    if (head === null) {
      head = node
    } else {
      current = head;
      // 当next为null时,退出循环
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }

  /**
   * 向单向链表中某个位置插入元素
   * 
   * @param {any} position 位置
   * @param {any} element 要传入链表的节点
   */
  this.insert = function (position, element) {
    var node = new Node(element),
      current = head,
      previous,
      index; // 内部遍历用来代表节点位置
    // 验证边界
    if (position < 0 || position >= length) {
      return false;
    }
    // 在链表头部插入
    if (position === 0) {
      node.next = current;
      head = node;
    } else {
      // 在链表除头部之外的地方插入（中间 or 末尾） 从头部开始遍历节点
      while (index++ < position) {
        previous = current
        current = current.next
      }
      // 在前一个节点和当前节点中间插入
      node.next = current;
      previous.next = node;
    }
    length++;
    return true;
  }


  /**
   * 寻找某个元素在单向链表中的位置
   * 
   * @param {any} element 要寻找的节点
   * @returns {Number} 返回值>=0则代表找到相应位置
   */
  this.indexOf = function (element) {
    var index = 0,
      current = head;

    while (current) {
      if (element === current.element) {
        return index
      }
      index++;
      current = current.next;
    }
    // 如果链表中不存该元素，返回-1
    return -1;
  }

  /**
   * 移除单向链表中某个位置的元素
   * 
   * @param {any} position 要移除的位置
   */
  this.removeAt = function (position) {
    var index = 0,
      previous,
      current = head;
    if (position < 0 || position >= length) {
      return null;
    }

    if (position === 0) {
      head = head.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
    return current.element;
  }

  /**
   * 移除给定的元素
   * 
   * @param {any} element 要移除的节点
   * @returns 
   */
  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index)
  }

  /**
   * 获取单向链表的头部
   * 
   */
  this.getHead = function () {
    return head.element
  }

  /**
   * 检查单向链表是否为空
   * 
   * @returns 为空则返回true
   */
  this.isEmpty = function () {
    return length === 0
  }

  /**
   * 返回单向链表长度
   * 
   * @returns {Number}
   */
  this.size = function () {
    return length;
  }

  /**
   *  将链表所有内容以字符串输出
   * 
   * @returns {String}
   */
  this.toString = function () {
    var str = '',
      current = head;
    while (current) {
      str += current.element;
      current = current.next;
    }
    return str;
  }
}