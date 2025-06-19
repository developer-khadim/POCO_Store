import React, { useState } from 'react'
import Modal from 'react-modal'
import m3_thumbnal from "../assets/Products/poco_m3_thamb.webp"
import x3_thumbnal  from "../assets/Products/x3_nfc.webp"
import x3_2_thumbnal from "../assets/Products/x3_nfc_3.webp"

// Set the app element for accessibility (you should set this to your app's root element)
Modal.setAppElement('#root')

const Video = () => {
  const Video_Data = [
    {
      id: 1,
      image: m3_thumbnal,
      title: "More Information about POCO",
      url: "https://www.youtube.com/embed/GiH63v1fZ2Q"
    },
    {
      id: 2,
      image: x3_thumbnal,
      title: "POCO X3 NFC Exactly What you Need",
      url: "https://www.youtube.com/embed/BrfzhNknd7U"
    },
    {
      id: 3,
      image: x3_2_thumbnal,
      title: "POCO X3 NFC Exactly What you Need",
      url: "https://www.youtube.com/embed/cXIU95slh2o"
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      background: '#1f2937',
      borderRadius: '12px',
      outline: 'none',
      padding: '0',
      maxWidth: '90vw',
      maxHeight: '90vh',
      width: '800px',
      aspectRatio: '16/9',
    }
  };

  return (
    <section className='bg-black w-full py-4 sm:py-6 md:py-8 lg:py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-12 md:mb-16'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-amber-400 transition-colors duration-300 cursor-pointer'>
            Videos
          </h1>
          <div className='w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full' />
        </div>

        {/* Video Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {Video_Data.map((item) => (
            <div 
              key={item.id}
              className='bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              {/* Video Container */}
              <div className='relative aspect-video w-full h-[45vh]'>
                <button
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/40 group"
                  onClick={() => openModal(item)}
                  aria-label={`Play video: ${item.title}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className='w-full h-full object-cover pointer-events-none'
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex flex-col items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.8" />
                      <polygon points="26,20 48,32 26,44" fill="#fbbf24" />
                    </svg>
                    <span className="mt-6 text-white text-lg sm:text-xl font-semibold text-center drop-shadow-md" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
                      {item.title}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Video Modal"
        >
          <div className="relative w-full h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Video iframe */}
            {selectedVideo && (
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe 
                  className='w-full h-full'
                  src={selectedVideo.url + "?autoplay=1"}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </Modal>

        {/* Divider */}
        <div className='my-4 sm:mt-8 md:mt-10'>
          <hr className='border-t border-white opacity-70' />
        </div>
      </div>
    </section>
  )
}

export default Video