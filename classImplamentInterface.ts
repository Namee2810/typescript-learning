interface hasPrint {
  print(): string
}

class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) { }

  print() {
    return `${this.client} owes $${this.amount} for this work: ${this.work}`
  }
}

class Payment implements hasPrint {
  constructor(
    readonly recipient: string,
    private work: string,
    public amount: number
  ) { }

  print() {
    return `I owe ${this.recipient} $${this.amount} for this work: ${this.work}`
  }
}

const documentOne = new Invoice("Bob", "repair laptop", 50000)
const documentTwo = new Payment("John", "buy coffee", 50000)