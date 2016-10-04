# embedQrCode
Easy way to embeded qrcode to your web

# What for ?
Several times it is necesary to test your web development on various devices. Through this lib you could avoid writing
a very longs url on mobile/tablets just scanning the QRCode. EmbedQrcode gets the current URL and converts it on Qrcode.

# How to use it ?
Just import the library on your webpage, that its:

```html
<script src="dist/embedQrCode.min.js"/>
```
An small icon while show it in top of your web, exactly on the top left. Once is clicked, it would show a qrcode to scan. Any click on the screen will hide the qrcode.

# How to dev

It is based on [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) module system, exactly it uses require.js. Just edit embedQrCode.js and when you done it could be minimized by:

```
# r.js -o minimize.js
```
The minimized script would create on the dist/ folder.
