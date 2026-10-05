//import json server
const jsonserver = require('json-server')
//create server for running js file
const server=jsonserver.create()
//create set up path or route middlewaree
const route=jsonserver.router('db.json')
//create middlewaree
 const middleware=jsonserver.defaults()
 
 server.use(middleware)
 server.use(route)


 const PORT=3001
 server.listen(PORT,()=>{
    console.log('server started');
    

 })