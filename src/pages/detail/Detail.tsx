import styles from "./styles/Detail.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
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
      {id === "cratestats" && <CrateStats />}
      {id === "npchatbot" && <NpChatBot />}
      {id === 'remixarkive' && <RemixArkive/>}
      {id === 'hue' && <Hue/>}      
      {id === 'JSP1' && <Jsp1/>}
      {id === 'twitchbot' && <TwitchBot/>}
      {id === 'rentstudy' && <RentStudy/>}
      {id === 'responsiveelements' && <ResponsiveElements/>}
      <SectionThree />
    </main>
  );
}

export default Detail