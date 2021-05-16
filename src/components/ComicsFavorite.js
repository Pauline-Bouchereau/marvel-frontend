import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";

const ComicsFavorite = ({ serverUrl, id }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/comic/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [serverUrl]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="comic-card">
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={data.title}
      />
      <h3>{data.title}</h3>
    </div>
  );
};

export default ComicsFavorite;
