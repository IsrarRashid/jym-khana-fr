"use client";

import { Badge } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";

const NavTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const links = [
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Payment", href: "#" },
    { label: "Appearance", href: "#" },
  ];

  return (
    <ul className={`flex flex-wrap space-x-6 items-center mb-4`}>
      {links.map((link, i) => (
        <li
          key={link.href}
          className={classnames({
            "border-b-[var(--accent-9)]": selectedTab === i,
            "border-b-2 border-transparent h-8 mb-2": true,
          })}
        >
          <Link
            className={classnames({
              "font-bold transition-all": true,
              "text-secondary": selectedTab !== i,
            })}
            href={link.href}
            onClick={() => setSelectedTab(i)}
          >
            {link.label}
            {i === 0 && (
              <Badge
                radius="full"
                className="ms-2 text-[var(--accent-9)] bg-[var(--accent-2)]"
              >
                12
              </Badge>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavTabs;
