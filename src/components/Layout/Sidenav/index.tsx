import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { sidenav } from '../config'

const Sidenav = () => {
    const [collapsed, setCollapsed] = useState(false)

    toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    return (
        <>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
            >
                {
                    sidenav.map(item => {
                        return (
                            <Menu.Item key={item.path} icon={item.icon}>
                                {item.link}
                            </Menu.Item>
                        )
                        // return (
                        //     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        //         <Menu.Item key="5">Option 5</Menu.Item>
                        //         <Menu.Item key="6">Option 6</Menu.Item>
                        //     </SubMenu>
                        // )
                    })
                }
            </Menu>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
        </>
    )
}

export default Sidenav