const User = (props) => {
   const {name} = props
    //This is functional component
    return <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : Mumbai</h3>
        <h3>Contact : watchya </h3>
    </div>
};
export default User;