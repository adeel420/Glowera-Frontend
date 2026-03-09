import { assets } from "../assets/assets";
import { FaUsers } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

// Links
export const navLinks = [
  { id: 0, link: "/", title: "Home" },
  { id: 1, link: "/shop", title: "Shop" },
  { id: 2, link: "/", title: "Category" },
  { id: 3, link: "/about", title: "About" },
  { id: 4, link: "/contact", title: "Contact" },
];

// Categories
export const featuredCategories = [
  { id: 0, img: assets.heroImg, title: "Hair Oil" },
  { id: 1, img: assets.heroImg, title: "Face Wash" },
  { id: 2, img: assets.heroImg, title: "Makeup" },
  { id: 3, img: assets.heroImg, title: "Nailpolish" },
  { id: 4, img: assets.heroImg, title: "Shampoo" },
  { id: 5, img: assets.heroImg, title: "Beauty Cream" },
  { id: 6, img: assets.heroImg, title: "Beauty Cream" },
  { id: 6, img: assets.heroImg, title: "Beauty Cream" },
  { id: 6, img: assets.heroImg, title: "Beauty Cream" },
  { id: 6, img: assets.heroImg, title: "Beauty Cream" },
  { id: 6, img: assets.heroImg, title: "Beauty Cream" },
];

// Featured Products
export const featuredProducts = [
  {
    id: 0,
    img: assets.heroImg,
    name: "Hydrating Face Serum",
    category: "Skincare",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
  },
  {
    id: 1,
    img: assets.heroImg,
    name: "Nourishing Hair Oil",
    category: "Hair Care",
    price: 29.99,
  },
  {
    id: 2,
    img: assets.heroImg,
    name: "Matte Lipstick Set",
    category: "Makeup",
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
  },
  {
    id: 3,
    img: assets.heroImg,
    name: "Vitamin C Cream",
    category: "Skincare",
    price: 52.99,
  },
  {
    id: 4,
    img: assets.heroImg,
    name: "Gentle Face Wash",
    category: "Skincare",
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
  },
  {
    id: 5,
    img: assets.heroImg,
    name: "Nail Polish Collection",
    category: "Nails",
    price: 19.99,
  },
  {
    id: 6,
    img: assets.heroImg,
    name: "Anti-Aging Serum",
    category: "Skincare",
    price: 64.99,
    originalPrice: 79.99,
    discount: 19,
  },
  {
    id: 7,
    img: assets.heroImg,
    name: "Moisturizing Shampoo",
    category: "Hair Care",
    price: 27.99,
  },
];

// Filter by price
export const filterByPrice = [
  { id: 0, name: "All Prices", min: 0, max: 100000 },
  { id: 1, name: "Under 500 Rs", min: 0, max: 500 },
  { id: 2, name: "501 Rs to 1500 Rs", min: 501, max: 1500 },
  { id: 3, name: "1501 Rs to 3000 Rs", min: 1501, max: 3000 },
  { id: 4, name: "Above 3000 Rs", min: 3001, max: 10000000000 },
];

// admin btns
export const adminBtn = [
  { id: 0, icon: FaUsers, title: "User Management" },
  { id: 1, icon: BiCategory, title: "Categories Management" },
  { id: 2, icon: MdProductionQuantityLimits, title: "Products Management" },
  { id: 3, icon: TbEdit, title: "Update Products" },
  { id: 4, icon: BsCart3, title: "Orders" },
  { id: 5, icon: GoMail, title: "Contact Messages" },
  { id: 6, icon: IoNewspaperOutline, title: "NewsLetter Emails" },
  { id: 7, icon: IoLogOutOutline, title: "Logout" },
];
