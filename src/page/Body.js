import React from "react";
import CV from "./content/cv";
import Projects from './content/projects'

class Body extends React.Component {
  switchPage = function() {
    switch (this.props.page) {
      case 'cv':
        console.log('cv')
        return <CV/>
      case 'projects':
        console.log('projects')
        return <Projects/>
      // case 'contacts':
      //   return <Contacts/>
    
      default:
        return <CV/>
    }
  }

  render() {
    return (
      <div className="content">
        
        {this.switchPage()}
        
      </div>
    );
  }
}

export default Body;
