const mongoose=require('mongoose');

const DBconnect=()=>mongoose.connect(process.env.URL).then((conn)=>{
    console.log(`Data base connected ${conn.connection.host}`)
});

module.exports=DBconnect;