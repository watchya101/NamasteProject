import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className=" p-5">
      <h1 className="font-bold text-5xl"> Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
