import { faHome, faFilePen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <FontAwesomeIcon
            icon={faHome}
            className="text-red-400 hover:cursor-poiner hover:text-red-200"
            size="lg"
          />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon
            icon={faFilePen}
            className="text-red-400 hover:cursor-poiner hover:text-red-200"
            size="lg"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center w-full">
        <h1 className="mb-43 font-extrabold leading-none tracking-tight text-gray-900  dark:text-white">
          Task <span className="text-blue-600 dark:text-blue-500">Tracker</span>
        </h1>
      </div>
      <div className="flex items-center space-x-5">
        <FontAwesomeIcon
          icon={faUser}
          className="text-red-400 hover:cursor-poiner hover:text-red-200"
          size="lg"
        />
      </div>
    </nav>
  );
};

export default Nav;
