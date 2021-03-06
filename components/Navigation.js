import Link from 'next/link'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;


export default (props) => {
    const [menuItem, setMenuItem] = useState(props.itemSelected);

    return(
        <div style={ {   display: 'flex', flexDirection:"row", justifyContent: "center"}}>
        
        <Menu onClick={(menuItem)=>{setMenuItem(menuItem)}} selectedKeys={[menuItem]} mode="horizontal">
        <Menu.Item key="home" icon={<MailOutlined />}>
            <Link href="/"><a href="/">Home</a></Link>
        </Menu.Item>
        <Menu.Item key="posts"  icon={<AppstoreOutlined />}>
        <Link href="/posts"><a href="/posts">Posts</a></Link>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Catagories">
        <Menu.ItemGroup title="Jewelery">
            <Menu.Item key="setting:1">Necklaces</Menu.Item>
            <Menu.Item key="setting:2">Bracelets</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Food">
            <Menu.Item key="setting:3">Yummy</Menu.Item>
            <Menu.Item key="setting:4">Tasty</Menu.Item>
        </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
           Vendors
        </a>
        </Menu.Item>
    </Menu>
    </div>
  )
}