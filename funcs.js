function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (isNaN(number)) {
    throw new Error('not type number: ', err)
  }
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  if (min > max) {
    return []
  }

  let range = []
  for (let i = min; i <= max; i += step) {
    range.push(i)
  }
  return range;
}


module.exports = { isFive, isOdd, myRange };