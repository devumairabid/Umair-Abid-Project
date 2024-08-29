import {
  FaGithub,
  // FaLinkedin,
  // FaDev,
  // FaQuora,
  // FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Umair Abid. All Rights Reserved.`,
  author: {
    name: "Umair Abid",
    accounts: [
      {
        url: "https://github.com/devumairabid",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      // {
      //   url: "https://twitter.com/muhammad_ahmaad",
      //   label: "Twitter Account",
      //   type: "twitter",
      //   icon: <FaTwitter />
      // },
      // {
      //   url: "https://dev.to/m_ahmad",
      //   label: "Dev Account",
      //   type: "gray",
      //   icon: <FaDev />
      // },
      // {
      //   url: "https://www.linkedin.com/in/mustafa-ali-34b257214/",
      //   label: "LinkedIn Account",
      //   type: "linkedin",
      //   icon: <FaLinkedin />
      // },
      // {
      //   url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:devumairabid01@gmail.com",
        label: "Mail mustafa",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
