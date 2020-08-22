import React, { useEffect } from "react";
import Context from "./context";
import Loader from "./Loader";
import Header from "./page/Header";
import Body from "./page/Body";
import Footer from "./page/Footer";
import Modal from "./modal/Modal";

class App extends React.Component {
  state = {
    page: 'projects'
  }
  
  updatePage = function (value) {
    this.setState({ page: value });
  };

  render() {
    return (
      <>
        <Header updatePage={this.updatePage.bind(this)} />
        <Body page={this.state.page} />
        {/* <Footer/> */}
      </>
    );
  }
}

export default App;
