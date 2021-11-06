import React, { Component } from 'react';
import './App.css'
import Editor from "./Editor";
import {Dir, readTextFile, writeFile} from "@tauri-apps/api/fs";
import SendToTauri from "../api/SendToTauri"


class App extends Component {
    constructor(props) {
        console.log("constructor called.");
        super(props);
        this.state = {
            loggedIn: -1,       //-1 means haven't read the config file yet, 0 means file doesn't exist, 1 means read successfully
            directories: {},
            mdFileList: [],
            currentOpening: [],
            currentActive: {},
        };
    }

    componentDidMount() {
        readTextFile('.GitMDConfig', {dir: Dir.Config }).then(this.ParseConfig).catch(this.CreateConfigFile);
    }

    CreateConfigFile = (reason) => {
        console.log("create file" + reason);
        writeFile({ path: '.GitMDConfig', contents: ""}, {dir: Dir.Config }).then(this.ParseConfig);
    }


    ParseConfig = (configString) => {
        if(configString === null){
            console.log("empty config");
            this.setState({ loggedIn: 0 });
        } else {
            const configJson = JSON.parse(configString);
            this.setState({
                loggedIn: 1,
                directories: configJson['directories'],
            });

            SendToTauri("credential", configJson["username"] + " " + configJson["credential"]);
        }
    }

  render() {
    return(
        <Editor />
    );
  }
}

export default App;
