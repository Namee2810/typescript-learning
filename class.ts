export class Employee {
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) { }

  changeName(newName: string) {
    this.name = newName
  }
}