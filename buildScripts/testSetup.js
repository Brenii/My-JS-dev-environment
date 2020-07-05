// not traspilled. Use common JS and ES5
//register babel to transpile before our test run

require('babel-register')();

//Disable Webpack features that Mocha does not understand
require.extensions['.css']=function() {};