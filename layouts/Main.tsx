import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'VakratundaSK - Paithani & Sarees' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
        <meta name="description" content={title}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={title}/>
        <meta property="og:url" content="https://vakratunda-sk-paithani-and-saree.vercel.app/"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}