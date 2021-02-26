abstract class SalaryCalculator {
  int calculateSalary(); // 抽象类只定义不实现
}

class Contract implements SalaryCalculator {
  int empId;
  int basicpay;
  Contract(this.empId, this.basicpay);
  int calculateSalary() => this.basicpay;
}

class Permanent implements SalaryCalculator {
  int empId;
  int basicpay;
  int bonus; // 奖金
  Permanent(this.empId, this.basicpay, this.bonus);
  int calculateSalary() => this.basicpay + this.bonus;
}

// int 可以省略 由系统推断
int totalExpense(List<SalaryCalculator> s) {
  var expense = 0;
  for (var item in s) {
    expense += item.calculateSalary();
  }
  return expense;
}

void main() {
  var pemp1 = Contract(1, 3000);
  var pemp2 = Permanent(2, 3000, 15000);
  var pemp3 = Permanent(3, 5000, 10000);
  List<SalaryCalculator> employees = [pemp1, pemp2];
  print(totalExpense(employees)); // 21000
  print(pemp3.calculateSalary()); // 15000
}
