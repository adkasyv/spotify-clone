import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider(); //госуд-й провайдер
  // ниже вызов API
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artists) => artists.name),
          image: item.album.images[2].url,
        };
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentlyPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentlyPlaying.image} alt="currentlyPlaying" />
          </div>
          <div className="track__info">
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.joun(", ")}</h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: #181818;
  height: 100%;
  width: 100%;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
