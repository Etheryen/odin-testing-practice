function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

const calculator = (() => {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
})();

function isUpperCase(string) {
  return string === string.toUpperCase();
}

function caesarCipher(string, shiftFactor = 1) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const ALPHABET = alpha.map((x) => String.fromCharCode(x));

  let result = '';

  for (const char of string) {
    if (ALPHABET.includes(char.toUpperCase())) {
      let newChar = ALPHABET.at(
        (ALPHABET.indexOf(char.toUpperCase()) + shiftFactor) % 26
      );
      result += isUpperCase(char) ? newChar : newChar.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

function analyzeArray(array) {
  return {
    average: array.reduce((prev, cur) => prev + cur / array.length, 0),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
