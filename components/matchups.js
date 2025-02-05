import React from "react";
import Image from "next/image";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import youtube from "../public/assets/youtube.png";
import twitter from "../public/assets/twitter.png";
import twitch from "../public/assets/twitch.png";
import mythPic from "../public/assets/cc3-Ali-Kabbani-(Myth).jpg";
import sapnapPic from "../public/assets/cc3-sapnap.jpg";
import spagnolaPic from "../public/assets/cc3-Ali-Spagnola.jpg";
import gingerPalePic from "../public/assets/cc3-gingerpale.jpg";
import wongPic from "../public/assets/cc3-Freddie-Wong.jpg";
import funkyFrogBaitPic from "../public/assets/cc3-FunkyFrogBait.jpg";
import morensteinPic from "../public/assets/cc3-Harley-Morenstein.jpg";
import jaelarayPic from "../public/assets/cc3-Jaelaray.jpg";
import shakooriPic from "../public/assets/cc3-Jago-Shakoori.jpg";
import smg4Pic from "../public/assets/cc3-Kevin-Lerdwichagul-(SMG4).jpg";
import laBeastPic from "../public/assets/cc3-LA-Beast-(Kevin-Strahle).jpg";
import ayadPic from "../public/assets/cc3-Lena-Ayad.jpg";
import barnattPic from "../public/assets/cc3-Nathan-Barnatt.jpg";
import odd1sOutPic from "../public/assets/cc3-TheOdd1sOut-(James-Rallison).jpg";
import seriousPic from "../public/assets/cc3-Trevor-Serious.jpg";
import tubboPic from "../public/assets/cc3-Tubbo.jpg";
import neffPic from "../public/assets/cc3-Will-Neff.jpg";
import weichmanPic from "../public/assets/cc3-Wren-Weichman-(Corridor-Digital).jpg";

