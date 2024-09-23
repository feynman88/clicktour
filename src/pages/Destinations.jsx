



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

// const destinations = [
//   {
//     title: "Egypt's Magic",
//     subtitle: "Discover What Lies Beyond",
//     description:
//       "Step into a land where dreams come alive and history whispers through the sands. Egypt is not just a destination—it's a journey into a world of wonder, where every moment is a chance to uncover something extraordinary.",
//     fullDescription:
//       "Picture yourself gazing up at the towering pyramids, feeling the awe of the Sphinx's timeless gaze, or drifting along the Nile's gentle currents as the sun sets in a blaze of colors. Let the vibrant pulse of Egypt's bustling markets captivate your senses, or lose yourself in the tranquil beauty of its pristine beaches, where the warm sands and crystal-clear waters invite you to unwind and rejuvenate. From the thrill of exploring ancient temples to the serenity of a sunset over the desert, Egypt offers experiences that stir the soul and ignite the imagination.",
//     image:
//       "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
//   },
//   {
//     title: "UAE's Glamour and Tradition",
//     subtitle: "Experience the Contrasts",
//     description:
//       "Explore the vibrant cityscape of Dubai, home to soaring skyscrapers and luxury shopping, or find tranquility in the vast deserts and serene beaches. The UAE is a dynamic mix of adventure, culture, and luxury.",
//     fullDescription:
//       "Wander through the historic souks, feel the rush of a desert safari, or enjoy a traditional boat ride along Abu Dhabi's waterfront. The UAE is a land of contrasts where modern marvels stand alongside rich traditions. Experience world-class dining, shop in luxurious malls, or venture into the desert for a night under the stars. From the tallest building in the world to the tranquil oases, the UAE offers a unique blend of experiences that cater to every traveler's desires.",
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
//   },
//   {
//     title: "Oman's Rich Heritage",
//     subtitle: "A Land of Stunning Landscapes",
//     description:
//       "Journey through Oman's diverse terrain, from the majestic mountains and golden deserts to the turquoise waters of the Arabian Sea. Oman is a destination where adventure, culture, and natural beauty come together.",
//     fullDescription:
//       "Wander through the historic souks of Muscat, explore the hidden wadis, and visit ancient forts that echo with tales of the past. Experience the unique charm of Salalah, where lush green landscapes and waterfalls offer a striking contrast to the surrounding desert, especially during the Khareef monsoon season. Oman's rich cultural heritage is evident in its traditional architecture, warm hospitality, and vibrant customs, offering visitors a genuine Arabian experience.",
//     image:
//       "https://images.unsplash.com/photo-1621680696874-edd80ce57b72?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
//   },
//   {
//     title: "Tanzania's Untamed Beauty",
//     subtitle: "Explore Majestic Landscapes",
//     description:
//       "Experience the majestic spectacle of the Great Migration in the Serengeti, or marvel at the stunning beauty of the Ngorongoro Crater. Tanzania is a paradise for adventurers and nature lovers alike.",
//     fullDescription:
//       "From the heights of Mount Kilimanjaro to the depths of the Indian Ocean, Tanzania offers an unparalleled diversity of experiences. Witness the annual wildebeest migration, one of nature's most spectacular events. Relax on Zanzibar's pristine beaches or embark on a thrilling safari to see the Big Five. Tanzania's national parks and conservation areas are home to an incredible variety of wildlife, making it a dream destination for photographers and nature enthusiasts. Immerse yourself in the rich culture of the Maasai people and experience the warmth of Tanzanian hospitality.",
//     image:
//       "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
//   },
// ];

// export default function Destinations() {
//   const [expandedIndex, setExpandedIndex] = (useState < number) | (null > null);

//   const toggleExpand = (index: number) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-3xl font-bold text-gray-800">Click Tour Destinations</h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-12">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Destinations</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {destinations.map((destination, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <motion.div
//                 className="relative h-64 cursor-pointer"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => toggleExpand(index)}
//               >
//                 <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-white mb-2">{destination.title}</h3>
//                     <p className="text-lg text-gray-200">{destination.subtitle}</p>
//                   </div>
//                 </div>
//               </motion.div>
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4">{destination.description}</p>
//                 <AnimatePresence>
//                   {expandedIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                       <p className="text-gray-600 mb-4">{destination.fullDescription}</p>
//                       <p className="text-gray-600 mb-4">
//                         At Click Tour, we believe in making your {destination.title} adventure not just memorable but
//                         transformative. We're here to help you create moments that resonate deeply, as you connect with
//                         lands rich in history, culture, and natural beauty. Come discover with us—where every journey is
//                         a story waiting to be told, and every experience is a treasure to cherish.
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//                 <motion.button
//                   className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center"
//                   onClick={() => toggleExpand(index)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {expandedIndex === index ? (
//                     <>
//                       Show Less <ChevronUpIcon className="ml-2 h-5 w-5" />
//                     </>
//                   ) : (
//                     <>
//                       Learn More <ChevronDownIcon className="ml-2 h-5 w-5" />
//                     </>
//                   )}
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <ChevronDownIcon className="w-8 h-8 text-gray-400 mx-auto animate-bounce" />
//         </div>
//       </main>

//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2023 Click Tour. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }