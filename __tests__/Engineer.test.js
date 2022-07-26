const Engineer = require('../lib/Engineer');

describe('Create Engineer', () => {
  it('Can create Engineer via constructor arguments name, id, email, school', () => {
    let e = new Engineer('Jess', '3', 'jessie1@gmail.com', 'GitLover327');
    expect(typeof(e)).toBe('object');
  });
}),
  describe('getRole of Engineer', () => {
    it('Can call getRole to be equal to Engineer', () => {
        let expectedValue = 'Engineer';
        let e = new Engineer('Jess', '3', 'jessie1@gmail.com', 'GitLover327');
      expect(e.getRole()).toBe(expectedValue);
    });
  });

  describe('getName of Engineer', () => {
    it('Can call getName to be equal to Engineer', () => {
        let expectedValue = 'Jess';
        let e = new Engineer('Jess', '3', 'jessie1@gmail.com', 'GitLover327');
      expect(e.getName()).toBe(expectedValue);
    });
  });

  describe('getEmail of Engineer', () => {
    it('Can call getEmail to be equal to Engineer', () => {
        let expectedValue = 'jessie1@gmail.com';
        let e = new Engineer('Jess', '3', 'jessie1@gmail.com', 'GitLover327');
      expect(e.getEmail()).toBe(expectedValue);
    });
  });

  describe('getGithub of Engineer', () => {
    it('Can call getGithub to be equal to Engineer', () => {
        let expectedValue = 'GitLover327';
        let e = new Engineer('Jess', '3', 'jessie1@gmail.com', 'GitLover327');
      expect(e.getGithub()).toBe(expectedValue);
    });
  });