const Intern = require('../lib/Intern');

describe('Create Intern', () => {
  it('Can create Intern via constructor arguments name, id, email, school', () => {
    let e = new Intern('Niamh', '4', 'iluvcoding@gmail.com', 'Hawkesbury University')
    expect(typeof(e)).toBe('object');
  });
}),
  describe('getRole of Intern', () => {
    it('Can call getRole to be equal to Intern', () => {
        let expectedValue = 'Intern';
        let e = new Intern('Niamh', '4', 'iluvcoding@gmail.com', 'Hawkesbury University')
      expect(e.getRole()).toBe(expectedValue);
    });
  });

  describe('getName of Intern', () => {
    it('Can call getName to be equal to Intern', () => {
        let expectedValue = 'Niamh';
        let e = new Intern('Niamh', '4', 'iluvcoding@gmail.com', 'Hawkesbury University')
      expect(e.getName()).toBe(expectedValue);
    });
  });

  describe('getEmail of Intern', () => {
    it('Can call getEmail to be equal to Intern', () => {
        let expectedValue = 'iluvcoding@gmail.com';
        let e = new Intern('Niamh', '4', 'iluvcoding@gmail.com', 'Hawkesbury University')
      expect(e.getEmail()).toBe(expectedValue);
    });
  });

  describe('getSchool of Intern', () => {
    it('Can call getSchool to be equal to Intern', () => {
        let expectedValue = 'Hawkesbury University';
        let e = new Intern('Niamh', '4', 'iluvcoding@gmail.com', 'Hawkesbury University')
      expect(e.getSchool()).toBe(expectedValue);
    });
  });