import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1> This is about page</h1>
      <h2> Welcome to my project</h2>

      {/* If you want to pass data through functional component */}
      <User name={"watchya(function based)"} />

      <UserClass name={"watchya(classbased)"} />
    </div>
  );
};

export default About;
