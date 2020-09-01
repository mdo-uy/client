import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { emailValidation, minLengthValidation } from '../../../utils/formValidation'

import './RegisterForm.scss';

export default function RegisterForm() {

    const [input, setInput] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });
    
    const changeForm = event => {
        if(event.target.name === 'privacyPolicy') {
            // Checkbox (Privacy policy)
            setInput({
                ...input,
                [event.target.name]: event.target.checked
            });
        }
        else {
            // Inputs text
            setInput({
                ...input,
                [event.target.name]: event.target.value
            });
        }
    }

    const inputValidation = event => {
        const { type, name } = event.target;

        if(type === 'email') {
            setFormValid({  ...formValid, [name]: emailValidation(event.target) });
        }

        if(type === 'password') {
            setFormValid({ ...formValid, [name]: minLengthValidation(event.target, 6) });
        }

        if(type === 'checkbox') {
            setFormValid({ ...formValid, [name]: event.target.checked });
        }
    }

    const register = event => {
        event.preventDefault();

        const emailVal = input.email;
        const passwordVal = input.password;
        const repeatPasswordVal = input.repeatPassword;
        const privacyPolicyVal = input.privacyPolicy;

        if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification['error']({
                message: 'All inputs are required'
            });
        }
        else{
            if(passwordVal != repeatPasswordVal) {
                notification['error']({
                    message: 'The passwords must be the same'
                })
            }
            else {
               // TO-DO: Connect to API
            }
        }
    }


    return (
        <Form className="register-form" onChange={changeForm}  >
            <Form.Item>
                <Input prefix={<MailOutlined style={{color: "rgba(0,0,0,.25)"}} />} type="email" name="email" placeholder="Correo electrónico" className="register-form__input" 
                value={input.email} onChange={inputValidation}>
                </Input>
            </Form.Item>
            <Form.Item>
                <Input prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>} type="password" name="password" placeholder="Contraseña" className="register-form__input" 
                value={input.password} onChange={inputValidation}>
                </Input>
            </Form.Item>
            <Form.Item>
                <Input prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>} type="password" name="repeatPassword" placeholder="Repetir contraseña" className="register-form__input" value={input.repeatPassword} onChange={inputValidation}>
                </Input>
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" className="register-form__checkbox" checked={input.privacyPolicy} onChange={inputValidation}>
                    He leído las políticas de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button" onClick={register}> 
                    Registrarse
                </Button>
            </Form.Item>
        </Form>
    );
}