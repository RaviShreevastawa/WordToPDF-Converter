const express = require('express')
const multer  = require('multer')
const cors = require("cors");
const docxtoPDF = require('docx-pdf');
const path = require("path");

const app = express()
const port = 3000

app.use(cors());

//Setting up the file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

app.post('/convertFile', upload.single('file'), (req, res, next) => {
  try{

      if(!req.file){
        return res.status(400).json({
          message:"No file Uploaded",
      });
      }

      // Define output file path
      let outputPath = path.join (__dirname, "files", `${req.file.originalname}.pdf`)
      docxtoPDF(req.file.path, outputPath, (err, result) => {
        if(err){
          console.log(err);
          return res.status(500).json({
            message: "Error converting docx to pdf",
          })
        }
        res.download(outputPath, () => {
          console.log("File downloaded");
        });
      });
    }
    catch(error){
      console.log("error")
      res.status(500).json({
        message: "Internal Server Error",
      });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})