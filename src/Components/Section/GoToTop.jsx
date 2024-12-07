import { useEffect } from "react";
import { Link as LinkTo } from "react-scroll";

function GoToTop() {
  return (
    <LinkTo
      to="home"
      className="go-top"
      data-go-top
      spy={true}
      smooth={true}
      duration={1100}
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </LinkTo>
  );
}

export default GoToTop;
