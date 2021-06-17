const toInvalidFields = (errors) => Object.keys(errors)
const toFullErrors = (errors) => Object.values(errors).flat()

module.exports = { toInvalidFields, toFullErrors }
