export function isEmail(value) {
  console.log("İS email:", value);

  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  return emailRegex.test(value);
}

export function isNotEmpty(value) {
  console.log("İS not empty:", value);

  return value.trim() != "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEquals(value, valueToCompare) {
  return value === valueToCompare;
}
