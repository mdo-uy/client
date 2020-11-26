import React from 'react'
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import reactJsHooks from '../../../assets/img/jpg/react-js-hooks.jpg';
import reactNative from '../../../assets/img/jpg/react-native.jpg';
import javascript from '../../../assets/img/jpg/javascript-es6.jpg';
import wordpress from '../../../assets/img/jpg/wordpress.jpg';
import prestaShop from '../../../assets/img/jpg/prestashop-1-7.jpg';
import cssGrid from '../../../assets/img/jpg/css-grid.jpg';

import './HomeCourses.scss';

export default function HomeCourses() {
    return (
        <Row className='home-courses'>
            <Col lg={24} className='home-courses__title'>
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className='row-courses'>
                    <Col md={6}>
                        <CardCourse image={reactJsHooks} title='React JS Hooks' subtitle='Intermedio - React/Javascript' link='https:test1.com'/>
                    </Col>
                    <Col md={6}>
                        <CardCourse image={reactNative} title='React Native' subtitle='Intermedio - React/Javascript' link='https:test2.com'/>
                    </Col>
                    <Col md={6}>
                        <CardCourse image={javascript} title='Javascript' subtitle='Avanzado - Javascript' link='https:test3.com'/>
                    </Col>
                    <Col md={6}>
                        <CardCourse image={wordpress} title='Wordpress' subtitle='Principiante - PHP' link='https:test4.com'/>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />

            <Col lg={24} className='home-courses__more'>
                <Link to='/courses'>
                    <Button>Ver más</Button>
                </Link>
            </Col>
        </Row>
        
    );
}


function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <Card className='home-courses__card' cover={<img src={image} alt={title} />} actions={[<Button>Ingresar</Button>]}>
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    );
}