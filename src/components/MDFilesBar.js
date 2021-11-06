import React, {Component} from "react";
import {Menu} from "antd";

class MDFileBar extends Component{
    render() {
        return(
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
            >
                <Menu.Item key="1">MDFile1</Menu.Item>
                <Menu.Item key="2">MDFile2</Menu.Item>
                <Menu.Item key="3">MDFile3</Menu.Item>
                <Menu.Item key="4">MDFile4</Menu.Item>
            </Menu>
        )
    }
}

export default MDFileBar;
