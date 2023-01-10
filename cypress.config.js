const { defineConfig } = require('cypress')

module.exports = defineConfig({
  hosts: {
    'staging.acme.co': '127.0.0.1',
  },
  e2e: {
    // default baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'local'
      const environmentFilename = `./${environmentName}.settings.json`
      console.log('loading %s', environmentFilename)
      const settings = require(environmentFilename)
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        }
      }
      console.log('loaded settings for environment %s', environmentName)

      // IMPORTANT: return the updated config object
      // for Cypress to use it
      return config
    },
  },
})
