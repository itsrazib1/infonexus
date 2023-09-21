"use client";
import React, { useState } from "react";
import img1 from "../../../../../public/books.png";
import img2 from "../../../../../public/calendar.png";
import img3 from "../../../../../public/campaigns.png";
import img4 from "../../../../../public/cliq.png";
import img5 from "../../../../../public/connect.png";
import img6 from "../../../../../public/crm.png";
import img7 from "../../../../../public/desk.png";
import img8 from "../../../../../public/invoice.png";
import img9 from "../../../../../public/mail.png";
import img10 from "../../../../../public/projects.png";
import img11 from "../../../../../public/sheet.png";
import img12 from "../../../../../public/show.png";
import img13 from "../../../../../public/workDrive.png";
import img14 from "../../../../../public/writer.png";
import viewDirection from "../../../../../public/icons8-right-arrow-90-2.png";
import Image from "next/image";
import "./partTow.css";
import Link from "next/link";
const appAccessed = [
  {
    id: 1,
    img: img1,
    name: "Books",
    link: "https://example.com/item1",
  },
  {
    id: 2,
    img: img2,
    name: "Calender",
    link: "https://example.com/item2",
  },
  {
    id: 3,
    img: img3,
    name: "Campaigns",
    link: "https://example.com/item11",
  },
  {
    id: 4,
    img: img4,
    name: "cliq",
    link: "https://example.com/item11",
  },
  {
    id: 5,
    img: img5,
    name: "Connect",
    link: "https://example.com/item11",
  },
  {
    id: 6,
    img: img6,
    name: "CRM",
    link: "https://example.com/item11",
  },
  {
    id: 7,
    img: img7,
    name: "Desk",
    link: "https://example.com/item11",
  },
  {
    id: 8,
    img: img8,
    name: "Invoice",
    link: "https://example.com/item11",
  },
  {
    id: 9,
    img: img9,
    name: "Mail",
    link: "https://example.com/item11",
  },
  {
    id: 10,
    img: img10,
    name: "Projects",
    link: "https://example.com/item11",
  },
  {
    id: 11,
    img: img11,
    name: "Sheet",
    link: "https://example.com/item11",
  },
  {
    id: 12,
    img: img12,
    name: "Show",
    link: "https://example.com/item11",
  },
  {
    id: 13,
    img: img13,
    name: "Work Drive",
    link: "https://example.com/item11",
  },
  {
    id: 14,
    img: img14,
    name: "Writer",
    link: "https://example.com/item11",
  },
];

const PartTwo = () => {
  const [view, setView] = useState(false);
  const toggleCart = () => {
    setView(!view);
  };
  return (
    <div>

      <div className="accessed-app-fill-container">
        <h1 className="accessed-app-header">Apps you Have accessed</h1>
        <div className="accessed-app-header-line"></div>
        {view ? (
          <div>
            <ul className="accessed-app-container">
              {appAccessed.map(({ img, name, link, id }) => (
                <li key={id}>
                  <Link className="accessed-app-link" href={link}>
                    <Image className="accessed-app-img" src={img} alt="" />
                    <h3>{name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="view-btn">
              <button className="view" onClick={toggleCart}>View Less <Image className="view-up" src={viewDirection} alt="" /></button>
            </div>
          </div>
        ) : (
          <div>
            <ul className="accessed-app-container">
              {appAccessed.slice(0, 4).map(({ img, name, link, id }) => (
                <li key={id}>
                  <Link className="accessed-app-link" href={link}>
                    <Image className="accessed-app-img" src={img} alt="" />
                    <h3>{name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="view-btn">
              {appAccessed.length > 4 && <button className="view" onClick={toggleCart}>View More <Image className="view-down" src={viewDirection} alt="" /></button>}
            </div>
          </div>
        )}

        {/* <div>
          <ul className="accessed-app-container">
            {appAccessed.slice(0,4).map(({img, name, link, id}) => (
              <li key={id}>
              <Link className="accessed-app-link" href={link}>
                <Image className="accessed-app-img" src={img} alt="" />
                <h3>{name}</h3>
              </Link>
            </li>
            ))}
          </ul>
          {appAccessed.length > 4 && <button onClick={toggleCart}>Show More</button>}
        </div> */}

        {/* {appAccessed.map(({ img, name, link, id }) => (
          <li key={id}>
            <Link className="accessed-app-link" href={link}>
              <Image className="accessed-app-img" src={img} alt="" />
              <h3>{name}</h3>
            </Link>
          </li>
        ))} */}
      </div>
      <div>
        <h1 className='text-center text-5xl p-12'>Or, choose from over 55+ different <br /> business applications</h1>
      </div>
    </div>

  );
};

export default PartTwo;