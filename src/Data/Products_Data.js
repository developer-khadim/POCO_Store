import product1 from "../assets/Products/POCOF7UltraBlack.png";
import Product2 from "../assets/Products/PocoX7.png";
import Product2_hovering_IMG from "../assets/Products/Poco_x7_2.png";
import Product4 from '../assets/Products/c75.png'
import Product4_hovering_IMG from '../assets/Products/c75_2.webp'
import Product5 from '../assets/Products/c86.webp'
import Product6 from '../assets/Products/m6pro.webp'
import Product6_hovering_img from '../assets/Products/m6pro_2.webp'
import product7 from '../assets/Products/poco_pad.webp'
import Product7_hovering from '../assets/Products/Poco_pad_2.webp'
import Product8 from '../assets/Products/f6.webp'
import Product8_hovering from '../assets/Products/f6_2.webp'

export const Products_Data = [
    {
      id: 1,
      image: product1,
      name: "POCO F7 Ultra(16GB-512GB)",
      price: "Rs.259,999",
      isNew: true,
      link: "/poco-f7-ultra",
      category: "flagship",
      colors: {
        available: false
      }
    },
    {
      id: 2,
      image: product1,
      name: "POCO F7 Ultra(12GB-512GB)",
      price: "Rs.259,999",
      isNew: true,
      link: "/poco-f7-ultra",
      category: "flagship",
      colors: {
        available: false
      }
    },
    {
      id: 3,
      image: Product2,
      hoverImage: Product2_hovering_IMG, 
      name: "POCO X7 Pro 5G(16GB-512GB)",
      price: "Rs.139,999",
      isNew: true,
      link: "/poco-x7-pro",
      category: "mid-range",
      colors: {
        available: true,
        options: ["black", "green", "yellow"]
      }
    },
    {
      id: 4,
      image: Product4,
      hoverImage: Product4_hovering_IMG,
      name: "POCO C75 (8GB-256GB)",
      price: "Rs.36,999",
      isNew: true,
      link: "/poco-c75",
      category: "budget",
      colors: {
        available: true,
        options: ["black", "green"]
      }
    },
    {
      id: 5,
      image: Product5,
      name: "POCO C65 (6GB-128GB)",
      price: "Rs.35,999",
      isNew: true,
      link: "/poco-c65",
      category: "budget",
      colors: {
        available: true,
        options: ["black", "lightblue", "purple"]
      }
    },
    {
      id: 6,
      image: Product6,
      hoverImage: Product6_hovering_img,
      name: "POCO M6 Pro",
      price: "Rs.79,999",
      isNew: true,
      link: "/poco-m6-pro",
      category: "mid-range",
      colors: {
        available: true,
        options: ["black", "pink", "lightblue"]
      }
    },
    {
      id: 7,
      image: product7,
      hoverImage: Product7_hovering,
      name: "POCO Pad(8GB-256GB)",
      price: "Rs.92,999",
      isNew: true,
      link: "/poco-pad",
      category: "tablet",
      colors: {
        available: true,
        options: ["black", "lightblue"]
      }
    },
    {
      id: 8,
      image: Product8,
      hoverImage: Product8_hovering,
      name: "POCO F6 (12GB-512GB)",
      price: "Rs.144,999",
      isNew: true,
      link: "/poco-f6",
      category: "flagship",
      colors: {
        available: true,
        options: ["black", "green"]
      }
    },
  ];