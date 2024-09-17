import s from './SharedLayout.module.scss';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.content}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
