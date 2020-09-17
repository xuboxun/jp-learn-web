import React, { FC, useState } from 'react'
import { Button, Tooltip } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import classNames from 'classnames'
import { sidenav } from '../config'
import styles from './index.module.scss'

interface IProps {
}

const Sidenav: FC<IProps> = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames({
            [styles.sideNav]: true,
            [styles.sideCollapsed]: collapsed
        })}>
            <ul className={styles.navList}>
                {
                    sidenav.map(nav => {
                        if (collapsed) {
                            return (
                                <Tooltip placement="right" title={nav.title}>
                                    {nav.icon}
                                </Tooltip>
                            )
                        }
                        return (
                            <a href={nav.path}>
                                <li className={styles.navItem}>{nav.title}</li>
                            </a>
                        )
                    })
                }
            </ul>
            <Button type="text" onClick={toggleCollapsed} style={{ color: '#fff', marginLeft: 6 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
        </div>
    )
}

export default Sidenav