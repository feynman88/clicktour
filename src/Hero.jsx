export default function Hero() {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden pt-14">
        <video autoPlay loop muted playsInline className="absolute inset-0 -z-10 h-full w-full object-cover">
          <source src="/videos/bm.mp4" type="video/mp4" />
        </video>
    
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
         

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
              Where Every Journey is a Story Waiting to be Told
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Welcome to Click Tour, where your adventure begins. Whether you’re discovering the ancient treasures of
              Egypt, the futuristic landscapes of the UAE, or the wild beauty of Tanzania, we create seamless,
              personalized travel experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="/contactus"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                contact us
              </a> */}
              <a
                href="/about"
                className="rounded-md border px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                About Click Tour
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
