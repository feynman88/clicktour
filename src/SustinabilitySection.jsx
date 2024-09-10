export default function SustinabilitySection() {
  return (
    <div className="relative isolate overflow-hidden bg-white ">
      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <video autoPlay loop muted playsInline className="absolute inset-0 -z-10 h-full w-full object-cover">
          <source src="/public/videos/suswhite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-yellow-200 bg-clip-text text-transparent sm:text-4xl">
            Commitment to Sustainability
            <br />
            Travel Responsibly, Leave a Positive Impact
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            At Click Tour, we integrate sustainable practices into every trip, ensuring your travel benefits both the
            environment and local communities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Learn More about Sustainability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
