import Image from "next/image";
import vhs from "../public/assets/vhs-texture.png"
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css";

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
