import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/Authentication/AuthContext";
import { useAxiosWithCallback } from "../hooks/useAxiosWithCallback";
import useChannels from "../hooks/useChannels";

export const SendMessageForm = () => {
  const { isLoading, channels, error } = useChannels();
  const [message, setMessage] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("");
  const {
    isLoading: sending,
    error: sendError,
    fetchData: sendMessage,
  } = useAxiosWithCallback();
  const { user } = useAuthContext();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendMessage({
      url: "/channels",
      method: "POST",
      data: {
        message,
        channelId: selectedChannel,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
    });
    setMessage("");
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
      {!sending ? <button type="submit">Send Message</button> : <p>Sending</p>}
      {!sendError && <p>Message not sent</p>}
    </form>
  );
};
