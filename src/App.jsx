
import Header from "./component/Header.jsx";
import Portafolio from "./component/Portafolio.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
   <div className="container-fluid">
      <div className="row vh-100">

        <Header />       {/* col-2 */}
        <Portafolio />   {/* col-10 */}

      </div>
    </div>
    </>
  );
}

export default App;
