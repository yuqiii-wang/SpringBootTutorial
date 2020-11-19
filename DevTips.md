# Some Debugging and Development tips

* Configure `src/main/resources/application.properties`, you can change database
configuration according to your defined database.
```txt
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/fakecompany
spring.datasource.username=root
spring.datasource.password=P@ssw0rd
```

* Database Naming Convention

Translation of Spring Object to MySql has a naming convention that:
a Java variable`vaiableName` is mapped onto MySql's variable `variable_name`.

However, Id is an exception, that in Java `variableID` is mapped as `variableid`
in MySql database.

* React-Bootstrap as Frontend

To start working with `React-Bootstrap`, download the binary `LTS Node.js` from official website, `cp` it to `home` dir, and config path (Do **NOT** use `apt-get` for installation, we need a latest stable version)

-> For China go to `http://nodejs.cn/download/`

-> For global users `https://nodejs.org/en/download/`

Add `export PATH=~/node-v14.15.0-linux-x64/bin:$PATH` to `~/.bashrc`

Install React, Webpack, babel, etc.
```bash
# dir at your discretion
mkdir -p src/main/resources/React-Bootstrap-Frontend
cd src/main/resources/React-Bootstrap-Frontend
mkdir src # to put src js code
mkdir dist # to put production/compiled js code

# Create a nodeJs pkg
npm init -y

npm config ls # check config

# Install react, webpack, babel, etc. 
# For for China Mainland users, (for debugging, use --verbose)
npm install react react-dom react-bootstrap bootstrap --registry https://registry.npm.taobao.org --verbose
npm install webpack webpack-cli @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime html-webpack-plugin html-loader style-loader css-loader --save-dev --registry https://registry.npm.taobao.org --verbose
# For global users
npm install react react-dom react-bootstrap bootstrap 
npm install webpack webpack-cli @babel/core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin html-loader style-loader css-loader --save-dev 
# If stuck at fetching metadata
```
P.S. **Stuck at Fetching Metadata Err**

Try: `npm config set registry http://registry.npmjs.org/ --global`, then re-run `npm install <pkg-name>`. Find specific failed packages and download/install one by one.

Setup `.babelrc` by
```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Setup `webpack.config.js`

Setup `index.html` and `index.js` with code.

run `npx webpack` to compile Js code.

Put `index.html` with Js loading in `${SpringBootTutorial}/src/resources/templates`
```html
<script src="bundle.js"></script>
```

Put compiled Js code `bundle.js` in `${SpringBootTutorial}/src/resources/static`

Let Spring Boot render `index.html`, then job done.
```java
@RequestMapping(value = "/")
public String empty() {
    return "index";
}
```

At the end, remember compile and copy required files to spring boot project folders
```bash
cd src/react-bootstrap-crud && npx webpack && cd ../..
cp src/react-bootstrap-crud/dist/bundle.js src/main/resources/static/
cp src/react-bootstrap-crud/dist/index.html src/main/resources/templates/
cp src/react-bootstrap-crud/dist/bundle.js.LICENSE.txt src/main/resources/static/
```