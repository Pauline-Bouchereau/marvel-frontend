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
      const response = await axios.get(`${serverUrl}/character/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id, serverUrl]);
  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div>
        <h2>{data.name}</h2>
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />
      </div>
      <div>
        <h3>Retrouvez-le dans les comics : </h3>
        {data.comics.map((comic) => {
          console.log(comic);
          return (
            <ComicsInfo key={comic} comicId={comic} serverUrl={serverUrl} />
          );
        })}
      </div>
    </main>
  );
};

export default Character;
