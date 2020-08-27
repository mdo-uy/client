import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import { Layout } from 'antd';
import MenuTop from '../component/Admin/MenuTop';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <Layout className="layout-admin">
                <Header className="layout-admin__header">   
                    <MenuTop/>                 
                </Header>
                <Content className="layout-admin__content">
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className="layout-admin__footer">Mauricio De Oliveira</Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes(props) {
    const { routes } = props;

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );     
}