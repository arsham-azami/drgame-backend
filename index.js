const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const routerDebuger = require('debug')('app:start') 
const dbDebuger = require('debug')('app:debugDb')
const { urlencoded } = require('express')
const ProductRouter = require('./router/products')
const LoginRouter = require('./router/login')
const LogupRouter = require('./router/logup')

app.get('/', (req, res) =>{
    res.render('index.html')
})
if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    routerDebuger('morgan enabled...')
}

app.set('views', './views')
app.use(express.json())
app.use(express.static('public'))
app.use(helmet())
app.use('/api/products', ProductRouter)
app.use('/api/login', LoginRouter)
app.use('/api/logup', LogupRouter)

console.log(app.get('env'))
console.log(process.env.NODE_ENV)


app.listen(3000, ()=>{
    console.log('Hello i am Dr.game which listening to port 3000')    
})
