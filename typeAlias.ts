type StringOrNumber = string | number
type Student = {
  name: string
  id: StringOrNumber
}

const student: Student = {
  name: "Nam",
  id: 1
}

const greet = (student: Student): void => console.log(`Hello ${student.name}`)
greet(student)
