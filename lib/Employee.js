class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    //   Comment to be added
    getName() {
        console.log('name = ', name);
        console.log('this.name = ', this.name);
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    // Comment to be added
    getEmail() {
        return this.email;
      }

      getRole() {
        return 'Employee';
      }
  
  }
  
  module.exports = Employee;
  