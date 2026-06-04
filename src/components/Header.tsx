import { useState, useRef, useEffect } from 'react';
import { ShoppingCart, HardHat, ShieldAlert, Cpu, FileText, ChevronDown, Award, Sparkles, Sliders, Info, Phone } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onCategorySelect?: (category: string, query?: string, subId?: string, productId?: string) => void;
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
  const [isScrolled, setIsScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled((prevScrolled) => {
        if (currentScrollY > 100) {
          return true;
        } else if (currentScrollY < 40) {
          return false;
        }
        return prevScrolled;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderMegamenuDropdown = () => {
    if (!dropdownOpen) return null;
    return (
      <div className="absolute top-[calc(100%-1px)] left-4 right-4 md:left-0 md:right-0 mx-auto w-[calc(100vw-2rem)] md:w-full max-w-5xl bg-[#00333b] text-white rounded-b-lg shadow-2xl border border-teal-800 p-6 z-[9999] animate-fadeIn grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {catalogDropdownCategories.map((cat) => (
          <div key={cat.id} className="space-y-3">
            <h5 
              onClick={() => handleCategoryClick(cat.id)}
              className="text-[11px] font-black uppercase text-[#e65410] tracking-wider cursor-pointer hover:underline border-b border-[#004a55] pb-1.5"
            >
              {lang === 'en' ? cat.labelEn : cat.labelRu}
            </h5>
            <ul className="space-y-2">
              {cat.items.map((sub, sidx) => (
                <li key={sidx}>
                  <button
                    onClick={() => handleCategoryClick(cat.id, sub.query, sub.subId, sub.productId)}
                    className="text-left text-[11px] text-gray-100 hover:text-white transition duration-150 flex items-start gap-1 py-0.5 group/sub border-none bg-transparent p-0 cursor-pointer w-full"
                  >
                    <span className="text-[#e65410] opacity-50 group-hover/sub:opacity-100 font-mono">›</span>
                    <span>{lang === 'en' ? sub.labelEn : sub.labelRu}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="col-span-2 lg:col-span-4 border-t border-[#004a55] pt-4 mt-2 flex items-center justify-between text-[10px] text-gray-200 font-mono">
          <span className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-[#e65410] animate-pulse" />
            <span>{lang === 'en' ? 'Direct navigation from Siberian Foundry Technologies (Sibtehlit)' : 'Официальный номенклатурный список «Сибтехлит»'}</span>
          </span>
          <button
            onClick={() => handleCategoryClick('all')}
            className="bg-[#001f24] hover:bg-[#e65410] border border-[#004a55] hover:border-[#e65410] text-white px-3 py-1 rounded text-[9px] uppercase font-bold transition cursor-pointer"
          >
            {lang === 'en' ? 'Open Full Catalog' : 'Открыть весь каталог ↗'}
          </button>
        </div>
      </div>
    );
  };

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
        { labelRu: 'Ленточные дробеметы Q32', labelEn: 'Tumble belt blasters Q32', query: 'Q32', subId: 'shot-blast-machines', productId: 'shot-blast-q32-rubber' },
        { labelRu: 'Барабанные дробеметы Q31', labelEn: 'Tumble steel drum systems Q31', query: 'Q31', subId: 'shot-blast-machines', productId: 'shot-blast-q31-drum' },
        { labelRu: 'Подвесные дробеметы Q37', labelEn: 'Overhead hook chambers Q37', query: 'Q37', subId: 'shot-blast-machines', productId: 'shot-blast-q37-hanger' },
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
    { id: 'catalog', label: lang === 'en' ? 'Catalog' : 'Каталог', icon: FileText, hasDropdown: true },
    { id: 'in-stock', label: lang === 'en' ? 'In Stock' : 'Наличие', icon: Award },
    { id: 'about', label: lang === 'en' ? 'Company' : 'Компания', icon: Info },
    { id: 'contacts', label: lang === 'en' ? 'Contacts' : 'Контакты', icon: Phone },
  ];

  const handleCategoryClick = (catId: string, query?: string, subId?: string, productId?: string) => {
    if (onCategorySelect) {
      onCategorySelect(catId, query, subId, productId);
    } else {
      setCurrentTab('catalog');
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-xs'
    }`}>
      {/* Top micro-bar */}
      <div className={`bg-[#00333b] text-white text-[11px] px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'h-0 py-0 overflow-hidden opacity-0 pointer-events-none' 
          : 'h-auto py-2.5 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex gap-6">
            <span>📍 {t.addressCity}</span>
            <span className="hidden sm:inline">📞 8-800-550-60-54</span>
            <span className="hidden md:inline">📞 +7 (383) 33-54-0-54</span>
            <span className="hidden lg:inline">✉ info@sibtehlit.ru</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 sm:h-15' : 'h-20'} py-1 sm:py-2`}>
          
          {/* Logo with the beautiful custom official Sibtehlit SVG */}
          <div 
            onClick={() => setCurrentTab('home')} 
            className="flex items-center space-x-2.5 sm:space-x-3.5 cursor-pointer group select-none hover:opacity-95"
          >
            <svg 
              className={`shrink-0 transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-8 w-8 sm:h-9 sm:w-9' : 'h-11 w-11 sm:h-13 sm:w-13'}`}
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* The open circle representing the ladle, with professional thick stroke */}
              <path
                d="M 68 25 A 36 36 0 1 1 32 25"
                stroke="#00333b"
                strokeWidth="15"
                strokeLinecap="butt"
                fill="none"
              />
              {/* The energetic crescent flame swooshing out of the top-left */}
              <path
                d="M 50 43 C 54 34, 52 14, 24 4 C 35 12, 45 28, 50 43 Z"
                fill="#e65410"
              />
            </svg>
            <div>
              <div className="flex items-center leading-none">
                <span className={`font-sans font-black tracking-normal text-[#00333b] uppercase transition-all duration-350 ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
                  {lang === 'en' ? 'Sibtehlit' : 'Сибтехлит'}
                </span>
              </div>
              <p className={`text-[9px] sm:text-[10px] text-[#00333b] font-bold tracking-[0.14em] uppercase font-sans mt-0.5 leading-none transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden mt-0' : 'h-auto opacity-100'}`}>
                {lang === 'en' ? 'YOUR FOUNDRY PARTNER' : 'ВАШ ЛИТЕЙНЫЙ ПАРТНЕР'}
              </p>
            </div>
          </div>

          {/* Centered Menu on Scrolled Header */}
          <nav className={`hidden md:flex items-center lg:space-x-5 space-x-2 transition-all duration-300 h-full ${
            isScrolled ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible w-0 overflow-hidden pointer-events-none'
          }`}>
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentTab === item.id;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="h-full flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setCurrentTab('catalog');
                        if (onCategorySelect) onCategorySelect('all');
                      }}
                      className={`flex items-center space-x-1.5 h-full px-2 lg:px-3 text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-150 border-b-2 cursor-pointer ${
                        isActive || dropdownOpen
                          ? 'border-[#e65410] text-[#e65410]'
                          : 'border-transparent text-gray-750 hover:text-[#e65410]'
                      }`}
                    >
                      <IconComp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>{item.label}</span>
                      <ChevronDown className={`h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {renderMegamenuDropdown()}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center space-x-1.5 h-full px-2 lg:px-3 text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-150 border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-[#e65410] text-[#e65410]'
                      : 'border-transparent text-gray-750 hover:text-[#e65410]'
                  }`}
                >
                  <IconComp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Calculators, AI-Assistant & RFQ Cart */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            {/* Language Switcher for Scrolled Mode */}
            {isScrolled && (
              <div className="hidden sm:flex items-center gap-2 pr-2.5 mr-0.5 border-r border-gray-200 text-[10px] font-mono leading-none">
                <button
                  onClick={() => setLang('en')}
                  className={`cursor-pointer transition-colors duration-150 ${lang === 'en' ? 'font-bold text-[#e65410]' : 'text-gray-400 hover:text-gray-700'}`}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLang('ru')}
                  className={`cursor-pointer transition-colors duration-150 ${lang === 'ru' ? 'font-bold text-[#e65410]' : 'text-gray-400 hover:text-gray-700'}`}
                >
                  RU
                </button>
              </div>
            )}

            {/* Foundry Calculator Button */}
            <button 
              onClick={() => setCurrentTab('calc')}
              className={`flex items-center space-x-1.5 font-bold uppercase tracking-wider rounded border transition-all duration-150 cursor-pointer ${
                currentTab === 'calc'
                  ? 'bg-[#e65410] border-[#e65410] text-white shadow-xs'
                  : 'bg-white border-gray-200 text-gray-700 hover:text-[#e65410] hover:border-[#e65410]'
              } ${
                isScrolled 
                  ? 'px-2 py-1.5 sm:px-3 sm:py-2 text-[10px]' 
                  : 'px-3 py-2 sm:px-4 sm:py-2.5 text-[11px]'
              }`}
            >
              <Sliders className={isScrolled ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
              <span className="hidden md:inline">{lang === 'en' ? 'Calculator' : 'Литейный калькулятор'}</span>
              <span className="inline md:hidden">{lang === 'en' ? 'Calc' : 'Калькулятор'}</span>
            </button>

            {/* AI-Assistant Button */}
            <button 
              onClick={() => setCurrentTab('assistant')}
              className={`flex items-center space-x-1.5 font-bold uppercase tracking-wider rounded border transition-all duration-150 cursor-pointer ${
                currentTab === 'assistant'
                  ? 'bg-[#00333b] border-[#00333b] text-white shadow-xs'
                  : 'bg-white border-gray-200 text-gray-700 hover:text-[#00333b] hover:border-[#00333b]'
              } ${
                isScrolled 
                  ? 'px-2 py-1.5 sm:px-3 sm:py-2 text-[10px]' 
                  : 'px-3 py-2 sm:px-4 sm:py-2.5 text-[11px]'
              }`}
            >
              <Sparkles className={`${isScrolled ? 'h-3 w-3' : 'h-3.5 w-3.5'} text-orange-500 animate-pulse`} />
              <span className="hidden md:inline">{lang === 'en' ? 'AI Selection' : 'ИИ-Подбор'}</span>
              <span className="inline md:hidden">{lang === 'en' ? 'AI' : 'ИИ-Подбор'}</span>
            </button>

            {/* RFQ Cart Trigger */}
            <button
              id="rfq-cart-btn"
              onClick={() => setCurrentTab('rfq')}
              className={`relative flex items-center space-x-1.5 font-bold uppercase tracking-wider transition-all duration-150 rounded border cursor-pointer ${
                currentTab === 'rfq'
                  ? 'bg-[#e65410] border-[#e65410] text-white'
                  : 'bg-[#00333b] border-[#00333b] hover:bg-[#e65410] hover:border-[#e65410] text-white'
              } ${
                isScrolled 
                  ? 'px-2 py-1.5 sm:px-3 sm:py-2 text-[10px]' 
                  : 'px-3 py-2.5 sm:px-4 sm:py-2.5 text-[11px]'
              }`}
            >
              <ShoppingCart className={isScrolled ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
              <span className="hidden lg:inline">{t.specRequest}</span>
              <span className="inline lg:hidden">{lang === 'en' ? 'RFQ' : 'Запрос'}</span>
              
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

      {/* Secondary Row - Main Navigation Menu (like on sltgroup.ru) */}
      <div className={`bg-slate-50 border-t border-b border-gray-200 hidden md:block transition-all duration-300 ease-in-out origin-top ${
        isScrolled 
          ? 'h-0 overflow-hidden border-t-0 border-b-0 opacity-0 pointer-events-none' 
          : 'h-12 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex space-x-2 lg:space-x-8 h-12 items-center justify-center">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentTab === item.id;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="h-full flex items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setCurrentTab('catalog');
                        if (onCategorySelect) onCategorySelect('all');
                      }}
                      className={`flex items-center space-x-1.5 h-full px-4 text-[11px] font-black uppercase tracking-wider transition-all duration-150 border-b-2 cursor-pointer ${
                        isActive || dropdownOpen
                          ? 'border-[#e65410] text-[#e65410]'
                          : 'border-transparent text-gray-750 hover:text-[#e65410]'
                      }`}
                    >
                      <IconComp className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {renderMegamenuDropdown()}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center space-x-1.5 h-full px-4 text-[11px] font-black uppercase tracking-wider transition-all duration-150 border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-[#e65410] text-[#e65410]'
                      : 'border-transparent text-gray-750 hover:text-[#e65410]'
                  }`}
                >
                  <IconComp className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
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
                                  onClick={() => handleCategoryClick(cat.id, sub.query, sub.subId, sub.productId)}
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
                          className="w-full py-2 bg-[#00333b] text-white rounded text-xs font-bold uppercase tracking-wide cursor-pointer text-center border-none"
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
