const mongoose = require('mongoose')

mongoose.connect('mongod://localhost/users')
     .then(() => console.log('successfully connected') )
     .catch(err => console.log(new Error(err)))
 
     
const userSchema = new mongoose.Schema({
    id:String, 
    name:String,
    games:[String],
    isAdult: Boolean
})    

const UserModel = mongoose.model('user', userSchema)

const creatinguser = async () =>{
 
    const arsham = new UserModel({
        id:'fg8y097',
        name:'arsham',
        games:['ac origins', 'turak'],
        isAdult:true
    })

  const res = await arsham.save()
  console.log(res)

}
 
creatinguser()

async function findinguser(){
    UserModel.find({name: {ne:'arsham'}})
    .limit(12)
}