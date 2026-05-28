import { useState, useRef, useEffect } from 'react';
import { ShoppingCart, HardHat, ShieldAlert, Cpu, FileText, ChevronDown, Award, Sparkles, Sliders, Info } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onCategorySelect?: (category: string, query?: string, subId?: string) => void;
  rfqItemsCount: number;
  lang: 'ru' | 'en';
  setLang: (l: 'ru' | 'en') => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  onCategorySelect,
  rfqItemsCount,
  lang,
  setLang,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const catalogDropdownCategories = [
    {
      id: 'sand-mixers-xtc',
      labelRu: 'Формовка ХТС',
      labelEn: 'No-Bake Molding XTC',
      items: [
        { labelRu: 'Смесители ХТС серии СХ', labelEn: 'Continuous mixers CX', query: 'СХ', subId: 'mixers' },
        { labelRu: 'Линии регенерации песка РП', labelEn: 'Sand reclamation lines RP', query: 'РП', subId: 'reclamation' },
        { labelRu: 'Вибростолы ВСФ', labelEn: 'Compaction tables VSF', query: 'ВСФ', subId: 'compaction' },
      ],
    },
    {
      id: 'furnaces',
      labelRu: 'Плавильное оборуд.',
      labelEn: 'Melting Furnaces',
      items: [
        { labelRu: 'Индукционные печи GW', labelEn: 'Induction furnaces GW', query: 'GW', subId: 'induction' },
        { labelRu: 'Чайниковые ковши КЛ', labelEn: 'Teapot pouring ladles KL', query: 'КЛ', subId: 'ladles' },
      ],
    },
    {
      id: 'green-sand',
      labelRu: 'Оборудование ПГС',
      labelEn: 'Green Sand Equipment',
      items: [
        { labelRu: 'Смесители ПГС серии СТ', labelEn: 'Intensive mixers ST', query: 'СТ', subId: 'mixers' },
        { labelRu: 'Автоматические формовочные линии АФЛ', labelEn: 'Automated molding lines AFL', query: 'АФЛ', subId: 'molding-lines' },
        { labelRu: 'Формовочные машины ФМ', labelEn: 'Molding machines FM', query: 'ФМ', subId: 'molding-machines' },
        { labelRu: 'Охладители оборотной смеси ОС', labelEn: 'Fluid bed sand coolers OS', query: 'ОС', subId: 'green-coolers' },
      ],
    },
    {
      id: 'core-making',
      labelRu: 'Стержневое оборуд.',
      labelEn: 'Core Making Equipment',
      items: [
        { labelRu: 'Стержневые автоматы СА', labelEn: 'Core shooters SA', query: 'СА', subId: 'shooters' },
      ],
    },
    {
      id: 'shot-blast',
      labelRu: 'Дробеметная очистка',
      labelEn: 'Shot Blasting',
      items: [
        { labelRu: 'Дробеметные камеры Q37', labelEn: 'Hanger chambers Q37', query: 'Q37', subId: 'hanger' },
        { labelRu: 'Барабанные дробеметы Q32', labelEn: 'Tumble belt blasters Q32', query: 'Q32', subId: 'tumble' },
      ],
    },
    {
      id: 'casting-machines',
      labelRu: 'Литейные машины',
      labelEn: 'Casting Machinery',
      items: [
        { labelRu: 'Кокильные станки КМ', labelEn: 'Tilt gravity molders KM', query: 'КМ', subId: 'gravity' },
        { labelRu: 'Центробежные машины ЦЛ', labelEn: 'Centrifugal stations CL', query: 'ЦЛ', subId: 'centrifugal' },
      ],
    },
    {
      id: 'cooling-systems',
      labelRu: 'Системы охлаждения',
      labelEn: 'Water Cooling Systems',
      items: [
        { labelRu: 'Испарительные градирни ГЗ', labelEn: 'Closed cooling towers GZ', query: 'ГЗ', subId: 'towers' },
      ],
    }
  ];

  const navItems = [
    { id: 'home', label: t.navHome, icon: Cpu },
    { id: 'catalog', label: t.navCatalog, icon: FileText, hasDropdown: true },
    { id: 'calc', label: t.navCalc, icon: HardHat },
    { id: 'about', label: t.navAbout, icon: Info },
    { id: 'assistant', label: t.navAssistant, icon: ShieldAlert },
  ];

  const handleCategoryClick = (catId: string, query?: string, subId?: string) => {
    if (onCategorySelect) {
      onCategorySelect(catId, query, subId);
    } else {
      setCurrentTab('catalog');
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

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

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setCurrentTab('catalog');
                        if (onCategorySelect) onCategorySelect('all');
                      }}
                      className={`flex items-center space-x-1.5 h-12 px-2 text-[12px] font-bold uppercase tracking-wider transition-all duration-150 border-b-2 cursor-pointer ${
                        isActive || dropdownOpen
                          ? 'border-[#e65410] text-[#e65410]'
                          : 'border-transparent text-gray-700 hover:text-[#e65410]'
                      }`}
                    >
                      <IconComp className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Megamenu absolute panel */}
                    {dropdownOpen && (
                      <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-[880px] max-w-5xl bg-[#0b0f19] text-white rounded-lg shadow-2xl border border-gray-800 p-6 z-50 animate-fadeIn grid grid-cols-4 gap-6">
                        {catalogDropdownCategories.map((cat) => (
                          <div key={cat.id} className="space-y-3">
                            <h5 
                              onClick={() => handleCategoryClick(cat.id)}
                              className="text-[11px] font-black uppercase text-[#e65410] tracking-wider cursor-pointer hover:underline border-b border-gray-800 pb-1.5"
                            >
                              {lang === 'en' ? cat.labelEn : cat.labelRu}
                            </h5>
                            <ul className="space-y-2">
                              {cat.items.map((sub, sidx) => (
                                <li key={sidx}>
                                  <button
                                    onClick={() => handleCategoryClick(cat.id, sub.query, sub.subId)}
                                    className="text-left text-[11px] text-gray-300 hover:text-white transition duration-150 flex items-start gap-1 py-0.5 group/sub border-none bg-transparent p-0 cursor-pointer w-full"
                                  >
                                    <span className="text-[#e65410] opacity-50 group-hover/sub:opacity-100 font-mono">›</span>
                                    <span>{lang === 'en' ? sub.labelEn : sub.labelRu}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        
                        <div className="col-span-4 border-t border-gray-800 pt-4 mt-2 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                          <span className="flex items-center gap-1">
                            <Sparkles className="h-3 w-3 text-[#e65410] animate-pulse" />
                            <span>{lang === 'en' ? 'Direct navigation from Siberian Foundry Technologies (Sibtehlit)' : 'Официальный номенклатурный список «Сибтехлит»'}</span>
                          </span>
                          <button
                            onClick={() => handleCategoryClick('all')}
                            className="bg-gray-800 hover:bg-[#e65410] text-white px-3 py-1 rounded text-[9px] uppercase font-bold transition border-none cursor-pointer"
                          >
                            {lang === 'en' ? 'Open Full Catalog' : 'Открыть весь каталог ↗'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

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

            if (item.hasDropdown) {
              return (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-left border-l-4 cursor-pointer ${
                      isActive
                        ? 'bg-orange-50 text-[#e65410] border-[#e65410]'
                        : 'text-gray-700 hover:bg-gray-50 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComp className="h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${mobileCatalogOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mobil catalogue list */}
                  {mobileCatalogOpen && (
                    <div className="bg-gray-50 pl-8 pr-4 py-2 space-y-3 border-l-4 border-orange-200">
                      {catalogDropdownCategories.map((cat) => (
                        <div key={cat.id} className="space-y-1">
                          <button
                            onClick={() => handleCategoryClick(cat.id)}
                            className="text-left font-black text-[11px] uppercase text-[#e65410] tracking-wider py-1 cursor-pointer border-none bg-transparent w-full"
                          >
                            {lang === 'en' ? cat.labelEn : cat.labelRu}
                          </button>
                          <ul className="pl-2 space-y-1">
                            {cat.items.map((sub, sidx) => (
                              <li key={sidx}>
                                <button
                                  onClick={() => handleCategoryClick(cat.id, sub.query, sub.subId)}
                                  className="text-left text-[11px] text-gray-600 hover:text-[#e65410] block py-1 border-none bg-transparent cursor-pointer w-full"
                                >
                                  • {lang === 'en' ? sub.labelEn : sub.labelRu}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="pt-2 border-t border-gray-200">
                        <button
                          onClick={() => handleCategoryClick('all')}
                          className="w-full py-2 bg-gray-900 text-white rounded text-xs font-bold uppercase tracking-wide cursor-pointer text-center border-none"
                        >
                          {lang === 'en' ? 'All Equipment' : 'Все оборудование'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

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
