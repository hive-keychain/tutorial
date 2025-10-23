import { Client } from "@hiveio/dhive";
import { TFunction } from "i18next";
import { TutorialSlideItem } from "../interfaces/tutorial.interface";
export const getTutorialSlideDataList = async (
  t: TFunction<"translation", undefined>,
  isMobile: boolean
): Promise<TutorialSlideItem[]> => {
  const client = new Client([
    "https://api.hive.blog",
    "https://api.deathwing.me",
  ]);
  const savingAPR =
    (await client.database.getDynamicGlobalProperties()).hbd_interest_rate /
    100;
  return [
    {
      title: t("introduction.title"),
      paragraphs: [t("introduction.text_1"), t("introduction.text_2")],
    },
    {
      title: t("keys.title"),
      description: t("keys.description"),
      list: [
        t("keys.text_1"),
        t("keys.text_2"),
        t("keys.text_3"),
        t("keys.text_4"),
      ],
      finalLine: t("keys.text_5"),
    },
    {
      title: t("security.title"),
      description: t("security.description"),
    },
    {
      title: t("main_interface.title"),
      description: t("main_interface.description"),
      list: [
        t("main_interface.text_1"),
        t("main_interface.text_2"),
        t("main_interface.text_3"),
        t("main_interface.text_4"),
        t("main_interface.text_5"),
      ],
    },
    {
      title: t("hive_mative_tokens.title"),
      subTitle: t("hive_mative_tokens.subtitle"),
      description: t("hive_mative_tokens.description"),
      list: [
        t("hive_mative_tokens.text_1"),
        t("hive_mative_tokens.text_2"),
        t("hive_mative_tokens.text_3", { savingAPR: savingAPR }),
        t("hive_mative_tokens.text_4"),
      ],
    },
    {
      title: t("mana_and_rc.title"),
      paragraphs: [
        t("mana_and_rc.text_1"),
        t("mana_and_rc.text_2"),
        t("mana_and_rc.text_3"),
        t("mana_and_rc.text_4"),
      ],
    },
    {
      title: t("transactions.title"),
      description: t("transactions.description"),
      finalLine: t("transactions.text_1"),
    },
    {
      title: t("dapps.title"),
      paragraphs: [
        isMobile ? t("dapps.mobile.text_1") : t("dapps.extension.text_1"),
        t("dapps.text_2"),
      ],
    },
    {
      title: t("swaps.title"),
      description: t("swaps.description"),
    },
    // TODO Will add this part later on, it's not ready on the extension yet (new version)
    // {
    //   title: t("buy.title"),
    //   description: isMobile
    //     ? t("buy.mobile.description")
    //     : t("buy.extension.description"),
    // },
  ];
};
