import SignUp from "../components/SignUp";

import Login from "../components/Login";

const LoginSignUp = ({ serverUrl, setUser }) => {
  return (
    <main className="login-signup container">
      <div>
        <h2>S'inscrire</h2>
        <p>Crée-toi un compte !</p>
        <SignUp serverUrl={serverUrl} setUser={setUser} />
      </div>
      <div>
        <h2>Se connecter</h2>
        <p>Si tu as déjà un compte, connecte-toi ici !</p>
        <Login serverUrl={serverUrl} setUser={setUser} />
      </div>
    </main>
  );
};

export default LoginSignUp;
