export function validatePrice(min, max) {
  if (!min || !max) return false;
  return !isNaN(min) && !isNaN(max);
}
