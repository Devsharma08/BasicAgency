import React from 'react'

const FeaturedWork = () => {

  return (
    
    <section className='w-full max-w-[1440px] mx-auto px-6 md:px-16 py-20 flex flex-col'>
      
    {/* Upper Content Area */}
      <div className='w-full'>
      
        <p className='text-2xl md:text-2xl lg:text-3xl font-medium max-w-4xl tracking-tight leading-[1.1] text-black'>
          BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
        </p>

       
        <div className='mt-12 '>
          <button className='relative h-fit group border overflow-hidden bg-transparent py-[10px] rounded-3xl w-fit group px-[3vw]  text-center '>
            <span className='absolute rounded-3xl bottom-0 inset-x-0 transition-all duration-500 ease-out-in h-0 -z-10 group-hover:h-full bg-black'></span>
            <span className='group-hover:text-white font-semibold transition-color  duration-500 '>SEE THE WORK</span>
          </button>
        </div>
      </div>

    {/* brand logo */}
      <div className='w-full flex justify-end items-end mt-10'>
        <h3 className='text-[25vw] leading-[0.7] font-bold tracking-tighter select-none'>
          B/D®
        </h3>
      </div>

    </section>
  )
}

export default FeaturedWork