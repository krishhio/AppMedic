import React from 'react';

import { Button } from 'antd';
import { HomeFilled } from '@ant-design/icons/lib';

import BaseErrorPage from './BaseErrorPage';
import { useNavigateHome } from '../../utils/use-navigate-home';

const InternalError = () => {
  const navigateHome = useNavigateHome();

  return (
    <BaseErrorPage
      subTitle={
        <h6 className='text-md text-center'>Oopps. Parece que ha existido un error!</h6>
      }
      msg='The server encountered an internal server error and was unable to complete your request.'
      bg={`${window.origin}/content/500-page.jpg`}
      action={
        <Button
          type='primary'
          onClick={navigateHome}
          style={{ width: 'auto' }}
          icon={<HomeFilled className='ml-0 mr-2' style={{ fontSize: '1em' }} />}
        >
          Regresa a pagina Principal
        </Button>
      }
      title={
        <h1 style={{ fontSize: '6rem' }} className='text-color-300 text-center mb-2'>
          <i className='icofont-exclamation-tringle  color-error mr-2' style={{ opacity: 0.5 }} />
          500
        </h1>
      }
    />
  );
};

export default InternalError;
