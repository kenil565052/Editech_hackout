
const userschema=require('../model/user')

const bcrypt=require('bcryptjs')





const register=async (req,res,next)=>
{
let user={
    name:req.body.name,
    age:req.body.age,
    email:req.body.mail,
    password:req.body.password
}
const haseshpass=await bcrypt.hash(req.body.password,10);
user.password=haseshpass
const registers=new userschema(user)
registers.save().then(()=>res.send("registerd")).catch(()=>res.status(404));
console.log("register",req.body)
}

const login = async (req,res,next)=>{
    // res.send("done" )
   
    userschema.findOne({email:req.body.mail }).then(async (response)=>{console.log(response)

        if(response==null) return res.send('not found')
        const success=await bcrypt.compare(req.body.password,response.password); 
        
// res.writeHead(200,{'conetent-type':'text/html'})
// res.write(`<h1>Helllo ${response.name} </h1>`)
// res.end()
    // fs.writeFile('../views1/index1.pug', "")
    if(success)
     res.render('index1.pug',{msg:response.name})
     else 
        res.send("password is wrong")
    })
    // console.log("login",req.body)

    
console.log("login")
}

module.exports={register,login}