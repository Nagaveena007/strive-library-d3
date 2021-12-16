import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav";
import Home from "./components/Home";
import FooterPart from "./components/FooterPart";
import JumbotronPart from "./components/JumbotronPart";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import scifi from "./data/scifi.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <JumbotronPart />
      <WarningSign text="This is a danger alert!" />
      <MyBadge text="Hey I am Badge" color="danger" />
      <SingleBook singlebook={scifi[0]} />
      <Home />

      <FooterPart />
    </div>
  );
}

export default App;
