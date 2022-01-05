import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useStyles } from './HomeButtons.styles';

function HomeButtons({ children, route }) {
  const { homeBtn } = useStyles();

  return (
    <div>
      <Button variant="outlined" size="large" className={homeBtn}>
        <Link href={route ? route : '/contact-us'}>{children}</Link>
      </Button>
    </div>
  );
}

export default HomeButtons;
