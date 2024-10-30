import aos from "aos";
import { Heading } from "../../../Shared/Heading";
import Imag1 from "../../assets/blogs/blog-1.jpg";
import Imag2 from "../../assets/blogs/blog-2.jpg";
import Imag3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex qui incidunt saepe cumque porro vel cum reiciendis aliquid repellat adipisci?",
    published: "Jan 20, 2024 by Enmanuel",
    image: Imag1,
    aosDelay: "0",
  },
  {
    title: "The future of wearable technology",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex qui incidunt saepe cumque porro vel cum reiciendis aliquid repellat adipisci?",
    published: "Feb 15, 2024 by Maria",
    image: Imag2,
    aosDelay: "200",
  },
  {
    title: "Top fitness tracking apps for 2024",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex qui incidunt saepe cumque porro vel cum reiciendis aliquid repellat adipisci?",
    published: "Mar 10, 2024 by Carlos",
    image: Imag3,
    aosDelay: "400",
  },
];

export const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Recent News" description="Explore Our Blogs" />

        {/* Blog section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 ">
          {BlogData.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={index}
              className="bg-white dark:bg-gray-900 "
            >
              {/* image section / */}
              <div className="overflow-hidden rounded-2xl mb-2 ">
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 "
                />
              </div>
              {/* content section  */}
              <div className="space-y-2 ">
                <p className="text-xs text-gray-500">{item.published} </p>
                <p className="font-bold line-clamp-1 ">{item.title} </p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 ">
                  {item.subtitle}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
