import React, { FC, useState } from 'react'
import { Menu, Button } from 'antd';
import { sidenav } from '../config'

interface IProps {
    collapsed: boolean
}

const Sidenav: FC<IProps> = ({ collapsed }) => {

    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
        >
            {
                sidenav.map(item => {
                    return (
                        <Menu.Item key={item.path} icon={item.icon}>
                            {item.title}
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
    )
}

export default Sidenav