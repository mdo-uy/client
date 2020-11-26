import React from 'react';
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, KeyOutlined, MessageOutlined } from '@ant-design/icons';
 
import './HomeMyCoursesWork.scss';

export default function HomeMyCoursesWork() {
    return (
        <Row className='how-my-courses-work'>
            <Col lg={24} className='how-my-courses-work__title'>
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </Col>

            <Col lg={4} />
            <Col lg={16}>
                <Row className='row-cards'>
                    <Col md={8}>
                        <CardInfo icon={<ClockCircleOutlined />} title='Cursos y Clases' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
                    </Col>

                    <Col md={8}>
                        <CardInfo icon={<KeyOutlined />} title='Acceso 24/7' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
                    </Col>

                    <Col md={8}>
                        <CardInfo icon={<MessageOutlined />} title='Aprendizaje colaborativo' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {
    const { icon, title, description } = props;
    const { Meta } = Card;

    return (
        <Card className='how-my-courses-work__card'>
            {icon}
            <Meta title={title} description={description} />
        </Card>
    );
}