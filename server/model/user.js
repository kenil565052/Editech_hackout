const mongoose=require('mongoose')
const schema=mongoose.Schema;


const myuser=new schema({


email:{
    type:String
}
,
password:{
    type:String
}

})

const UserSchema=new mongoose.model('register',myuser)

module.exports=UserSchema