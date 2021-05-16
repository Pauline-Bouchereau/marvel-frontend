import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ serverUrl, setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationPassword, setValidationPassword] = useState("");
  const [error, setError] = useState(0);
  // error : 0 --> no problem !
  // error : 1 --> missing parameter
  // error : 2 --> password and verification password are different
  // error : 3 --> email already has an account
  // error : 4 --> username already taken
  // error : 5 --> problem with server

  const history = useHistory();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeValidationPassword = (event) => {
    setValidationPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(0);
    try {
      if (username && email && password && validationPassword) {
        if (password === validationPassword) {
          const response = await axios.post(`${serverUrl}/user/signup`, {
            username: username,
            email: email,
            password: password,
          });
          const token = response.data.token;
          const id = response.data._id;
          setUser(token, id);
          history.goBack();
        } else {
          setError(2);
        }
      } else {
        setError(1);
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 409) {
        if (
          error.response.message ===
          "There already is an account with this email."
        ) {
          setError(3);
        } else if (
          error.response.message === "This username is not available"
        ) {
          setError(4);
        } else {
          setError(5);
        }
      } else {
        setError(5);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Ton pseudo</h4>
      <input
        type="text"
        placeholder="Hulk75"
        value={username}
        onChange={handleChangeUsername}
      />

      {error === 4 && (
        <p className="error-message">Désolé, ce pseudo est déjà utilisé !</p>
      )}

      <h4>Ton email</h4>
      <input
        type="email"
        placeholder="bruce.banner@bigandgreen.com"
        value={email}
        onChange={handleChangeEmail}
      />
      {error === 3 && (
        <p className="error-message">
          Il existe déjà un compte avec cet email, tu peux t'y connecter en
          remplissant le formulaire à droite ➡️
        </p>
      )}
      <h4>Ton mot de passe</h4>
      <input
        type="password"
        placeholder="alWaYs-AnGrY"
        value={password}
        onChange={handleChangePassword}
      />
      <h4>Validation de ton mot de passe</h4>
      <input
        type="password"
        placeholder="alWaYs-AnGrY"
        value={validationPassword}
        onChange={handleChangeValidationPassword}
      />

      {error === 1 && (
        <p className="error-message">
          Tu dois remplir tous les champs pour valider ton inscription !
        </p>
      )}

      {error === 2 && (
        <p className="error-message">
          Attention, les 2 mots de passe tapés ne sont pas identiques !
        </p>
      )}
      <input type="submit" value="Inscription" />

      {error === 5 && (
        <p className="error-message">
          Désolé, une erreur est subvenue, réessaie de te ccréer un compte !
        </p>
      )}
    </form>
  );
};

export default Login;
