import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export default function ContactPage() {
    return (
            <>
            {/* header */}
            <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
             We are here to help you with any inquiries you may have regarding our services or products.
                    </p>
                </div>
            </div>
            {/* header end */}



            {/* container */}
      <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">




            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Map and Contact Information */}
                <div>
                    {/* Embedded Google Map */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13808.86061120696!2d31.3324097!3d30.0880239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e1a7ccd4773%3A0xdb4126120b6f5a9b!2sFlash%20Tour!5e0!3m2!1sen!2seg!4v1727268630484!5m2!1sen!2seg" width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="rounded-lg shadow-md w-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-600">
                                <MapPinIcon className="h-5 w-5 mr-2 text-indigo-500" />
                                30 El-Thawra St, Almazah, Heliopolis, Cairo Governorate 
                            </p>
                            <p className="flex items-center text-gray-600">
                                <PhoneIcon className="h-5 w-5 mr-2 text-indigo-500" />
                                <a href="tel:+1234567890" className="hover:text-indigo-600">0100230123013</a>
                            </p>
                            <p className="flex items-center text-gray-600">
                                <EnvelopeIcon className="h-5 w-5 mr-2 text-indigo-500" />
                                <a href="mailto:info@example.com" className="hover:text-indigo-600">info@clicktour.travel</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            </>
        
    )
}