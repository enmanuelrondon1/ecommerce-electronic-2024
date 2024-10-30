import { useState } from "react";

export const ProductCard = ({ data, handleOrderPopup }) => {
  const [counter, setCounter] = useState(4);

  const shoreMore = () => {
    setCounter(counter + 4);
  };

  const shoreLess = () => {
    if (counter <= 4) return;
    setCounter(counter - 4);
  };
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
        {/* card section  */}

        {data.slice(0, counter).map((item) => (
          <div data-aos="fade-up" data-aos-delay={item.aosDelay} key={item.id} className="group ">
            <div  className="relative">
              <img
                src={item.img}
                alt="Image"
                className="h-[180px] w-[260px] object-cover rounded-md "
              />
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-300">
                <button
                  onClick={handleOrderPopup}
                  className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{item.title} </h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
            <div className="flex justify-between items-center gap-2">
              <button
                onClick={shoreMore}
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-90 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="50px"
                  viewBox="0 0 24 24"
                  className="stroke-pink-400 fill-none group-hover:fill-pink-800 group-active:stroke-pink-200 group-active:fill-pink-600 group-active:duration-0 duration-300"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    strokeWidth="1.5"
                  ></path>
                  <path d="M8 12H16" strokeWidth="1.5"></path>
                  <path d="M12 16V8" strokeWidth="1.5"></path>
                </svg>
              </button>

              {counter > 4 && (
                /* From Uiverse.io by Itskrish01 */
                <button
                  onClick={shoreLess}
                  className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    Show less
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        ))}

        {/* OTRA FORMA DE REALIZARLO  */}
        {/* 
        {data.map((item) => (
          <div className="group " key={item.id}>
            <div className="relative  ">
            
              <img
                src={item.img}
                alt="Image"
                className="h-[180px] w-[260px] object-cover rounded-md "
              />
              hover button 
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 ">
                <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="leading-7 ">
              <h2 className="font-semibold">{item.title} </h2>
              <h2 className="font-bold">{item.price}</h2>
            </div>
          </div>
        )
        )
        } */}
      </div>
    </div>
  );
};
