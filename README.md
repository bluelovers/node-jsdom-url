# jsdom-url

> a not strict JSDOM URL object

`npm install jsdom-url`

## demo

```javascript
import URL from 'jsdom-url';

let href = 'https://github.com/tmpvar/jsdom?a=1';

let url1 = new URL(href, null);
let url2 = URL.create(href);

// URL("https://github.com/tmpvar/jsdom?a=1")
```
