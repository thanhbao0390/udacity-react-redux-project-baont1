import { Link, } from "react-router-dom";
import Header from "./Header";

export default function ErrorPage() {

  return (
    <div id="error-page">
      <Header title='404 Page' />
      <div>
        <h1>404 Not Available</h1>
      </div>
    </div>
  );
}