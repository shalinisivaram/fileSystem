const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
app.use(cors())
app.use(express.json())

const files = []
var storage = multer.diskStorage({
    destination:function(request,file,cb) {
    cb(null,'public')
},
    filename:function(request,file,cb){
    cb(null,Date.now()+file.originalname)
}
})

var upload = multer({ storage: storage }).single('file')

app.post('/files',function (request,response){
    upload(request,response,function(error) {
        return response.status(200).send(request.file)
    })
})
app.get('/files',(req,res) => {
    res.json(files)
})

const PORT = 3001
app.listen(PORT,() => {
    console.log(`server running in the port ${PORT}`)
})