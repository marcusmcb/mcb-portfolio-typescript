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

const RemixArkive = (): JSX.Element => {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="RemixArkive"
      description={
        <>
        RemixArkive description
        </>
      }
      keywords={["Live Streaming", "Web Scraping", "Data Analytics"]}
      technologies={["Node", "TMI.js", "Twitch", "Serato"]}
      background={<>
        RemixArkive background
      </>}
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next='remixarkive'
      previous="bookmark"
    />
  );
};

export default RemixArkive;