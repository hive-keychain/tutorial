import { TFunction } from "i18next";
import { TutorialSlideItem } from "../interfaces/tutorial.interface";

export const getTutorialSlideDataList = (
  t: TFunction<"translation", undefined>,
  isMobile: boolean
): TutorialSlideItem[] => {
  const savingAPR = 20;
  return [
    {
      title: t("slide_1_title"),
      paragraphs: [t("slide_1_paragraph_1"), t("slide_1_paragraph_2")],
    },
    {
      title: t("slide_2_title"),
      description: t("slide_2_description"),
      list: [
        t("slide_2_list_1"),
        t("slide_2_list_2"),
        t("slide_2_list_3"),
        t("slide_2_list_4"),
      ],
      finalLine: t("slide_2_final_line"),
    },
    {
      title: t("slide_3_title"),
      description: t("slide_3_description"),
    },
    {
      title: t("slide_4_title"),
      description: t("slide_4_description"),
      list: [
        t("slide_4_list_1"),
        t("slide_4_list_2"),
        t("slide_4_list_3"),
        t("slide_4_list_4"),
        t("slide_4_list_5"),
      ],
    },
    {
      title: t("slide_5_title"),
      subTitle: t("slide_5_subtitle"),
      description: t("slide_5_description"),
      list: [
        t("slide_5_list_1"),
        t("slide_5_list_2"),
        t("slide_5_list_3", { savingAPR: savingAPR }),
        t("slide_5_list_4"),
      ],
    },
    {
      title: t("slide_6_title"),
      paragraphs: [
        t("slide_6_paragraph_1"),
        t("slide_6_paragraph_2"),
        t("slide_6_paragraph_3"),
        t("slide_6_paragraph_4"),
      ],
    },
    {
      title: t("slide_7_title"),
      description: t("slide_7_description"),
      finalLine: t("slide_7_final_line"),
    },
    {
      title: t("slide_8_title"),
      paragraphs: [
        isMobile
          ? t("slide_8_paragraph_1_mobile")
          : t("slide_8_paragraph_1_extension"),
        t("slide_8_paragraph_2"),
      ],
    },
    {
      title: t("slide_9_title"),
      description: t("slide_9_description"),
    },
    // TODO Will add this part later on, it's not ready on the extension yet (new version)
    // {
    //   title: t("slide_10_title"),
    //   description: isMobile
    //     ? t("slide_10_description_mobile")
    //     : t("slide_10_description_extension"),
    // },
  ];
};
