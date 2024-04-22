import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getTutorialSlideDataList } from "../../reference-data/tutorial-slides";

interface Props {
  isMobile: boolean;
}

const OnBoardTutorial = ({ isMobile }: Props) => {
  const sourceImagePrefix = isMobile
    ? "assets/images/slides/mobile/"
    : "assets/images/slides/extension/";

  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      showThumbs={false}
      showStatus={false}
    >
      {getTutorialSlideDataList(false).map((slide, index) => {
        return (
          <div
            className="card-slide"
            key={`tutorial-slide-${slide.title}-${index}.png`}
          >
            <div className="image-container">
              <img
                src={`${sourceImagePrefix}${index + 1}.png`}
                alt={`${sourceImagePrefix}${index + 1}.png`}
                className="image"
              />
            </div>
            <div className="content">
              <div className="title slide-top-container">{slide.title}</div>
              <div className="slide-bottom-container">
                {slide.subTitle && <div className="text">{slide.subTitle}</div>}
                {slide.description && (
                  <div className={"text"}>{slide.description}</div>
                )}
                {slide.paragraphs &&
                  slide.paragraphs.map((p, i) => {
                    return (
                      <div
                        className={`text ${
                          i === slide.paragraphs!.length - 1
                            ? "empty-space"
                            : ""
                        }`}
                        key={`paragraph-${index}-${i}`}
                      >
                        {p}
                      </div>
                    );
                  })}
                {slide.list && (
                  <ul>
                    {slide.list.map((listItem, listItemIndex) => {
                      return (
                        <li
                          className="text"
                          key={`list-item-${index}-${listItemIndex}`}
                        >
                          {listItem}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {slide.finalLine && (
                  <div className="text">{slide.finalLine}</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );

  //TODO bellow cleanup
  // return (
  //   <div className="main-card-container">
  //     <div className="main-image">
  //       <img
  //         src={isMobile ? mobileImageSrc : extensionImageSrc}
  //         alt={isMobile ? "onboarding_mobile.png" : "onboarding_extension.png"}
  //         className="main-onboarding-image"
  //       />
  //     </div>
  //     <Carousel
  //       showArrows={true}
  //       showIndicators={true}
  //       showThumbs={false}
  //       showStatus={false}
  //     >
  //       {getTutorialSlideDataList(false).map((slide, index) => {
  //         return (
  //           <div
  //             className="carousel-item"
  //             key={`tutorial-slide-${slide.title}-${index}`}
  //           >
  //             <div className="title slide-top-container">{slide.title}</div>
  //             <div className="slide-bottom-container">
  //               {slide.subTitle && <div className="text">{slide.subTitle}</div>}
  //               {slide.description && (
  //                 <div className={"text"}>{slide.description}</div>
  //               )}
  //               {slide.paragraphs &&
  //                 slide.paragraphs.map((p, i) => {
  //                   return (
  //                     <div
  //                       className={`text ${
  //                         i === slide.paragraphs!.length - 1
  //                           ? "empty-space"
  //                           : ""
  //                       }`}
  //                       key={`paragraph-${index}-${i}`}
  //                     >
  //                       {p}
  //                     </div>
  //                   );
  //                 })}
  //               {slide.list && (
  //                 <ul>
  //                   {slide.list.map((listItem, listItemIndex) => {
  //                     return (
  //                       <li
  //                         className="text"
  //                         key={`list-item-${index}-${listItemIndex}`}
  //                       >
  //                         {listItem}
  //                       </li>
  //                     );
  //                   })}
  //                 </ul>
  //               )}
  //               {slide.finalLine && (
  //                 <div className="text">{slide.finalLine}</div>
  //               )}
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </Carousel>
  //   </div>
  // );
};

export const OnBoardTutorialComponent = OnBoardTutorial;
