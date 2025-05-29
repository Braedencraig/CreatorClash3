import SEO from "../components/seo";
import Hero from "../components/hero";
import Matchups from "../components/matchups";
import Charity from "../components/charity";
import Footer from "../components/footer";
import SignUpForm from "../components/sign-up-form";

export default function HomePage() {

  return (
    <>
      <SEO title="Creator Clash" description="Welcome to the official home of Creator Clash!" />
      <div id="hero">
        <Hero />
      </div>
      <div id="matchups">
        <Matchups />
      </div>
      <div id="subscribe">
        <SignUpForm />
      </div>
      {/* <div id="announcers">
        <Announcers />
      </div> */}
      {/* <div id="prices">
        <Prices />
      </div> */}
      <div id="charity">
        <Charity />
      </div>
      <Footer />
    </>
  );
}
