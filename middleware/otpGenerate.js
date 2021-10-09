const otp= require('otp-generator');
const {fast2sms}= require('../sms');
const userService= require('../service/userService')

module.exports= async (req, res, next)=>{
    const phone= req.body.phone;
    const user= await userService.fetchOtp(phone);
    if(user){
        res.send({"res": "Phone no already registered"});
    }
    else{
    const name= req.body.userName;
    const otpGenerated=otp.generate(6, { upperCase: false, specialChars: false });
    req.body.userOtp=otpGenerated;
   // console.log("I am here verifying phone", phone)
    await fast2sms({
        message: `Hi ${name}, your otp for verification is: ${otpGenerated}`,
        contactNumber: phone
    })
    next();
}

};