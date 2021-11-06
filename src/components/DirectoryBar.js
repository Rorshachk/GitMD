import React, {Component} from "react";
import {Menu} from "antd";

class DirectoryBar extends Component{
   render() {
       return(
           <Menu
               mode="inline"
               defaultSelectedKeys={["1"]}
               defaultOpenKeys={["sub1"]}
               style={{ height: "100%", borderRight: 0 }}
           >
               <Menu.Item key="1">directory1</Menu.Item>
               <Menu.Item key="2">directory2</Menu.Item>
               <Menu.Item key="3">directory3</Menu.Item>
               <Menu.Item key="4">directory4</Menu.Item>
           </Menu>
       )
   }
}

export default DirectoryBar;