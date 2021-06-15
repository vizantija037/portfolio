import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Home from "./components/home";
import Footer from "./components/footer";
import Project1 from "./components/project1";
import Project2 from "./components/project2";
import Project3 from "./components/project3";
import Project4 from "./components/project4";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects/project1" exact component={Project1} />
          <Route path="/projects/project2" exact component={Project2} />
          <Route path="/projects/project3" exact component={Project3} />
          <Route path="/projects/project4" exact component={Project4} />
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
