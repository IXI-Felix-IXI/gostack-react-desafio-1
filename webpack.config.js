const path = require('path');

module.exports = {

  // Define o arquivo inicial da aplicação
  entry: path.resolve(__dirname, 'src', 'index.js'),

  // Local aonde sera armazenado o bundle (código transpilado pelo webpack)
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
 
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  // Regras para definir os tipos de arquivo a serem manipulados
  module: {
    rules: [
      {
        // Expressão regular que define que para todos os arquivos '.js'
        // o babel deverá  transpilar o código.
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        } 
      }
    ]
  }
};