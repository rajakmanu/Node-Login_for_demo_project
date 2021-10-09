
const userService=require("../service/userService")

module.exports={
    login: async(req,res)=>{
        const user= await userService.getUserByEmail(req.params.userEmail)
        if(!user)
        {
            res.send({"res":"Email is invalid"})
        }
        if(user.password!=req.params.password)
        {
            res.send({"res":"Password is invalid"})
        }
        else
        {
            res.send({"res":"Login Successful"})
        }
    },
    verifyEmail: async(req,res)=>{
        const user=await userService.emailVerified(req.params.email);
        res.send({"res":"Email Verified Successfully"})
    },
    verifyPhone: async(req, res)=>{
        console.log("xchgshcscfj", req.params);
        const user= await userService.fetchOtp(req.params.phone);
        if(req.params.otp!=user.userOtp)
        {
            res.status(400).send({"res":"Invalid OTP"});
            
        }
        await userService.otpVerifiedUpdate(user.userId);
            res.send({"res":"OTP verified Succesfully"});
            
        
    },
    getallusers: async (req,res)=>{
        const users = await userService.getAllUsers();
        res.send(users);
          
    },
    getuser: async (req,res)=>{
            const users = await userService.getUser(req.params.id);
            res.send(users);
       
    },
    createUser: async (req,res)=>{
      //  console.log("I am here controller", req.body);
        const addedUser = await userService.createUser(req.body);
        
        res.send(addedUser);
    },
    updateUser:  async (req,res)=>{
        const user=await userService.updateUser(req.params.id, req.body);
          res.send(user)
    },
    deleteUser: async (req,res)=>{
        const  status= await userService.deleteUser(req.params.id);
        console.log(status);
        if(status==1)
        {
            res.send("OK deleted")
        }
    }
};