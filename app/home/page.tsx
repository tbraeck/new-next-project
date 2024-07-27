'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className='items-center justify-center'>
      <h1>HOME</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/"
        sx={{
          margin: '20px 0',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        HOME
      </Button>
      <Image 
        src='https://img.freepik.com/free-photo/funny-monkey-with-glasses-studio_23-2150844104.jpg' 
        width={500} 
        height={500} 
        alt="Funny Monkey"
      />
    </div>
  );
}
