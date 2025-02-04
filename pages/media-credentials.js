import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../components/dropdown";
import Footer from "../components/footer";
import chevron from "../public/assets/chevron.png";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import cartBlack from "../public/assets/cartblack.png";
import close from "../public/assets/close.png";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import SEO from "../components/seo";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [open, setOpenDropdown] = useState(false);
  const [launchModal, setLaunchModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbx3US3A_fOvzNVIRlAHS7qOv3wz7cVNBETK-rCHOXQlQbZwtKG0sbY1xqsgclsaWUH0cg/exec";

  const onSubmit = (data) => {
    if (data) {
      const form = document.forms["google-sheet"];
      fetch(scriptUrl, { method: "POST", body: new FormData(form) })
        .then((response) => setSuccess(true))
        .catch((error) => console.error("Error!", error.message));
    }
  };

  function handleCheck(box) {
    const allCheckboxes = Array.from(
      document.querySelectorAll('input[type="radio"]')
    );
    allCheckboxes.forEach((checkbox) => {
      if (checkbox.value !== box.value) {
        checkbox.checked = false;
      }
    });
  }

  const handleMenuOne = () => {
    window.open("https://www.ticketmaster.com/event/0D005E33DAC2E9EC");
  };

  const handleMenuTwo = () => {
    setLaunchModal(true);
  };

  return (
    <>
      <SEO title="Media Credentials | Creator Clash" description = "Request media credentials and access for Creator Clash events." />
      <div
        onClick={() => {
          if (open) {
            setOpenDropdown(false);
          }
        }}
        className={`${styles.mainOtherOther} ${isOpen && styles.overlay}`}
      >
        <Navigation
          open={open}
          setOpenDropdown={setOpenDropdown}
          isOpen={isOpen}
          setOpen={setOpen}
          launchModal={launchModal}
          setLaunchModal={setLaunchModal}
        />
        {isOpen && (
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <div className={styles.center}>
                <ul className={styles.overlayList}>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/#charity" className="pxglow">Donate</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/#matchups" className="pxglow">Matchups</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/faq" className="pxglow">FAQ</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/contact" className="pxglow">Contact</Link>
                  </li>
                  <li onClick={() => setOpen(false)} style={{ margin: "60px 0" }}>
                    <Button href="/#presale" className="pxglow">{"Presale >"}</Button>
                  </li>
                </ul>
                {/* <div className="navigation-tickets-mobile">
                  <Dropdown
                    open={open}
                    setOpenDropdown={setOpenDropdown}
                    trigger={
                      <button>
                        Tickets{" "}
                        <span>
                          <Image src={chevron} alt="navigation chevron" />
                        </span>
                      </button>
                    }
                    menu={[
                      <button key={1} onClick={handleMenuOne}>
                        Event Tickets
                      </button>,
                      <button
                        key={2}
                        className="inverted"
                        onClick={handleMenuTwo}
                      >
                        PPV Tickets
                      </button>,
                    ]}
                  />
                </div> */}
                <div className="mobile-socials">
                  <div className="mobile-socials-container">
                    <a
                      href="https://www.tiktok.com/@creatorclashofficial?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={tiktok} alt="TikTok" />
                    </a>
                    <a
                      href="https://www.instagram.com/thecreatorclash/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={insta} alt="Instagram" />
                    </a>
                    <a
                      href="https://twitter.com/TheCreatorClash?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={twitter} alt="Twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {launchModal && (
          <div className={styles.overlay}>
            <div className={`${styles.overlayContent} ${styles.modalOverlay}`}>
              <div className={styles.center}>
                <div className="warning">
                  <Image
                    onClick={() => {
                      setLaunchModal(false);
                      setOpen(false);
                    }}
                    className="close"
                    src={close}
                    alt="Close modal"
                  />
                  <div className="warning-info">
                    <h3>Heads Up!</h3>
                    <h3>This is not an event ticket</h3>
                    <div className="text">
                      <p className="bold">
                        A PPV ticket is for the livestream only.
                      </p>
                      <p>
                        It does not grant you access to the in-person event.
                      </p>
                      <span>
                        If you would like to attend the event, please purchase
                        an event ticket.
                      </span>
                    </div>
                    <div className="buttons">
                      <button
                        onClick={() => {
                          setLaunchModal(false);
                          window.open(
                            "https://www.moment.co/creatorclash/creatorclash-creator-clash2"
                          );
                        }}
                      >
                        <span>
                          <Image src={cartBlack} alt="shopping cart" />
                        </span>
                        PPV Ticket
                      </button>
                      <a href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC">
                        Actually, I want an event ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hero-sponsorships">
        {/* <h1>Please Fill Out The Form</h1> */}
        {success ? (
          <div>
            <h1>Thank you for your submission!</h1>
          </div>
        ) : (
          <div style={{ maxWidth: "1284px" }}>
            <h1>Please Fill Out The Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} name="google-sheet">
              <div className="top-wrapper">
                <div className="input-flex">
                  <div className="ppv-input">
                    <label htmlFor="name">Name *</label>
                    <input
                      {...register("name", { required: true, maxLength: 100 })}
                    />
                    {errors.name && (
                      <span className="error">Name is required</span>
                    )}
                  </div>
                  <div className="ppv-input">
                    <label htmlFor="title">Title *</label>
                    <input
                      {...register("title", { required: true, maxLength: 100 })}
                    />
                    {errors.title && (
                      <span className="error">Title is required</span>
                    )}
                  </div>
                </div>
                <div className="input-flex">
                  <div className="ppv-input">
                    <label htmlFor="outlet">Outlet *</label>
                    <input
                      {...register("outlet", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.outlet && (
                      <span className="error">Outlet is required</span>
                    )}
                  </div>
                  <div className="ppv-input">
                    <label htmlFor="email">Email *</label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                    />
                    {errors.email && (
                      <span className="error">A valid email is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mid-wrapper">
                <p className="font">
                  Three links to recent articles / coverage / news contributed
                  by you
                </p>
                <div>
                  <div className="ppv-input">
                    <label htmlFor="recent1">Link 1 *</label>
                    <input
                      {...register("recent1", {
                        required: true,
                        maxLength: 200,
                      })}
                    />
                  </div>
                  <div className="ppv-input">
                    <label htmlFor="recent2">Link 2 *</label>
                    <input
                      {...register("recent2", {
                        required: true,
                        maxLength: 200,
                      })}
                    />
                  </div>
                  <div className="ppv-input">
                    <label htmlFor="recent3">Link 3 *</label>
                    <input
                      {...register("recent3", {
                        required: true,
                        maxLength: 200,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-wrap">
                <p className="font">Requesting Media Pass Type</p>
                <div className="chex">
                  <div className="box">
                    <input
                      className="target"
                      onClick={(e) => handleCheck(e.target)}
                      type="radio"
                      name="wi-pc"
                      value="wi-pc"
                      id="wi-pc"
                      defaultChecked={true}
                      {...register("wi-pc")}
                    />
                    <label htmlFor="wi-pc">
                      In-Person Weigh In/Press Conference (April 14th)
                    </label>
                  </div>
                  <div className="box">
                    <input
                      className="target"
                      onClick={(e) => handleCheck(e.target)}
                      type="radio"
                      name="main"
                      id="main"
                      value="main"
                      {...register("main")}
                    />
                    <label htmlFor="main">Event (April 15th)</label>
                  </div>
                  <div className="box">
                    <input
                      className="target"
                      onClick={(e) => handleCheck(e.target)}
                      type="radio"
                      name="wi-pc-main"
                      id="wi-pc-main"
                      value="wi-pc-main"
                      {...register("wi-pc-main")}
                    />
                    <label htmlFor="wi-pc-main">
                      Both In-Person Weigh In/Press Conference & Main Event
                    </label>
                  </div>
                  <div className="box">
                    <input
                      className="target"
                      onClick={(e) => handleCheck(e.target)}
                      type="radio"
                      name="livestream"
                      id="livestream"
                      value="livestream"
                      {...register("livestream")}
                    />
                    <label htmlFor="livestream">
                      Moment House Livestream (Digital Only)
                    </label>
                  </div>
                </div>
              </div>
              <Button type="submit">
                {'Submit >'}
              </Button>
              {/* <input className="submit ticket" type="submit" /> */}
            </form>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
}
