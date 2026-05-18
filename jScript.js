const pyramid = (str, num, bool) => {
  let result = "\n";

  if (bool === false) {
    // Upright pyramid
    for (let i = 0; i < num; i++) {
      result += " ".repeat(num - i - 1) + str.repeat(2 * i + 1) + "\n";
    }
  } else {
    // Inverted pyramid
    for (let i = 0; i < num; i++) {
      result += " ".repeat(i) + str.repeat(2 * (num - i) - 1) + "\n";
    }
  }

  return result;
};

// Test
console.log(pyramid("o", 4, true));