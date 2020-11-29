import React from 'react';
import { Row, Col } from 'antd';
import { BookOutlined, CodeOutlined, DatabaseOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './NavigationFooter.scss';

export default function NavigationFooter() {
    return (
        <Row className='navigation-footer'>
            <Col md={24}>
                <h3>Navegación</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft />
            </Col>
            <Col md={12}>
                <RenderListRight />
            </Col>
        </Row>
    )
}

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href='#'>
                    <BookOutlined /> Cursos Online
                </a>
            </li>
            <li>
                <Link to='/Contact'>
                    <CodeOutlined /> Desarrollo Web
                </Link>
            </li>
            <li>
                <a href='#'>
                    <DatabaseOutlined /> Base de datos
                </a>
            </li>
            <li>
                <a href='#'>
                    <RightOutlined /> Políticas de privacidad
                </a>
            </li>
        </ul>
    );
}

function RenderListRight() {
    return (
        <ul>
            <li>
                <a href='#'>
                    <BookOutlined /> Cursos Online
                </a>
            </li>
            <li>
                <Link to='/Contact'>
                    <CodeOutlined /> Desarrollo Web
                </Link>
            </li>
            <li>
                <a href='#'>
                    <DatabaseOutlined /> Base de datos
                </a>
            </li>
            <li>
                <a href='#'>
                    <RightOutlined /> Políticas de privacidad
                </a>
            </li>
        </ul>
    );
}