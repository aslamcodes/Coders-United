import React, { useState, useReducer } from "react";
import { useAuthContext } from "../../Context/Authentication/AuthContext";
import { useAxiosWithCallback } from "../../hooks/useAxiosWithCallback";
import useChannels from "../../hooks/useChannels";

const embedInitialState = {
  title: "",
  description: "",
  url: "",
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
    default:
      break;
  }
};

export const SendEmbedForm = () => {
  const {
    isLoading: isFetchLoading,
    error: isErrorInFetching,
    fetchData: sendEmbed,
  } = useAxiosWithCallback();
  const {
    isLoading: isChannelsLoading,
    channels,
    error: isErrorInChannel,
  } = useChannels();
  const [selectedChannel, setSelectedChannel] = useState();
  const { user } = useAuthContext();
  const onSelectedChannelChangeHandler = (e) => {
    setSelectedChannel(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await sendEmbed({
      method: "POST",
      url: "/channels/embed",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      data: {
        embed: {
          title: embedItems.title,
          description: embedItems.description,
          url: embedItems.url,
          authorName: embedItems.authorName,
          authorUrl: embedItems.authorUrl,
          contentText: embedItems.contentText,
        },
        channelId: selectedChannel,
      },
    });
  };

  const [embedItems, dispatch] = useReducer(embedReducer, embedInitialState);

  const onTitleChangeHandler = (e) => {
    dispatch({ type: "SET_TITLE", payload: e.target.value });
  };
  const onDescriptionChangeHandler = (e) => {
    dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
  };
  const onUrlChangeHandler = (e) => {
    dispatch({ type: "SET_URL", payload: e.target.value });
  };
  const onAuthorNameChangeHandler = (e) => {
    dispatch({ type: "SET_AUTHOR_NAME", payload: e.target.value });
  };
  const onAuthorUrlChangeHandler = (e) => {
    dispatch({ type: "SET_AUTHOR_URL", payload: e.target.value });
  };
  const onContentTextChangeHandler = (e) => {
    dispatch({ type: "SET_CONTENT_TEXT", payload: e.target.value });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="embed-box">
        <div className="embed-content">
          <div className="embed-item">
            <h4>POST IN CHANNEL</h4>
            <select id="channel" onChange={onSelectedChannelChangeHandler}>
              {channels.map(({ id, name }, idx) => {
                return (
                  <option key={`id-${id}${name}${idx}`} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="embed-item">
            <h4>DESCRIPTION</h4>
            <input
              type="text"
              onChange={onDescriptionChangeHandler}
              placeholder="insert a short description"
              value={embedItems.description}
            />
          </div>
          <div className="embed-item">
            <h4>EMBED</h4>
            <label htmlFor="color-picker">COLOR:</label>
            <input type="color" id="color-picker" />

            <div className="embed-author">
              <div className="embed-author-item">
                <h6>Author image</h6>
                <input
                  type="file"
                  accept="image/gif, image/jpeg, image/jpg, image/png"
                  style={{ display: "" }}
                />
              </div>
              <div className="embed-author-item">
                <h6>Author name</h6>
                <input
                  type="text"
                  onChange={onAuthorNameChangeHandler}
                  placeholder="Author name"
                  value={embedItems.authorName}
                />
              </div>
              <div className="embed-author-item">
                <h6>Author url</h6>
                <input
                  type="url"
                  onChange={onAuthorUrlChangeHandler}
                  placeholder="Author url"
                  value={embedItems.authorUrl}
                />
              </div>
            </div>

            <div className="embed-title">
              <div className="embed-title-item">
                <h6>Title text</h6>
                <input
                  type="text"
                  onChange={onTitleChangeHandler}
                  placeholder="Title text"
                  value={embedItems.title}
                />
              </div>
              <div className="embed-title-item">
                <h6>Title url</h6>
                <input
                  type="text"
                  onChange={onUrlChangeHandler}
                  placeholder="Title url"
                  value={embedItems.url}
                />
              </div>
              <div className="embed-title-item">
                <h6>Content text</h6>
                <textarea
                  name="embed-content-text"
                  onChange={onContentTextChangeHandler}
                  value={embedItems.contentText}
                ></textarea>
              </div>
            </div>
          </div>

          <button type="submit">Send an embed</button>
        </div>
      </div>
    </form>
  );
};
