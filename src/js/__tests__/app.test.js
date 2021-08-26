import Validator from '../app';

const val = new Validator();

test('short number', () => {
  expect(() => val.validatePhone('45-45')).toThrow('invalid number');
});

test('too long number', () => {
  expect(() => val.validatePhone('+45-45-88677-456')).toThrow('invalid number');
});

test('from 8', () => {
  expect(val.validatePhone('8-916-978-45-56')).toBe('+79169784556');
});

test('chinese', () => {
  expect(val.validatePhone('+8921-456-78-78')).toBe('+89214567878');
});

test('without plus', () => {
  expect(val.validatePhone('916-978-45-56')).toBe('+79169784556');
});
