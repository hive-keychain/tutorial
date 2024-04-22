import { TutorialSlideItem } from "../interfaces/tutorial.interface";

export const getTutorialSlideDataList = (
  isMobile: boolean
): TutorialSlideItem[] => {
  const savingAPR = 20;
  return [
    {
      title: "What is Keychain?",
      paragraphs: [
        "Keychain is your go-to solution for navigating the Hive ecosystem with ease and security. Whether you're on a computer or on the go with your smartphone, Keychain empowers you to manage your Hive accounts effortlessly without worrying about exposing your private keys. With Keychain, you can transfer tokens, cast votes, and handle a variety of transactions seamlessly.",
        "Simple to use and designed with your safety in mind, Keychain is the perfect companion for anyone looking to make the most out of their Hive experience.",
      ],
    },
    {
      title: "Four keys to broadcast them all!",
      description:
        "Each Hive key has its own purpose in regards of your account security.",
      list: [
        "Switch between accounts.",
        "Check your Voting Power and Resources.",
        "Access and manage your Hive native tokens and Hive Engine tokens.",
        "Discover the Ecosystem, Send, Buy, and Swap tokens. More on this later",
        "Access the Settings Menu in the upper left corner.",
      ],
    },
    {
      title: "HIVE, HBD, and HP",
      subTitle: "What are the differences?",
      description:
        "HIVE and HBD are the native tokens of the Hive blockchain. HIVE can be stored in its liquid form called HIVE, and its vested form called HP. Read on for more information:",
      list: [
        "HIVE: Main token of the Hive blockchain, used for transactions and trades.",
        "HIVE POWER (HP): Vested Hive. Having more HP increases your voting weight, your resource credits and your influence in matters of governance.",
        `HBD (Hive Backed Dollars): Stablecoin pegged to the US dollar, used for stable value transactions. HBD can be locked in savings for a ${savingAPR}}% APR.`,
        "Hive Engine tokens are layer 2 tokens created by third-parties.",
      ],
    },
    {
      title: "Why do I need Voting Mana and Resource Credits?",
      paragraphs: [
        "Voting power (VP) determines how much your vote influences the distribution of rewards on the platform through votes. Voting mana (VM) will decrease when you vote for posts or comments and reduce your VP.",
        "Resource Credits (RC) define the ability to perform actions on the blockchain, such as transferring tokens or publishing.",
        "Both VM and RC are recharged at a rate of 20% per day.",
        "The more your Hive Power increases, the higher your VP gets and the more RC you have.",
      ],
    },
    {
      title: "Fast and feeless transactions with Keychain",
      paragraphs: [
        "Click on the 'Send' button to transfer Hive or HBD. Just fill in the username, the amount, and the memo (optional). If needed, you can also encrypt the memo by clicking on the encryption icon, or start recurrent transfers. All transactions are fast and free on Hive, just make sure you have enough RC to broadcast.",
      ],
      finalLine: "As a reminder, your wallet address is your username.",
    },
    {
      title: "Accessing dApps in the simplest way",
      paragraphs: [
        isMobile
          ? "Explore the Keychain Ecosystem tab, on the brower section of the App, and find your new favorite dApps!"
          : "Explore the Keychain Ecosystem tab, on the bottom left of the extension, and find your new favorite dApps!",
        "Interacting with Hive dApps has never been easier! Simply use the Keychain option within your favorite platform and enter your username. Keychain will ask your confirmation before executing the transaction. For a smoother experience, you can whitelist some operations that do not affect your balance (ie. posting, voting). These will be confirmed automatically.",
      ],
    },
    {
      title: "Swap it all!",
      description:
        "There is no better way to make swaps than with Keychain. In a few clicks you can swap between native Hive tokens and Hive Engine tokens. Instead of making several transactions, sit back and let Keychain take care of it for you. You can follow the progress ont the swap history page.",
    },
    // { // Will add this part later on, it's not ready on the extension yet (new version)
    //   title: "Buy Hive and HBD easily!",
    //   paragraphs: [
    //     isMobile
    //       ? "Buying Hive and HBD through Keychain is super easy. Just head to the Swap button to see all available options, for both HIVE and HBD. Whether you want to buy HIVE with fiat or crypto, Keychain will select the best provider available at the moment and will give you a swap estimation. You can also find the different exchanges available to buy and sell HIVE and HBD in this page."
    //       : "Buying Hive and HBD through Keychain is super easy. Just head to the Buy tab to see all available options, for both HIVE and HBD.  Whether you want to buy HIVE with fiat or crypto, Keychain will select the best provider available at the moment and will give you a swap estimation. You can also find the different exchanges available to buy and sell HIVE and HBD in this page.",
    //   ],
    // },
  ];
};
