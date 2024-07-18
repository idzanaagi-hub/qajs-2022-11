// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test.each([
  ["test", true],
  ["t", false],
  ["", false],
])('nameIsValid(%s, %s)', (a,  expected) => {
  expect(nameIsValid(a)).toBe(expected)
});

describe('test fullTrim funcrtion', () => {

  test("trim '' to be ''", () => {
    expect(fullTrim("")).toBe("");	
  });
  
  test("trim 'test ' to be 'test'", () => {
    expect(fullTrim("test ")).toBe("test");	
  });
  
  test("trim ' test ' to be 'test'", () => {
    expect(fullTrim(" test ")).toBe("test");	
  });
});

describe('test getTotal funcrtion', () => {

  test("getTotal for price 10, quantity 10", () => {
    expect(getTotal([{ price: 10, quantity: 10 }])).toBe(100);
  });
  
  test("getTotal for price 10, quantity 1 and 9", () => {
    expect(getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }])).toBe(100);
  });
  
  test("getTotal for price 10, quantity 10 and discount 10", () => {
    expect(getTotal([{ price: 10, quantity: 10 }], 10)).toBe(90);
  });

  test("getTotal for price 10, quantity 10 and discount -10", () => {
    expect(() => getTotal([{ price: 10, quantity: 10 }], -10)).toThrowError("Процент скидки не может быть отрицательным");
  });
});
