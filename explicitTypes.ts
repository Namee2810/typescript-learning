let myName: string
let age: number
let isAuthenticated: boolean

myName = "Nam"
age = 18
isAuthenticated = false

//array
let countries: string[] = ["Vietnam", "USA", "Russia"]

//union
let mixed: (string | number | boolean)[]
mixed = ["Hi", 1, false]

let state: "PAID" | "UNPAID"
state = "PAID"

//object
let student: {
  name: string,
  age: number,
  gender: "MALE" | "FEMALE"
}