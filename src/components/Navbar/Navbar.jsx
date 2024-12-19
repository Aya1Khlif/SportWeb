import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/img/logo2.png";
import './navbar.css'
export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0); // لتتبع العنصر النشط
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة القائمة الجانبية

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "User Progress", path: "/userProgress" },
    { name: "Nutrition Plans", path: "/nutritionPlans" },
    { name: "Work Session", path: "/workSession" },
    { name: "Exercises", path: "/exercises" },
  ];

  return (
    <div className="navbar flex items-center h-16 px-6 text-white ">
      {/* الشعار */}
      <div className="logo">
        <img src={logo} alt="logo" width={180} className="mt-2" />
      </div>

      {/* القائمة العادية للشاشات الكبيرة */}
      <ul className="hidden md:flex gap-6 text-lg font-bold">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* أيقونة القائمة للشاشات الصغيرة */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* القائمة الجانبية للشاشات الصغيرة */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-5 p-5 text-lg font-bold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => {
                setActiveIndex(index);
                setIsMenuOpen(false); 
              }}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
