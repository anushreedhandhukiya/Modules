const fs = require ("fs")
let opr=process.argv[2]
let FileName=process.argv[3]
let data=process.argv[4]

const write =()=>{
    fs.writeFile(FileName,data,(err)=>{
        if(err) throw err
        console.log(`file is created ${FileName} with data : ${data}`);
    })
}

const read =()=>{
    fs.readFile(FileName,"utf-8",(err,data)=>{
        if(err) throw err
        console.log(`file is Read ${FileName} with data : ${data}`);
    })
}
const rename = ()=>{
    let NewName = process.argv[4]
    fs.rename(FileName,NewName,(err)=>{
        if(err)throw err
        console.log(`rename file ${FileName} with data : ${NewName}`);
    })
}

const del =()=>{
    fs.unlink(FileName,(err)=>{
        if(err) throw err
        console.log(`file is deleted ${FileName} with data deleted now`);
    })
}

const append = ()=>{
    fs.appendFile(FileName,data,(err)=>{
        if(err) throw err
        console.log(`Data append to ${FileName}:${data}`);
    })
}

if(opr=="write"){
    write()
}
if(opr=="read"){
    read()
}
if(opr=="rename"){
    rename()
}
if(opr=="remove"){
    del()
}
if(opr=="append"){
    append()
}
else{
    console.log("Please enter the correct operator");
}