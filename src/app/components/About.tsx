"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side content */}
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mb-6">
              ABOUT US
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Bring <span className="text-sky-500">Your Vision</span> to Life With Technology
            </h2>

            <p className="text-gray-700 mb-10 text-lg">
              We are a team of passionate developers, designers, and tech enthusiasts committed to building cutting-edge
              digital experiences. Our mission is to craft innovative solutions that empower businesses and individuals,
              combining creativity with technology to shape a smarter future.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600 mt-2">Projects Delivered</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">98%</h3>
                <p className="text-gray-600 mt-2">Clients Satisfaction</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">05+</h3>
                <p className="text-gray-600 mt-2">Years of Experience</p>
              </motion.div>
            </div>
          </motion.div>
}
          <motion.div
            className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1.0 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/money.png"
                alt="About"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
