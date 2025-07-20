//Ternary Operator (Inside JSX)
function LoginStatus({ isLoggedIn }) {
  return (
    <h2 className="text-xl">
      {isLoggedIn ? "✅ You are logged in" : "❌ You are not logged in"}
    </h2>
  );
}

export default LoginStatus;