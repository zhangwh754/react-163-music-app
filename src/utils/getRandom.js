const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getNotRepeatedInteger = (num, min, max) => {
  let newNum = randomIntegerInRange(min, max)

  while (newNum === num) {
    newNum = randomIntegerInRange(min, max)
  }

  return newNum
}

export default getNotRepeatedInteger
