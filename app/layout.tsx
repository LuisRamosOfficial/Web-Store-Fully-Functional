import Meta from "../components/Meta";
import "../styles/global.scss";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
