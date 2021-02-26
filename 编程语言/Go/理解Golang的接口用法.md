### 接口

每个对象（结构体）都有不同的表达能力，这就是接口的能力

(理解Go的接口用法)[https://segmentfault.com/q/1010000005140317]
使用接口的好处是非常灵活，这样就与具体的实现做了解耦，如果以后有其他的实现类，只需要实现Person接口就可以了，而不用去改使用的时候的代码。


简而言之，interface就是一组method的集合。 只要一个类型A实现了接口I中的method，那么在之后的使用时，这个接口I类型的变量便可以接受类型A的变量。这样在之后的使用中，同一个接口，可以接收不同类型的变量。


**interface的使用要满足2个条件才有意义：**

1. 实现了interface的几个struct是相似关系（比如docker和kvm都是虚拟机）、平级的，并且输入输出参数完全一致。（这点是interface的本质，能实现interface的肯定是满足这个条件）

2. 在业务逻辑上，调用实现interface的struct是不确定的，是通过某种方式传递进来，而不是顺序的业务逻辑，比如structA、structB、structC如果是有顺序的则是错误的。

如以下例子计算不同员工的薪资：
假设某公司有两个员工，一个普通员工和一个高级员工， 但是基本薪资是相同的，高级员工多拿奖金，不同员工的薪资不一样，计算公司为员工的总开支。

```go
package main

import (
	"fmt"
)

// 薪资计算器接口
type SalaryCalculator interface {
	CalculateSalary() int
}
// 普通挖掘机员工
type Contract struct {
	empId  int
	basicpay int
}
// 有蓝翔技校证的员工
type Permanent struct {
	empId  int
	basicpay int
	jj int // 奖金
}

// 如果新增总裁薪资 则不用改动 totalExpense 里面的代码逻辑，实现了解耦
type President struct {
  empId int
  basicpay int
  stock int // 股票价值
}

// 方法 具有承载体
func (c Contract) CalculateSalary() int {
	return c.basicpay
}

func (p Permanent) CalculateSalary() int {
	return p.basicpay + p.jj
}

func (p President) CalculateSalary() int {
  return p.basicpay + p.stock
}

// 函数 计算总开支
func totalExpense(s []SalaryCalculator) {
	expense := 0
	for _, v := range s {
		expense += v.CalculateSalary()
	}
	fmt.Printf("总开支 $%d", expense)
}

func main() {
	pemp1 := Permanent{1,3000,10000}
	pemp2 := Permanent{2, 3000, 20000}
	cemp1 := Contract{3, 3000}
	pres1 := President{empId: 4, basicpay: 3000, stock: 10000}
	employees := []SalaryCalculator{pemp1, pemp2, cemp1, pres1}
	totalExpense(employees)
}
```