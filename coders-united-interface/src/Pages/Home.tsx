import { Link } from "react-router-dom";
import { Card } from "../Components/Helpers/Card";
import styles from "./Home.module.css";

const HOMEPAGECARDS = [
  // { href: "admin/send-message", title: "Send a message", isProtected: true },
  // {
  //   href: "admin/send-embed",
  //   title: "Embeds",
  //   image: "/icons/embed.svg",
  //   desc: "Send embeds to the server",
  // },
  {
    href: "contribute",
    title: "Contribute",
    image: "/icons/contribute.svg",
    desc: "Send articles and stuffs useful to the communities",
  },
  {
    href: "stats",
    title: "Stats",
    image: "/icons/stats.svg",
    desc: "See how the server is going, trend and informations",
  },
];

export const Home = () => {
  return (
    <div className={styles.cards}>
      {HOMEPAGECARDS.map(({ href, title, image, desc }) => (
        <Link key={href} to={href}>
          <Card title={title} icon={image} desc={desc} />
        </Link>
      ))}
    </div>
  );
};
