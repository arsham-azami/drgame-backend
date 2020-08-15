const { number } = require('joi')
const mongoose = require('mongoose')
mongoose.connect('localhost:3000')
             .then(() => console.log('connected'))
             .catch(err => console.log(err))

    const userSchema = new mongoose.Schema({
            name:String,
             age:Number
         })

    const User = mongoose.model('users', userSchema)
  
    //saving user in db
    async function savingUser(){

        const arsham = new User({
            name:'arsham',
            age:17
        })

        const res = await arsham.save()
        console.log(res)   
    }

   savingUser()
     //model, schema
     //class, object