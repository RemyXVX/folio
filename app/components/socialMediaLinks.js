import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-8">
      <Link href="https://github.com/RemyXVX" passHref>
        <span className="transition-transform transform hover:scale-110">
          <FaGithub className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100" />
        </span>
      </Link>
      <Link href="https://www.linkedin.com/in/remyflores/" passHref>
        <span className="transition-transform transform hover:scale-110">
          <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100" />
        </span>
      </Link>
      <Link href="https://www.instagram.com/moonxfloww/" passHref>
        <span className="transition-transform transform hover:scale-110">
          <FaInstagram className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100" />
        </span>
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
