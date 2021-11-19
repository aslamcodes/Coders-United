import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../../Context/Authentication/AuthContext";
import useChannels from "../../hooks/useChannels";
import { Button } from "./Button";
import Form from "./Form";
import { getOptionsFor } from "../../utils/utils";
export const SendFile = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [selectedChannel, setSeletedChannel] = useState(null);
  const { channels } = useChannels();

  const { user } = useAuthContext();
  const onFileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const onMessageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSelectedChannelChangeHandler = ({ value }) => {
    setSeletedChannel(value);
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("message", message);
    formData.append("channelId", selectedChannel);
    try {
      await axios.post("/channels/file-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Title>Send a File</Form.Title>
      </Form.Group>
      <Form.Group>
        <Form.Label>Your message</Form.Label>
        <Form.Input value={message} onChange={onMessageChangeHandler} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select a channel</Form.Label>
        <Form.Select
          options={getOptionsFor(channels)}
          onChange={onSelectedChannelChangeHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select a file from your pc</Form.Label>
        <Form.FileSelect
          title={
            file
              ? file?.name.length > 40
                ? file.name.slice(0, 40) + "..."
                : file.name
              : "Upload file"
          }
          onChange={onFileChangeHandler}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Send</Button>
      </Form.Group>
    </Form>
  );
};
