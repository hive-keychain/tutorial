import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navigate } from "react-router-dom";

interface UserSession {
  username: string;
  token: string;
}

const App = () => {
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    Navigate({ to: "mobile" });
  } else {
    Navigate({ to: "extension" });
  }
  return <div className={`tutorial-page`}></div>;
};

export const AppComponent = App;
