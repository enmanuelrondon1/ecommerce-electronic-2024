import Slider from "react-slick";
import Image1 from "../../assets/category/macbook.png";
import Image2 from "../../assets/hero/headphone.png";
import Image3 from "../../assets/hero/imagen.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/watch.png";

const ImageSlider = [
  {
    id: 1,
    img: Image1,
    title: "Beats Solo",
    description: "Wireless",
    category: "Laptops",
  },
  {
    id: 2,
    img: Image2,
    title: "Beats Solo",
    description: "Wireless",
    category: "Headphones",
  },
  {
    id: 3,
    img: Image3,
    title: "Beats Solo",
    description: "Wireless",
    category: "Virtual",
  },
  {
    id: 4,
    img: Image4,
    title: "Beats Solo",
    description: "Wireless",
    category: "Gaming",
  },
  {
    id: 5,
    img: Image5,
    title: "Beats Solo",
    description: "Wireless",
    category: "Watches",
  },
];

export const Hero = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className=" container mt-28  ">
      {/* <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]  "></div> */}

      <div className=" overflow-hidden rounded-3xl min-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0 ">
          <Slider {...settings}>
            {ImageSlider.map((item) => (
              <div key={item.id} className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  {/* text conten section  */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold "
                    >
                      {item.title}
                    </p>
                    <p
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold "
                    >
                      {item.description}
                    </p>
                    <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold aos-init aos-animate"
                    >
                      {item.category}
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <button
                        onClick={() => console.log("Buy now")}
                        className="button"
                      >
                        Buy now
                        <div className="hoverEffect">
                          <div></div>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* image section  */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={item.img}
                        alt="Image"
                        className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
