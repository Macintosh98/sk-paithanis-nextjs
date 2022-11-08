import Head from "next/head";
import Header from "components/header";
import { useRouter } from "next/router";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

export default ({
  children,
  title = "Paithani Sarees | Buy Paithani Silk Sarees at best prices - VakratundaSK Paithani & Sarees",
}: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>

        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="description"
          content="Looking for Paithani Sarees online? Onlypaithani.com offers 100% original Paithani Silk Sarees, Yeola Paithani Sarees, 9 Yards Sarees, Bridal Sarees &amp; more!"
        />
        <meta
          property="og:site_name"
          content="vakratunda-sk-paithani-and-saree"
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content="https://vakratunda-sk-paithani-and-saree.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Looking for Paithani Sarees online? Onlypaithani.com offers 100% original Paithani Silk Sarees, Yeola Paithani Sarees, 9 Yards Sarees, Bridal Sarees &amp; more!"
        />
        <meta
          property="og:image"
          content="http://cdn.shopify.com/s/files/1/0308/8495/4252/files/FB_1_1200x630.jpg?v=1613691615"
        />
        <meta
          property="og:image:secure_url"
          content="https://cdn.shopify.com/s/files/1/0308/8495/4252/files/FB_1_1200x630.jpg?v=1613691615"
        />
        <meta name="twitter:site" content="@vakratunda-sk-paithani-and-saree" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Looking for Paithani Sarees online? Onlypaithani.com offers 100% original Paithani Silk Sarees, Yeola Paithani Sarees, 9 Yards Sarees, Bridal Sarees &amp; more!"
        />

        {/* <meta name="google-site-verification" content="57GxWBqXrq2ld7gVCLi1ymZUhy2SRvM-ad1KXYyqOV8"> */}
      </Head>

      <Header />

      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
    </div>
  );
};
