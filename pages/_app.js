import "../styles/globals.css";
import Image from "next/image";
import vhs from "../public/assets/vhs-texture.png"
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
        <Image className="vhs-texture" src={vhs} alt="VHS Texture" priority={true} />
      </div>
    </>
  );
}
