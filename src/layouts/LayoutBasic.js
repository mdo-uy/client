import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import { Row, Col } from 'antd';
import MenuTop from '../component/Web/MenuTop';
import Footer from '../component/Web/Footer';

import './LayoutBasic.scss';

export default function LayoutBasic(props) {
    const { routes } = props;

    return (
        <>
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <MenuTop />
                </Col>            
                <Col md={4} />
            </Row>
            <LoadRoutes routes={routes} />
            <Footer />
        </>
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