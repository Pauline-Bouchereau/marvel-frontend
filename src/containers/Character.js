import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import ComicsInfo from "../components/ComicsInfo";

const Character = ({ serverUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${serverUrl}/comics/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id, serverUrl]);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="container character-page">
      <div>
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />
      </div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        {data.comics.length > 1 && <h3>Retrouvez-le dans les comics : </h3>}
        <div>
          {data.comics.map((comicInfo) => {
            return (
              <ComicsInfo
                key={comicInfo._id}
                comicTitle={comicInfo.title}
                comicPicture={comicInfo.thumbnail}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Character;
