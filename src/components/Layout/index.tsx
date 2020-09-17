import React from 'react'
import Sidenav from './Sidenav'
import styles from './index.module.scss'

const Layout = (props: any) => {
    return (
        <div className={styles.layout}>
            <div className={styles.sideWrapper}>
                <Sidenav />
            </div>
            <div className={styles.contentWrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout