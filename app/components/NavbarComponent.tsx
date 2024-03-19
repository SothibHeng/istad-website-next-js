"use client";
import React from "react";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { ComnfigComponent } from "./ConfigComponent";
export default function NavbarComponent() {
  return (
    <Navbar fluid rounded theme={ComnfigComponent.navbar}>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="/CSTAD-logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white tracking-[0.5rem]">
          CSTAD
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Enroll
        </Navbar.Link>
        <Navbar.Link href="#">Course</Navbar.Link>
        <Navbar.Link href="#">IT New</Navbar.Link>
        <Navbar.Link href="#">Job Opportunity</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
