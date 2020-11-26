import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarPersona from '../../../assets/img/png/no-avatar.png';

import './ReviewCourses.scss';

export default function ReviewCourses() {
    return (
        <Row className='reviews-courses'>            
            <Col lg={4} />
            <Col lg={16} className='reviews-courses__title'>
                <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</h2>
            </Col>
            <Col lg={4} />            
           
            <Col lg={4} />
            <Col lg={16}>
                <Row className='row-cards'>
                    <Col md={8}>
                        <CardReview name='Mauricio De Oliveira' subtitle='Programador web' avatar={AvatarPersona} review='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
                    </Col>
                    <Col md={8}>
                        <CardReview name='Juan Pérez' subtitle='Programador web' avatar={AvatarPersona} review='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
                    </Col>
                    <Col md={8}>
                        <CardReview name='María Fernández' subtitle='Programador web' avatar={AvatarPersona} review='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />           
        </Row>
    );
}

function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className='reviews-courses__card'>
            <p>{review}</p>
            <Meta avatar={<Avatar src={avatar} />} title={name} description={subtitle} />
        </Card>
    );
}