import AdminPanel from "./AdminPanel";
import CourseLoader from "./CourseLoader";
import LoginStatus from "./LoginStatus";
import LoginToggle from "./LoginToggle";
import Welcome from "./Welcome";

function App(){
  return(
    <>
    {/* <Welcome isLoggedIn={true}/> */}
    {/* <Welcome isLoggedIn={false}/> */}
    {/* <LoginStatus isLoggedIn={true}/> */}
    {/* <LoginStatus isLoggedIn={false}/> */}
    {/* <AdminPanel isAdmin={true}/> */}
    {/* <AdminPanel isAdmin={false}/> */}
    <CourseLoader/>
    <LoginToggle/>
    </>
  )
}

export default App;