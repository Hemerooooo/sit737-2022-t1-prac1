let express = require('express')
let app = express()
// function to get current time in the format 'hours:minutes:seconds'
let getTime = function(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let time = hours + ":" + minutes + ":" + seconds
    return time
}
// happening when page requested
app.get('/', function (req,res){
    res.send('Welcome to the SIT737')
    console.log( getTime() + " [Server Activity]: Page has been requested")
})
// happening when server started
app.listen(3000,()=>{
    console.log( getTime() + " [Server Activity]: Web server started")
})