import { useEffect, useState } from "react";
import {
  AnalyticsContainer,
  AnalyticsGrid,
  AnalyticsItem,
  AnalyticsLabel,
  AnalyticsTitle,
  AnalyticsValue,
} from "../styles_by_emotion/analytics.style";
import { AnalyticsType } from "../interface";
import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

// Analytics page
const Analytics = () => {
  // Analytics state
  const [analytics, setAnalytics] = useState<AnalyticsType>({
    allSongs: 0,
    uniqueArtists: 0,
    uniqueAlbums: 0,
    uniqueGenres: 0,
    songsByArtist: [],
    songsByAlbum: [],
    songsByGenre: [],
  })

  // Fetch analytics data
  const fetchAnalytics = async () => {
    try {
      const analyticsInDB = await axios.get(`${VITE_API_URL}/songs/analytics`, { headers: { "x-api-key": VITE_API_KEY } })
      console.log(analyticsInDB);

      setAnalytics(analyticsInDB.data.data.analytics)
    } catch (error) {
      console.log("Error");
    }
  }

  // Hit the analytics API once when page reloaded
  useEffect(() => {
    fetchAnalytics()
  }, [])


  return (
    <AnalyticsContainer>
      <AnalyticsTitle>Analytics</AnalyticsTitle>
      <AnalyticsGrid>
        <AnalyticsItem>
          <AnalyticsLabel>Total Songs</AnalyticsLabel>
          <AnalyticsValue>{analytics.allSongs}</AnalyticsValue>
        </AnalyticsItem>
        <AnalyticsItem>
          <AnalyticsLabel>Total Artists</AnalyticsLabel>
          <AnalyticsValue>{analytics.uniqueArtists}</AnalyticsValue>
        </AnalyticsItem>
        <AnalyticsItem>
          <AnalyticsLabel>Total Albums</AnalyticsLabel>
          <AnalyticsValue>{analytics.uniqueAlbums}</AnalyticsValue>
        </AnalyticsItem>
        <AnalyticsItem>
          <AnalyticsLabel>Total Genres</AnalyticsLabel>
          <AnalyticsValue>{analytics.uniqueGenres}</AnalyticsValue>
        </AnalyticsItem>

        {
          analytics.songsByArtist.map((artistSong) => (
            <AnalyticsItem>
              <p>Songs by artist:</p>
              <AnalyticsLabel>{artistSong.artist}</AnalyticsLabel> <hr></hr>
              <AnalyticsValue>{artistSong.count}</AnalyticsValue>
            </AnalyticsItem>
          ))
        }

        {
          analytics.songsByAlbum.map((albumSong) => (
            <AnalyticsItem>
              <p>Songs by album: </p>
              <AnalyticsLabel>{albumSong.album}</AnalyticsLabel> <hr></hr>
              <AnalyticsValue>{albumSong.count}</AnalyticsValue>
            </AnalyticsItem>
          ))
        }

        {
          analytics.songsByGenre.map((genreSong) => (
            <AnalyticsItem>
              <p>Songs by genre: </p>
              <AnalyticsLabel>{genreSong.genre}</AnalyticsLabel> <hr></hr>
              <AnalyticsValue>{genreSong.count}</AnalyticsValue>
            </AnalyticsItem>
          ))
        }
      </AnalyticsGrid>
    </AnalyticsContainer>
  );
};

export default Analytics;
