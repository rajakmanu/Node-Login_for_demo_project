const express= require("express");
const userController= require("../controller/userController");
const router= express.Router();
const {verification, otpGenerate, passwordEncryption}= require("../middleware");

router.get("/verify/email/:email", userController.verifyEmail);

router.get("/verify/:phone/:otp", userController.verifyPhone);

router.get("/login/:userEmail/:password", userController.login);


router.get("/:id", userController.getuser);
  
  router.get("/", userController.getallusers);
  
  router.post("/",/*passwordEncryption,otpGenerate, verification*/  userController.createUser);
  
  router.put("/:id", userController.updateUser);
  
  router.delete("/:id", userController.deleteUser);

  module.exports= router;