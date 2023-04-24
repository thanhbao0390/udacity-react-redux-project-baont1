import { Link, } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
      </p>
      <div className="qs-btnAdd">
        <Link to={`/home`}>List Question</Link>
      </div>
    </div>
  );
}