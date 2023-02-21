import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './functions';

it('capitalizes', () => {
  expect(capitalize('test string')).toBe('Test string');
});

it('reverses a string', () => {
  expect(reverseString('test string')).toBe('gnirts tset');
});

it('adds', () => {
  expect(calculator.add(10, 3)).toBe(13);
});

it('subtracts', () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

it('miltiplies', () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

it('divides', () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
});

it('ciphers', () => {
  expect(caesarCipher('defend the east wall of the castle', 2)).toBe(
    'fghgpf vjg gcuv ycnn qh vjg ecuvng'
  );
});

it('ciphers z to a', () => {
  expect(caesarCipher('zzzz', 3)).toBe('cccc');
  expect(caesarCipher('zzzz', 1)).toBe('aaaa');
});

it('ciphers respecting case', () => {
  expect(caesarCipher('defEnd tHe East walL Of the cAstle', 2)).toBe(
    'fghGpf vJg Gcuv ycnN Qh vjg eCuvng'
  );
});

it('ciphers respecting punctuation', () => {
  expect(
    caesarCipher(`??defend; the, "east wall" 'of' the... castle!!!`, 2)
  ).toBe(`??fghgpf; vjg, "gcuv ycnn" 'qh' vjg... ecuvng!!!`);
});

it('ciphers the other way', () => {
  expect(caesarCipher('abc', -1)).toBe('zab');
});

it('analyzes an array', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
