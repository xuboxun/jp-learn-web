import React, { useState } from 'react'
import { Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import classNames from 'classnames'
import Sidenav from './Sidenav'
import styles from './index.module.scss'

const Layout = (props: any) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={styles.layout}>
            <div className={classNames({
                [styles.sideWrapper]: true,
                [styles.sidebarCollasped]: collapsed
            })}>
                <Sidenav collapsed={collapsed} />
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className={styles.contentWrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout