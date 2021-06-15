import Header from "./components/header";
import { HashRouter, Switch, Route } from "react-router-dom";
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
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route exact  path="/" >
            <Home/>
            </Route>
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact"  component={Contact} />
          <Route path="/projects/project1"  component={Project1} />
          <Route path="/projects/project2"  component={Project2} />
          <Route path="/projects/project3"  component={Project3} />
          <Route path="/projects/project4"  component={Project4} />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
    
  );
}

export default App;
