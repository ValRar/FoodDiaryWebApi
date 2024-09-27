"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React, { useState } from "react";
import LightBackgroundFiller from "./LightBackgroundFiller";
import Image from "next/image";

export default function ThemeChangerDropdown({
  showDarkInitial,
}: {
  showDarkInitial: boolean;
}) {
  const [showDark, setShowDark] = useState<boolean>(showDarkInitial);
  return (
    <Dropdown
      classNames={{
        content: "dark:bg-[#021702]",
      }}
    >
      <DropdownTrigger>
        <button className="interactive-button outline-none hidden lg:block">
          <LightBackgroundFiller className="!p-5">
            <Image
              src={showDark ? "/moon.svg" : "/sun.svg"}
              alt="current color theme icon"
              height={40}
              width={40}
              className="svg"
            ></Image>
          </LightBackgroundFiller>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => {
          const htmlElement = document.getElementsByTagName("html")[0];
          switch (key) {
            case "light":
              document.cookie = "show_dark=0";
              htmlElement.classList.remove("dark");
              setShowDark(false);
              break;
            case "dark":
              document.cookie = "show_dark=1";
              htmlElement.classList.add("dark");
              setShowDark(true);
              break;
          }
        }}
        itemClasses={{
          base: "data-[hover=true]:bg-green-regular dark:data-[hover=true]:bg-green-dark-regular",
        }}
      >
        <DropdownItem
          key="dark"
          startContent={
            <Image
              src="/moon.svg"
              alt="moon"
              height={15}
              width={15}
              className="svg"
            ></Image>
          }
        >
          Ночная тема
        </DropdownItem>
        <DropdownItem
          key="light"
          startContent={
            <Image
              src="/sun.svg"
              alt="sun"
              height={15}
              width={15}
              className="svg"
            ></Image>
          }
        >
          Дневная тема
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
