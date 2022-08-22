const fs=require("fs")
const operation = process.argv[2]


if(operation === "read_file"){
 console.log( fs.readFileSync("./data.txt", 'utf-8'))
}
   
    
if(operation === "append_data"){
    fs.appendFile("data.txt",`${process.argv[3]}`,(err)=>{
        console.log("Data can not be updated")
    })
}
if(operation === "create"){
    
}
if(operation === "delete"){
    
}
if(operation === "rename"){
    
}
if(operation === "list"){
    
}