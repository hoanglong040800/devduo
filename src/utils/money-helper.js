export function convertMoney(money) {
  if (money < 1000) {
    return `${money}k`
  } else {
    if (money % 1000 == 0) {
      return `${money / 1000}tr`
    } else {
      return `${(money / 1000).toFixed(1)}tr`
    }
  }
}
