{
  //Access Modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit = (amount: number) => {
      this._balance = this._balance + amount;
    };
    getBalance = () => {
      return this._balance;
    };
  }

  //   class StudentAccount extends BankAccount{
  //     test(){
  //         this.
  //     }
  //   }

  const poorManAccount = new BankAccount(111, "Mr Poorman", 20);
  poorManAccount.addDeposit(20);
  const myBalance = poorManAccount.getBalance();
  console.log(myBalance);
}
