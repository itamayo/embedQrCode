({
    name: "embedQrCode.js",
    baseUrl: './',
    paths:{
        requireLib:'lib/require',
	qrcode:'lib/qrcode',
	domR:'lib/domReady'	
        },
    include:['requireLib'],
    out: "dist/embedQrCode.min.js",
    removeCombined: true,
    has:{
      debugger:false
    },
   preserveLicenseComments: false
})
