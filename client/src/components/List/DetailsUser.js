import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetUserById } from "../../actions/service";

const url = "https://localhost:44376/user/user/ById/";

const DetailsUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    GetUserById(url, id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <>{user ? <p>Exist</p> : <p>Not exist</p>}</>;
};

export default DetailsUser;
