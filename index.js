const express = require('express')
const app = express ()

app.get('/',function(req, res) {
	res.send('<html><h1> Hello World. You just installed a totally useless app!!! Congrats on that !!!</h1></html>')
	})

app.listen(3000,function () {
    console.log('Example app listening on port 3000!')
})

