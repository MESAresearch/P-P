const express = require('express');
const app = express();

// app.use('/public', express.static('public'));

app.get("/",function(req,res){
	res.send("Site currently under maintainance!");
});

app.listen(5000);
