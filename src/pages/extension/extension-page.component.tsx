import { useState } from "react";
import { OnBoardTutorialComponent } from "../../components/on-board-tutorial/on-board-tutorial-component";
import { Theme, ThemeContext } from "../../theme.context";
import "./extension-page.component.scss";

const ExtensionPage = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const toggleTheme = () => {
    setTheme((oldTheme) => {
      return oldTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={`theme ${theme}`}>
        <div className="extension-page">
          <OnBoardTutorialComponent isMobile={false} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export const ExtensionPageComponent = ExtensionPage;
