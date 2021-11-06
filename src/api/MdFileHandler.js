import { writeFile } from '@tauri-apps/api/fs';
import {emit} from "@tauri-apps/api/event";

class MdFileHandler{
    constructor(filePath, fileContent, fileName) {
        this.filePath = filePath;
        this.fileContent = fileContent;
        this.fileName = fileName;
    }

    WriteToFile(){
        writeFile({path: this.filePath, contents: this.fileContent}).then(
            function (){
                emit("fileChange", "").then(
                    () => console.log("successfully emit changes")
                );
            }
        );
    }
}

export default MdFileHandler;