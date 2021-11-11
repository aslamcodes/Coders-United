import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/Authentication/AuthContext";
import { useAxios } from "../hooks/useAxios";

export const SendMessageForm = () => {
  const { isLoading, fetchData: fetch, error } = useAxios();
  const [message, setMessage] = useState("");
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("");

  const { user } = useAuthContext();

  useEffect(() => {
    const applyChannels = (channels) => {
      setChannels(channels);
    };
    fetch(
      {
        url: "/channels",
        headers: {
          Authorization: "Bearer " + user.token,
        },
      },
      applyChannels
    );
  }, [fetch]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/channels",
        { message, channelId: selectedChannel },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onMessageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSelectedChannelChangeHandler = (e) => {
    setSelectedChannel(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Send a message to the Server</h1>
      <label htmlFor="message">Your Message</label>
      <input
        id="message"
        type="text"
        placeholder="Wassup? Bois"
        value={message}
        onChange={onMessageChangeHandler}
      />
      <label htmlFor="channel">Select the channel</label>
      <select id="channel" onChange={onSelectedChannelChangeHandler}>
        {channels.map(({ id, name }, idx) => {
          return (
            <option key={`id-${id}${name}${idx}`} value={id}>
              {name}
            </option>
          );
        })}
      </select>
      <button type="submit">Send Message</button>
    </form>
  );
};
