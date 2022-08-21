const app = require('./server')

require('./server')
const port = app.get('port')


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})