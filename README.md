## React-Dev-Setup

# Method - 3 (React with Webpack setup)
#### Find the complete code here - https://github.com/akhiltejabm/React-Dev-Setup/tree/master/method3

### Commands to be executed in the terminal


``` 
npm init 

npm i @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin style-loader webpack  webpack-cli  webpack-dev-server  --save-dev

npm i react react-dom --save
```
#### Add babel and presets in package.json
```
"babel": {
   "presets": [
     "@babel/preset-env",
     "@babel/preset-react"
   ]
 }
```
##### add   "start" : "webpack-dev-server" under scripts of package.json

##### create “webpack.config.js” file in the same folder and put below code;
```
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
   entry : "./app/index.js",
   output : {
       path : path.resolve(__dirname,'dist'),
       filename : "index_bundle.js"
   },
   module: {
       rules: [
         {
           test: /\.js$/, use : "babel-loader"
         },
         {
           test: /\.css$/, use : ["style-loader","css-loader"]
         }
       ]
   },
   mode : "development",
   plugins : [
       new HtmlWebpackPlugin({
           template : "app/index.html"
       })
   ]
}
```

#### create “index.js” file in “app” folder

#### create “index.html” file in “app” folder

##### put below code in “index.html”

```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   <div id="root">
   </div>
</body>
</html>
```

##### put below code in “index.js”

```
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello world</h1>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
```

#### put this in terminal

```
npm start 
```


/* If you want to turn your react app from development to production mode, change “development” to “production” in “webpack.config.js”file and change “webpack-dev-server” to “webpack” in scripts{start:  } of “package.json” file
*/












