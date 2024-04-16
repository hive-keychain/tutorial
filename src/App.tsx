import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { WelcomeAvatarComponent } from "./components/avatar.component";
import { OnBoardTutorialComponent } from "./pages/on-board-tutorial/on-board-tutorial-component";

interface UserSession {
  username: string;
  token: string;
}

const App = () => {
  const [optionSelected, setOptionSelected] = useState(0);
  const [userSession, setUserSession] = useState<UserSession>({
    username: "theghost1980",
    token: "11199-1111-2222-1111",
  });

  return (
    <div className={`tutorial-page`}>
      <WelcomeAvatarComponent
        type={optionSelected === 0 ? "main" : "floating"}
        username={userSession.username}
        src={`https://images.hive.blog/u/${userSession.username}/avatar`}
      />
      {optionSelected === 0 && (
        <div className="option-buttons-container">
          <div className="option-label">Please select an option</div>
          <div className="buttons-container">
            <button
              className="button-action"
              onClick={() => setOptionSelected(1)}
            >
              Start All over
            </button>
            <button
              className="button-action"
              onClick={() => setOptionSelected(2)}
            >
              Last Checkpoint
            </button>
            <button
              className="button-action"
              onClick={() => setOptionSelected(3)}
            >
              Get Random Lesson
            </button>
          </div>
        </div>
      )}
      {optionSelected === 1 && <OnBoardTutorialComponent />}
    </div>
  );
};

export const AppComponent = App;
