import styles from "./styles/Detail.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
import TwitchSafePlaylists from "./TwitchSafePlaylists";
import CrateStats from "./CrateStats";
import RemixArkive from "./RemixArikive";
import Hue from "./Hue";
import Jsp1 from "./Jsp1";
import NpChatBot from "./NpChatbot"
import TwitchBot from "./TwitchBot";
import RentStudy from "./RentStudy";
import ResponsiveElements from "./ResponsiveElements";

const Detail = (): JSX.Element => {
  let { id } = useParams();

  useEffect(() => {
    document.title = "MCB Portfolio | Project Details";
  }, []);

  return (
    <main className={styles.main}>
      {id === "TwitchSafePlaylists" && <TwitchSafePlaylists />}
      {id === "CrateStats" && <CrateStats />}
      {id === "npChatBot" && <NpChatBot />}
      {id === 'RemixArkive' && <RemixArkive/>}
      {id === 'hue' && <Hue/>}      
      {id === 'JSP-1' && <Jsp1/>}
      {id === 'Twitch Bot' && <TwitchBot/>}
      {id === 'Rent Study' && <RentStudy/>}
      {id === 'Responsive Elements' && <ResponsiveElements/>}
      <SectionThree />
    </main>
  );
}

export default Detail