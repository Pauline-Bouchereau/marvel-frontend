import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = ({ serverUrl, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  // error : 0 --> no problem !
  // error : 1 --> unauthorized (wrong email or pwd)
  // error : 2 --> problem with server

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(0);
    try {
      const response = await axios.post(`${serverUrl}/user/login`, {
        email: email,
        password: password,
      });
      const token = response.data.token;
      const id = response.data._id;
      setUser(token, id);
      history.goBack();
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401) {
        setError(1);
      } else {
        setError(2);
      }
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Ton email</h4>
      <input
        type="email"
        placeholder="spiderman@greatpower.com"
        value={email}
        onChange={handleChangeEmail}
      />
      <h4>Ton mot de passe</h4>
      <input
        type="password"
        placeholder="GrEaT_reSpOnsibiLIties"
        value={password}
        onChange={handleChangePassword}
      />
      {error === 1 && (
        <p className="error-message">
          Tu as du te tromper dans ton adresse mail et/ou ton mot de passe !
        </p>
      )}

      <input type="submit" value="Connexion" />
      {error === 2 && (
        <p className="error-message">
          Désolé, une erreur est subvenue, réessaie de te ccréer un compte !
        </p>
      )}
    </form>
  );
};

export default SignUp;
