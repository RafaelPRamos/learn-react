import { Link, Outlet } from "react-router";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <aside className=" bg-black-100 p-10">
        <nav>
          <ul className=" flex flex-col items-center gap-4">
            <li className="border border-gray-300 rounded-lg pl-2 pr-2"><Link to="/">Home</Link></li>
            <li className="border border-gray-300 rounded-lg pl-2 pr-2"><Link to="/firstComponent">First Component</Link></li>
            <li className="border border-gray-300 rounded-lg pl-2 pr-2"><Link to="/contact">Contact</Link></li>
            <li className="border border-gray-300 rounded-lg pl-2 pr-2"><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10"><Outlet /></main>
    </div>
  );
}