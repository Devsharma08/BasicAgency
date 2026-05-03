import React from 'react';

const newsData = [
  {
    id: 1,
    title: "FOUR NOMINATIONS FOR THE INTERNET'S HIGHEST HONOR.",
    category: "Press",
    date: "4.16.25",
    image: "/img3.webp",
  },
  {
    id: 2,
    title: "Tomorrow's shopper: Five ways brands can reach Gen Alpha today",
    category: "Press",
    date: "10.11.24",
    image: "/img4.webp",
  },
  {
    id: 3,
    title: "Generation Alpha: Say hello to tomorrow's shopper",
    category: "Press",
    date: "7.22.24",
    image: "/img5.webp",
  },
  {
    id: 4,
    title: "The Future of Fashion and AI at Glossy's Ecommerce Summit",
    category: "Press",
    date: "6.13.24",
    image: "/img6.webp",
  }
];

const NewsList = () => {
  return (
    <ul className="w-full flex flex-col">
      {newsData.map((item) => (
        <li key={item.id} className="w-full group">
          <a
            href="#"
            className="flex flex-col md:flex-row items-center justify-between py-3 gap-8"
          >
            <div className="w-full md:w-[30%] overflow-hidden">
              <div className="relative aspect-[870/544] w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[65%] gap-6">
              <h5 className="text-2xl md:text-3xl font-bold group-hover:underline uppercase leading-tight tracking-tighter w-full md:max-w-[70%]">
                {item.title}
              </h5>

              <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
                <span className="text-sm md:text-base whitespace-nowrap">
                  <b className="font-bold">{item.category}</b> {item.date}
                </span>

                <figure className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="fill-current">
                    <path d="M.1 7.5h14v2H.1z"></path>
                    <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4z"></path>
                    <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17z"></path>
                  </svg>
                </figure>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;