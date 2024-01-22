// import Head from 'next/head';
'use client';
import {CardsList} from '../../components/BlockCards/CardsList/CardList';
import { blogCards } from '@/utils/constans';
import { useState, useEffect } from 'react';
import  useWindowSize from '../../hooks/useWindowSize';

export default function BlogPage() {
  const style = {
    color: 'red',
    fontSize: 20,
  };

  
  


  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const width = useWindowSize();
  const getMoreBlogs = () => setCount(count + amount);
  const getLimit = () => {
    if (width < 1024) {
      setCount(8);
      // setAmount(AMOUNT_MOBILE);
    // } else if (width < SCREEN_TABLET) {
    //   setCount(CARDS_SCREEN_TABLET);
    //   setAmount(AMOUNT_TABLET);
    // } else if (width < SCREEN_PC) {
    //   setCount(CARDS_SCREEN_TABLETPLUS);
    //   setAmount(AMOUNT_TABLETPLUS);
    } else {
      setCount(1440);
      // setAmount(AMOUNT_PC);
    }
    
  };

  useEffect(() => {
    getLimit();
  }, [getMoreBlogs, width]);



  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
    <CardsList blogCards={blogCards} count={count}/>
    </>
  );
}
