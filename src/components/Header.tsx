import { useState } from 'react';
import { ShoppingCart, HardHat, ShieldAlert, Cpu, FileText } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  rfqItemsCount: number;
  lang: 'ru' | 'en';
  setLang: (l: 'ru' | 'en') => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  rfqItemsCount,
  lang,
  setLang,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'home', label: t.navHome, icon: Cpu },
    { id: 'catalog', label: t.navCatalog, icon: FileText },
    { id: 'calc', label: t.navCalc, icon: HardHat },
    { id: 'assistant', label: t.navAssistant, icon: ShieldAlert },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      {/* Top micro-bar */}
      <div className="bg-[#1A1A1A] text-white text-[11px] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex gap-6">
            <span>📍 {t.addressCity}</span>
            <span className="hidden sm:inline">📞 +7 (383) 381-88-12</span>
            <span className="hidden md:inline">✉ info@sibtehlit.ru</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setLang('en')}
              className={`transition-all duration-150 cursor-pointer text-xs uppercase ${
                lang === 'en'
                  ? 'font-bold text-[#e65410] border-b border-[#e65410]'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`transition-all duration-150 cursor-pointer text-xs uppercase ${
                lang === 'ru'
                  ? 'font-bold text-[#e65410] border-b border-[#e65410]'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              RU
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with the beautiful custom official Sibtehlit SVG */}
          <div 
            onClick={() => setCurrentTab('home')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <svg 
              className="h-11 w-11 shrink-0 transition-transform duration-200 group-hover:scale-105" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Bulky deep teal container representing the ladle */}
              <path
                d="M 68.6 29.8 A 29 29 0 1 1 31.4 29.8"
                stroke="#00404b"
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
              />
              {/* Larger, flowing stream of molten metal pouring out, scaled and shaped beautifully */}
              <path
                d="M 31.5 4 C 39.5 -5, 50 5, 50 20 C 50 32, 48 44, 47 48 C 45 38, 44 26, 45.5 17 C 47 8, 38.5 9, 31.5 4 Z"
                fill="#e65410"
              />
            </svg>
            <div>
              <div className="flex items-center">
                <span className="font-sans font-black text-xl tracking-tight text-[#00404b] uppercase sm:text-2xl">
                  {lang === 'en' ? 'Sibtehlit' : 'Сибтехлит'}
                </span>
              </div>
              <p className="text-[9px] text-[#00404b] font-bold tracking-wider uppercase font-sans mt-px">
                {lang === 'en' ? 'YOUR FOUNDRY PARTNER' : 'ВАШ ЛИТЕЙНЫЙ ПАРТНЕР'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4 h-full items-center">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center space-x-1.5 h-12 px-2 text-[12px] font-bold uppercase tracking-wider transition-all duration-150 border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-[#e65410] text-[#e65410]'
                      : 'border-transparent text-gray-700 hover:text-[#e65410]'
                  }`}
                >
                  <IconComp className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: RFQ Basket & Contacts */}
          <div className="flex items-center space-x-4">
            {/* RFQ Cart Trigger Button */}
            <button
              id="rfq-cart-btn"
              onClick={() => setCurrentTab('rfq')}
              className={`relative flex items-center space-x-2 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                currentTab === 'rfq'
                  ? 'bg-[#e65410] text-white'
                  : 'bg-[#1A1A1A] hover:bg-[#e65410] text-white'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:inline">{t.specRequest}</span>
              
              {rfqItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#e65410] border border-white text-white rounded-full text-[10px] font-black h-5 w-5 flex items-center justify-center animate-bounce">
                  {rfqItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black rounded-lg focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Открыть меню</span>
              {mobileMenuOpen ? (
                <span className="text-xl font-mono block w-6 text-center">✕</span>
              ) : (
                <span className="text-xl font-mono block w-6 text-center">☰</span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const IconComp = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-left border-l-4 cursor-pointer ${
                  isActive
                    ? 'bg-orange-50 text-[#e65410] border-[#e65410]'
                    : 'text-gray-700 hover:bg-gray-50 border-transparent'
                }`}
              >
                <IconComp className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
