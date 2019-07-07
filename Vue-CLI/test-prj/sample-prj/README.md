# sample-prj

unset HOST (for mac)

## Add JQuery
Terminal
```
npm i --save-dev expose-loader
npm i --save jquery
```
main.js
```
import "expose-loader?$!expose-loader?jQuery!jquery";
window.$ = window.jQuery = require("jquery");
```

## Other plugins
```
vue add vuetify
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
