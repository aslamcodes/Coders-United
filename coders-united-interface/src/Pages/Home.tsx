import { Link } from "react-router-dom";
import { Card } from "../Components/Helpers/Card";
import { Cards } from "../Components/Helpers/Cards";

const HOMEPAGECARDS = [
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
    desc: "See how the server is going, trend and information",
  },
];

export const Home = () => {
  return (
    <Cards>
      {HOMEPAGECARDS.map(({ href, title, image, desc }) => (
        <Link key={href} to={href}>
          <Card title={title} icon={image} desc={desc} />
        </Link>
      ))}
    </Cards>
  );
};
