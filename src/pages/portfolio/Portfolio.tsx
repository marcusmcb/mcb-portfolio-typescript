import styles from "./styles/Portfolio.module.css";
import { useEffect } from "react";
import SectionThree from "../homepage/SectionThree";
import Project from "./Project";

import manageMobil from "../../images/portfolio/crate_stats_01.png";
import manageTablet from "../../images/portfolio/crate_stats_01.png";
import manageDesktop from "../../images/portfolio/crate_stats_01.png";

import bookmarkMobil from "../../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import bookmarkTablet from "../../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import bookmarkDesktop from "../../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

import fyloMobil from "../../images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import fyloTablet from "../../images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import fyloDesktop from "../../images/portfolio/desktop/image-portfolio-fylo@2x.jpg";

import remixarkiveMobile from "../../images/portfolio/remix_arkive_screenshot.png";
import remixarkiveTablet from "../../images/portfolio/remix_arkive_screenshot.png";
import remixarkiveDesktop from "../../images/portfolio/remix_arkive_screenshot.png";

import jsp1Mobile from "../../images/portfolio/jsp1/jsp1.png";
import jsp1Tablet from "../../images/portfolio/jsp1/jsp1.png";
import jsp1Desktop from "../../images/portfolio/jsp1/jsp1.png";

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    document.title = "MCB Portfolio | Projects";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.main}>
      <Project.Right
        title="CrateStats"
        description={
          <>
            CrateStats is a data analytics platform currently in development.
            The goal of this project is to give the DJ community a dedicated
            resource for playlist analysis and performance insight across
            multiple DVS platforms. <br />
            <br />
            Support for Serato, Serato Live Playlists, Traktor, and Rekordbox is
            currently included. Built with React, Material UI, Node, and GCP.
          </>
        }
        screenshots={[manageMobil, manageTablet, manageDesktop]}
        param="cratestats"
      />
      <Project.Left
        title="npChatbot"
        description={
          <>
            This chat-bot adds a set of command features to your Twitch streams
            that allow viewers to interact with your Serato live playlist (via
            web scrape). Features within the bot allow viewers to display the
            current track playing, any previous track played, the total
            number of tracks played so far, along with a "vibe check" which returns a random
            selection from the play history and when it was played.
            <br />
            <br />
            Built with Node, TMI.js, Axios/Cheerio, and Electron.
          </>
        }
        screenshots={[bookmarkMobil, bookmarkTablet, bookmarkDesktop]}
        param="npchatbot"
      />
      <Project.Right
        title="RemixArkive"
        description={
          <>
            RemixArkive is an automated script that uses Twitter to tweet out
            links to rare, unusual, or hard-to-find remixed versions of songs.
            <br />
            <br />
            Built with Node, Heroku, and the Twitter API.
          </>
        }
        screenshots={[remixarkiveMobile, remixarkiveTablet, remixarkiveDesktop]}
        param="remixarkive"
      />
      <Project.Left
        title="Philips Hue Smart Lighting Control"
        description={
          <>
            This is a chat-bot script that integrates with the Twitch platform
            to offer viewers an array of chat commands to control any Hue smart
            lighting devices that the streamer currently has connected. The
            script requires at least one Hue fixture as well the accompanying
            Bridge component and can be configured to run locally or online via
            proxy.
            <br />
            <br />
            Built with Node, TMI.js, and the Phillips-Hue API.
          </>
        }
        screenshots={[fyloMobil, fyloTablet, fyloDesktop]}
        param="hue"
      />
      <Project.Right
        title="JSP-1: Javascript Sample Player"
        description={
          <>
            I watched an excellent{" "}
            <span>
              <a href="https://www.youtube.com/watch?v=VuN8qwZoego" rel="noreferrer" target="blank">
                YouTube
              </a>
            </span>{" "}
            tutorial awhile back on how to build a simple QWERTY drum machine using
            Javascript. I decided to add a few additional sound kits, MIDI
            connectivity, and even velocity sensitivity for added MIDI playability. It's pretty cool.
            <br />
            <br />
            Built with good old vanilla Javascript.
          </>
        }
        screenshots={[jsp1Mobile, jsp1Tablet, jsp1Desktop]}
        param="jsp"
      />
      <Project.Left
        title="Twitch Chat Bot"
        description="
        This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive.
         I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        screenshots={[fyloMobil, fyloTablet, fyloDesktop]}
        param="twitchchatbot"
      />
      <Project.Right
        title="Responsive Components"
        description="
        This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive.
         I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        screenshots={[fyloMobil, fyloTablet, fyloDesktop]}
        param="responsive-components"
      />
      <Project.Left
        title="US Rental Pricing Analysis"
        description="
        This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive.
         I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        screenshots={[fyloMobil, fyloTablet, fyloDesktop]}
        param="rental-analysis"
      />
      <SectionThree />
    </main>
  );
}
