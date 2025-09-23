import Layout from "@/components/layout";
import Meta from "../components/Meta";
import "../styles/global.scss";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        <Layout>

        {children}
        </Layout>
      </body>
    </html>
  );
}
