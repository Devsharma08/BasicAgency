import React from 'react'

const Awards = () => {
    const awardsData = [
        { link: '/logo1.svg', text: "design and branding agency of the year" },
        { link: '/logo2.svg', text: "agency of the year" },
        { link: '/logo3.svg', text: "digital innovation agency of the year finalist" }
    ];

    return (
     <>
        <section 
            className='w-full text-black min-h-screen flex items-center justify-center' 
            style={{ backgroundColor: '#F2F2F2' }}
        >
            
            <div className='w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-10'>
                {awardsData.map((item, index) => (
                  
                    <div 
                        key={index} 
                        className='group flex flex-col items-center w-full max-w-[300px] cursor-pointer'
                    >
                        <img 
                            className='h-[60px] md:h-[78px] w-auto object-contain mb-8' 
                            src={item.link} 
                            alt={`award-${index}`} 
                        />
                       
                        <p className='uppercase font-light text-[10px] tracking-widest leading-relaxed group-hover:underline'>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

        </section>
        <div className='transform mx-[4rem] -translate-y-[50px]'>
            <hr className='  border rounded-md w-full text-black' />
        </div>
    </>
    )
}

export default Awards