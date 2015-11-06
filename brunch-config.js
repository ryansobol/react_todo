module.exports.config = {
  files: {
    javascripts: {
      joinTo: 'app.js'
    }
  },

  plugins: {
    babel: {
      pattern: /\.(js|jsx)$/
    }
  }
}
