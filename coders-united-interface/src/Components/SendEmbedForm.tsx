import React, { useState } from "react";
import { useAuthContext } from "../Context/Authentication/AuthContext";
import { useAxiosWithCallback } from "../hooks/useAxiosWithCallback";
import useChannels from "../hooks/useChannels";

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
    console.log(e.target.value);
    setSelectedChannel(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await sendEmbed({
      method: "PUT",
      url: "/channels/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      data: {
        embed: {},
        channelId: selectedChannel,
      },
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <button type="submit">Send an embed</button>
      <select id="channel" onChange={onSelectedChannelChangeHandler}>
        {channels.map(({ id, name }, idx) => {
          return (
            <option key={`id-${id}${name}${idx}`} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
