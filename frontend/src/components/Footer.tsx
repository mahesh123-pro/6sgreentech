import Image from 'next/image';
import Link from 'next/link';
import { Globe, Share2, MessageSquare, Shield, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 text-white py-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.jpeg" alt="6S GreenTech Logo" fill className="object-contain" />
              </div>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">
                6S <span className="text-green-500">GREENTECH</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              Pioneering the next generation of autonomous and high-efficiency agricultural machinery to feed the world sustainably.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#intro" className="text-gray-400 hover:text-green-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Intro</Link></li>
              <li><Link href="#all-implements" className="text-gray-400 hover:text-green-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Catalog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors font-bold uppercase tracking-widest text-[10px]">About Team</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-green-400 transition-colors font-bold uppercase tracking-widest text-[10px]">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Connect</h3>
            <div className="flex gap-4">
              {[
                { Icon: Globe, href: "#" },
                { Icon: Share2, href: "#" },
                { Icon: MessageSquare, href: "#" },
                { Icon: Shield, href: "#" },
                { 
                  Icon: MapPin, 
                  href: "https://www.google.com/maps/place/13%C2%B036'39.9%22N+77%C2%B031'35.7%22E/@13.6110918,77.5240129,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.6110918!4d77.5265878?hl=en&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D" 
                }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 hover:border-transparent transition-all group"
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} 6S GREEN TECH. ENGINEERED FOR GROWTH.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
