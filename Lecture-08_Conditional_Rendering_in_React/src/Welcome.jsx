//What is Conditional Rendering?
//React lets you display content based on conditions, using:

// if statements

// Ternary operators (condition ? true : false)

// && (logical AND)





function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back, user! 🎉</h2>;
  } else {
    return <h2>Please sign in to continue 🔐</h2>;
  }
}

export default Welcome;
