
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



export default function HomePage() {

    return (
        <div className="bg-white">
            <Navbar />

            <div className="relative px-6 isolate pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                </div>
                <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            I'm Fajarudin zakariya, frontend developer base in indonesia.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            I am a frontend developer who is passionate about creating beautiful and functional websites. I have experience in building websites using React, Next.js, and Tailwind CSS. I am always looking for new opportunities to learn and grow as a developer. Let's work together to create something amazing!
                        </p>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >

                </div>
            </div>
            < Footer />
        </div>
    )
}