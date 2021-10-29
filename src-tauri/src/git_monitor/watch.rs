use tauri::Manager;
use serde::de::value::StrDeserializer;
use std::io;
use git2;
use std::thread;
use std::time::Duration;

pub struct user_credential{
    name: String,
    auth_token: String
}

fn start(dir:&String, user:&user_credential, local_path:&String, remote_path:&String){
    clone_to_dir(local_path, remote_path);

    loop{
        //Watch the directory
    }
}

fn clone_to_dir(local_path:&String, remote_path:&String) -> Result<String, io::Error>{
    // Do the clone operation here
    // if successful, return local_path + repository_name
   Ok(local_path.clone())
}