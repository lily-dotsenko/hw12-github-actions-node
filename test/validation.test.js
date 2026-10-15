const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidProduct } = require("../src/product-validation");

test("accepts a valid product", () => {
  assert.equal(isValidProduct("Laptop", 1200), true);
});

test("accepts a zero price", () => {
  assert.equal(isValidProduct("Gift", 0), true);
});

test("rejects an empty name", () => {
  assert.equal(isValidProduct("", 100), false);
  assert.equal(isValidProduct("   ", 100), false);
});

test("rejects a missing name", () => {
  assert.equal(isValidProduct(undefined, 100), false);
});

test("rejects a negative price", () => {
  assert.equal(isValidProduct("Laptop", -100), false);
});

test("rejects a price passed as text", () => {
  assert.equal(isValidProduct("Laptop", "100"), false);
});

test("rejects a missing or non-finite price", () => {
  assert.equal(isValidProduct("Laptop", undefined), false);
  assert.equal(isValidProduct("Laptop", NaN), false);
  assert.equal(isValidProduct("Laptop", Infinity), false);
});

test("rejects a null name", () => {
  assert.equal(isValidProduct(null, 100), false);
});

test("rejects a numeric name", () => {
  assert.equal(isValidProduct(123, 100), false);
});

test("rejects a null price", () => {
  assert.equal(isValidProduct("Laptop", null), false);
});
