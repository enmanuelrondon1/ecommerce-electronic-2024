import { Heading } from "../../../Shared/Heading";
import { ProductCard } from "./ProductCard";
import Imag1 from "../../assets/product/p-1.jpg";
import Imag2 from "../../assets/product/p-2.jpg";
import Imag3 from "../../assets/product/p-3.jpg";
import Imag4 from "../../assets/product/p-4.jpg";
import Imag5 from "../../assets/product/p-13.jpg";
import Imag6 from "../../assets/product/p-12.webp";
import Imag7 from "../../assets/product/p-14.jpg";
import Imag8 from "../../assets/product/p-10.jpg";
import Imag9 from "../../assets/product/p-9.jpg";
import Imag10 from "../../assets/product/p-10.jpg";
import Imag11 from "../../assets/product/p-11.jpg";

const ProductsData = [
  { id: 1, img: Imag1, title: "Boat Headphone", price: "120", aosDelay: "0" },
  {
    id: 2,
    img: Imag2,
    title: "Wireless Earbuds",
    price: "80",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Imag3,
    title: "Gaming Headset",
    price: "150",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Imag4,
    title: "Noise Cancelling Headphones",
    price: "200",
    aosDelay: "300",
  },
  {
    id: 5,
    img: Imag5,
    title: "Bluetooth Speaker",
    price: "60",
    aosDelay: "400",
  },
  { id: 6, img: Imag6, title: "Smart Watch", price: "250", aosDelay: "500" },
  { id: 7, img: Imag7, title: "VR Headset", price: "300", aosDelay: "600" },
  {
    id: 8,
    img: Imag8,
    title: "Portable Charger",
    price: "40",
    aosDelay: "700",
  },
  {
    id: 9,
    img: Imag9,
    title: "Fitness Tracker",
    price: "100",
    aosDelay: "800",
  },
  {
    id: 10,
    img: Imag10,
    title: "Smart Home Assistant",
    price: "180",
    aosDelay: "900",
  },
  {
    id: 11,
    img: Imag11,
    title: "Smart Home Assistant",
    price: "180",
    aosDelay: "900",
  },
  {
    id: 12,
    img: Imag6,
    title: "Smart Home Assistant",
    price: "180",
    aosDelay: "900",
  },
];

export const Products = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* header section  */}
        <Heading title="Our Products" description={"Explore our Products"} />
        {/* body section  */}
        <ProductCard data={ProductsData} handleOrderPopup={handleOrderPopup} />
      </div>
    </div>
  );
};
