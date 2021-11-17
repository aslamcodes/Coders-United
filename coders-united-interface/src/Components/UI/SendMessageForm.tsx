import { useState } from "react";
import { useAuthContext } from "../../Context/Authentication/AuthContext";
import { useAxiosWithCallback } from "../../hooks/useAxiosWithCallback";
import useChannels from "../../hooks/useChannels";
import { Button } from "./Button";
import Form from "./Form";

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

  const channelsOption = channels.map(({ id, name }, idx) => {
    return (
      <Form.Option key={`id-${id}${name}${idx}`} value={id}>
        {name}
      </Form.Option>
    );
  });

  channelsOption.unshift(
    <option value="" disabled selected hidden>
      select food
    </option>
  );

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
        <Form.Select id="channel" onChange={onSelectedChannelChangeHandler}>
          {getChannelOptions(channels)}
        </Form.Select>
      </Form.Group>
      {!sending ? <Button type="submit">Send Message</Button> : <p>Sending</p>}
    </Form>
  );
};

const getChannelOptions = (channels) => {
  const channelsOption = channels.map(({ id, name }, idx) => {
    return (
      <Form.Option key={`id-${id}${name}${idx}`} value={id}>
        {name}
      </Form.Option>
    );
  });
  channelsOption.unshift(
    <option value="" disabled selected hidden>
      select a value
    </option>
  );
  return channelsOption;
};
