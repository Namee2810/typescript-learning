//GENERICS
type stringArray = Array<string>
type numberArray = Array<number>

const lastValue = (arr: stringArray) => arr[arr.length - 1]
//const last1 = lastValue([1, 2, 3])
const last2 = lastValue(["a", "b", "c"])

const lastValueT = <T>(arr: Array<T>) => arr[arr.length - 1]
const last3 = lastValueT([1, 2, 3])
const last4 = lastValueT(["a", "b", "c"])
const last5 = lastValueT<number>([1, 2, 3])

const makeArray = (x: number) => [x]
const m1 = makeArray(5)

const makeArrayT = <T>(x: T) => [x]
const m2 = makeArrayT("a")
const m3 = makeArrayT(1)

const makeArrayXY = <X, Y>(x: X, y: Y) => [x, y]
const m4 = makeArrayXY(1, "a")
const m5 = makeArrayXY(1, true)

const makeTupple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]
const m6 = makeTupple(1, true)
const m7 = makeTupple<boolean, string>(true, "a")
const m8 = makeTupple<boolean | string, string | null>(true, null)

const makeTupleWithDefault = <X, Y = boolean>(x: X, y: Y): [X, Y] => [x, y]
const m9 = makeTupleWithDefault<string>("1", true)

//GENERICS EXTENDS
const makeFullName = (obj: any) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`
})

const makeFullNameWithConstraint = (obj: { firstName: string, lastName: string }) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`
})
const n1 = makeFullNameWithConstraint({
  firstName: "Dao",
  lastName: "Nam"
})

const makeFullNameWithConstraintT = <T extends { firstName: string, lastName: string }>(obj: T) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`
})
const n2 = makeFullNameWithConstraintT({
  firstName: "Dao",
  lastName: "Nam",
  age: 18,
  gender: "MALE"
})

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100)
  return {
    ...employee,
    uid
  }
}
const employee1 = addNewEmployee({
  name: "Nam",
  age: 18,
  gender: "MALE"
})

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100)
  return {
    ...employee,
    uid
  }
}
const employee2 = addNewEmployeeT({
  name: "Linda",
  age: 20,
  gender: "FEMALE"
})

//GENERICS WITH INTERFACE
interface Resource<T> {
  uid: string,
  name: string,
  data: T
}

const resource1: Resource<object> = {
  uid: "1",
  name: "Person",
  data: { name: "Nam", age: 18 }
}
type StringResource = Resource<string>
const resource2: StringResource = {
  uid: "1",
  name: "Movie",
  data: "Avengers"
}
const resource3: Resource<string[]> = {
  uid: "1",
  name: "Skills",
  data: ["JS", "React"]
}