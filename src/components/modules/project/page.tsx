

import Image from 'next/image'
import Link from 'next/link'

const ProjectPage = () => {
  return (
    <section className=" text-white py-12 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left image preview */}
      <div className="relative w-full h-54 md:h-96 rounded-md overflow-hidden shadow-lg">
        <Image
          src="https://res.cloudinary.com/dluuillmt/image/upload/v1747675033/original-925ea2eb061c460cee602dff72ef6046_1_mitapx.png" 
          alt="SaaS Preview"
          fill
          className="object-contain"
        />
      </div>

      {/* Right content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">SaaS Landing Page</h2>
        
        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">HTML</span>
          <span className="bg-gray-800 text-xs px-3 py-1 rounded-full">CSS</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-6">
          Used HTML concepts such as creating a form and a basic skeleton.
          It also used components of both the grid and flexbox elements to produce a landing page.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="https://github.com/your-repo-link" target="_blank">
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm font-semibold rounded-md">
              Server Github
            </button>
          </Link>
          <Link href="https://github.com/your-repo-link" target="_blank">
            <button className="bg-red-500  hover:bg-red-600 px-5 py-2 text-sm font-semibold rounded-md">
              Client Github
            </button>
          </Link>
          <Link href="https://your-live-site.com" target="_blank">
            <button className="border border-white hover:bg-white hover:text-black px-5 py-2 text-sm font-semibold cursor-ponter rounded-md transition">
              View project ↗
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage;
