import React, { Component } from "react";
import "./App.css";
import Editor from "./Editor";
import { Dir, readTextFile, writeFile } from "@tauri-apps/api/fs";
import SendToTauri from "../api/SendToTauri";
import { Layout, Menu, Card } from "antd";
import DirectoryBar from "./DirectoryBar";
import MDFileBar from "./MDFilesBar";
import LoginForm from "./LoginForm";

const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    console.log("constructor called.");
    super(props);
    this.state = {
      loggedIn: -1, //-1 means haven't read the config file yet, 0 means file doesn't exist, 1 means read successfully
      directories: [],
      currentMdFileList: [],
      currentOpening: [],
      currentActive: {},
    };
  }

  componentDidMount() {
    readTextFile(".GitMDConfig", { dir: Dir.Config })
      .then(this.ParseConfig)
      .catch(this.CreateConfigFile);
  }

  CreateConfigFile = (reason) => {
    console.log("create file" + reason);
    writeFile({ path: ".GitMDConfig", contents: "" }, { dir: Dir.Config }).then(
      this.ParseConfig
    );
  };

  ParseConfig = (configString) => {
    if (configString === null) {
      console.log("empty config");
      this.setState({ loggedIn: 0 });
    } else {
      const configJson = JSON.parse(configString);
      this.setState({
        loggedIn: 1,
        directories: configJson["directories"],
      });

      SendToTauri(
        "credential",
        configJson["username"] + " " + configJson["credential"]
      );
    }
  };

  handleDirectoryClick = () => {
     console.log("Directory Clicked");
  }

  render() {
      if (this.state['loggedIn'] === 0){
          return (<Layout>
              <Header className="header">
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" />
              </Header>
              <Content
                  className="site-layout-background"
                  style={{
                      padding: 20,
                      margin: 50,
                      minHeight: 350
                  }}
              >
                <Card title="Login" style={{ width: 600, margin: "auto"}}>
                  <LoginForm />
                </Card>
              </Content>
          </Layout>)
      }
      else if (this.state['loggedIn'] === 1){
          return (
              <Layout>
                  <Header className="header">
                      <div className="logo"/>
                      <Menu theme="dark" mode="horizontal"/>
                  </Header>
                  <Layout>
                      <Sider width={150} className="site-layout-background">
                          { /* this sider is for displaying all directories */}
                          <DirectoryBar/>
                      </Sider>
                      <Layout style={{padding: "0 4px 4px"}}>
                          <Sider width={150} className="site-layout-background">
                              {/* this sider is for displaying all MD files under current selected directory */}
                              <MDFileBar/>
                          </Sider>
                          <Layout style={{padding: "0 4px 4px"}}>
                              <Content
                                  className="site-layout-background"
                                  style={{
                                      padding: 12,
                                      margin: 0,
                                      minHeight: 280,
                                  }}
                              >
                                  <Menu mode="horizontal">
                                      <Menu.Item>file1</Menu.Item>
                                      <Menu.Item>file2</Menu.Item>
                                  </Menu>
                                  <Editor/>
                              </Content>
                          </Layout>
                      </Layout>
                  </Layout>
              </Layout>
          );
      }
      else {
          return (<Layout />);
      }
  }
}

export default App;
