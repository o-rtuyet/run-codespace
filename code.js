var child_process = require('child_process')
var count=0;
setInterval(()=>{
    count++;
    child_process.spawn('code',[`./newFile-${count}.txt`], {cwd: __dirname})
},1000*60*4);