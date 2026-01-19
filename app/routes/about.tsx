import { Link } from "react-router";
function About() {
  return (
    <div className="flex p-10 flex-col items-center">
        <nav>
          <ul>
            <li className="border border-gray-300 rounded-md pl-2 pr-2">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      <main className="flex-1 p-10">About Page!</main>
    </div>
  );
}
export default About;
