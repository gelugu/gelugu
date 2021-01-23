import React from "react"
import {Switch, Route} from "react-router-dom"

import CV from "./pages/cv/Cv";
import Projects from "./pages/projects/Projects";
// import Contacts from "./contacts/Contacts";
// import Blog from "./blog/Blog";
import {Auth} from "./pages/auth/Auth";

export const Routes = () => {
  
  return (
    <Switch>
      <Route path="/" component={CV} exact/>
      <Route path="/gelugu" component={CV}/>
      <Route path="/projects" component={Projects} />
      {/* <Route path="/contacts" component={Contacts} /> */}
      {/* <Route path="/blog" component={Blog} /> */}
      <Route path="/auth" component={Auth} />
    </Switch>
  )
}