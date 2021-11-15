import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "../Components/Helpers/Card";
import { Cards } from "../Components/Helpers/Cards";

const ADMINPAGECARDS = [
  {
    href: "/send-message",
    title: "Message",
    image: "/icons/messages.svg",
    desc: "Send a message to a channel in the server",
  },
  {
    href: "/send-embed",
    title: "Embeds",
    image: "/icons/embed.svg",
    desc: "Send embeds to the server",
  },
];
export const Admin = () => {
  const { pathname } = useLocation();

  return (
    <Cards>
      {ADMINPAGECARDS.map(({ href, title, image, desc }) => (
        <Link key={href} to={`${pathname}${href}`}>
          <Card title={title} icon={image} desc={desc} />
        </Link>
      ))}
    </Cards>
  );
};
