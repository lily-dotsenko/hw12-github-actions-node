function isValidProduct(name, price) {
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof price === "number" &&
    Number.isFinite(price) &&
    price >= 0
  );
}

module.exports = { isValidProduct };
