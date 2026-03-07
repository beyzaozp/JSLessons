// Inheritance
// class Person {
//   firstName = "Beyza";
//   showInfo() {
//     console.log("Person: ", this.firstName);
//   }
// }

// class Student extends Person {
//   showInfo() {
//     console.log("Student: ", this.firstName);
//     super.showInfo();
//   }
// }

// const student1 = new Student();

//student1.showInfo();

// this --- super ---super() farkı

class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
  showInfo() {
    console.log(this.firstName, this.lastName, this.salary);
  }
}

class Student extends Person {
  constructor(firstName, lastName, salary) {
    super(firstName, lastName, salary);
  }

  showInfo() {
    super.showInfo();
  }
}

const student1 = new Student("Beyza", "Özpınar", 12000);

student1.showInfo();
