'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  cohort?: string;
  date?: string;
  description?: string;
}

const CATEGORIES = ['All', 'Graduation', 'Workshops', 'Cultural Day', 'Project Defense', 'Candlelight', 'Events'];

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/grad-1.jpg',
    title: 'Cohort 12 Graduation Ceremony',
    category: 'Graduation',
    cohort: 'Cohort 12',
    date: 'December 2024',
  },
  {
    id: '2',
    src: '/images/gallery/grad-2.jpg',
    title: 'Certificate Presentation',
    category: 'Graduation',
    cohort: 'Cohort 12',
    date: 'December 2024',
  },
  // Add more images...
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white dark:bg-[#0A1F44] pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-linear-to-br from-[#0A1F44] to-[#1E3A8A] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-[#DC2626]/20 text-[#EF4444] rounded-full text-sm font-semibold mb-6">
              MOMENTS OF TRANSFORMATION
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
              Gallery of<br />Excellence
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Witness the transformation journey through our collection of iconic moments
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-white dark:bg-[#0A1F44] sticky top-20 z-40 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#DC2626] text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-[#1E3A8A] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#0D1B2A]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A1F44] via-[#0A1F44]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </p>
                      {image.date && (
                        <p className="text-white/80 text-sm">
                          {image.date}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#DC2626] text-white text-xs font-bold rounded-full">
                    {image.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center text-white space-y-2">
              <h3 className="text-3xl font-semibold">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {selectedImage.category}
                </span>
                {selectedImage.date && (
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                    {selectedImage.date}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}