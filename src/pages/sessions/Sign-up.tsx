import React from 'react';

import { Button, Form, Input, Switch } from 'antd';

import PublicLayout from '../../layout/public/Public';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { useNavigateHome } from '../../utils/use-navigate-home';

const { Item } = Form;

const SignUp = () => {
  const navigateHome = useNavigateHome();
  const [form] = useForm();

  const signUp = () => {
    form
      .validateFields()
      .then(() => navigateHome())
      .catch(() => null);
  };

  return (
    <PublicLayout bgImg={`${window.origin}/content/register-page.jpg`}>
      <h4 className='mt-0 mb-1'>Registro</h4>
      <p className='text-color-200'>Crea tu cuenta</p>

      <Form form={form} layout='vertical' className='mb-5'>
        <Item name='name' rules={[{ required: true, message: <></> }]}>
          <Input placeholder='Nombre' />
        </Item>

        <Item
          name='email'
          rules={[
            { required: true, message: <></> },
            { type: 'email', message: <></> }
          ]}
        >
          <Input placeholder='Direccion Email' type='mail' />
        </Item>

        <Item name='password' rules={[{ required: true, message: <></> }]}>
          <Input placeholder='Password' type='password' />
        </Item>

        <div className='d-flex align-items-center mb-4'>
          <Switch defaultChecked /> <span className='ml-2'>Yo estoy de acuerdo con los terminos de uso y privacidad.</span>
        </div>

        <Button
          type='primary'
          onClick={signUp}
          icon={<span className='icofont icofont-plus mr-2' style={{ fontSize: '1.2rem' }} />}
        >
          Registrar
        </Button>
      </Form>

      <p>
        ¿Tienes una cuenta? <Link to='sign-in'>Iniciar Sesion!</Link>
      </p>
    </PublicLayout>
  );
};

export default SignUp;
