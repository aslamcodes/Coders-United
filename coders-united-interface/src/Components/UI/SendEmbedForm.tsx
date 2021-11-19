import React, { useState, useReducer } from "react";
import { useAuthContext } from "../../Context/Authentication/AuthContext";
import useAxiosWithCallback from "../../hooks/useAxiosWithCallback";
import useChannels from "../../hooks/useChannels";
import { getOptionsFor } from "../../utils/utils";
import { Button } from "./Button";
import Form from "./Form";

const embedInitialState = {
  title: "",
  description: "",
  url: "",
  file: "",
  authorName: "",
  authorUrl: "",
  contentText: "",
};

const embedReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_URL":
      return { ...state, url: action.payload };
    case "SET_AUTHOR_NAME":
      return { ...state, authorName: action.payload };
    case "SET_AUTHOR_URL":
      return { ...state, authorUrl: action.payload };
    case "SET_CONTENT_TEXT":
      return { ...state, contentText: action.payload };
    case "SET_FILE":
      return { ...state, file: action.payload };
    default:
      break;
  }
};

export const SendEmbedForm = () => {
  const [embedItems, dispatch] = useReducer(embedReducer, embedInitialState);
  const { fetchData: sendEmbed } = useAxiosWithCallback();
  const { channels } = useChannels();
  const [selectedChannel, setSelectedChannel] = useState();
  const { user } = useAuthContext();

  const onSelectedChannelChangeHandler = ({ value }) => {
    setSelectedChannel(value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "embed",
      JSON.stringify({
        title: embedItems.title,
        description: embedItems.description,
        url: embedItems.url,
        authorName: embedItems.authorName,
        authorUrl: embedItems.authorUrl,
        contentText: embedItems.contentText,
      })
    );
    formData.append("file", embedItems.file);
    formData.append("channelId", selectedChannel);
    await sendEmbed({
      method: "POST",
      url: "/channels/embed",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + user.token,
      },
      data: formData,
    });
  };

  const onSelectedFileChangeHandler = (e) => {
    dispatch({ type: "SET_FILE", payload: e.target.files[0] });
  };
  const onTitleChangeHandler = (e) => {
    dispatch({ type: "SET_TITLE", payload: e.target.value });
  };
  const onDescriptionChangeHandler = (e) => {
    dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
  };

  const onAuthorNameChangeHandler = (e) => {
    dispatch({ type: "SET_AUTHOR_NAME", payload: e.target.value });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group>
        <Form.Title>Send a Embed to channel</Form.Title>
        <Form.Label>Select a channel</Form.Label>
        <Form.Select
          options={getOptionsFor(channels)}
          onChange={onSelectedChannelChangeHandler}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Color</Form.Label>
        <Form.ColorInput />
      </Form.Group>

      <Form.Group>
        <Form.FileSelect
          title={embedItems.file?.name || "Upload image"}
          onChange={onSelectedFileChangeHandler}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Author name</Form.Label>
        <Form.Input
          type="text"
          onChange={onAuthorNameChangeHandler}
          placeholder="Author name"
          value={embedItems.authorName}
        />

        <Form.Group>
          <Form.Label>Title text</Form.Label>
          <Form.Input
            onChange={onTitleChangeHandler}
            placeholder="Title text"
            value={embedItems.title}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content text</Form.Label>
          <Form.TextArea
            name="embed-content-text"
            onChange={onDescriptionChangeHandler}
            value={embedItems.description}
          ></Form.TextArea>
        </Form.Group>
      </Form.Group>
      <Form.Group>
        <Button type="submit">Send an embed</Button>
      </Form.Group>
    </Form>
  );
};
