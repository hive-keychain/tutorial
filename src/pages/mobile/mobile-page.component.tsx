import { OnBoardTutorialComponent } from "../../components/on-board-tutorial/on-board-tutorial-component";
import "./mobile-page.component.scss";

const MobilePage = () => {
  return (
    <div className="mobile-page">
      <OnBoardTutorialComponent isMobile={true} />
    </div>
  );
};

export const MobilePageComponent = MobilePage;
