const mail= require("../mail")
const userService= require('../service/userService')
const emailTemplate= require('../emailTemplate')

module.exports= async (req, res, next)=>{
    
    const email= req.body.userEmail;
    const name= req.body.userName;
    console.log("sgcfc", name)
    const user= await userService.getUserByEmail(email);
    if(user){
        res.send({"res": "Email already registered"});
    }
else{
  //  console.log(req.body);
   // console.log("I am here verification", email)
    
mail({data: {
    subject: "Email Verification",
    message: emailTemplate.verifyEmail(email, name),
    recipient: email
}})
next();
}
};