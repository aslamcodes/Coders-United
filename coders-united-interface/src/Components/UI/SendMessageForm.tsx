import { useState } from "react";

import { useAuthContext } from "../../Context/Authentication/AuthContext";
import useAxiosWithCallback from "../../hooks/useAxiosWithCallback";
import useChannels from "../../hooks/useChannels";
import { Alert } from "../Helpers/Alert";
import { Container } from "../Helpers/Container";

import { Loader } from "../Helpers/Spinners";
import { Button } from "./Button";
import Form from "./Form";

export const SendMessageForm = () => {
  const { isLoading, channels, error: channelError } = useChannels();
  const {
    isLoading: sending,
    error: sendError,
    fetchData: sendMessage,
  } = useAxiosWithCallback();
  const { user } = useAuthContext();

  const [message, setMessage] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("");

  if (channelError) {
    return <Alert variant="error" message="Something went wrong" />;
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

  const onSelectedChannelChangeHandler = ({ value }) => {
    setSelectedChannel(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>Send a message</Form.Title>
      <Form.Group>
        <Form.Label htmlFor="message">Your Message</Form.Label>
        <Form.Input
          id="message"
          type="text"
          placeholder="Wassup? Bois"
          value={message}
          onChange={onMessageChangeHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="channel">Select the channel</Form.Label>
        <Form.Select
          options={getChannelOptions(channels)}
          onChange={onSelectedChannelChangeHandler}
        />
      </Form.Group>
      {
        <Button type="submit" disabled={sending || isLoading} enableLoading>
          Send
        </Button>
      }
    </Form>
  );
};

export const getChannelOptions = (channels) =>
  channels.map(({ id, name }) => {
    return { value: id, label: name };
  });
