import { Navigate } from "react-router-dom";

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
  return <div></div>;
};

export const AppComponent = App;
