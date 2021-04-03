const isPrimitive = (value) =>
  typeof value === 'object' ? value === null : typeof value !== 'function'

const assignDeep = (target, source) => {
  for (let key in source) {
    if (isPrimitive(source[key])) {
      target[key] = source[key]
      continue
    }

    if (!target.hasOwnProperty(key) || isPrimitive(target[key])) {
      target[key] = {}
    }

    target[key] = assignDeep(target[key], source[key])
  }

  return target
}

module.exports = assignDeep
