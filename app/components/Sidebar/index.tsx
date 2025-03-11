"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { menu } from "../../../utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import imageUrl from "/../avatar1.png";
const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidht};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    align-items: center;

    &:hover {
      .profile-overlay {
        opacity: 1;
        border: 2px solid ${(props) => props.theme.borderColor2};
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  .profile-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 0;
    background: ${(props) => props.theme.colorBg3};
    transition: all 0.55s linear;
    border-radius: 1rem;
    border: 2px solid ${(props) => props.theme.borderColor2};
    opacity: 0.2;
  }

  h1 {
    font-size: clamp(1.2rem, 4vw, 1.4rem);
    line-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }

  .image,
  h1 {
    position: relative;
    z-index: 1;
  }

  .image {
    flex-shrink: 0;
    display: inline-block;
    overflow: hidden;
    transition: all 0.5s ease;
    border-radius: 100%;
    width: 70px;
    height: 70px;

    .img {
      border-radius: 100%;
      transition: all 0.5s ease;
    }
  }

  .nav-item {
    position: relative; /* Додано для коректної роботи псевдоелементів */
    padding: 0.7rem 1rem 1rem 2.1rem;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) => props.theme.colorGreenDark};
      z-index: 1;
      transition: all 0.3s ease-in-out;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.activeNavLink};
  }

  i,
  a {
    color: ${(props) => props.theme.colorIcons2};
    line-height: 0;
  }
  .active::before {
    width: 0.3rem;
  }
`;

export const Sidebar = () => {
  const { theme } = useGlobalState();

  const router = useRouter();

  const pathName = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src={imageUrl} alt="profile" />
        </div>
        <div className="user-btn absolute z-20 top-0 w-full h-full"></div>
        <h1 className="capitalize">
          <span>alex</span>
          <span>Nikif</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => (
          <li
            className={`nav-item ${pathName === item.link ? "active" : ""}`}
            onClick={() => {
              return handleClick(item.link);
            }}
            key={item.id}
          >
            {item.icon}
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button></button>
    </SidebarStyled>
  );
};
