// JSX stands for JavaScript XML.
//  It allows you to write HTML-like code inside JavaScript, which React then converts to plain JavaScript.
//JSX Example: const element = <h1>Hello, Deepak!</h1>;

function Header() {
  const name = "Deepak";
  const age = 12;

  return (
    <div>
      <h1>Hello, {name} 👋</h1>
      <p>You are {age} years old.</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

export default Header;




