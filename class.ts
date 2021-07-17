class Employee {
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) { }

  changeName(newName: string) {
    this.name = newName
  }
}

const Nam = new Employee("Nam", 18, true)
const Bob = new Employee("Bob", 18, true)

let employees: Employee[] = []
employees.push(Nam, Bob)
console.log(employees)
