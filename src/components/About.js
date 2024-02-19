//import User from "./User";
import { Component } from "react";
//import { render } from "react-dom";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount(){
    console.log("Parent component Did Mount");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div className="p-10">
        <h1> This is about page</h1>
        <h2> Welcome to my project</h2>
        {/* If you want to pass data through functional component */}
        {/* <User name={"watchya(function based)"} /> */}

        <UserClass name={"watchya(classbased)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1> This is about page</h1>
//       <h2> Welcome to my project</h2>

//       {/* If you want to pass data through functional component */}
//       {/* <User name={"watchya(function based)"} /> */}

//       <UserClass name={"watchya(classbased)"} />
//     </div>
//   );
// };

export default About;
