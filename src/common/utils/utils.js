export function arrToObjWithData(arr, data) {
  return arr.reduce((prev, cur) => {
    prev[cur] = data[cur]
    return prev
  }, {})
}
