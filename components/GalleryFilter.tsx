"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Camera } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "nursery" | "academics" | "events" | "sports";
  categoryLabel: string;
  imageSrc: string;
  description: string;
}

const defaultGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Interactive Classroom Learning",
    category: "academics",
    categoryLabel: "Classroom",
    imageSrc: "/images/classroom-hero.jpg",
    description: "Young scholars in Bokaro actively participating in group activities and reading sessions.",
  },
  {
    id: "g2",
    title: "Playgroup Sensory Activity",
    category: "nursery",
    categoryLabel: "Nursery & Play",
    imageSrc: "/images/nursery-wing.jpg",
    description: "Montessori tactile play and building blocks in our cheerful sunlit activity hall.",
  },
  {
    id: "g3",
    title: "Evening Tuition & Science Mentorship",
    category: "academics",
    categoryLabel: "Tuition Center",
    imageSrc: "/images/tuition-center.jpg",
    description: "Micro-batch math and science problem solving guided by senior faculty.",
  },
  {
    id: "g4",
    title: "Annual Sports & Fitness Day",
    category: "sports",
    categoryLabel: "Sports & Fitness",
    imageSrc: "/images/gallery-4.jpg",
    description: "Balancing games, relay races, and physical dexterity routines for primary scholars.",
  },
  {
    id: "g5",
    title: "Saraswati Puja & Cultural Celebration",
    category: "events",
    categoryLabel: "Events & Festivals",
    imageSrc: "/images/gallery-5.jpg",
    description: "Traditional devotion, Saraswati Vandana recitations, and student art exhibition.",
  },
  {
    id: "g6",
    title: "Primary English Fluency Drill",
    category: "academics",
    categoryLabel: "Classroom",
    imageSrc: "/images/gallery-6.jpg",
    description: "Spelling bee, recitation drills, and vocabulary development sessions.",
  },
];

export default function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "nursery", label: "Nursery & Play" },
    { id: "academics", label: "Classrooms & Tuition" },
    { id: "events", label: "Events & Celebrations" },
    { id: "sports", label: "Sports & Activities" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? defaultGallery
      : defaultGallery.filter((item) => item.category === activeCategory);

  return (
    <div id="gallery" className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-title-md text-body-md transition-all cursor-pointer ${
                isActive
                  ? "bg-primary-container text-on-primary font-bold shadow-sm"
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high border border-surface-container-high"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-surface-container-high cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container-high">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-on-primary">
                <div className="flex items-center gap-2 font-title-md text-body-sm text-secondary-fixed">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-primary-container/90 text-on-primary px-3 py-1 rounded-full font-label-badge text-label-badge font-bold uppercase backdrop-blur-sm">
                {item.categoryLabel}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-headline-sm text-title-lg text-primary-container mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface-container-lowest rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-surface-container-high"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.imageSrc}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-surface-container-lowest">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-badge text-label-badge font-bold uppercase mb-2">
                {selectedImage.categoryLabel}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary-container mb-2">
                {selectedImage.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
