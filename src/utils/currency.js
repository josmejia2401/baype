export function getCurrencyNumber(number) {
  return "$" +Number((number).toFixed(1)).toLocaleString()
}