import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@component/components/footer";
import Navbar from "@component/components/Navbar";
import Myapp from "./Myapp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxary Hotel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Homepage:: Luxury Hotel</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/new/assets/img/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/new/assets/img/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/new/assets/img/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/new/assets/img/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/new/assets/img/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/new/assets/img/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/new/assets/img/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/new/assets/img/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/new/assets/img/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/new/assets/img/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/new/assets/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/new/assets/img/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/new/assets/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/new/assets/img/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/new/assets/img/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap" rel="stylesheet" />


        <link rel="stylesheet" href="/new/assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/new/assets/css/font-awesome.css" />

        {/* <link rel="stylesheet" href="/new/assets/css/swiper-bundle.min.css"/> */}

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" />
        <link rel="stylesheet" href="/new/assets/css/style.css" />

        <link rel="stylesheet" href="/new/assets/css/responsive.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Myapp children={children} />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN-RY595XViAsgKD5nXRkH3zmtc6iqzjE"
          defer
        ></script>

        <script src="/new/assets/js/jquery.matchHeight-min.js"></script>
        {/* <script src="/new/assets/js/swiper-bundle.min.js"></script> */}
        {/* <script src="/new/assets/js/theia-sticky-sidebar.js"></script> */}
        <script src="/new/assets/js/script.js"></script>


      </body>
    </html>
  );
}
