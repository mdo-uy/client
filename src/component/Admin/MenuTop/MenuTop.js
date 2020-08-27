import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/logo-white.png';
import './MenuTop.scss';

export default function MenuTop() {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={Logo} alt="Mauricio De Oliveira"/>
                <Button type="link" onClick={()=> console.log('Click!')}>
                    <MenuFoldOutlined />
                </Button>
            </div>
            
            <div className="menu-top__right">
                <Button type="link" onClick={()=> console.log('Desconectado!')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}