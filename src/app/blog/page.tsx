// import Head from 'next/head';
import {CardsList} from '../../components/BlockCards/CardsList/CardList'

export default function BlogPage() {
  const style = {
    color: 'red',
    fontSize: 20,
  };
  return (
    <>
      <head>
        <title>Трудовые резервы | Блог</title>
        <meta name="title" content="Блог" />
      </head>
      <div>Блог</div>
      <a href="blog/profile" style={style}>
        ссылка на профиль
      </a>
    <CardsList />
    </>
  );
}
