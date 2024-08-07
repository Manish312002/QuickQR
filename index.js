import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message:"Enter Your URL : ",
        name:"URL"
    }
  ])
  .then((answers) => {
    var qr_png = qr.image(answers.URL)
    qr_png.pipe(fs.createWriteStream("google.png"));

    fs.writeFile("URL.txt",answers.URL,(err)=>{
        if(err) throw err;
        console.log("QR-CODE is created Sucessfully!!!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });