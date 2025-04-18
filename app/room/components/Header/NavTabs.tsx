"use client";
import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";

const NavTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const links = [{ label: "Rooms", href: "#" }];

  return (
    <ul className={`flex space-x-6 items-center mb-4`}>
      {links.map((link, i) => (
        <li
          key={link.href}
          className={classnames({
            "border-b-[var(--accent-9)]": selectedTab === i,
            "border-b-4 border-transparent pb-2 h-10": true,
          })}
        >
          <Link
            className={classnames({
              "text-2xl font-bold text-[var(--accent-9)] transition-all": true,
              "text-secondary font-normal text-xl": selectedTab !== i,
            })}
            href={link.href}
            onClick={() => setSelectedTab(i)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavTabs;
