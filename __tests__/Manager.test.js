const Manager = require('../lib/Manager');

describe('Create Manager', () => {
  it('Can create Manager via constructor arguments name, id, email', () => {
    let e = new Manager('Nick', '1', 'nick.n@gmail.com', 'Office #20')
    expect(typeof(e)).toBe('object');
  });
}),
  describe('getRole of Manager', () => {
    it('Can call getRole to be equal to Manager', () => {
        let expectedValue = 'Manager';
        let e = new Manager('Nick', '1', 'nick.n@gmail.com', 'Office #20')
      expect(e.getRole()).toBe(expectedValue);
    });
  });

  describe('getName of Manager', () => {
    it('Can call getName to be equal to Manager', () => {
        let expectedValue = 'Nick';
        let e = new Manager('Nick', '1', 'nick.n@gmail.com', 'Office #20')
      expect(e.getName()).toBe(expectedValue);
    });
  });

  describe('getOfficeNumber of Manager', () => {
    it('Can call getOfficeNumber to be equal to Manager', () => {
        let expectedValue = 'Office #20';
        let e = new Manager('Nick', '1', 'nick.n@gmail.com', 'Office #20')
      expect(e.getOfficeNumber()).toBe(expectedValue);
    });
  });