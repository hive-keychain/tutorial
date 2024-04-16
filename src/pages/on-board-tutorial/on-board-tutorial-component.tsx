import { Carousel } from "react-responsive-carousel";
import { tutorialSlideDataList } from "../../reference-data/tutorial-slides";

const OnBoardTutorial = () => {
  return (
    <Carousel
      autoFocus={true}
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className="presentation-mode"
    >
      {tutorialSlideDataList.map((slide, index) => {
        return (
          <div
            className="my-slide primary"
            key={`tutorial-slide-${slide.title}-${index}`}
          >
            <h3>{slide.title}</h3>
            {slide.description && <p>{slide.description}</p>}
            {slide.paragraphs && (
              <div className="paragraph-container">
                {slide.paragraphs.map((p, i) => {
                  return <p key={`paragraph-${index}-${i}`}>{p}</p>;
                })}
              </div>
            )}
            {slide.list && (
              <ul>
                {slide.list.map((listItem, listItemIndex) => {
                  return (
                    <li key={`list-item-${index}-${listItemIndex}`}>
                      {listItem}
                    </li>
                  );
                })}
              </ul>
            )}
            {slide.finalLine && <h4>{slide.finalLine}</h4>}
            {slide.interactive && (
              <div className="interactive-list-container">
                {slide.interactive.map((interactiveItem) => {
                  return (
                    <div
                      className="interactive-item"
                      key={`interactive-item-${interactiveItem.label}`}
                    >
                      <div>
                        <div className="label">{interactiveItem.label}</div>
                        <div className="description">
                          {interactiveItem.description}
                        </div>
                        <button onClick={interactiveItem.keychainAction}>
                          Execute Action
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </Carousel>
  );
};

export const OnBoardTutorialComponent = OnBoardTutorial;
