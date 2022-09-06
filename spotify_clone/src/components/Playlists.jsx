import axios from "axios";
import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  console.log(token, "token");
  // console.log(dispatch, "dispatch");
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists ",
        // "https://api.spotify.com/v1/me/playlists?type=track%2Cepisode ",
        // "https://api.spotify.com/v1/playlists/2zTLZozGdmOkoxVhCVfDKJ?type=track%2Cepisode&market=from_token",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      // console.log(response);
      // console.log(items);
    };
    getPlaylistData();
  }, [token, dispatch]);
  return <div>Playlists</div>;
}
