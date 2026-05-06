// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber - 2 true, 2 false
test('isPhoneNumber: (123) 456-7890 is valid', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: 123-456-7890 is valid', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: 12345 is not valid', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});
test('isPhoneNumber: abc-def-ghij is not valid', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
 
// isEmail - 2 true, 2 false
test('isEmail: user@example.com is valid', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('isEmail: hello@test.org is valid', () => {
  expect(isEmail('hello@test.org')).toBe(true);
});
test('isEmail: notanemail is not valid', () => {
  expect(isEmail('notanemail')).toBe(false);
});
test('isEmail: missing@dotcom is not valid', () => {
  expect(isEmail('missing@dotcom')).toBe(false);
});
 
// isStrongPassword - 2 true, 2 false
test('isStrongPassword: Hello123 is valid', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('isStrongPassword: abcd_1234 is valid', () => {
  expect(isStrongPassword('abcd_1234')).toBe(true);
});
test('isStrongPassword: 1startswithnum is not valid', () => {
  expect(isStrongPassword('1startswithnum')).toBe(false);
});
test('isStrongPassword: ab is not valid (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});
 
// isDate - 2 true, 2 false
test('isDate: 12/25/2023 is valid', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('isDate: 1/1/2000 is valid', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('isDate: 2023-12-25 is not valid', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('isDate: 13/32/99 is not valid (year not 4 digits)', () => {
  expect(isDate('13/32/99')).toBe(false);
});
 
// isHexColor - 2 true, 2 false
test('isHexColor: #fff is valid', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('isHexColor: #1a2b3c is valid', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});
test('isHexColor: #xyz is not valid', () => {
  expect(isHexColor('#xyz')).toBe(false);
});
test('isHexColor: #12345 is not valid (5 hex chars)', () => {
  expect(isHexColor('#12345')).toBe(false);
});