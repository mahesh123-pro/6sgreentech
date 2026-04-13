"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Leaf, Award, Globe, Users } from "lucide-react";

export default function AboutUs() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Parallax Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div 
          initial={{ y: -50, scale: 1.05 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-black overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], x: [0, -10, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src="/images/WhatsApp Image 2026-04-09 at 11.50.47 AM.jpeg" alt="Agriculture Machinery" fill className="object-cover opacity-70" priority />
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center pt-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Cultivating the <span className="text-green-400">Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light drop-shadow-md">
            We are redefining modern agriculture, ensuring every farmer has access to world-class technological machinery.
          </p>
        </motion.div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider mb-6 w-max">
                <Leaf size={16}/> Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Sustainable Machinery for a Growing World.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception, 6S GreenTech has believed that the key to feeding a rapidly expanding global population lies in the harmony between nature and high-end machinery. We source, build, and supply the most advanced agricultural automation tools to simplify the hardest jobs on earth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We empower farmers with tractors that don't just pull weight, but calculate optimal routes to save fuel and reduce soil compaction, and harvesters that minimize grain loss down to a fraction of a percent.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 group"
            >
              <Image src="/images/WhatsApp Image 2026-04-09 at 11.50.45 AM.jpeg" alt="Sustainable Machinery" fill className="object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats with Images */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-gray-400 text-lg">Our impact is measured in the success stories of the farmers we partner with globally.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div variants={fadeUp} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4"><Globe size={30}/></div>
              <h3 className="text-5xl font-bold mb-2">40+</h3>
              <p className="text-gray-400">Countries Served</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4"><Users size={30}/></div>
              <h3 className="text-5xl font-bold mb-2">10k+</h3>
              <p className="text-gray-400">Happy Farmers</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-yellow-500/20 text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"><Award size={30}/></div>
              <h3 className="text-5xl font-bold mb-2">15</h3>
              <p className="text-gray-400">Industry Awards</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"><Leaf size={30}/></div>
              <h3 className="text-5xl font-bold mb-2">2M+</h3>
              <p className="text-gray-400">Acres Optimized</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 bg-gray-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Excellence</h2>
            <p className="text-gray-600 text-lg">Take a look inside our meticulously crafted equipment. Every cog, sensor, and cab is built for long-lasting peak performance.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 space-y-24">
            {/* Show 1 */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-12 group">
              <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-xl h-[400px] relative bg-gray-200 group">
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }} className="absolute md:inset-[-5%] inset-0">
                  <Image src="/images/WhatsApp Image 2026-04-09 at 11.50.46 AM.jpeg" alt="Precision Engine" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Precision Engines</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our machinery utilizes next-generation Tier 4 Final engines. They dramatically reduce particulate matter and nitrogen oxides without sacrificing an ounce of torque. Integrated smart-cooling maintains optimal temps even during the hottest, longest harvest days.
                </p>
              </div>
            </motion.div>
            
            {/* Show 2 */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row-reverse items-center gap-12 group">
              <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-xl h-[400px] relative bg-gray-200 group">
                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }} className="absolute md:inset-[-5%] inset-0">
                  <Image src="/images/WhatsApp Image 2026-04-09 at 11.50.45 AM (1).jpeg" alt="Autonomous Cultivation" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Smart Autonomous Cultivation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Equipped with GPS & AI-driven steering, our machines can map out your land with centimeter precision. Reduce overlap, save on seeds, and avoid soil depletion by relying on data-driven autonomous guidance systems.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
