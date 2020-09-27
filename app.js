let express = require('express');
let bodyParser = require('body-parser');
let querystring = require('querystring');
let cookieParser = require('cookie-parser');


let app = express();

app.use(bodyParser.urlencoded({ extended : false}));

app.engine('pug', require('pug').__express)
app.set('view engine' , 'pug');

let mainRoutes = require('./routes');
// let cardRoutes = require('./routes/cards');   // ./ 代表呼叫這個目錄下的檔案


app.use(mainRoutes);
// app.use('/cards', cardRoutes);



//appworks mission - Assignment 1: 
//讓localhost 吃到index資料
app.get('/' , (req , res) => {
    res.render('index');
});






//appworks mission - Assignment 2: 
//瀏覽器網址：http://localhost:3000/getData?number=5
app.get('/getData', (req , res) => {
    let number = req.query.number;
    res.send(inputData(number));
    // inputData(number);
	// console.log(outputData);
});

function isInteger(number){
    return number %1 == 0;
}

function inputData(number) { 
    let alert="Lack of Parameter"; //預設為空值
    if (number !== null && number !== undefined && number !== "") 
    {
        if( isInteger(number) === true){ //判斷為正整數  //else if(typeof(number)=='number')
          let max = number;
          let sum = 0;
        //   message ="";
            for (let i = 1; i <= max; i++) {
                    sum += i;  // /getData?number=正整數
                }
            alert = ""+sum ;
        } 
    
        else  {  //判斷為字串  //if (typeof(number)=='string')

        alert = "Wrong Parameter";
        }
    }    
        return alert;
}


    
//appworks mission - Assignment 4: HTTP Cookie

app.get('/myName' , (req , res) => {
    res.render('hello');
});

app.post('/myName' , (req , res) => {
    res.cookie('username', req.body.username );
    res.render('hello', { name: req.body.username });
});





// app.get('/endpoint', function(request, response) {
//     let name = request.query.name;
//     response.end("I have received the ID: " + name);
// });
//在瀏覽器中訪問： http://localhost:3000/endpoint?id=something






app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});

