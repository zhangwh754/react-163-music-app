const isEmpty = arg => {
  if (Array.isArray(arg)) {
    return arg.length === 0
  } else {
    return Object.keys(arg).length === 0
  }
}

export default isEmpty
