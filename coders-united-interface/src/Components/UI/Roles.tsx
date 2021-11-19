import React, { useState } from "react";
import { useAuthContext } from "../../Context/Authentication/AuthContext";
import useAxiosWithCallback from "../../hooks/useAxiosWithCallback";
import useChannels from "../../hooks/useChannels";
import useRoles from "../../hooks/useRoles";
import { getOptionsFor } from "../../utils/utils";
import { Button } from "./Button";
import Form from "./Form";

export const Roles = () => {
  const { roles } = useRoles();
  const { channels } = useChannels();
  const { fetchData: sendData } = useAxiosWithCallback();
  const { user } = useAuthContext();
  const [message, setMessage] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState("");
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onRoleSelectHandler = (roles) => {
    setSelectedRoles(roles);
  };

  const onChannelChangeHandler = ({ value }) => {
    setSelectedChannel(value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const messageObject = {
      message,
      channelId: selectedChannel,
      roles: selectedRoles,
    };
    await sendData({
      url: "/channels/role-menu",
      method: "POST",
      data: messageObject,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
    });
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group>
        <Form.Title>Make users receive roles interactively</Form.Title>
      </Form.Group>
      <Form.Group>
        <Form.Label>Select a channel</Form.Label>
        <Form.Select
          onChange={onChannelChangeHandler}
          options={getOptionsFor(channels)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message to display on the channel</Form.Label>
        <Form.TextArea value={message} onChange={messageChangeHandler} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Choose the roles</Form.Label>
        <Form.Select
          options={getOptionsFor(roles)}
          onChange={onRoleSelectHandler}
          isMulti
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Save</Button>
      </Form.Group>
    </Form>
  );
};
