import React from 'react'
import m3 from "../assets/Products/poco_m3_thamb.webp"
import x3 from "../assets/Products/x3_nfc.webp"
import x3_2 from "../assets/Products/x3_nfc_3.webp"

const Video = () => {
  const Video_Data = [
    {
      id: 1,
      image: m3,
      title: "More Information about POCO",
      url: "https://www.youtube.com/embed/GiH63v1fZ2Q"
    },
    {
      id: 2,
      image: x3,
      title: "POCO X3 NFC Exactly What you Need",
      url: "https://www.youtube.com/embed/BrfzhNknd7U"
    },
    {
      id: 3,
      image: x3_2,
      title: "POCO X3 NFC Exactly What you Need",
      url: "https://www.youtube.com/embed/cXIU95slh2o"
    },
  ];

  return (
    <>
      <section className='bg-black w-full h-[70vh] p-6'>
        <h1 className='text-center text-white font-semibold text-3xl hover:text-yellow-500 duration-300 cursor-pointer mb-8'>Videos</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-6 px-[230px]'>
          {
            Video_Data.map((item) => (
              <div 
                key={item.id}
                className='bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <div className='aspect-video'>
                  <iframe 
                    className='w-full h-full'
                    src={item.url}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-white text-lg font-semibold'>{item.title}</h3>
                  <img src={item.image} alt={item.title} className='mt-2 w-full h-24 object-cover rounded' />
                </div>
              </div>
            ))
          }
          <hr className='border-t border-white my-10 col-span-full h-[20px]' />
          </div>
      </section>
    </>
  )
}

export default Video
