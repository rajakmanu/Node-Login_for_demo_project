const db= require("../init");
const User= db.user;
module.exports={
  otpVerifiedUpdate: async(userId)=> await User.update({phoneVerified: true}, {
    returning: true,
    where: {userId:userId}
  }), 
    fetchOtp: async(phone)=> await User.findOne({where: {phone:phone}})
    ,
    getAllUsers: async()=> {
      const { QueryTypes } = require("sequelize");
      const data = await db.sequelize.query(
        `SELECT * FROM users`,
        { type: QueryTypes.SELECT }
      );
      console.log(data.map(data=>(data.userId+10)))
      return data;
    }
    ,
    getUser: async(userId)=>await User.findOne({where: {userId:userId}})
    ,
    getUserByEmail: async(email)=>await User.findOne({where: {userEmail:email}})
    ,
    createUser: async (userObj)=>await User.create(userObj)
    ,
    updateUser: async (userId, userObj) => await User.update(userObj, {
        returning: false,
        where: {userId: userId}
      })
      ,
      emailVerified: async (email) => await User.update({emailVerified:true}, {
        returning: false,
        where: {userEmail:email}
      })
      ,
    deleteUser: async(userId)=> await User.destroy({ where: {userId: userId}})
}