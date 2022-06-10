/* 1.1
  Реализуйте алгоритм, определяющий, все ли символы в строке встречаются один раз.
  При выполнение этого задания нельзя использовать дополнительные структуры данных.
*/

const testString = 'abc1321';

const isOnlyOneSymbol = string => {
  for (let i = 0; i < string.length; i++) {
    if (string.replaceAll(string[i], '').length !== string.length - 1) {
      return false;
    }
  }

  return true;
};

console.log('1.1:', isOnlyOneSymbol(testString));

/* 1.2
   Реализуйте функцию leftShift(str). Фукнция циклично сдвигать строку, заканчиващуюся символов null
*/

const leftShift = (string, shift) => {
  const shiftString = [];
  const shiftModule = Math.abs(shift);

  for (let i = string.length - 1; i >= 0; i--) {
    if (i + shiftModule >= string.length) {
      shiftString[i + shiftModule - string.length] = string[i];
      continue;
    }

    shiftString[i + shiftModule] = string[i];
  }

  return shiftString.join('');
};

console.log('1.2:', leftShift(testString, 1));

/* 1.3
  Для двух строк напшиите метод, определяющий, ялвляется ли одна строка престановкой символов другой
*/

const isEquivalsString = (string1, string2) => {
  const getSortString = str => str.split('').sort().join('');

  const sortStr1 = getSortString(string1);
  const sortStr2 = getSortString(string2);

  return sortStr1 === sortStr2;
};

console.log('1.3:', isEquivalsString(testString, `${leftShift(testString, 3)}4`));

/* 1.4
  Заменить все проблелы на '%20'
*/

const replaceSpace = string => {
  let replacedString = '';

  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] === ' ') {
  //     replacedString += '%20';
  //     continue;
  //   }
  //
  //   replacedString += string[i];
  // }
  replacedString = string.replace(/\s/g, '%20');

  return replacedString;
};

console.log('1.4', replaceSpace('Create by s0ick'));

/* 1.5
  Реализовать метод сжатия строки. Если сжатая строка окажется длинее исходной, то вернуть исходную.
*/

const testCompString = 'aabbbcdddd';

const getCompressionString = str => {
  let compressionString = '';
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] !== str[i]) {
      compressionString += `${str[i]}${counter}`;
      counter = 0;
    }

    counter++;
  }

  return str.length < compressionString.length ? str : compressionString;
};

console.log('1.5:', getCompressionString(testCompString));

/* 1.6
  Дано изоюражение в видеатрицы NxN, где каждый пиксель занимает 4 байта.
  Напишите метод, который переворачивает матрицы на 90гр.
*/

const testMatrixNxN = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const rotateMatrix = matrix => {
  const newMatrix = [];

  for (let i = matrix.length - 1; i >= 0; i--) {
    const newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
};

console.log('1.6:', rotateMatrix(testMatrixNxN));

const testMatrixMxN = [
  [1, 2, 3, 4],
  [0, 6, 7, 8],
  [9, 10, 0, 12]
];

/*
  Если в ячейки матрицы размером MxN был найден 0, то обнулить весь столбец и строку.
*/

const findAndReplaceZero = matrix => {
  const newMatrix = [];
  const hashIndexesColumn = {};
  const hashIndexesRow = {};

  for (let i = 0; i < matrix.length; i++) {
    const newRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hashIndexesColumn[j] = true;
        hashIndexesRow[i] = true;
      }
      newRow.push(matrix[i][j]);
    }
    newMatrix.push(newRow);
  }

  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (hashIndexesColumn[j] || hashIndexesRow[i]) {
        newMatrix[i][j] = 0;
      }
    }
  }


  return newMatrix;
};

console.log('1.7:', findAndReplaceZero(testMatrixMxN));

/*
  Для двух строк напишите код проверки, получена ли одна из строк цикличным сдвгом второй используя вызов метода всего 1 раз.
*/

const testStrings = [
  'waterbottle',
  'erbottlewat'
];

const isSubstring = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const shifting = (string, shift) => {
    const shiftString = [];
    const shiftModule = Math.abs(shift);

    for (let i = string.length - 1; i >= 0; i--) {
      if (i + shiftModule >= string.length) {
        shiftString[i + shiftModule - string.length] = string[i];
        continue;
      }

      shiftString[i + shiftModule] = string[i];
    }

    return shiftString.join('');
  };

  for (let i = 0; i < s1.length; i++) {
    if (s2 === shifting(s1, i)) {
      return true;
    }
  }

  return false;
};

console.log('1.8:', isSubstring(testStrings[0], testStrings[1]));

