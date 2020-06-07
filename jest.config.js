process.env.TZ = 'GMT'

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  cache: false,
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ]
}
