import styles from "./styles/Detail.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
import CrateStats from "./CrateStats";
import RemixArkive from "./RemixArikive";
import Hue from "./Hue";

import NpChatBot from "./NpChatbot"

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

      <SectionThree />
    </main>
  );
}

export default Detail