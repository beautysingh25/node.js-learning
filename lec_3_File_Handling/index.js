import {readFile, writeFile, appendFile, mkdir} from 'fs/promises'

const read_file = async (fileName) => {
    const data = await readFile(fileName, "utf-8");
    console.log(data);
    
}

const create_file = async(filename, content)  => {
    await writeFile(filename, content);
    console.log("file created.");
}

const update_file = async (fileNme, content) => {
    await appendFile(fileNme, content);
    console.log("new content added");
}

const create_folder = async(dir) => {
    await mkdir(dir, {recursive:true});
    console.log("folder created");
}

read_file('Sample.txt');
create_file('file.java', "//this is a java file created");
create_file('file.py', "#this is a py file created");
update_file('Sample.txt', "this is new content");
// create_folder("components");
create_folder("src/components/java");
