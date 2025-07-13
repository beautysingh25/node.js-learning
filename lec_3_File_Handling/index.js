import {readFile, writeFile, appendFile, mkdir, readdir} from 'fs/promises'

// Read file

const readFileContent = async (filepath) => {
    try {
        const data = await readFile(filepath, 'utf-8')
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

await readFileContent('Sample.txt')

//create file
const createfile = async (filepath, content) => {
    await writeFile(filepath, content)
    console.log("file created successfully")
    
}

// await createfile('inheritence.java', 'this is inheritence')
// await createfile('text.py', 'this is inheritence')
// await createfile('text.php', 'this is inheritence')

//append data to file

const appendtoFile = async(filepath, content) => {
    await appendFile(filepath, content)
    console.log("new content added successfully");
    
}

await appendtoFile('Sample.txt', ' This is my new content')

const createDirectory = async (dirPath) => {
    await mkdir(dirPath,{recursive:true})
}

await createDirectory("javaScript/day1/day2")

// read directory content

const readDir = async(dirPath) => {
    const files = await readdir(dirPath)
    console.log(files);
    
}

await readDir('superman')