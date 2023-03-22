
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./signIn";
import FetchData from "./homepage";
function App() {
  return (
    <div>
      {/* <SignIn/> */}
      {/* <FetchData/> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn/>}/>
        <Route exact path="/homepage" element={<FetchData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




