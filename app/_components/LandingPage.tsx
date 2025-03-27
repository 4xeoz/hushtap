"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const calculateWidth = (divider: number): number => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth
    return width / divider
  }
  return 0
}

// Helper function to calculate height based on width with a ratio
const calculateHeight = (width: number, ratio = 0.9): number => {
  return width * ratio
}

const LandingPage = () => {




  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01, // 0.5 second delay between each child animation
        staggerDirection: -1, // Stagger children in reverse order
      },
    },
  }

  const ballVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 25,
      },
    },
  }



  const containerTextVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 0.5 second delay between each child animation
        staggerDirection: 1, // Stagger children in reverse order
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 25,
      },
    },
  }





  // State to store calculated dimensions
  const [dimensions, setDimensions] = useState({
    circle1: { width: 0, height: 0 },
    circle2: { width: 0, height: 0 },
    circle3: { width: 0, height: 0 },
    circle4: { width: 0, height: 0 },
    circle5: { width: 0, height: 0 },
    circle6: { width: 0, height: 0 },
    circle7: { width: 0, height: 0 },
    button: {
      fontSize: 0,
      paddingX: 0,
      paddingY: 0,
    },
  })

  // Function to update all dimensions
  const updateDimensions = () => {
    // Calculate dimensions for each circle with different dividers
    const circle1Width = Math.max(450, calculateWidth(1.2))
    const circle2Width = Math.max(400,calculateWidth(1.4))
    const circle3Width = Math.max(350,calculateWidth(1.6))
    const circle4Width = Math.max(300,calculateWidth(1.9))
    const circle5Width = Math.max(250,calculateWidth(2.3))
    const circle6Width = Math.max(200,calculateWidth(2.8))
    const circle7Width = Math.max(150, calculateWidth(4))

    // Calculate button dimensions
    const buttonFontSize = Math.max(16, Math.min(40, window.innerWidth / 40))
    const buttonPaddingX = Math.max(16, Math.min(90, window.innerWidth / 30))
    const buttonPaddingY = Math.max(8, Math.min(40, window.innerWidth / 70))

    setDimensions({
      circle1: {
        width: circle1Width,
        height: calculateHeight(circle1Width, 0.88),
      },
      circle2: {
        width: circle2Width,
        height: calculateHeight(circle2Width, 0.87),
      },
      circle3: {
        width: circle3Width,
        height: calculateHeight(circle3Width, 0.85),
      },
      circle4: {
        width: circle4Width,
        height: calculateHeight(circle4Width, 0.83),
      },
      circle5: {
        width: circle5Width,
        height: calculateHeight(circle5Width, 0.8),
      },
      circle6: {
        width: circle6Width,
        height: calculateHeight(circle6Width, 0.75),
      },
      circle7: {
        width: circle7Width,
        height: calculateHeight(circle7Width, 0.6),
      },
      button: {
        fontSize: buttonFontSize,
        paddingX: buttonPaddingX,
        paddingY: buttonPaddingY,
      },
    })
  }

  // Initialize dimensions and add resize listener
  useEffect(() => {
    // Initial calculation
    updateDimensions()

    // Add resize event listener
    window.addEventListener("resize", updateDimensions)

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  return (
    <div className="bg-black min-h-screen">
      <div className="relative overflow-x-clip p-5 lg:p-10">
        <motion.div variants={containerTextVariants} initial="hidden" animate="visible" className="flex flex-col lg:mt-30 justify-center h-full max-w-3xl">
          <motion.h1 variants={textVariants}  className="text-slate-300 text-3xl sm:text-4xl md:text-5xl lg:text-8xl  leading-tight mb-6">
            The hardware 
          </motion.h1>
          <motion.h1 variants={textVariants} className="text-slate-300 text-3xl sm:text-4xl md:text-5xl lg:text-8xl  leading-tight mb-6">
            which helps you 
          </motion.h1>
          <motion.h1 variants={textVariants} className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-8xl  leading-tight mb-6">
            Disconnect
          </motion.h1>
          <motion.p  variants={textVariants} className="text-gray-600 text-base sm:text-lg md:text-xl">
            Take back control of your time with Hush
            <br className="hidden sm:block" />a simple physical tool designed to block
            <br className="hidden sm:block" />
            your most distracting apps and help you
            <br className="hidden sm:block" />
            stay focused.
          </motion.p>
        </motion.div>

        {/* red divs */}
        <div className="absolute inset-0 ">
          {/* Position for the contact button and circles */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="absolute right-[20%] md:right-[15%] top-[70vh] lg:top-[70vh] -translate-y-1/2">
            {/* Concentric circles with dynamically calculated sizes */}
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#580b0b] to-[#180606] opacity-70 border-1 border-[#6a0d0d]"
              style={{
                width: `${dimensions.circle1.width}px`,
                height: `${dimensions.circle1.height}px`,
              }}
            ></motion.div>
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#610c0c] to-[#230606] opacity-70 drop-shadow-2xl border-1 border-[#750e0e]"
              style={{
                width: `${dimensions.circle2.width}px`,
                height: `${dimensions.circle2.height}px`,
              }}
            ></motion.div>
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7b0d0d] to-[#2d0909] opacity-70 drop-shadow-2xl border-1 border-[#8f0f0f]"
              style={{
                width: `${dimensions.circle3.width}px`,
                height: `${dimensions.circle3.height}px`,
              }}
            ></motion.div>
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#850e0e] to-[#370909] opacity-70 drop-shadow-2xl border-1 border-[#9a1010]"
              style={{
                width: `${dimensions.circle4.width}px`,
                height: `${dimensions.circle4.height}px`,
              }}
            ></motion.div>
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#951111] to-[#3d0b0b] opacity-70 drop-shadow-2xl border-1 border-[#ab1313]"
              style={{
                width: `${dimensions.circle5.width}px`,
                height: `${dimensions.circle5.height}px`,
              }}
            ></motion.div>
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#9c1111] to-[#450d0d] opacity-70 drop-shadow-2xl border-1 border-[#b31414]"
              style={{
                width: `${dimensions.circle6.width}px`,
                height: `${dimensions.circle6.height}px`,
              }}
            ></motion.div>
            <motion.div
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#b91313] to-[#581010] opacity-70 drop-shadow-2xl border-1 border-[#d01616]"
              style={{
                width: `${dimensions.circle7.width}px`,
                height: `${dimensions.circle7.height}px`,
              }}
            ></motion.div>

            {/* Contact button at the center of all circles */}
            <motion.button
              variants={ballVariants}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 hover:bg-red-200 text-black rounded-full z-10 whitespace-nowrap font-medium cursor-pointer"
              style={{
                fontSize: `${dimensions.button.fontSize}px`,
                padding: `${dimensions.button.paddingY}px ${dimensions.button.paddingX}px`,
              }}
              onClick={() => {
                window.location.href = "/contact"
              }
              }
            >
              contact
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

