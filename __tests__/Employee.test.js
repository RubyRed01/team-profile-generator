const Employee = require('../lib/Employee');

describe('Create Employee', () => {
  it('Can create employee via constructor arguments name, id, email', () => {
    let e = new Employee('Sam', '2', 'sam.saminson@gmail.com')
    expect(typeof(e)).toBe('object');
  });
}),
  describe('getRole of Employee', () => {
    it('Can call getRole to be equal to Employee', () => {
        let expectedValue = 'Employee';
        let e = new Employee('Sam', '2', 'sam.saminson@gmail.com');
      expect(e.getRole()).toBe(expectedValue);
    });
  });

  describe('getName of Employee', () => {
    it('Can call getName to be equal to Employee', () => {
        let expectedValue = 'Sam';
        let e = new Employee('Sam', '2', 'sam.saminson@gmail.com');
      expect(e.getName()).toBe(expectedValue);
    });
  });

  describe('getEmail of Employee', () => {
    it('Can call getEmail to be equal to Employee', () => {
        let expectedValue = 'sam.saminson@gmail.com';
        let e = new Employee('Sam', '2', 'sam.saminson@gmail.com');
      expect(e.getEmail()).toBe(expectedValue);
    });
  });
  