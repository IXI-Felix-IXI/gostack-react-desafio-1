module.exports = {
  presets: [
    // Responsável por transpilar as partes de javascript que
    // os navegadores ainda não entendem
    "@babel/preset-env", 

    // Responsável por transpilar as partes do React que
    // os navegadores ainda não entendem
    "@babel/preset-react"
  ],

  // Plugin para permitir uma sintaxe mais recente na
  // construção de components por meio de classes
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}