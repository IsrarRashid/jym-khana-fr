"use client";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Heading,
  IconButton,
  Text,
  useThemeContext,
} from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="px-5 py-3">
      <Flex align="center" justify="between">
        <Box>
          <Link href="/">
            <Heading wrap="nowrap">Club Smart</Heading>
          </Link>
        </Box>

        <Box className="!hidden lg:!block">
          <NavLinks />
        </Box>
        <Flex gap="2">
          <IconButton radius="full" variant="soft" size="4">
            <FaSearch size={20} className="text-secondary" />
          </IconButton>
          <IconButton
            className="block lg:!hidden"
            radius="full"
            variant="soft"
            size="4"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            {showDropDown ? (
              <RxCross2 size={28} />
            ) : (
              <GiHamburgerMenu size={28} />
            )}
          </IconButton>
          <Box className="!hidden lg:!block">
            <AuthStatus />
          </Box>
        </Flex>
      </Flex>
      <Box position="relative">
        <Flex
          ref={containerRef}
          position="absolute"
          left="0"
          top="0"
          className="block lg:!hidden !z-30 !w-full bg-theme !rounded-3xl !overflow-hidden !transition-all !duration-500"
          style={{
            maxHeight: showDropDown ? containerRef.current?.scrollHeight : 0,
          }}
        >
          <Container>
            <MobileNavLinks
              showDropDown={showDropDown}
              setShowDropDown={setShowDropDown}
            />
          </Container>
        </Flex>
      </Box>
    </nav>
  );
};

const NavLinks = () => {
  const links = [
    { label: "Food", href: "/food" },
    { label: "Kitchen", href: "/kitchen" },
    { label: "Member", href: "/member" },
    // { label: "Accounts", href: "/accounts" },
    // { label: "Room", href: "/room" },
    // { label: "Payroll", href: "/payroll" },
    { label: "Games", href: "/games" },
  ];

  const currentPath = usePathname();
  const theme = useThemeContext();
  return (
    <ul className={`flex space-x-6 items-center bg-theme rounded-full h-12`}>
      {links.map((link) => (
        <li key={link.href} className="!ml-0">
          <Link
            className={classnames({
              "nav-link": true,
              "!text-white": theme.appearance === "dark",
              "bg-[var(--accent-9)] !text-white":
                link.href.split("/")[1] === currentPath.split("/")[1],
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

interface Props {
  showDropDown: boolean;
  setShowDropDown: Dispatch<SetStateAction<boolean>>;
}

const MobileNavLinks = ({ showDropDown, setShowDropDown }: Props) => {
  const theme = useThemeContext();
  const currentPath = usePathname();
  const links = [
    { label: "Food", href: "/food" },
    { label: "Kitchen", href: "/kitchen" },
    { label: "Member", href: "/member" },
    // { label: "Accounts", href: "/accounts" },
    // { label: "Room", href: "/room" },
    // { label: "Payroll", href: "/payroll" },
    { label: "Games", href: "/games" },
  ];

  return (
    <>
      <ul className="!block lg:!hidden ">
        {links.map((link) => (
          <li
            key={link.href}
            className={classnames({
              "nav-link py-3 px-5": true,
              "!text-white": theme.appearance === "dark",
              "bg-[var(--accent-9)] !text-white":
                link.href.split("/")[1] === currentPath.split("/")[1],
            })}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const AuthStatus = () => {
  const status: string = "authenticated";
  const theme = useThemeContext();

  if (status === "loading") return null;
  if (status === "unauthenticated")
    return (
      <Link
        className={`nav-link bg-theme ${
          theme.appearance === "dark" ? "!text-white" : ""
        }`}
        href="/signin"
      >
        Login
      </Link>
    );

  return (
    <Box className="hidden md:block">
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Box className="bg-theme rounded-full pe-4">
              <Flex align="center" gap="3">
                <Box>
                  <Avatar
                    src="/images/user-image.png"
                    fallback="?"
                    radius="full"
                    className="cursor-pointer"
                    size="4"
                  />
                </Box>
                <Box>
                  <Heading size="3">Aqsa Sehr</Heading>
                  <Text as="p" size="2">
                    admin@gmail.com
                  </Text>
                </Box>
                <Box>
                  <FaChevronDown size={12} />
                </Box>
              </Flex>
            </Box>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">admin@gmail.com</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/settings">Settings</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Box>
  );
};

export default Navbar;
