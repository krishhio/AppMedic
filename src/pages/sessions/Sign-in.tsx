import React from 'react';

import { Button, Form, Input, Switch } from 'antd';
import { LoginOutlined } from '@ant-design/icons/lib';

import PublicLayout from '../../layout/public/Public';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { useNavigateHome } from '../../utils/use-navigate-home';

const { Item } = Form;

const SignIn = () => {
  const [form] = useForm();
  const navigateHome = useNavigateHome();

  const login = () => {
    form
      .validateFields()
      .then(() => navigateHome())
      .catch(() => null);
  };

  return (
    <PublicLayout bgImg={`${window.origin}/content/login-page.jpg`}>
      <h4 className='mt-0 mb-1'>Iniciar Sesion</h4>

      <p className='text-color-200'>Ingresa con tu cuenta</p>

      <Form form={form} layout='horizontal' className='mb-4'>
        <Item name='login' rules={[{ required: true, message: <></> }]}>
          <Input placeholder='Login' />
        </Item>
        <Item name='password' rules={[{ required: true, message: <></> }]}>
          <Input placeholder='Password' type='password' />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-2'>Recuerdame</span>
        </div>

        <Button
          block={false}
          type='primary'
          onClick={login}
          htmlType='submit'
          icon={<LoginOutlined style={{ fontSize: '1.3rem' }} />}
        >
          Iniciar Sesion
        </Button>
      </Form>
      <br />
      <p className='mb-1'>
        <a href='#'>¿Olvidaste tu Contraseña?</a>
      </p>

      <p>
        ¿Tienes una cuenta?<Link to='sign-up'>Registrate!</Link>
      </p>
    </PublicLayout>
  );
};

export default SignIn;
