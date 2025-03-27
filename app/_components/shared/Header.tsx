import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center p-5 lg:p-10 bg-transparent">
      <div className="flex items-center gap-10">
        {/* Clickable Cube logo as an image */}
        <Link href="/" className="w-16 h-16 relative cursor-pointer">
          <Image src="/Logo.png" alt="Cube logo" width={64} height={64} className="object-contain" />
        </Link>

        {/* Early beta label with hover effect */}
        <div className="border border-white rounded-lg px-10 py-1 transition-colors duration-200 hover:border-red-300 group">
          <span className="text-white text-sm transition-colors duration-200 group-hover:text-red-300">early beta</span>
        </div>
      </div>
    </header>
  )
}

