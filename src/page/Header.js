import React from "react";
import './page.css'

class Header extends React.Component {
  state = {currentPage: 'projects'}

  onPageClick(value) {
    this.props.updatePage(value)
    this.setState({currentPage: value})
  }

  render() {
    return (
      <header className="header">
        <nav className="nav-bar">
          <button className={this.state.currentPage === 'cv' ? "tab active-tab" : "tab"}
            onClick={this.onPageClick.bind(this, 'cv')}>CV</button>
          <button className={this.state.currentPage === 'projects' ? "tab active-tab" : "tab"}
            onClick={this.onPageClick.bind(this, 'projects')}>projects</button>
          <button className={this.state.currentPage === 'contscts' ? "tab active-tab" : "tab"}
            onClick={this.onPageClick.bind(this, 'contacts')}>contacts</button>
        </nav>
      </header>
    );
  }
}

export default Header;
