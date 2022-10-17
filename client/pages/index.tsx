import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import MainLayout from '../layouts/MainLayout';

const Index = () => {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <div className="center">
          <h1>Welcome</h1>
          <h3>Collection of the best tracks</h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .center {
            margin-top: 110px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
