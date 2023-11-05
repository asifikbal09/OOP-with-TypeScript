{
  // Getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    //   addDeposit = (amount: number) => {
    //     this._balance = this._balance + amount;
    //   };

    get balance() {
      return this._balance;
    }
    //   getBalance = () => {
    //     return this._balance;
    //   };
  }

  const poorManAccount = new BankAccount(111, "Mr Poorman", 20);
//   poorManAccount.addDeposit(20);
  poorManAccount.deposit =202
  // const myBalance = poorManAccount.getBalance();
  const myBalance = poorManAccount.balance;
  console.log(myBalance);
}
