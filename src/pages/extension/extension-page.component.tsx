import { OnBoardTutorialComponent } from "../../components/on-board-tutorial/on-board-tutorial-component";
import "./extension-page.component.scss";

const ExtensionPage = () => {
  return (
    <div className="extension-page">
      <OnBoardTutorialComponent isMobile={false} />
    </div>
  );
};

export const ExtensionPageComponent = ExtensionPage;
