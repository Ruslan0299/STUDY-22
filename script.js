//перше завдання
let car = {
  model: "Lexus",
  year: 2023,
  color: "white",
};
car.color = "black";
car.type = "electric";
car.signal = function () {
  alert("fa! fa!");
};
car.signal();
console.log(car);

//друге завдання
let salaries = {
  frontend: 12000,
  backend: 10000,
  designer: 8000,
  dayPay: function () {
    alert("We must pay salary on Tuesday!");
  },
  total: function () {
    let sum = 0;
    for (let key in salaries) {
      if (typeof salaries[key] === "number") {
        sum = sum + salaries[key];
      }
    }
    console.log(sum);
  },
};
salaries.total();

//третє завдання
function Notebook(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
}
let dell = new Notebook("Dell", "windows", 800);
let apple = new Notebook("Apple", "MAC OS", 1700);
console.log(dell);
console.log(apple);

//четверте завдання
function Notebook(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand + " " + this.system;
      case "number":
        return this.cost;
      case "default":
        return this.brand + " " + this.system + " " + this.cost + "//";
    }
  };
}
let dell = new Notebook("Dell", "windows", 800);
let apple = new Notebook("Apple", "MAC OS", 1700);

let notebookGroup = {};
notebookGroup[dell] = dell + apple;

console.log(String(dell));
console.log(+apple);
console.log(dell + apple);
