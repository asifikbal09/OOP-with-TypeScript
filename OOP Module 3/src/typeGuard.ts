{
  // Type Guard

  //typeof --> type guard

  const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  const result2 = add("2", 3);
  const result3 = add(2, "3");
  const result4 = add("2", "3");
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`I am ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`I am ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr Normal Vai",
  };

  const adminUser: AdminUser = {
    name: "Mr Admin Vai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
