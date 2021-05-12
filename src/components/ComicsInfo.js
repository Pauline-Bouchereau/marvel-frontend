import axios from "axios";
import { useState, useEffect } from "react";

import Loading from "../components/Loading";

const ComicsInfo = ({ key, serverUrl }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  console.log(key);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${serverUrl}/comic/5fce13f978edeb0017c92dd4`
      );
      setData(response.data);
      //console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [serverUrl, key]);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      {/* <h4>{data.title}</h4>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={data.title}
      /> */}
    </div>
  );
};

export default ComicsInfo;
