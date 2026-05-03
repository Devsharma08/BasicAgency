import React from 'react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`w-full px-[5vw] mt-[5rem] py-20 
      bg-[#252422] text-[#F9CDCD]
    `}>
      
      {/* Top Row: Logo and Email Invite */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
        <div className="w-full lg:w-1/2">
          <figure className="w-[180px] md:w-[240px]">
            {/* The BASIC Logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100" fill="currentColor">
              <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1"></path>
            </svg>
          </figure>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-xl md:text-2xl font-medium leading-tight max-w-sm uppercase">
            We collaborate with ambitious brands and people. Let's build. 
            <a href="#" className="block mt-4 lowercase underline underline-offset-4 hover:text-gray-500 transition-colors">
              hello@example.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Row: Newsletter and Link Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-current pt-12">
        
        {/* Column 1: Newsletter */}
        <div className="flex flex-col space-y-6">
          <h6 className="uppercase font-bold tracking-widest text-xs">Stay in the know</h6>
          <form className="relative w-full border-b border-current pb-2 group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent w-full outline-none pr-10 placeholder:text-current/50"
            />
            <button type="submit" className="absolute right-0 bottom-2 transition-transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" className="w-4 h-4 fill-current">
                <path d="M.1 7.5h14v2H.1z"></path>
                <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4z"></path>
                <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Column 2: Social */}
        <div className="flex flex-col space-y-6">
          <h6 className="uppercase font-bold tracking-widest text-xs">Social</h6>
          <ul className="flex flex-col space-y-2">
            {['Instagram', 'Twitter', 'LinkedIn', 'Facebook'].map(link => (
              <li key={link}><a href="#" className="hover:underline transition-all">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Initiatives */}
        <div className="flex flex-col space-y-6">
          <h6 className="uppercase font-bold tracking-widest text-xs">Initiatives</h6>
          <ul className="flex flex-col space-y-2">
            {['Applied', 'Brandbeats', 'Moves', 'B®/Good'].map(link => (
              <li key={link}><a href="#" className="hover:underline transition-all">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Offices */}
        <div className="flex flex-col space-y-6">
          <h6 className="uppercase font-bold tracking-widest text-xs">Offices</h6>
          <ul className="flex flex-col space-y-2">
            {['San Diego – CA', 'New York – NY', 'Bay Area – CA', 'St. Louis – MO', 'Amsterdam – NL', 'London – EN', 'Berlin – GE', 'Argentina – AR'].map(city => (
              <li key={city}><a href="#" className="hover:underline transition-all text-sm">{city}</a></li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;