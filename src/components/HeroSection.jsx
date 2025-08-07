import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex flex-col lg:flex-row items-center lg:items-start justify-between lg:px-24 px-10 pt-24 relative overflow-hidden gap-10">
      {/* Left Section */}
      <div className="z-40 lg:w-1/2 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-4xl md:text-6xl lg:text-5xl font-bold z-10 mb-6 leading-tight break-words text-left"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
        >
          <p className="text-[20px] md:text-[20px] lg:text-[20px] text-blue-200 max-w-2xl text-left">
            I'm Shakthi Vel, a passionate and driven Full Stack Developer with a
            strong interest in building modern, responsive web applications. I
            enjoy turning ideas into real, functional products using
            technologies like React, Node.js, and MongoDB. Currently pursuing my
            B.E. in Computer Science and Engineering at Global Academy of
            Technology, I’m always eager to learn new tools and improve my
            skills. I value clean code, user-focused design, and solving
            real-world problems through technology.
          </p>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 2.3,
          duration: 1.5,
        }}
        className="lg:wl-24 h-[400px] md:h-[400px] lg:h-[500px] flex justify-center items-center"
      >
        <Spline scene="https://prod.spline.design/Jr5tyf-ZNRqajWhf/scene.splinecode" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
