import React, { FC, useState } from "react";
import { Button, Tooltip } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { getLocal, setLocal } from '../../../utils/storage'
import { sidenav } from "../config";
import styles from "./index.module.scss";

interface IProps {}

const COLLAPSED_KEY = 'sidebar-collapsed'

const Sidenav: FC<IProps> = () => {
  const initValue = !!getLocal(COLLAPSED_KEY) || false
  const [collapsed, setCollapsed] = useState<boolean>(initValue);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setLocal(COLLAPSED_KEY, !collapsed)
  };

  return (
    <div
      className={classNames({
        [styles.sideNav]: true,
        [styles.sideCollapsed]: collapsed,
      })}
    >
      <div className={styles.logo}>日语练习生</div>
      <ul className={styles.navList}>
        {sidenav.map((nav) => {
          if (collapsed) {
            return (
              <Tooltip placement="right" title={nav.title}>
                <a href={nav.path}><li className={styles.navItem}>{nav.icon}</li></a>
              </Tooltip>
            );
          }
          return (
            <a href={nav.path}>
              <li className={styles.navItem}>{nav.title}</li>
            </a>
          );
        })}
      </ul>
      <div className={styles.collapsed}>
      <Button type="text" onClick={toggleCollapsed} style={{ color: "#fff" }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      </div>
    </div>
  );
};

export default Sidenav;
