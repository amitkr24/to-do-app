const express   = require('express');
const app       = express();
const port      = 8002;
const path      = require ('path');


app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.use(express.static('./assets'))

//use route express
app.use('/',require('./routes'));

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');

// check the server is connected or not !
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server : ${port}`);
        return;
    }
       console.log(`server is running in port : ${port}`);
});

