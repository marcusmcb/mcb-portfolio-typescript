import { useEffect } from "react";
import ContactMe from "./ContactMe";
import GetInTouch from "./GetInTouch";

const Contact = (): JSX.Element => {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Contact Me";
  }, []);
  return (
    <main>
      <GetInTouch />
      <ContactMe />
    </main>
  );
}

export default Contact