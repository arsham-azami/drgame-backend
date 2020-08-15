const { number } = require('joi')
const mongoose = require('mongoose')
mongoose.connect('localhost:3000')
             .then(() => console.log('connected'))
             .catch(err => console.log(err))

    const userSchema = new mongoose.Schema({
            name:String,
             age:Number
         })

         mongoose.model