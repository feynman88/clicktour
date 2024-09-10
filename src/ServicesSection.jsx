import {
  GlobeAltIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
  RectangleStackIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";

export default function ServicesSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1675371627059-cfbf29585a4f?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600"> Tailored Travel Experiencesr</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h1>

            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Discover a world of possibilities with our diverse range of travel services. Whether you're seeking
                relaxation, adventure, or cultural immersion, we have the perfect journey for you.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <PaperAirplaneIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Beach Escapes & Leisure</strong> Unwind on pristine
                    beaches and indulge in luxurious resorts. Our leisure packages offer the perfect blend of relaxation
                    and indulgence for those seeking a tranquil getaway.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeAltIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cultural & Historical Tours</strong> For the
                    thrill-seekers and explorers, our adventure packages push boundaries and create unforgettable
                    experiences. From trekking remote landscapes to diving in crystal-clear waters, adventure awaits.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RectangleStackIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tailor-Made Itineraries</strong> Your dream
                    vacation, crafted just for you. Our bespoke travel planning service ensures every aspect of your
                    journey is personalized to your preferences and desires.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Group Travel & Corporate Retreats</strong>{" "}
                    Strengthen bonds and create lasting memories with our group and corporate travel options. We handle
                    all the details, allowing you to focus on what matters most – the shared experience.
                  </span>
                </li>
              </ul>

              <a href="/services" className="mt-6 text-lg leading-8 text-gray-600 flex items-center">
                View all of our services
                <ArrowUpRightIcon className="mt-1 ml-2 h-5 w-5 flex-none text-black-800" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
