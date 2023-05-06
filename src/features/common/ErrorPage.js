import { Link, } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div id="error-page">
      <div>
        <h1>404 Not Available</h1>
      </div>
      <div className="qs-btnAdd">
        <Link to={`/home`}>List Question</Link>
      </div>
    </div>
  );
}