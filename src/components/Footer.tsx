import { ShieldCheck, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  lang: 'ru' | 'en';
}

export default function Footer({ setCurrentTab, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#0b0f19] text-white border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Desc (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => setCurrentTab('home')}>
              <svg 
                className="h-10 w-10 shrink-0 transition-transform duration-200 hover:scale-105" 
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
                <span className="font-sans font-black text-xl tracking-tight uppercase text-white block">
                  {lang === 'en' ? 'Sibtehlit' : 'Сибтехлит'}
                </span>
                <span className="text-[8px] font-mono tracking-wider uppercase text-gray-500 block leading-tight">
                  {lang === 'en' ? 'YOUR FOUNDRY PARTNER' : 'ВАШ ЛИТЕЙНЫЙ ПАРТНЕР'}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {lang === 'en'
                ? '"Sibtehlit" ("Siberian Casting Technologies") is a leading supplier and systems integrator of advanced industrial foundry machinery. Full-cycle professional thermodynamic metallurgy design.'
                : '«Сибтехлит» («Сибирские Технологии Литья») — ведущий поставщик и системный интегратор промышленного литейного оборудования. Профессиональный инжиниринг полного цикла.'}
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-2 w-fit rounded">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>
                {lang === 'en'
                  ? 'Double quality control check before shipping out from partner manufacturers'
                  : 'Двойной контроль ОТК перед погрузкой на заводе-изготовителе'}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation connections (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#e65410] font-bold">
              {t.catMixersTitle}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li>
                <button onClick={() => setCurrentTab('catalog')} className="hover:text-[#e65410] transition cursor-pointer text-left">
                  {lang === 'en' ? 'Continuous Mixers CX series' : 'Смесители ХТС серии СХ'}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('catalog')} className="hover:text-[#e65410] transition cursor-pointer text-left">
                  {lang === 'en' ? 'Sand Reclamation Machinery' : 'Регенерация формовочного песка'}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('catalog')} className="hover:text-[#e65410] transition cursor-pointer text-left">
                  {lang === 'en' ? 'Induction Crucible Furnaces' : 'Индукционные тигельные печи'}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('catalog')} className="hover:text-[#e65410] transition cursor-pointer text-left">
                  {lang === 'en' ? 'Overhead Shot Blasting Cabinets' : 'Дробеметные станции очистки'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts information (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#e65410] font-bold">
              {lang === 'en' ? 'Headquarters Contacts' : 'Центральные контакты'}
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-mono">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-[#e65410] shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'en' ? 'Address:' : 'Адрес:'}</strong> {t.addressFull}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-[#e65410] shrink-0" />
                <span>+7 (383) 381-88-12 ({lang === 'en' ? 'Novosibirsk' : 'Новосибирск'})</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-[#e65410] shrink-0" />
                <span>info@sibtehlit.ru ({lang === 'en' ? 'machinery supply' : 'поставка оборудования'})</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <FileText className="h-4 w-4 text-[#e65410] shrink-0" />
                <span>{t.innLabel}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal block */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 text-center md:flex md:justify-between items-center text-xs text-gray-500 font-mono">
          <p>{t.copyright}</p>
          <p className="mt-2 md:mt-0">{t.engineeringPlan}</p>
        </div>

      </div>
    </footer>
  );
}
