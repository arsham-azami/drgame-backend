const express = require('express')
const app = express()
const Joi = require('joi')
const morgan = require('morgan')
const { urlencoded } = require('express')
const ProductRouter = require('./router/products')
app.use(express.json())
app.use(express.static('public'))
app.use((req, res, next) => {
  console.log('sending...')
  next()
})

app.use('/api/products', ProductRouter)

if(app.get('env') === 'developement'){
     
    app.use(morgan('tiny'))

}

app.listen(5000, ()=>{
    console.log('Hello i am Dr.game who listening to port 5000')    
})
