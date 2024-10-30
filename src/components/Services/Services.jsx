import { FaCheckCircle, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCarSide, FaGift } from "react-icons/fa6";

const ServicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaShoppingCart className="text-4xl md:text-5xl text-primary" />,
    title: "24/7 Support",
    description: "We offer 24/7 customer support",
  },
  {
    id: 3,
    icon: <FaGift className="text-4xl md:text-5xl text-primary" />,
    title: "Gift Cards",
    description: "Gift cards available for all occasions",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Quality Guarantee",
    description: "100% quality guarantee on all products",
  },
];

export const Services = () => {
  return (
    <>
      {/* Primera forma de Realizarlo usando el map  */}
      <div>
        <div className="container my-14 md:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 ">
            {ServicesData.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col items-start sm:flex-row gap-4 ">
                  {item.icon}
                  <h1 className="lg:text-xl font-bold">{item.title}</h1>
                  <h1 className="text-gray-400 text-sm">{item.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="container my-14 md:my-20  ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          <div className="flex flex-col items-start sm:flex-row gap-4 ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="text-4xl md:text-5xl text-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path>
            </svg>
            <div>
              <h1 className="lg:text-xl font-bold">Free Shipping</h1>
              <h1 className="text-gray-400 text-sm">
                Free Shipping On All Order
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-start sm:flex-row gap-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-4xl md:text-5xl text-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <div>
              <h1 className="lg:text-xl font-bold">Safe Money</h1>
              <h1 className="text-gray-400 text-sm">30 Days money Back</h1>
            </div>
          </div>

          <div className="flex flex-col items-start sm:flex-row gap-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-4xl md:text-5xl text-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
            </svg>
            <div>
              <h1 className="lg:text-xl font-bold">Scure payment</h1>
              <h1 className="text-gray-400 text-sm">All Payment Secure</h1>
            </div>
          </div>

          <div className="flex flex-col items-start sm:flex-row gap-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-4xl md:text-5xl text-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z"></path>
            </svg>
            <div>
              <h1 className="lg:text-xl font-bold">Online Support 24/7</h1>
              <h1 className="text-gray-400 text-sm">Technical Support 24/7</h1>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
