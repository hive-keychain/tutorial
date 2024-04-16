import { useState } from "react";
import { OnBoardTutorialComponent } from "../../components/on-board-tutorial/on-board-tutorial-component";
import { Theme, ThemeContext } from "../../theme.context";
import "./mobile-page.component.scss";

const MobilePage = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const toggleTheme = () => {
    setTheme((oldTheme) => {
      return oldTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={`theme ${theme}`}>
        <div className="mobile-page">
          <OnBoardTutorialComponent isMobile={true} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export const MobilePageComponent = MobilePage;
