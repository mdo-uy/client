import React, { useState } from 'react';
import { Route, Switch, Redirect }  from 'react-router-dom';
import { Layout } from 'antd';
import useAuth from '../hooks/useAuth';
import MenuTop from '../component/Admin/MenuTop';
import MenuSider from '../component/Admin/MenuSider';
import AdminSignIn from '../pages/Admin/SignIn';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    // Hooks
    const { user, isLoading } = useAuth();


    if(!user && !isLoading) {
        return(
            <>
                <Route path="/admin/login" component={AdminSignIn} />
                <Redirect to="/admin/login"/>
            </>
        );
    }

    if(user && !isLoading){  
        return (
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed}/>
                <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
                    <Header className="layout-admin__header">   
                        <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>                 
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer className="layout-admin__footer">Mauricio De Oliveira</Footer>
                </Layout>
            </Layout>
        );
    }

    return null;
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