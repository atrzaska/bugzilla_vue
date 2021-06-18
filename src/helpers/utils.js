function fullName({ firstName, lastName }) {
  return [firstName, lastName].filter((x) => Boolean(x)).join(' ')
}

export { fullName }
