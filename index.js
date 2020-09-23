let http = require('http'); //Declared variable for npm http package
let url = require('url'); //Declared variable for npm url package
let fs = require('fs'); //Declared variable for npm file system package
let port = 3000; //Declared variable for desired server port
let secretKey = '/secret?key=ALBATROSS'; //Declared variable for url path?query

/**
 * @description Creates and initiates Node.js HTTP server
 */
http.createServer(respons).listen(port, () => {
    console.log("Server now listening on port " + port);
});

/**
 * Function reads querystring from browser and tests this against secretKey-variable.
 * If the querystring starts with "/secret" but not followed with correct key - response from text file.
 * If the querystring is identical to secretKey-variable - response with secret html.
 */
function respons(request, respons){
    let urlParameter = url.parse(request.url, true);
    let foo;

    if (urlParameter.href.startsWith('/secret')){

        if(urlParameter.href == secretKey){
            try {
                foo = fs.readFileSync('./secret.html');
            }
            catch (err) {
                console.log(err);
            }
            respons.setHeader("Content-Type", "text/html");
        }else{
            try {
                foo = fs.readFileSync("./public.txt");
            }
            catch (err) {
                console.log(err);
            }
            respons.setHeader("Content-Type", "text/plain");
        }
    }
    respons.end(foo);
}