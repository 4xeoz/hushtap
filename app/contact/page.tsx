"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Header from "../_components/shared/Header"

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
        <Header />
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
                Home
              </Link>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                <span className="ml-1 text-sm font-medium text-gray-200 md:ml-2">contact</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-10">
        {/* Left section - Founders and Contributors */}
        <div className="md:w-2/3">
          {/* Founders Section */}
          <h2 className="text-5xl font-light text-indigo-300/80 mb-12 text-center">Founders</h2>

          <div className="flex flex-col sm:flex-row gap-16 mb-24 justify-center">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/Charlotte_Soriano.png"
                  alt="Charlotte Soriano"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium">Charlotte Soriano</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/Imbram_Wojdak.png"
                  alt="Imbram Wojdak"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium">Imbram Wojdak</h3>
            </div>
          </div>

          {/* Contributors Section */}
          <h2 className="text-5xl font-light text-indigo-300/80 mb-12 text-center">Contributors</h2>

          <div className="flex flex-wrap gap-10 mb-16 justify-center">
            <div>

            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/Eyad_Cherifi.jpeg"
                  alt="Imbram Wojdak"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
            </div>
            <h3 className="text-xl font-medium text-center">Eyad Cherifi</h3>
            </div>
          </div>
        </div>

        {/* Right section - Contact Information */}
        <div className="md:w-1/3 border-l border-gray-100 pl-10">
          <h2 className="text-3xl font-light text-gray-400 mb-8">Contact</h2>

          <div className="space-y-4">
            <h3 className="text-xl text-gray-400 mb-2">Email</h3>
            <div className="space-y-4">
              <div className="bg-white text-black rounded-full py-3 px-6 text-center">imbramwdev@gmail.com</div>
              <div className="bg-white text-black rounded-full py-3 px-6 text-center">
                charlottesorianodev@icloud.com
              </div>
            </div>

            <h3 className="text-xl text-gray-400 mt-8 mb-2">X</h3>
            <div className="space-y-4">
              <div className="bg-white text-black rounded-full py-3 px-6 text-center">@ImbramWojd99349</div>
              <div className="bg-white text-black rounded-full py-3 px-6 text-center">@c01h05s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

