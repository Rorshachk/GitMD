import {emit} from "@tauri-apps/api/event";

function SendToTauri(name, payload){
    emit(name, payload);    //needs to be improved
}

export default SendToTauri;