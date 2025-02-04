import React from "react";

export default function Sponsorships() {
  // const sponsorshipTypes = [
  //   {
  //     title: "Title Sponsorship",
  //     media: [
  //       "Your brand as the “Presented By:” sponsor - included in all PR if locked by mid December",
  //       "Biggest logo on all event branding including poster, website, video promos, highlights, and show graphics",
  //       "Your brand mentioned and tagged within fighter announcement videos and social media posts.",
  //     ],
  //     event: [
  //       "Arena Branding: Corner Posts, Ring Mat (surface), Ringside Banners, Digital Arena Banners",
  //       "Emcee Announcements Throughout the Event, start/end, between every round",
  //       "10 Ringside Seats",
  //       "Logo Printed on Ticket",
  //     ],
  //   },
  //   {
  //     title: "Silver Sponsorship",
  //     media: [
  //       "Your brand as an event sponsor",
  //       "Medium size logo on all event branding posted by creators, including poster, website, video promos, and show graphics",
  //     ],
  //     event: [
  //       "Arena Branding: Ringside Banners, Digital Arena Banners",
  //       "6 Emcee Announcements Throughout the Event",
  //       "5 Ringside Seats",
  //     ],
  //   },
  //   {
  //     title: "Other brand engagement opportunities",
  //     other: [
  //       "Arena VIP Lounge",
  //       "Press Conference and Welcome Party",
  //       "After Party/Media Day",
  //       "Custom Packages Available",
  //     ],
  //   },
  // ];
  return (
    <div className="sponsorships-bg">
      <div className="sponsorships">
        <h2>Sponsorship Opportunities</h2>
        <p>
          10 Detik Membuat Pertandingan, 10 Menit Bertarung, Lorong, Hutan,
          Menghancurkan Tower, Pertarungan Tim, Semua Kesenangan It.
        </p>
        {/* {sponsorshipTypes.map((type) => {
          return (
            <div key={type.title} className="sponsorships-border">
              <h4>{type.title}</h4>
              <div className="sponsorships-info">
                {type.media && (
                  <div className="media">
                    <h5>Media</h5>
                    <ul>
                      {type.media.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </div>
                )}
                {type.event && (
                  <div className="event">
                    <h5>Event</h5>
                    <ul>
                      {type.event.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </div>
                )}
                {type.other && (
                  <div className="other">
                    <ul>
                      {type.other.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
