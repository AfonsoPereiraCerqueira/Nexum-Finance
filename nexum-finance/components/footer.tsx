import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Twitter } from 'lucide-react'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Digital Account', href: '#' },
      { name: 'Nexum Card', href: '#' },
      { name: 'Investments', href: '#' },
      { name: 'Crypto', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Status', href: '#' },
    ],
  };

  const socials = [
    { name: 'Twitter', href: '#', icon: 'twitter', component: <Twitter size={16}/> },
    { name: 'LinkedIn', href: '#', icon: 'linkedin', component: <Linkedin size={16}/> },
    { name: 'Instagram', href: '#', icon: 'instagram', component: <Instagram size={16}/> },
  ]

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Coluna 1: Branding */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/nexum-png.svg"
                alt="Nexum Logo"
                width={40}
                height={40}
                className="brightness-110"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                NEXUM <span className="text-emerald-500">FINANCE</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Empowering your financial journey with next-generation banking technology. Secure, fast, and globally connected.
            </p>
            <div className="flex gap-4">
              {/* Espaço para ícones de redes sociais */}
              {socials.map((social) => (
                <div key={social.name} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-emerald-500 transition-colors cursor-pointer group">
                  {social.component}
                </div>
              ))}
            </div>
          </div>

          {/* Colunas de Links dinâmicas */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-emerald-500 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra Inferior (Legal) */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Nexum Finance Inc. ESTD 2026. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}