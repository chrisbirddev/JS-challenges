// create a file called 'app.js'
// make sure you are in the correct location in the terminal
// input the command 'npm install' in the terminal to install jest testing library
// input the command 'npm test' in the terminal to run the test file

const {
  challenge1,
  challenge2,
  challenge3,
  challenge4,
  challenge5,
} = require("./app");
// file path
describe("challenge1 tests", () => {
  test("challenge 1 to return words breakfast lunch and dinner with a colon after (breakfast:pancakes), followed by the food", () => {
    let value = challenge1("pancakes", "BLT", "steak and chips")
      .replace(/\s/g, "")
      .toLowerCase();
      let meals = ['breakfast:', 'lunch:', 'dinner:']
      let res = []
    for(let i = 0; i < 3; i++) {
      if(value.includes(meals[i])){
        res.push(true)
      }else {
        res.push(false)
      }
    }
    expect(res).not.toContain(false);
  });
  test("challenge 1 returns pancakes, BLT, steak and chips", () => {
    let value = challenge1("pancakes", "BLT", "steak and chips")
      .replace(/\s/g, "")
      .toLowerCase();

    expect(value).toBe("breakfast:pancakes,lunch:blt,dinner:steakandchips");
  });
})

describe("challenge 2 tests", () => {
  test("15 will return fizz buzz", () => {
    expect(challenge2(15)).toBe("fizz buzz");
  });
  test("3 will return fizz", () => {
    expect(challenge2(3)).toBe("fizz");
  });
  test("5 will return buzz", () => {
    expect(challenge2(5)).toBe("buzz");
  });
  test("string will return error message", () => {
    expect(challenge2("five")).toBe("needs to be a positive number");
  });
  test("negative number will return error message", () => {
    expect(challenge2(-3)).toBe("needs to be a positive number");
  });
  test("0 number will return error message", () => {
    expect(challenge2(-3)).toBe("needs to be a positive number");
  });
});

describe("challenge 3 tests", () => {
  test("returns even number", () => {
    expect(challenge3(5, 1)).toBe(6);
  });
  test("returns multiplied number when the two added together are odd", () => {
    expect(challenge3(5, 2)).toBe(10);
  });
  test("return error message when arguments aren't numbers", () => {
    expect(challenge3("5")).toBe("make sure you enter 2 numbers");
  });
});

describe("challenge 4 tests", () => {
  test("array returned contains 5 numbers", () => {
    expect(challenge4().length).toBe(5);
  });
  test("each number is between 0 and 50", () => {
    let arr = [];
    let nums = () => {
      for (let i = 0; i <= 50; i++) {
        arr.concat(challenge4());
      }
    };
    let checker = () => {
      nums();
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 0 && arr[i] > 50) {
          return true;
        }
        return false;
      }
    };
    expect(checker()).toBe(false);
  });
});

describe("challenge 5 tests", () => {
  const arr = challenge5();
  test("first number in array is 9", () => {
    expect(arr[0]).toBe(9);
  });
  test("last number in array is 0", () => {
    expect(arr[9]).toBe(0);
  });
  test("array contains 10 numbers", () => {
    expect(arr.length).toBe(10);
  });
});

