import { people } from "./destinationshomepage";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Destinations</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embark on a journey of discovery with our handpicked destinations. From ancient wonders to modern marvels,
            we offer unforgettable experiences tailored to your wanderlust. Let us guide you to the world's most
            captivating places.
          </p>
          <br />
          <a href="https://www.google.com" className="mt-6 text-lg leading-8 text-gray-600 flex items-center">
            View All Destinations
            <ArrowUpRightIcon className="mt-1 ml-2 h-5 w-5 flex-none text-black-800" aria-hidden="true" />
          </a>
        </div>

        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
