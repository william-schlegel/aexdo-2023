import { useRef, useState } from "react";
import { useOnClickOutside } from "../lib/useOnClickOutside";
import type { TMenu } from "../types";

export default function MenuOption({ menu }: { menu: TMenu }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(ref, () => switchVisible(false));

  function switchVisible(value?: boolean) {
    if (menuVisible === value) return;
    const visible = value ?? !menuVisible;
    setMenuVisible(visible);
    // if (menuRef.current) {
    //   if (visible) {
    //     menuRef.current.classList.remove("scale-y-0");
    //     menuRef.current.classList.add("scale-y-100");
    //   } else {
    //     menuRef.current.classList.remove("scale-y-100");
    //     menuRef.current.classList.add("scale-y-0");
    //   }
    // }
  }

  if (menu.options && menu.options.length)
    return (
      <div className="relative grid" ref={ref}>
        <button
          className="flex items-center justify-between  px-4 text-aexdo-content hover:bg-base-100/20 cursor-pointer"
          onClick={() => switchVisible()}
        >
          <span className="mr-auto">{menu.label}</span>
          {menu?.options ? (
            <i
              ref={iconRef}
              className={`bx bx-chevron-down transition-all duration-500 ${
                menuVisible ? "rotate-180" : "rotate-0"
              }`}
            />
          ) : null}
        </button>
        <ul
          ref={menuRef}
          className={`absolute left-0 top-[70px] bg-base-100 border border-aexdo min-w-max transition-transform duration-300 origin-top ${
            menuVisible ? "scale-y-100" : "scale-y-0"
          }`}
        >
          {menu.options?.map((menu) => (
            <li
              key={menu.link}
              className="bg-base-100 text-aexdo hover:bg-aexdo hover:text-aexdo-content px-4 py-2 cursor-pointer transition-colors duration-200"
            >
              <a href={menu.link}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  return (
    <a
      href={menu.link ?? "#"}
      className="grid place-items-center text-center text-aexdo-content hover:bg-base-100/20 "
    >
      {menu.label}
    </a>
  );
}
