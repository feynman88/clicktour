export default function Header() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-32 sm:py-40 lg:px-8">
            <video
                autoPlay loop muted playsInline
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
            
            >
                <source src="public/videos/techbackground.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>


            <div className="mx-auto max-w-2xl text-center relative z-10">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Technology</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Technology is at the heart of everything we do <br />
                    Empowering Partnerships with Innovation
                </p>
            </div>
        </div>
    )
}