export default function Matchups() {
  const matchups = [
    {
      fighter1: {
        name: "LA Beast",
        height: "6' 0\"",
        weight: "200+ LBS",
        img: laBeastPic,
        socials: {
          insta: "https://www.instagram.com/labeast62/",
          youtube: "https://www.youtube.com/user/skippy62able",
          twitter: "https://twitter.com/KevLAbeast",
        },
      },
      fighter2: {
        name: "Harley Morenstein",
        height: "6' 6\"",
        weight: "200+ LBS",
        img: morensteinPic,
        socials: {
          tiktok: "https://www.tiktok.com/@harleyplays",
          insta: "https://www.instagram.com/harleyplays/",
          youtube: "https://www.youtube.com/@epicmealtime",
          twitter: "https://twitter.com/HarleyPlays",
        },
      },
    },
    {
      fighter1: {
        name: "Tubbo",
        height: "5' 6\"",
        weight: "147 LBS",
        img: tubboPic,
        socials: {
          insta: "https://www.instagram.com/tubboLive",
          twitch: "https://www.twitch.tv/tubbo",
          twitter: "https://www.x.com/tubboLive",
          youtube: "https://www.youtube.com/tubboLive",
        },
      },
      fighter2: {
        name: "Sapnap",
        height: "5' 7\"",
        weight: "147 LBS",
        img: sapnapPic,
        socials: {
          insta: "https://www.instagram.com/sapnapinsta",
          twitch: "https://www.twitch.tv/sapnap",
          twitter: "https://www.twitter.com/sapnap",
          youtube: "https://www.youtube.com/sapnap",
        },
      },
    },
    {
      fighter1: {
        name: "Kevin Lerdwichagul",
        height: "6' 0\"",
        weight: "185 LBS",
        img: smg4Pic,
        socials: {
          insta: "https://www.instagram.com/glitch_prod/",
          youtube: "https://www.youtube.com/c/GLITCH",
          twitter: "https://twitter.com/glitch_prod",
        },
      },
      fighter2: {
        name: "Myth",
        height: "6' 0\"",
        weight: "185 LBS",
        img: mythPic,
        socials: {
          tiktok: "https://www.tiktok.com/@myth",
          insta: "https://www.instagram.com/mythig_/",
          twitch: "https://www.twitch.tv/myth",
          youtube: "https://www.youtube.com/@Myth_YT",
          twitter: "https://twitter.com/myth_",
        },
      },
    },

    {
      fighter1: {
        name: "Odd1sOut",
        height: "5' 11\"",
        weight: "175 LBS",
        img: odd1sOutPic,
        socials: {
          tiktok: "https://www.tiktok.com/@theoddtiktoksout",
          insta: "https://www.instagram.com/theodd1sout/",
          youtube: "https://www.youtube.com/c/theodd1sout",
          twitter: "https://twitter.com/theodd1sout",
        },
      },
      fighter2: {
        name: "Will Neff",
        height: "5' 9\"",
        weight: "175 LBS",
        img: neffPic,
        socials: {
          tiktok: "https://www.tiktok.com/@willyneff",
          insta: "https://www.instagram.com/thewillneff/",
          twitch: "https://www.twitch.tv/willneff",
          youtube: "https://www.youtube.com/@WillNeff",
          twitter: "https://twitter.com/thewillneff",
        },
      },
    },
    {
      fighter1: {
        name: "Jaelaray",
        height: "5' 2\"",
        weight: "123 LBS",
        img: jaelarayPic,
        socials: {
          tiktok: "https://www.tiktok.com/@jaelaray",
          insta: "https://www.instagram.com/jaelaray/",
          twitch: "https://www.twitch.tv/jaelaray",
          youtube: "https://www.youtube.com/@jaelaray",
          twitter: "https://x.com/jaelalaray",
        },
      },
      fighter2: {
        name: "Ali Spagnola",
        height: "5' 2\"",
        weight: "123 LBS",
        img: spagnolaPic,
        socials: {
          tiktok: "https://www.tiktok.com/@alispagnola",
          insta: "https://www.instagram.com/alispagnola/",
          youtube: "https://www.youtube.com/user/AliSpagse",
          twitter: "https://twitter.com/alispagnola",
        },
      },
    },
    {
      fighter1: {
        name: "Freddie Wong",
        height: "5' 7\"",
        weight: "175 LBS",
        img: wongPic,
        socials: {
          insta: "https://www.instagram.com/fwong/",
          youtube: "https://www.youtube.com/user/freddiew",
          twitter: "https://twitter.com/fwong",
        },
      },
      fighter2: {
        name: "GingerPale",
        height: "5' 9\"",
        weight: "175 LBS",
        img: gingerPalePic,
        socials: {
          insta: "https://www.instagram.com/thegingerpale/",
          youtube: "https://www.youtube.com/@GingerPale",
          twitter: "https://x.com/GingerPale",
        },
      },
    },
    {
      fighter1: {
        name: "Trevor Evarts",
        height: "6' 4\"",
        weight: "175 LBS",
        img: seriousPic,
        socials: {
          insta: "https://www.instagram.com/trevorevarts/",
          youtube: "https://www.youtube.com/@trevor_evarts",
          twitter: "https://twitter.com/trevorevarts",
        },
      },
      fighter2: {
        name: "Wren (Corridor Digital)",
        height: "6' 2\"",
        weight: "175 LBS",
        img: weichmanPic,
        socials: {
          tiktok: "https://www.tiktok.com/@sirwrender",
          insta: "https://www.instagram.com/sirwrender",
          youtube: "https://www.youtube.com/channel/UCfKs3muLSkJxMLM0A5nscwA",
          twitter: "https://x.com/SirWrender",
        },
      },
    },
    {
      fighter1: {
        name: "Lena Ayad",
        height: "5' 4\"",
        weight: "125 LBS",
        img: ayadPic,
        socials: {
          tiktok: "https://www.tiktok.com/@lena.ayad",
          insta: "https://www.instagram.com/_lenaayad/",
          youtube: "https://www.youtube.com/@lenastarkilla",
          twitter: "https://x.com/LenaAyad_",
        },
      },
      fighter2: {
        name: "FunkyFrogBait",
        height: "5' 4\"",
        weight: "125 LBS",
        img: funkyFrogBaitPic,
        socials: {
          tiktok: "https://www.tiktok.com/@funkyfrogbait",
          insta: "https://www.instagram.com/funkyfrogbait/",
          youtube: "https://www.youtube.com/@funkyfrogbait",
          twitter: "https://twitter.com/funkyfrogbait",
        },
      },
    },
    {
      fighter1: {
        name: "Dad",
        height: "6' 0\"",
        weight: "170 LBS",
        img: barnattPic,
        socials: {
          insta: "https://www.instagram.com/nathanbarnatt/",
          youtube: "https://www.youtube.com/user/nathanjbarnatt",
          twitter: "https://twitter.com/nathanbarnatt",
        },
      },
      fighter2: {
        name: "Jago",
        height: "5' 11\"",
        weight: "170 LBS",
        img: shakooriPic,
        socials: {
          insta: "https://www.instagram.com/jagstermc/",
          youtube: "https://www.youtube.com/@JagoVlogs",
          twitter: "https://x.com/mrjagsters",
        },
      },
    },
  ];

  return (
    <div className="matchups">
      <div className="matchups-container">
        <h2 className="pxglow">Player Matchups</h2>
        <div className="fight-cards mobile">
          {matchups.map((matchup, i) => {
              return (
                <div key={i} className="fight-card-matchup">
                  <div className="fight-card-mobile-images fight-card-matchup-fighter-info">
                    <div className="not-reverse">
                      <Image
                        src={matchup.fighter1.img}
                        // className="border-fighter"
                        alt="Fighter"
                      />
                      <h3 className="pxglow">{matchup.fighter1.name}</h3>
                      <div className="stat pxglow">
                        <p className="blue" style={{ maxWidth: '100%' }}>
                          Height: <strong>{matchup.fighter1.height}</strong>
                          <br/>
                          Fight Weight: <strong>{matchup.fighter1.weight}</strong>
                        </p>
                      </div>
                      <div className="fight-card-matchup-socials">
                        {matchup.fighter1.socials.tiktok && (
                          <a
                            href={matchup.fighter1.socials.tiktok}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={tiktok} alt="tiktok" />
                          </a>
                        )}
                        {matchup.fighter1.socials.insta && (
                          <a
                            href={matchup.fighter1.socials.insta}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={insta} alt="instagram" />
                          </a>
                        )}
                        {matchup.fighter1.socials.twitter && (
                          <a
                            href={matchup.fighter1.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitter} alt="twitter" />
                          </a>
                        )}
                        {matchup.fighter1.socials.youtube && (
                          <a
                            href={matchup.fighter1.socials.youtube}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={youtube} alt="youtube" />
                          </a>
                        )}
                        {matchup.fighter1.socials.twitch && (
                          <a
                            href={matchup.fighter1.socials.twitch}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitch} alt="twitch" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="mobile-vs pxglow">
                      <span>VS</span>
                    </div>
                    <div className="reverse">
                      <Image
                        src={matchup.fighter2.img}
                        alt="Fighter"
                      />
                      <h3 className="reverse-h3 pxglow">{matchup.fighter2.name}</h3>
                      <div className="stat pxglow">
                        <p className="red" style={{ maxWidth: '100%' }}>
                          Height: <strong>{matchup.fighter1.height}</strong>
                          <br/>
                          Fight Weight: <strong>{matchup.fighter1.weight}</strong>
                        </p>
                      </div>
                      <div className="fight-card-matchup-socials">
                        {matchup.fighter2.socials.tiktok && (
                          <a
                            href={matchup.fighter2.socials.tiktok}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={tiktok} alt="tiktok" />
                          </a>
                        )}
                        {matchup.fighter2.socials.insta && (
                          <a
                            href={matchup.fighter2.socials.insta}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={insta} alt="instagram" />
                          </a>
                        )}
                        {matchup.fighter2.socials.twitter && (
                          <a
                            href={matchup.fighter2.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitter} alt="twitter" />
                          </a>
                        )}
                        {matchup.fighter2.socials.youtube && (
                          <a
                            href={matchup.fighter2.socials.youtube}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={youtube} alt="youtube" />
                          </a>
                        )}
                        {matchup.fighter2.socials.twitch && (
                          <a
                            href={matchup.fighter2.socials.twitch}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitch} alt="twitch" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="fight-cards">
          {matchups.map((matchup, i) => {
              return (
                <div key={i} className="fight-card-matchup">
                  <div className="fight-card-matchup-fighter">
                    <div className="fight-card-matchup-fight-image">
                      <Image
                        src={matchup.fighter1.img}
                        // className="border-fighter"
                        alt="Fighter"
                      />
                      <div className="fight-card-matchup-socials">
                        {matchup.fighter1.socials.tiktok && (
                          <a
                            href={matchup.fighter1.socials.tiktok}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={tiktok} alt="tiktok" />
                          </a>
                        )}
                        {matchup.fighter1.socials.insta && (
                          <a
                            href={matchup.fighter1.socials.insta}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={insta} alt="instagram" />
                          </a>
                        )}
                        {matchup.fighter1.socials.twitter && (
                          <a
                            href={matchup.fighter1.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitter} alt="twitter" />
                          </a>
                        )}
                        {matchup.fighter1.socials.youtube && (
                          <a
                            href={matchup.fighter1.socials.youtube}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={youtube} alt="youtube" />
                          </a>
                        )}
                        {matchup.fighter1.socials.twitch && (
                          <a
                            href={matchup.fighter1.socials.twitch}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitch} alt="twitch" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="middle pxglow">
                    <div className="fight-card-matchup-fighter-info pxglow">
                      <h3>{matchup.fighter1.name}</h3>
                      <span>VS</span>
                      <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    </div>
                    <div className="table">
                      <div className="table-row">
                        <p className="blue">{matchup.fighter1.height}</p>
                        <p>Height</p>
                        <p className="red">{matchup.fighter2.height}</p>
                      </div>
                      <div className="table-row">
                        <p className="blue">{matchup.fighter1.weight}</p>
                        <p>Fight Weight</p>
                        <p className="red">{matchup.fighter2.weight}</p>
                      </div>
                    </div>
                  </div>
                  <div className="fight-card-matchup-fighter reverse">
                    <div className="fight-card-matchup-fight-image">
                      <Image
                        src={matchup.fighter2.img}
                        // className="border-fighter"
                        alt="Fighter"
                      />
                      <div className="fight-card-matchup-socials">
                        {matchup.fighter2.socials.tiktok && (
                          <a
                            href={matchup.fighter2.socials.tiktok}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={tiktok} alt="tiktok" />
                          </a>
                        )}
                        {matchup.fighter2.socials.insta && (
                          <a
                            href={matchup.fighter2.socials.insta}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={insta} alt="instagram" />
                          </a>
                        )}
                        {matchup.fighter2.socials.twitter && (
                          <a
                            href={matchup.fighter2.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitter} alt="twitter" />
                          </a>
                        )}
                        {matchup.fighter2.socials.youtube && (
                          <a
                            href={matchup.fighter2.socials.youtube}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={youtube} alt="youtube" />
                          </a>
                        )}
                        {matchup.fighter2.socials.twitch && (
                          <a
                            href={matchup.fighter2.socials.twitch}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={twitch} alt="twitch" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
