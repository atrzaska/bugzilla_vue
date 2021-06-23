const fullName = ({ firstName, lastName }) =>
  [firstName, lastName].filter((x) => Boolean(x)).join(' ')

const scrollToTop = () => window.scrollTo(0, 0)

export { fullName, scrollToTop }
