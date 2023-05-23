import ProjectDetail from "./ProjectDetail";

import heroMobile from "../../images/detail/mobile/image-manage-hero@2x.jpg";
import heroTablet from "../../images/detail/tablet/image-manage-hero@2x.jpg";
import heroDesktop from "../../images/detail/desktop/image-manage-hero@2x.jpg";

import previewMobile1 from "../../images/detail/mobile/image-manage-preview-1@2x.jpg";
import previewTablet1 from "../../images/detail/tablet/image-manage-preview-1@2x.jpg";
import previewDesktop1 from "../../images/detail/desktop/image-manage-preview-1@2x.jpg";

import previewMobile2 from "../../images/detail/mobile/image-manage-preview-2@2x.jpg";
import previewTablet2 from "../../images/detail/tablet/image-manage-preview-2@2x.jpg";
import previewDesktop2 from "../../images/detail/desktop/image-manage-preview-2@2x.jpg";

const CrateStats = (): JSX.Element => {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="CrateStats"
      description="
								CrateStats is a data analytics platform currently in development.  The goal is to give the DJ community a dedicated resource for playlist analysis and performance insight.  Built with React, Material UI, Node, and GCP."
      keywords={["Full Stack Development", "Data Analytcs"]}
      technologies={["React", "Node", "Material UI", "Express", "Firebase"]}
      background="
      This project began as a side-project from another you'll find in my portfolio, npChatBot.  As I was collecting my own live playlist data during live-streams, I realized that I could likely do the same with the playlist history data that's collected once a DJ has completed their set.
      
      Currently, the platform has support for export data from Serato, Traktor, and Rekordbox, as well as real-time analytics for Serato via the Live Playlists feature."
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next="bookmark"
      previous="fylo"
    />
  );
};

export default CrateStats;
