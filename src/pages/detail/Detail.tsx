import styles from "./styles/Detail.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
import CrateStats from "./CrateStats";
import Bookmark from "./Bookmark";
import Insure from "./Insure";
import Fylo from "./Fylo";
import NpChatBot from "./NpChatbot"

const Detail = (): JSX.Element => {
  let { id } = useParams();

  useEffect(() => {
    document.title = "MCB Portfolio | Project Details";
  }, []);

  return (
    <main className={styles.main}>
      {id === "cratestats" && <CrateStats />}
      {id === "bookmark" && <Bookmark />}
      {id === "insure" && <Insure />}
      {id === "fylo" && <Fylo />}
      {id === "npchatbot" && <NpChatBot />}
      <SectionThree />
    </main>
  );
}

export default Detail