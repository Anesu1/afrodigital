import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { useEffect } from 'react'
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import {setDark} from './redux/darkSlice'
import Footer from "./styled/Footer";
import Header from "./styled/Header";
import {connect, useDispatch} from 'react-redux';
import OneCourse from "./pages/OneCourse";

const mapStateToProps = state => ({
  dark: state.theme.dark
});

function App({dark}) {
  const dispatch = useDispatch()

  useEffect(() => {
    let hour = new Date().getHours();
    if (hour < 6 || hour > 17) {
      dispatch(setDark(true));
    } else {
      dispatch(setDark(false));
    }
    console.log(hour);
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/all-courses" component={Courses} />
        <Route path="/one-course" component={OneCourse} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default connect(mapStateToProps)(App);
