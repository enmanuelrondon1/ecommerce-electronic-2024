import React from "react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [suscribed, setSuscribed] = useState(false);

  const handleSuscribe = () => {
    setSuscribed(true);
    setEmail("");
  };

  const FooterLinks = [
    {
      id: 1,
      name: "Home",
      href: "#",
    },
    {
      id: 2,
      name: "About",
      href: "/#about",
    },
    {
      id: 3,
      name: "Contact",
      href: "/#conctac",
    },
    {
      id: 4,
      name: "Blogs",
      href: "/#blog",
    },
  ];

  return (
    <>
      <footer className="dark:bg-gray-950  p-4 md:p-6 lg:p-8">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <div className="flex flex-wrap justify-center mb-4">
            <div className="w-full lg:w-1/3 xl:w-1/3 p-6 text-lg">
              <h5 className="uppercase text-gray-400 font-bold mb-2">
                <a
                  href="#"
                  className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
                >
                  Eshop
                </a>
              </h5>
              <ul>
                <li className="mb-2">Teléfono: 123-456-7890</li>
                <li className="mb-2">
                  Correo electrónico: ejemplo@ejemplo.com
                </li>
                <li className="mb-2">
                  Dirección: Calle Ejemplo, Ciudad Ejemplo
                </li>
                <li className="mb-2" >
                <p class="text-gray-500 mt-4">Made with 💖 by Enmanuel</p>
                </li>
                <a
                href="https://github.com/enmanuelrondon1"
                target="_blank"
                class="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
              >
                Visit my Github
              </a>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 p-6 text-lg">
              <h5 className="uppercase text-gray-400 font-bold mb-2">
                Redes sociales
              </h5>
              <ul>
                <li className="mb-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span className="grid grid-cols-2 ">
                      Facebook
                      <FaFacebook className="text-3xl hover:text-primary duration-300" />
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span className="grid grid-cols-2   ">
                      {" "}
                      Twitter
                      <FaTwitter className="text-3xl hover:text-primary duration-300" />
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span className="grid grid-cols-2">
                      Instagram
                      <FaInstagram className="text-3xl hover:text-primary duration-300" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 p-6 text-lg">
              <h5 className="uppercase text-gray-400 font-bold mb-2">
                Suscríbete a nuestro boletín
              </h5>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="w-full p-2 mb-2 border border-gray-400 rounded text-black"
              />
              <button
                onClick={handleSuscribe}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Suscríbete
              </button>
              {suscribed && (
                <p className="text-green-500 mt-2">¡Gracias por suscribirte!</p>
              )}
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              2023 Ejemplo de tienda de electrónicos. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Otra forma de realizarlo  */}

      {/* <div class="dark:bg-gray-950">
        <div class="container">
          <div class="grid md:grid-cols-3 pb-20 pt-5">
            <div class="py-8 px-4">
              <a
                href="#"
                class="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
              >
                Eshop
              </a>
              <p class="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores alias cum
              </p>
              <p class="text-gray-500 mt-4">Made with 💖 by Enmanuel</p>
              <a
                href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
                target="_blank"
                class="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
              >
                Visit our YouTube Channel
              </a>
            </div>
            <div class="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div class="py-8 px-4">
                <h1 class="text-xl font-bold sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="space-y-3">
                  {FooterLinks.map((item, index) => (
                    <li key={index}>
                      <a
                        href={index.href}
                        class="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="py-8 px-4">
                <h1 class="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                <ul class="space-y-3">
                  <li>
                    <a
                      href="/#"
                      class="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#about"
                      class="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contact"
                      class="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#blog"
                      class="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div class="py-8 px-4 col-span-2 sm:col-auto">
                <h1 class="text-xl font-bold sm:text-left mb-3">Address</h1>
                <div>
                  <div class="flex items-center gap-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                    <p>Noida , Uttar Pradesh</p>
                  </div>
                  <div class="flex items-center gap-3 mt-6">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                    </svg>
                    <p>+91 1234567890</p>
                  </div>
                  <div class="flex items-center gap-3 mt-6">
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        class="text-3xl hover:text-primary duration-300"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="text-3xl hover:text-primary duration-200"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        class="text-3xl hover:text-primary duration-200"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
