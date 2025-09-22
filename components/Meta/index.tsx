import Head from "next/head";


const siteMeta = {
  title: "Web Store Fully Functional",
  description: "A fully functional fictitious online store built with Next.js, Prisma, and SQLite.",
  author: "Luis Viegas",
  url: "https://www.example.com",
  image: "/default-og-image.png",
  themeColor: "#1a202c",
};

type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Meta({ title, description, image, url }: MetaProps) {
  const metaTitle = title || siteMeta.title;
  const metaDescription = description || siteMeta.description;
  const metaImage = image || siteMeta.image;
  const metaUrl = url || siteMeta.url;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={siteMeta.author} />
      <meta name="theme-color" content={siteMeta.themeColor} />

      {/* Open Graph / Social */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  );
}
