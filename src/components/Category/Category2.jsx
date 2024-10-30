import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/hero/imagen.png";
import Image3 from "../../assets/category/speaker.png";

export const Category2 = () => {
  return (
    <div data-aos="fade-up"  className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* colum 1  */}

          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-slate-400 to-slate-400/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <button className=" text-white bg-primary cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>

          {/* column 2  */}

          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-black/70 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <button className="bg-brandWhite text-brandGreen cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>
            </div>
            <img src={Image2} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* column 3  */}

          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <button className="bg-white text-brandBlue cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[320px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
