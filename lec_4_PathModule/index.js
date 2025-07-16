import path from 'path'

//join two or more file
// 1- file1.py + file2.java
const fullPath = path.join('/path', 'file1.py','file2.java')
console.log("files joined = ", fullPath);

//it gives working directory
const absolutePth = path.resolve();
console.log("we are currently working on = ", absolutePth);

//extension ,uses-> which type of file want give permission
const extname = path.extname('resume.docs')
console.log("extname = ", extname);
if (extname == '.pdf') {
    console.log("ok");
}else{
    console.log("not supported");
}


