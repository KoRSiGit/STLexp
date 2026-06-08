import { useState, useRef, useEffect, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  Search, 
  ChevronDown, 
  Check, 
  Plus, 
  AlertCircle, 
  Flame, 
  Layers, 
  Zap, 
  Cpu, 
  Wind, 
  ArrowRight, 
  HardHat, 
  FileText, 
  ShieldAlert, 
  Compass, 
  Activity, 
  Settings,
  Table,
  Sliders
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import TrustBanner from './TrustBanner';

const steelPouringBg = 'https://images.unsplash.com/photo-1605336306054-06f120fc69cf?auto=format&fit=crop&w=1600&q=80';

interface ProductCatalogProps {
  onAddToRFQ: (product: Product) => void;
  selectedCategory?: string;
  rfqItemsKeys: string[];
  lang: 'ru' | 'en';
}

export default function ProductCatalog({ onAddToRFQ, selectedCategory, rfqItemsKeys, lang }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string | 'all'>('all');
  const [activeSubsubcategory, setActiveSubsubcategory] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProductSpecs, setExpandedProductSpecs] = useState<Record<string, boolean>>({});
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
  const catalogListSectionRef = useRef<HTMLDivElement>(null);

  const SUBCATEGORIES_MAP: Record<string, { id: string; nameRu: string; nameEn: string; descRu: string; descEn: string }[]> = {
    'sand-mixers-xtc': [
      { id: 'mixers', nameRu: 'Смесители ХТС', nameEn: 'No-Bake Mixers', descRu: 'Смесители ХТС серии СХ непрерывного действия', descEn: 'Continuous mixers CX series' },
      { id: 'reclamation', nameRu: 'Регенерация песка ХТС', nameEn: 'Resin Sand Reclamation', descRu: 'Установки и линии регенерации РП', descEn: 'Reclamation lines RP series' },
      { id: 'compaction', nameRu: 'Вибростолы и формовка', nameEn: 'Compaction & Molding', descRu: 'Уплотнительные линии и вибростолы ВСФ', descEn: 'Compaction tables VSF series' },
    ],
    'furnaces': [
      { id: 'induction', nameRu: 'Индукционные печи', nameEn: 'Induction Furnaces', descRu: 'Плавильные индукционные тигельные электропечи GW', descEn: 'High capacity coreless induction systems GW' },
      { id: 'ladles', nameRu: 'Заливочные ковши', nameEn: 'Pouring Ladles', descRu: 'Литейные ковши чайникового типа КЛ', descEn: 'Teapot pouring ladles KL series' },
    ],
    'green-sand': [
      { id: 'mixers', nameRu: 'Смесители ПГС', nameEn: 'Green Sand Mixers', descRu: 'Интенсивные вертикально-роторные смесители серии СТ', descEn: 'Intensive vertical rotor pan mixers ST series' },
      { id: 'molding-lines', nameRu: 'Автоматические формовочные линии ПГС', nameEn: 'Automatic Molding Lines', descRu: 'Безопочные формовочные линии высокого давления АФЛ', descEn: 'Flaskless green sand molding lines AFL series' },
      { id: 'molding-machines', nameRu: 'Формовочные машины', nameEn: 'Molding Machines', descRu: 'Встряхивающие формовочные машины с допрессовкой ФМ', descEn: 'Jolt squeeze molding machines FM series' },
      { id: 'green-coolers', nameRu: 'Охладители оборотной смеси', nameEn: 'Spent Sand Coolers', descRu: 'Установки охлаждения кипящего слоя песка ОС', descEn: 'Fluid bed spend sand coolers OS series' },
    ],
    'core-making': [
      { id: 'shooters', nameRu: 'Стержневые автоматы', nameEn: 'Core Shooters', descRu: 'Пескострельные полуавтоматы и автоматы серии СА', descEn: 'Amine gas shooters SA series' },
    ],
    'shot-blast': [
      { id: 'shot-blast-machines', nameRu: 'Дробемётное оборудование', nameEn: 'Shot blasting units', descRu: 'Дробемёты: ленточного, барабанного, подвесного типов', descEn: 'Tumble rubber, tumble steel, overhead hook' }
    ],
    'casting-machines': [
      { id: 'molders', nameRu: 'Литейные формообразующие машины', nameEn: 'Molding & Casting Machinery', descRu: 'Кокильные станки КМ-Г и центробежные установки ЦЛ', descEn: 'Hydraulic die molding and centrifugal casters' }
    ],
    'cooling-systems': [
      { id: 'cooling-towers', nameRu: 'Охладительное оборудование', nameEn: 'Cooling Equipment', descRu: 'Закрытые кулеры и испарительные градирни серии ГЗ', descEn: 'Closed evaporative water cooling towers GZ' }
    ]
  };

  // Automatically reset sub-subcategory selection when active category or subcategory updates
  useEffect(() => {
    setActiveSubsubcategory('all');
  }, [activeCategory, activeSubcategory]);

  // Reset selected product when category or subcategory changes manually
  useEffect(() => {
    setSelectedProductId(null);
  }, [activeCategory, activeSubcategory]);

  // Compute sub-subcategories available dynamically from physical products data for active choice
  const availableSubsubcategories = useMemo(() => {
    if (activeCategory === 'all' || activeSubcategory === 'all') return [];
    
    const items = PRODUCTS.filter(
      (p) => p.category === activeCategory && p.subcategory === activeSubcategory
    );
    
    const seen = new Set<string>();
    const list: { id: string; nameRu: string; nameEn: string }[] = [];
    
    items.forEach((p) => {
      if (p.subsubcategory && !seen.has(p.subsubcategory)) {
        seen.add(p.subsubcategory);
        list.push({
          id: p.subsubcategory,
          nameRu: p.subsubcategoryRu || p.subsubcategory,
          nameEn: p.subsubcategoryEn || p.subsubcategory
        });
      }
    });
    
    return list;
  }, [activeCategory, activeSubcategory]);

  // Sync selectedCategory from parent component and handle custom event triggers
  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory as ProductCategory | 'all');
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handleSync = () => {
      const q = (window as any)._pendingCatalogQuery || '';
      setSearchQuery(q);
      const sub = (window as any)._pendingCatalogSubId || 'all';
      setActiveSubcategory(sub);
      if (selectedCategory) {
        setActiveCategory(selectedCategory as ProductCategory | 'all');
      }
      const prodId = (window as any)._pendingProductId || '';
      if (prodId) {
        setSelectedProductId(prodId);
        // Clear to avoid double trigger
        (window as any)._pendingProductId = '';
      } else {
        setSelectedProductId(null);
      }
    };
    window.addEventListener('catalog-query-sync', handleSync);
    
    // Initial check on mount
    if ((window as any)._pendingCatalogQuery !== undefined) {
      setSearchQuery((window as any)._pendingCatalogQuery);
    }
    if ((window as any)._pendingCatalogSubId !== undefined) {
      setActiveSubcategory((window as any)._pendingCatalogSubId);
    }
    if ((window as any)._pendingProductId) {
      setSelectedProductId((window as any)._pendingProductId);
      (window as any)._pendingProductId = '';
    }
    
    return () => {
      window.removeEventListener('catalog-query-sync', handleSync);
    };
  }, [selectedCategory]);

  const t = TRANSLATIONS[lang];

  const categories: { id: ProductCategory | 'all'; label: string; descRu: string; descEn: string }[] = [
    { id: 'all', label: t.catAll, descRu: 'Общий обзор всех производственных направлений', descEn: 'Overview of all foundry supply lines' },
    { id: 'sand-mixers-xtc', label: t.catXtc, descRu: 'Смесители непрерывного действия, регенерация и вибростолы', descEn: 'Continuous mixers, dry reclamation and compaction' },
    { id: 'furnaces', label: t.catFurnaces, descRu: 'Индукционные тигельные печи высокой мощности и ковши', descEn: 'High capacity coreless induction systems & pouring bails' },
    { id: 'green-sand', label: t.catGreenSand, descRu: 'Вертикально-роторные смесители песка, охладители оборотной смеси ПГС', descEn: 'Vertical rotor sand mixers, spent sand fluid bed coolers' },
    { id: 'core-making', label: t.catCoreMaking, descRu: 'Пескострельные стержневые полуавтоматы по Cold-Box-Amine процессу', descEn: 'Pneumatic core blowing shooters based on Cold-Box-Amine technology' },
    { id: 'shot-blast', label: t.catShotBlast, descRu: 'Установки подвесного, барабанного и рольгангового типов', descEn: 'Hanger, rubber tumble belt and conveyor blast systems' },
    { id: 'casting-machines', label: t.catCasting, descRu: 'Полуавтоматы кокильного литья и центробежная формовка', descEn: 'Tilting gravity die systems and centrifugal molding' },
    { id: 'cooling-systems', label: t.catCooling, descRu: 'Закрытые герметичные градирни испарительного класса', descEn: 'Closed loop clean copper evaporative cool towers' },
  ];

  // Information details corresponding exactly to https://www.sltgroup.ru/catalog/ divisions
  const sltDivisions = [
    {
      id: 'sand-mixers-xtc' as ProductCategory,
      titleRu: 'Оборудование для формовки ХТС',
      titleEn: 'No-Bake Molding & Sand Processing',
      descRu: 'Автоматические лопастные смесители непрерывного действия СХ и высокоэффективные линии регенерации песка РП. Снижают закупку свежего песка до 90%.',
      descEn: 'Automatic continuous sand mixers CX and high performance dry mechanical sand reclamation RP. Minimize costs of raw silica sand by up to 90%.',
      icon: Layers,
      color: 'border-orange-500/20 hover:border-orange-500',
      tagRu: 'ХТС ФОРМОВКА',
      tagEn: 'NO-BAKE MOLDING',
      statsRu: 'Производительность: 3 — 30 т/ч',
      statsEn: 'Throughput capacity: 3 — 30 t/h',
      subcategoriesRu: [
        { label: 'Смесители ХТС серии СХ', query: 'СХ', subId: 'mixers' },
        { label: 'Линии регенерации РП-8', query: 'РП', subId: 'reclamation' },
        { label: 'Вибростолы ВСФ-12', query: 'ВСФ', subId: 'compaction' }
      ],
      subcategoriesEn: [
        { label: 'CX Series continuous mixers', query: 'CX', subId: 'mixers' },
        { label: 'RP No-bake reclamation', query: 'RP', subId: 'reclamation' },
        { label: 'VSF Compaction tables', query: 'VSF', subId: 'compaction' }
      ]
    },
    {
      id: 'furnaces' as ProductCategory,
      titleRu: 'Индукционные плавильные комплексы',
      titleEn: 'Induction Melting & Pouring Complexes',
      descRu: 'Сверхмощные тигельные индукционные электропечи со стальным каркасом для литейного чугуна, углеродистой стали и бронзы.',
      descEn: 'High capacity coreless induction melting furnaces equipped with robust steel structures and thyristor converters.',
      icon: Flame,
      color: 'border-[#e65410]/20 hover:border-[#e65410]',
      tagRu: 'ПЛАВКА МЕТАЛЛА',
      tagEn: 'MELTING METALLURGY',
      statsRu: 'Емкость тигля: 0.25 — 5 тонн',
      statsEn: 'Crucible size: 0.25 — 5 tons',
      subcategoriesRu: [
        { label: 'Тигельные печи GW-1.0', query: 'GW', subId: 'induction' },
        { label: 'Чайниковые ковши КЛ-2', query: 'КЛ', subId: 'ladles' }
      ],
      subcategoriesEn: [
        { label: 'Crucible furnaces GW', query: 'GW', subId: 'induction' },
        { label: 'Teapot ladles KL', query: 'KL', subId: 'ladles' }
      ]
    },
    {
      id: 'green-sand' as ProductCategory,
      titleRu: 'Оборудование ПГС',
      titleEn: 'Green Sand Equipment',
      descRu: 'Интенсивные вертикально-роторные чашечные смесители СТ, автоматические безопочные формовочные линии АФЛ и машины ФМ.',
      descEn: 'High efficiency intensive pan mixers ST, automated flaskless molding lines AFL, jolt squeeze machines FM and fluid bed coolers OS.',
      icon: Sliders,
      color: 'border-emerald-500/20 hover:border-emerald-500',
      tagRu: 'ПГС СМЕСЕПРИГОТОВЛЕНИЕ',
      tagEn: 'GREEN SAND PREPARATION',
      statsRu: 'Производительность: до 30 т/ч',
      statsEn: 'Mix output limits: 30 t/h',
      subcategoriesRu: [
        { label: 'Интенсивные смесители СТ-1500', query: 'СТ', subId: 'mixers' },
        { label: 'Автоматические линии АФЛ-6080', query: 'АФЛ', subId: 'molding-lines' },
        { label: 'Формовочные машины ФМ-20', query: 'ФМ', subId: 'molding-machines' },
        { label: 'Охладители оборотной смеси ОС-60', query: 'ОС', subId: 'green-coolers' }
      ],
      subcategoriesEn: [
        { label: 'Intensive pan mixers ST', query: 'ST', subId: 'mixers' },
        { label: 'Automated molding lines AFL', query: 'AFL', subId: 'molding-lines' },
        { label: 'Molding machines FM', query: 'FM', subId: 'molding-machines' },
        { label: 'Fluid bed spend coolers OS', query: 'OS', subId: 'green-coolers' }
      ]
    },
    {
      id: 'core-making' as ProductCategory,
      titleRu: 'Стержневое оборудование',
      titleEn: 'Core Blowing & Shooter Machinery',
      descRu: 'Автоматические пескострельные заливочные машины СА по технологии Cold-Box-Amine для прецизионных заготовок стержней.',
      descEn: 'High speed automated sand core blowing shooter machines CA with gaseous amine curing cabinets designed for bulk setups.',
      icon: Compass,
      color: 'border-purple-500/20 hover:border-purple-500',
      tagRu: 'СТЕРЖНЕВОЕ ПРОИЗВОДСТВО',
      tagEn: 'SAND CORE SHOOTING',
      statsRu: 'Объемы стержня: до 80 литров',
      statsEn: 'Core box volumes: up to 80L',
      subcategoriesRu: [
        { label: 'Пескострельные автоматы СА-400', query: 'СА', subId: 'shooters' }
      ],
      subcategoriesEn: [
        { label: 'Amine shooters SA-400', query: 'SA', subId: 'shooters' }
      ]
    },
    {
      id: 'shot-blast' as ProductCategory,
      titleRu: 'Дробеметное оборудование очистки',
      titleEn: 'Shot Blasting & Decoring Cabinets',
      descRu: 'Промышленные дробеметные установки очистки отливок барабанного, подвесного и рольгангового типов.',
      descEn: 'Industrial shot blasting systems and decoring cabinets of tumble, hanger and conveyor types designed for heavy cast parts.',
      icon: HardHat,
      color: 'border-yellow-500/20 hover:border-yellow-500',
      tagRu: 'ДРОБЕМЕТНАЯ ОЧИСТКА',
      tagEn: 'SHOT BLASTING',
      statsRu: 'Производительность: до 15 т/ч',
      statsEn: 'Blast throughput: up to 15 t/h',
      subcategoriesRu: [
        { label: 'Дробеметы Q32 / Q31 / Q37', query: 'Q', subId: 'shot-blast-machines' }
      ],
      subcategoriesEn: [
        { label: 'Blasters Q32 / Q31 / Q37', query: 'Q', subId: 'shot-blast-machines' }
      ]
    },
    {
      id: 'casting-machines' as ProductCategory,
      titleRu: 'Литейные машины формовки',
      titleEn: 'Casting & Die Molding Machinery',
      descRu: 'Высокоточные гидравлические кокильные станки КМ и центробежные литейные установки ЦЛ для качественных отливок со сложной геометрией.',
      descEn: 'Precision hydraulic gravity die casting machines KM and centrifugal casting machines CL for defect-free complex geometry parts.',
      icon: ShieldAlert,
      color: 'border-blue-500/20 hover:border-blue-500',
      tagRu: 'ЛИТЕЙНЫЕ СТАНКИ',
      tagEn: 'GRAVITY CASTING & CENTRIFUGAL',
      statsRu: 'Масса отливки: до 500 кг',
      statsEn: 'Max cast weight: up to 500 kg',
      subcategoriesRu: [
        { label: 'Кокильные станки КМ', query: 'КМ', subId: 'molders' },
        { label: 'Центробежные машины ЦЛ', query: 'ЦЛ', subId: 'molders' }
      ],
      subcategoriesEn: [
        { label: 'Tilt gravity molders KM', query: 'KM', subId: 'molders' },
        { label: 'Centrifugal stations CL', query: 'CL', subId: 'molders' }
      ]
    },
    {
      id: 'cooling-systems' as ProductCategory,
      titleRu: 'Промышленные градирни и охлаждение',
      titleEn: 'Industrial Cooling & Environment',
      descRu: 'Замкнутые испарительные градирни ГЗ с чистым водоблоком для стабильной плавки индукционных комплексов.',
      descEn: 'Closed evaporative water cooling towers GZ with high density clean loops for induction power stability.',
      icon: Wind,
      color: 'border-teal-500/20 hover:border-teal-500',
      tagRu: 'ОХЛАЖДЕНИЕ ЦЕХА',
      tagEn: 'INDUSTRIAL COOLING',
      statsRu: 'Расход воды: до 150 м³/ч',
      statsEn: 'Water flow: up to 150 m³/h',
      subcategoriesRu: [
        { label: 'Градирни закрытые ГЗ', query: 'ГЗ', subId: 'cooling-towers' }
      ],
      subcategoriesEn: [
        { label: 'Cooling towers GZ', query: 'GZ', subId: 'cooling-towers' }
      ]
    }
  ];

  const handleSelectDivision = (divisionId: ProductCategory) => {
    setActiveCategory(divisionId);
    setActiveSubcategory('all');
    setSelectedProductId(null);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCustomModel = (baseProduct: Product, variantModel: string) => {
    const clonedProduct = {
      ...baseProduct,
      id: `${baseProduct.id}-${variantModel}`,
      model: variantModel,
    };
    onAddToRFQ(clonedProduct);
  };

  const toggleSpecs = (productId: string) => {
    setExpandedProductSpecs((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // 1. Category search / filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      // 2. Subcategory check
      if (activeSubcategory !== 'all' && p.subcategory !== activeSubcategory) {
        return false;
      }
      // 3. Sub-subcategory check
      if (activeSubsubcategory !== 'all' && p.subsubcategory !== activeSubsubcategory) {
        return false;
      }
      // 4. Case-insensitive search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesModel = p.model.toLowerCase().includes(query);
        const matchesTitle = p.title.toLowerCase().includes(query) || (p.titleEn && p.titleEn.toLowerCase().includes(query));
        const matchesDesc = p.description.toLowerCase().includes(query) || (p.descriptionEn && p.descriptionEn.toLowerCase().includes(query));
        const matchesVariants = p.variantModels?.some(v => v.model.toLowerCase().includes(query)) || false;
        
        return matchesModel || matchesTitle || matchesDesc || matchesVariants;
      }
      
      return true;
    });
  }, [activeCategory, activeSubcategory, activeSubsubcategory, searchQuery]);

  const isSelectedVariantInSpecs = (baseProductId: string, variantModel: string): boolean => {
    // Check if specifications contain this specific model mark
    return rfqItemsKeys.some(key => key === baseProductId || rfqItemsKeys.includes(`${baseProductId}-${variantModel}`) || rfqItemsKeys.some(k => k === variantModel));
  };

  const resetAllFilters = () => {
    setActiveCategory('all');
    setActiveSubcategory('all');
    setSearchQuery('');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. Industrial Header & Search Banner */}
      <div className="bg-[#00171b] text-white py-14 border-b-4 border-[#e65410] relative overflow-hidden">
        {/* Photo background of steel pouring process with low opacity */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-15 bg-no-repeat mix-blend-luminosity"
          style={{ backgroundImage: `url(${steelPouringBg})` }}
        />
        {/* Soft orange radial heat glow */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#e65410]/5 blur-[120px] pointer-events-none z-0 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 animate-fadeIn">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e65410] font-black flex items-center space-x-2">
                <Activity className="h-4 w-4 text-[#e65410] animate-pulse" />
                <span>{t.catalogSpecTitle}</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-sans">
                {activeCategory === 'all' 
                  ? (lang === 'en' ? 'Metallurgical Equipment Catalog' : 'Каталог оборудования «Сибтехлит»')
                  : categories.find(c => c.id === activeCategory)?.label
                }
              </h1>
              <p className="text-[#a0aec0] text-sm sm:text-base leading-relaxed font-sans max-w-2xl text-shadow-sm">
                {activeCategory === 'all'
                  ? (lang === 'en' 
                    ? 'Advanced casting systems matched to certified GOST standards. Full engineering customization, design of technological layouts, and support.' 
                    : 'Специализированное литейное оборудование, сертифицированное под стандарты металлургии СНГ. Проектирование компоновок, поставка узлов, шеф-монтаж и запуск.')
                  : categories.find(c => c.id === activeCategory)?.descRu
                }
              </p>
            </div>
            
            {/* Real Search Box */}
            <div className="w-full lg:max-w-md bg-black/70 p-5 rounded-none border border-teal-900/60 space-y-2 shrink-0 backdrop-blur-xs">
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">
                {lang === 'en' ? 'Direct database hardware search' : 'Прямой металлургический поиск по ГОСТ/модели'}
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-[#e65410]" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-9 pr-4 py-2.5 bg-[#00171b]/95 border border-teal-950 rounded text-sm text-white placeholder-gray-400 focus:ring-1 focus:ring-[#e65410] focus:border-[#e65410] focus:outline-hidden font-mono"
                />
              </div>
              <p className="text-[9px] text-gray-500 font-mono italic">
                {lang === 'en' ? 'e.g., "CX-10", "reclamation", "induction crucible", "water tower"' : 'Например: "СХ-10", "регенерация", "индукционный тигель", "водонапорная башня"'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Render Page A: Main Catalog Categories Index Page (When Category === 'all') */}
        {activeCategory === 'all' ? (
          <div className="space-y-12">
            <div className="border-l-4 border-[#e65410] pl-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                {lang === 'en' ? 'Industrial Departments' : 'Официальные направления поставок'}
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight font-sans mt-1">
                {lang === 'en' ? 'Browse by Engineering Division' : 'Инжиниринговые разделы каталога'}
              </h3>
              <p className="text-sm text-gray-550 max-w-2xl mt-1">
                {lang === 'en'
                  ? 'Select a division category to view its specialized equipment variants, physical models, and capacity marks.'
                  : 'Выберите интересующий вас раздел литейного цеха. Каждый раздел организован отдельной страницей с типами и марками оборудования.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {sltDivisions.map((div) => {
                const IconComp = div.icon;
                const title = lang === 'en' ? div.titleEn : div.titleRu;
                const desc = lang === 'en' ? div.descEn : div.descRu;

                const DIVISION_IMAGES: Record<string, string> = {
                  'sand-mixers-xtc': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
                  'furnaces': 'https://images.unsplash.com/photo-1605336306054-06f120fc69cf?auto=format&fit=crop&w=600&q=80',
                  'green-sand': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
                  'core-making': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
                  'shot-blast': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
                  'casting-machines': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
                  'cooling-systems': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
                };
                const cardImage = DIVISION_IMAGES[div.id] || DIVISION_IMAGES['sand-mixers-xtc'];

                return (
                  <div
                    key={div.id}
                    className="group bg-white rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-350 hover:shadow-xl hover:-translate-y-1 cursor-pointer select-none relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-0"
                    onClick={() => handleSelectDivision(div.id)}
                  >
                    <div className="space-y-4">
                      {/* Image container conforming to physical aspect ratio with slick hover scale, stretched fully at the top */}
                      <div className="relative aspect-[4/3] w-full bg-gray-55 overflow-hidden flex items-center justify-center border-b border-gray-100">
                        <img
                          src={cardImage}
                          alt={title}
                          className="w-full h-full object-cover transition-all duration-500 ease-out filter brightness-100 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Elegant mini icon badge floating overlay */}
                        <div className="absolute top-3 right-3 bg-black/85 p-2 text-[#e65410] border border-teal-900/10 rounded-lg transition duration-300 group-hover:bg-[#e65410] group-hover:text-white">
                          <IconComp className="h-4 w-4 shrink-0" />
                        </div>
                        {/* Elegant mini "Подробнее" button overlay */}
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#00333b] group-hover:bg-[#e65410] group-hover:text-white font-extrabold text-[10px] uppercase px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1 transition-all duration-300">
                          <span>{lang === 'en' ? 'Learn More' : 'Подробнее'}</span>
                          <ArrowRight className="h-3 w-3 transition-transform duration-250 group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Title & Description with beautiful padding */}
                      <div className="px-5 pb-6 space-y-2">
                        <h4 className="font-sans font-extrabold text-[#00333b] text-base group-hover:text-[#e65410] transition-colors leading-tight uppercase tracking-tight line-clamp-1">
                          {title}
                        </h4>
                        <p className="text-xs text-gray-550 leading-relaxed line-clamp-2">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick search guide and assistance */}
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg flex items-center justify-between flex-col sm:flex-row gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900 uppercase">Нужна помощь с проектированием технологического плана?</h4>
                <p className="text-xs text-gray-600 max-w-2xl">Запустите интерактивного мастера на главной странице или получите моментальный расчет химических компонентов формовки в нашем расчетном модуле.</p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="shrink-0 px-4 py-2 bg-[#e65410] hover:bg-orange-700 text-white font-mono text-xs uppercase font-extrabold rounded border-none cursor-pointer tracking-wider"
              >
                Показать весь список
              </button>
            </div>
          </div>
        ) : (
          
          /* Render Page B: Dedicated Section Page - Clean Full Width Layout with Interactive Subcategory filtering and Custom stats banners */
          <div className="w-full space-y-6 animate-fade-in">
            {/* Header / Breadcrumb navigation panel with Back button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-2xs">
              {/* Breadcrumb path navigation */}
              <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono">
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubcategory('all');
                    setSearchQuery('');
                  }}
                  className="hover:text-gray-900 hover:underline border-none bg-transparent cursor-pointer p-0 font-bold"
                >
                  {lang === 'en' ? 'Catalog' : 'Каталог'}
                </button>
                <span>/</span>
                <span className="text-[#e65410] font-bold uppercase">
                  {categories.find(c => c.id === activeCategory)?.label}
                </span>
                {searchQuery && (
                  <>
                    <span>/</span>
                    <span className="text-gray-600 italic">Поиск: "{searchQuery}"</span>
                  </>
                )}
              </div>

              <button
                onClick={() => {
                  setActiveCategory('all');
                  setActiveSubcategory('all');
                  setSearchQuery('');
                }}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#00333b] hover:bg-teal-900 text-white font-mono text-[10px] uppercase font-bold rounded shadow-xs transition cursor-pointer self-start sm:self-auto border-none"
              >
                <ArrowRight className="h-3.5 w-3.5 transform rotate-180 text-[#e65410]" />
                <span>{lang === 'en' ? 'Back to Divisions' : 'Назад к разделам'}</span>
              </button>
            </div>

            {/* Premium Division Header Jumbotron Card */}
            {(() => {
              const activeDiv = sltDivisions.find(d => d.id === activeCategory);
              if (!activeDiv) return null;
              
              const DivIcon = activeDiv.icon;
              return (
                <div className="relative overflow-hidden bg-gradient-to-br from-[#00171b] via-[#00252b] to-[#00333b] text-white p-6 sm:p-8 rounded-2xl border-l-4 border-l-[#e65410] border-y border-r border-teal-900/30 shadow-md">
                  <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#e65410]/5 blur-[120px] pointer-events-none rounded-full" />
                  
                  {/* Floating Division Icon in background */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 text-teal-800/25 pointer-events-none hidden md:block">
                    <DivIcon className="h-28 w-28 shrink-0 stroke-[1]" />
                  </div>

                  <div className="relative z-10 space-y-4 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-orange-600 text-white font-mono text-[9px] font-black uppercase tracking-widest rounded-md">
                        {lang === 'en' ? activeDiv.tagEn : activeDiv.tagRu}
                      </span>
                      <span className="text-xs text-teal-500 font-mono font-bold flex items-center gap-1">
                        <Activity className="h-3 w-3 animate-pulse text-[#e65410]" />
                        <span>{lang === 'en' ? 'SIBTEXLIT DIVISION' : 'ИНЖИНИРИНГОВЫЙ ДИВИЗИОН'}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black uppercase font-sans tracking-tight text-white leading-tight">
                      {lang === 'en' ? activeDiv.titleEn : activeDiv.titleRu}
                    </h2>

                    <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                      {lang === 'en' ? activeDiv.descEn : activeDiv.descRu}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-teal-950/60">
                      <div className="bg-black/20 p-3 rounded-lg border border-teal-950/40">
                        <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest font-bold">Параметры серии</span>
                        <span className="text-xs font-black text-orange-400 block mt-0.5">{lang === 'en' ? activeDiv.statsEn : activeDiv.statsRu}</span>
                      </div>
                      <div className="bg-black/20 p-3 rounded-lg border border-teal-950/40">
                        <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest font-bold">Приемка и контроль</span>
                        <span className="text-xs font-black text-[#e65410] block mt-0.5">ГОСТ / ISO 9001:2015</span>
                      </div>
                      <div className="bg-black/20 p-3 rounded-lg border border-teal-950/40">
                        <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest font-bold">Индивидуальный заказ</span>
                        <span className="text-xs font-black text-teal-400 block mt-0.5">3D Компоновка в подарок</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Premium Subcategories Navigation Tabs */}
            {(() => {
              const subcategories = SUBCATEGORIES_MAP[activeCategory] || [];
              if (subcategories.length === 0) return null;

              return (
                <div className="space-y-4">
                  <div className="bg-slate-900 text-white p-2 rounded-xl border border-slate-800 flex flex-wrap gap-1.5 shadow-md">
                    <button
                      onClick={() => {
                        setActiveSubcategory('all');
                        setActiveSubsubcategory('all');
                        setSelectedProductId(null);
                      }}
                      className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer border-none flex-grow sm:flex-none text-center ${
                        activeSubcategory === 'all'
                          ? 'bg-[#e65410] text-white shadow-md font-black'
                          : 'bg-transparent text-gray-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {lang === 'en' ? 'All Types' : 'Все подкатегории'}
                    </button>
                    {subcategories.map((sub) => {
                      const isSelected = activeSubcategory === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setActiveSubcategory(sub.id);
                            setActiveSubsubcategory('all');
                            setSelectedProductId(null);
                          }}
                          className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer border-none flex-grow sm:flex-none text-center ${
                            isSelected
                              ? 'bg-[#e65410] text-white shadow-md font-black'
                              : 'bg-transparent text-gray-400 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {lang === 'en' ? sub.nameEn : sub.nameRu}
                        </button>
                      );
                    })}
                  </div>

                  {/* Secondary Line: Sub-subcategories Series (pills) */}
                  {activeSubcategory !== 'all' && availableSubsubcategories.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 bg-slate-100/50 p-2.5 rounded-xl border border-slate-200 animate-slideDown">
                      <span className="text-[10px] font-mono font-black uppercase text-slate-500 mr-2 flex items-center gap-1 select-none">
                        <Sliders className="h-3 w-3 text-[#e65410]" />
                        <span>{lang === 'en' ? 'Model Lineup:' : 'Линейка модификаций:'}</span>
                      </span>
                      <button
                        onClick={() => {
                          setActiveSubsubcategory('all');
                          setSelectedProductId(null);
                        }}
                        className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                          activeSubsubcategory === 'all'
                            ? 'bg-orange-50 border-orange-200 text-[#e65410]'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {lang === 'en' ? 'All series' : 'Все серии'}
                      </button>
                      {availableSubsubcategories.map((subsub) => {
                        const isSelected = activeSubsubcategory === subsub.id;
                        return (
                          <button
                            key={subsub.id}
                            onClick={() => {
                              setActiveSubsubcategory(subsub.id);
                              setSelectedProductId(null);
                            }}
                            className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-lg border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-orange-50 border-orange-200 text-[#e65410]'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            {lang === 'en' ? subsub.nameEn : subsub.nameRu}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* MAIN CATALOG CONTENT ON THE DEDICATED PAGE */}
            <div className="space-y-6">
              
              {/* Counter and header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-3 gap-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-mono font-black text-gray-400 uppercase tracking-widest">
                    {lang === 'en' ? 'Available configurations' : 'Инженерные спецификации под задачи'}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    {lang === 'en' ? 'Foundry equipment register by SIBTEXLIT' : 'Официальный номенклатурный перечень оборудования серии «Сибтехлит»'}
                  </p>
                </div>
                <span className="self-start sm:self-center bg-orange-500/10 text-[#e65410] text-[10px] font-mono px-3 py-1 rounded-md font-extrabold border border-orange-500/20 shrink-0">
                  {filteredProducts.length} {lang === 'en' ? 'models matching' : 'позиций в базе'}
                </span>
              </div>

              {/* Products Rendering for separate category page */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-gray-200 py-16 px-6 text-center rounded-2xl max-w-lg mx-auto shadow-sm space-y-4">
                  <AlertCircle className="h-12 w-12 text-[#e65410] mx-auto animate-bounce" />
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-lg text-gray-900 uppercase tracking-tight">{t.noProductsFound}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {lang === 'en' 
                        ? `We could not find units matching search/filter rules in this division. Please clear the parameters to show everything.` 
                        : `В данной категории нет подходящих агрегатов по заданным параметрам. Попробуйте очистить строку поиска или сбросить фильтры.`}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveSubcategory('all');
                      setActiveSubsubcategory('all');
                    }}
                    className="px-5 py-2.5 bg-[#e65410] hover:bg-orange-700 text-white rounded-lg text-xs font-mono font-bold uppercase transition duration-200 cursor-pointer border-none"
                  >
                    {lang === 'en' ? 'Reset filters' : 'Сбросить фильтры'}
                  </button>
                </div>
              ) : selectedProductId && filteredProducts.some((prod) => prod.id === selectedProductId) ? (
                /* 1. SINGLE DETAILED PRODUCT DETAILED VIEW */
                (() => {
                  const p = PRODUCTS.find((prod) => prod.id === selectedProductId)!;
                  const isSpecsExpanded = !!expandedProductSpecs[p.id];
                  const isAdded = rfqItemsKeys.includes(p.id);

                  const pTitle = lang === 'en' && p.titleEn ? p.titleEn : p.title;
                  const pDesc = lang === 'en' && p.descriptionEn ? p.descriptionEn : p.description;
                  const pFeatures = lang === 'en' && p.featuresEn ? p.featuresEn : p.features;
                  const pCapacity = lang === 'en' && p.capacityEn ? p.capacityEn : p.capacity;
                  const pPower = lang === 'en' && p.powerEn ? p.powerEn : p.power;

                  return (
                    <div className="space-y-6 animate-fade-in">
                      {/* Back to cards listing button */}
                      <button
                        onClick={() => setSelectedProductId(null)}
                        className="flex items-center space-x-1.5 px-4 py-2.5 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-950 font-bold font-mono text-[10px] uppercase rounded-lg border border-gray-200 shadow-2xs transition cursor-pointer border-none"
                      >
                        <ArrowRight className="h-4 w-4 transform rotate-180 text-[#e65410]" />
                        <span>{lang === 'en' ? 'Back to series choice' : 'Назад к выбору моделей серии'}</span>
                      </button>

                      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
                        
                        {/* Column Left (4 units size): Image, Capacity fields and Main spec add button */}
                        <div className="lg:col-span-4 p-5 sm:p-6 bg-gray-50 border-r border-gray-150 flex flex-col justify-between">
                          <div className="space-y-4">
                            
                            {/* Product Frame Image */}
                            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden rounded-xl border border-gray-200">
                              <img
                                src={p.imageUrl}
                                alt={pTitle}
                                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition duration-300"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 left-2 bg-[#00333b]/90 border border-teal-800 text-[#e65410] font-mono text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded">
                                {lang === 'en' ? 'Base Model:' : 'Базовая печь:'} {p.model}
                              </div>
                            </div>

                            {/* Capacity ratings */}
                            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                              {pCapacity && (
                                <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-3xs">
                                  <span className="block text-[8px] text-gray-400 font-extrabold uppercase tracking-wide">ЕДИНЩА / ВЕС</span>
                                  <span className="font-black text-gray-900 block mt-0.5 text-xs">{pCapacity}</span>
                                </div>
                              )}
                              {pPower && (
                                <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-3xs">
                                  <span className="block text-[8px] text-gray-400 font-extrabold uppercase tracking-wide">МОЩНОСТЬ</span>
                                  <span className="font-black text-gray-900 block mt-0.5 text-xs">{pPower}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Base specifications additions */}
                          <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                            <button
                              onClick={() => {
                                onAddToRFQ(p);
                                window.dispatchEvent(new CustomEvent('rfq-items-updated'));
                              }}
                              className={`w-full py-3 px-4 font-mono font-black text-xs uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition border-none cursor-pointer outline-none ${
                                isAdded
                                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                                  : 'bg-[#e65410] hover:bg-orange-700 text-white shadow-sm'
                              }`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="h-4 w-4 shrink-0" />
                                  <span>{t.inSpecsBtn} ({p.model})</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="h-4 w-4 shrink-0 text-white" />
                                  <span>{lang === 'en' ? 'Add basic configuration' : 'Выбрать базовую Спец'}</span>
                                </>
                              )}
                            </button>
                            <p className="text-[9px] text-[#e65410] text-center font-mono font-semibold">
                              *Разработка КД по ТЗ заказчика включена в стоимость.
                            </p>
                          </div>
                        </div>

                        {/* Column Right (8 units size): Title, description, features list, specification variants table */}
                        <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between space-y-5">
                          
                          <div className="space-y-3.5">
                            <div className="flex items-center space-x-1.5 flex-wrap gap-y-1.5">
                              <span className="px-2 py-0.5 font-mono text-[8px] font-black uppercase tracking-widest border border-orange-500/20 text-[#e65410] bg-[#e65410]/5 rounded-md">
                                {p.category === 'sand-mixers-xtc' && (lang === 'en' ? 'No-Bake System' : 'Система ХТС')}
                                {p.category === 'furnaces' && (lang === 'en' ? 'Melting Complex' : 'Плавильный комплекс')}
                                {p.category === 'green-sand' && (lang === 'en' ? 'Green Sand System' : 'Система ПГС')}
                                {p.category === 'core-making' && (lang === 'en' ? 'Sand Core Production' : 'Стержневое производство')}
                                {p.category === 'shot-blast' && (lang === 'en' ? 'Shot Blasting' : 'Дробемётное очистное')}
                                {p.category === 'casting-machines' && (lang === 'en' ? 'Casting / Molding' : 'Формовка / Литье')}
                                {p.category === 'cooling-systems' && (lang === 'en' ? 'Cooling Infrastructure' : 'Охлаждение')}
                              </span>
                              
                              {p.subcategory && (
                                <>
                                  <span className="text-gray-300 text-[10px] font-mono select-none">/</span>
                                  <span className="px-2 py-0.5 font-mono text-[8px] font-black uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-100 rounded-md">
                                    {lang === 'en' ? p.subcategoryEn || p.subcategory : p.subcategoryRu || p.subcategory}
                                  </span>
                                </>
                              )}

                              {p.subsubcategory && (
                                <>
                                  <span className="text-gray-300 text-[10px] font-mono select-none">/</span>
                                  <span className="px-2 py-0.5 font-mono text-[8px] font-black uppercase tracking-widest text-[#e65410] border border-orange-400/30 bg-orange-500/5 rounded-md">
                                    {lang === 'en' ? p.subsubcategoryEn || p.subsubcategory : p.subsubcategoryRu || p.subsubcategory}
                                  </span>
                                </>
                              )}
                              <div className="h-px bg-gray-150 grow min-w-[20px]" />
                            </div>

                            {/* Title heading */}
                            <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight font-sans uppercase">
                              {pTitle}
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium font-medium">
                              {pDesc}
                            </p>

                            {/* Tech benefits list style */}
                            <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-xl">
                              <h4 className="text-[9px] font-mono font-black uppercase text-gray-550 tracking-widest flex items-center space-x-1.5 mb-2.5">
                                <Settings className="h-3.5 w-3.5 text-[#e65410]" />
                                <span>{lang === 'en' ? `Technical benefits of series ${p.model}:` : `Технологические преимущества серии ${p.model}:`}</span>
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-gray-700">
                                {pFeatures.map((feat, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-[#e65410] mr-2 font-bold text-xs">✓</span>
                                    <span className="leading-tight font-medium">{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* INTERACTIVE COMPARATIVE SPECIFICATION OPTIONS: MARKS AND AGGREGATE TYPES IN THE SERIES */}
                          {p.variantModels && p.variantModels.length > 0 && (
                            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-3xs">
                              <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-gray-750 flex items-center gap-1.5">
                                  <Sliders className="h-3.5 w-3.5 text-[#e65410]" />
                                  <span>{lang === 'en' ? `Models inside the line ${p.model}:` : `Линейка модификаций серии ${p.model}:`}</span>
                                </h4>
                                <span className="text-[8px] font-mono font-bold bg-gray-200 text-gray-650 px-2 py-0.5 rounded uppercase">Сибтехлит оригинал</span>
                              </div>
                              
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-150 text-[11px] font-sans">
                                  <thead className="bg-[#00333b] text-white">
                                    <tr>
                                      <th scope="col" className="px-4 py-2.5 text-left font-mono font-black uppercase text-gray-300">Марка</th>
                                      <th scope="col" className="px-4 py-2.5 text-left font-mono font-black uppercase text-gray-300">Пр-сть / Емкость</th>
                                      <th scope="col" className="px-4 py-2.5 text-left font-mono font-black uppercase text-gray-300">Мощность</th>
                                      {p.variantModels[0]?.extraField && (
                                        <th scope="col" className="px-4 py-2.5 text-left font-mono font-black uppercase text-gray-300">
                                          {p.variantModels[0].extraField}
                                        </th>
                                      )}
                                      <th scope="col" className="px-4 py-2.5 text-right font-mono font-black uppercase text-[#e65410]">Выбор</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-100 bg-white">
                                    {p.variantModels.map((variant, vidx) => {
                                      const isVariantSelectedInCart = isSelectedVariantInSpecs(p.id, variant.model);
                                      return (
                                        <tr key={vidx} className={`transition hover:bg-slate-50/50 ${vidx % 2 === 0 ? 'bg-gray-50/40' : ''}`}>
                                          <td className="px-4 py-2.5 font-mono font-extrabold text-gray-900 border-none">
                                            {variant.model}
                                          </td>
                                          <td className="px-4 py-2.5 text-gray-650 font-bold border-none">
                                            {lang === 'en' && variant.capacityEn ? variant.capacityEn : variant.capacity}
                                          </td>
                                          <td className="px-4 py-2.5 text-gray-650 font-semibold border-none">
                                            {variant.power}
                                          </td>
                                          {variant.extraField && (
                                            <td className="px-4 py-2.5 text-gray-500 font-mono border-none font-semibold">
                                              {lang === 'en' && variant.extraFieldValEn ? variant.extraFieldValEn : variant.extraFieldVal}
                                            </td>
                                          )}
                                          <td className="px-4 py-2.5 text-right border-none">
                                            <button
                                              onClick={() => {
                                                handleAddCustomModel(p, variant.model);
                                                window.dispatchEvent(new CustomEvent('rfq-items-updated'));
                                              }}
                                              className={`px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded transition border duration-150 cursor-pointer ${
                                                isVariantSelectedInCart
                                                  ? 'bg-emerald-50 text-emerald-700 font-extrabold border-emerald-350'
                                                  : 'bg-orange-50 hover:bg-[#e65410] hover:text-white border-transparent text-[#e65410] font-black'
                                              }`}
                                            >
                                              {isVariantSelectedInCart ? 'В КП ✓' : '+ Выбрать'}
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {/* Technical specification details accordion toggle (Old spec tables) */}
                          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-3xs">
                            <button
                              onClick={() => toggleSpecs(p.id)}
                              className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-150 transition border-none flex items-center justify-between text-[11px] font-mono uppercase font-black text-gray-750 cursor-pointer select-none outline-none"
                            >
                              <span className="flex items-center space-x-1.5">
                                <Table className="h-4 w-4 text-[#e65410] shrink-0" />
                                <span>{lang === 'en' ? `Technical boundaries of series ${p.model}` : `Технические свойства и ГОСТ-константы серии ${p.model}`}</span>
                              </span>
                              <ChevronDown className={`h-4 w-4 transform transition-transform text-[#e65410] duration-250 ${isSpecsExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {isSpecsExpanded && (
                              <div className="border border-t-0 border-gray-250 bg-white animate-slideDown overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <tbody className="divide-y divide-gray-100 text-[11px]">
                                    {p.specs.map((s, idx) => {
                                      const sName = lang === 'en' && s.nameEn ? s.nameEn : s.name;
                                      const sVal = lang === 'en' && s.valueEn ? s.valueEn : s.value;
                                      return (
                                        <tr key={idx} className={`transition hover:bg-gray-55 ${idx % 2 === 0 ? 'bg-gray-50/45' : ''}`}>
                                          <td className="px-4 py-2.5 text-gray-650 font-semibold leading-tight border-none">
                                            {sName}
                                          </td>
                                          <td className="px-4 py-2.5 font-mono font-extrabold text-gray-900 text-right leading-tight border-none">
                                            {sVal}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>

                        </div>

                      </div>
                    </div>
                  );
                })()
              ) : (
                /* 2. CARD-BASED GRID VIEW OF CATEGORY PRODUCTS - Refined design */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {filteredProducts.map((p) => {
                    const pTitle = lang === 'en' && p.titleEn ? p.titleEn : p.title;
                    const pDesc = lang === 'en' && p.descriptionEn ? p.descriptionEn : p.description;
                    const pCapacity = lang === 'en' && p.capacityEn ? p.capacityEn : p.capacity;

                    const isAnyVariantInRFQ = rfqItemsKeys.some(key => key === p.id || key.startsWith(`${p.id}-`));

                    return (
                      <div
                        key={p.id}
                        onClick={() => setSelectedProductId(p.id)}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group shadow-xs relative"
                      >
                        <div className="p-5 space-y-4">
                          {/* Framed image */}
                          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden rounded-xl border border-gray-150">
                            <img
                              src={p.imageUrl}
                              alt={pTitle}
                              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-all duration-300 ease-out"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2 left-2 bg-slate-900/95 border border-teal-800/10 text-white font-mono text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded shadow-md">
                              {lang === 'en' ? 'Series' : 'Серия'}: {p.model}
                            </div>
                            {isAnyVariantInRFQ && (
                              <div className="absolute top-2 right-2 bg-emerald-600 border border-emerald-500 text-white font-mono text-[9px] uppercase font-black px-2 py-1 rounded shadow-md flex items-center gap-1">
                                <Check className="h-3 w-3 inline text-white" />
                                <span>{lang === 'en' ? 'Added' : 'Выбрано'}</span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-1 flex-wrap gap-y-1">
                              <span className="px-2 py-0.5 font-mono text-[8.5px] font-black uppercase tracking-widest border border-orange-200 text-[#e65410] bg-[#e65410]/5 rounded-md">
                                {p.category === 'sand-mixers-xtc' && (lang === 'en' ? 'No-Bake' : 'ХТС')}
                                {p.category === 'furnaces' && (lang === 'en' ? 'Melting' : 'Плавка')}
                                {p.category === 'green-sand' && (lang === 'en' ? 'Green Sand' : 'ПГС')}
                                {p.category === 'core-making' && (lang === 'en' ? 'Sand Core' : 'Стержни')}
                                {p.category === 'shot-blast' && (lang === 'en' ? 'Shot Blasting' : 'Дробемёт')}
                                {p.category === 'casting-machines' && (lang === 'en' ? 'Casting' : 'Литье')}
                                {p.category === 'cooling-systems' && (lang === 'en' ? 'Cooling' : 'Охлаждение')}
                              </span>
                              
                              {p.subsubcategory && (
                                <span className="px-2 py-0.5 font-mono text-[8.5px] font-black uppercase tracking-widest text-[#00333b] border border-teal-900/10 bg-teal-500/5 rounded-md">
                                  {lang === 'en' ? p.subsubcategoryEn || p.subsubcategory : p.subsubcategoryRu || p.subsubcategory}
                                </span>
                              )}
                            </div>

                            <h3 className="font-sans font-black text-[#00333b] text-base group-hover:text-[#e65410] leading-tight uppercase transition-colors line-clamp-2">
                              {pTitle}
                            </h3>

                            <p className="text-xs text-gray-550 leading-relaxed line-clamp-3">
                              {pDesc}
                            </p>

                            {/* Available mini parameters list */}
                            {p.variantModels && p.variantModels.length > 0 && (
                              <div className="pt-2">
                                <span className="text-[9px] font-mono text-gray-400 font-extrabold uppercase block mb-1">
                                  {lang === 'en' ? 'Models in lineup' : 'Модификации в серии'}:
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {p.variantModels.slice(0, 4).map((v, sIdx) => (
                                    <span key={sIdx} className="bg-slate-50 border border-slate-200 text-slate-650 font-mono text-[9px] px-1.5 py-0.5 rounded-md font-bold">
                                      {v.model}
                                    </span>
                                  ))}
                                  {p.variantModels.length > 4 && (
                                    <span className="bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[9px] px-1.5 py-0.5 rounded-md font-bold">
                                      +{p.variantModels.length - 4}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action strip */}
                        <div className="border-t border-gray-150 p-4 bg-gray-50/60 group-hover:bg-orange-50/10 transition-colors flex items-center justify-between text-[11px] font-mono">
                          <span className="text-gray-500 font-bold">
                            {pCapacity ? `${lang === 'en' ? 'Cap: ' : 'Пр-сть: '} ${pCapacity}` : ''}
                          </span>
                          <span className="font-black flex items-center gap-1.5 text-[#e65410] uppercase tracking-wider text-[10px] group-hover:text-orange-700">
                            <span>{lang === 'en' ? 'Select model' : 'Выбрать марку'}</span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 transform group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Core informational technical banner */}
        <div className="bg-gradient-to-r from-[#00252b] to-[#00333b] text-white p-8 rounded-lg border border-teal-800 space-y-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#e65410] uppercase tracking-widest font-black flex items-center space-x-1.5">
              <ShieldAlert className="h-4.5 w-4.5 text-[#e65410]" />
              <span>{lang === 'en' ? 'Blueprints Engineering Service' : 'Комплексный технологический инжиниринг'}</span>
            </span>
            <h4 className="text-xl font-black uppercase text-white font-sans max-w-xl leading-snug">
              {lang === 'en' 
                ? 'Your machinery can be modified to match existing foundation layouts' 
                : 'Поставка нестандартных габаритов оборудования под существующие фундаменты цеха'}
            </h4>
            <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'Siberian Foundry Technologies designs custom steel structures, extended arm mixers with custom reach, and customized filtration chambers matching any specific furnace or dust extraction profile.'
                : '«Сибтехлит» производит индивидуальную подгонку сварных стальных корпусов, увеличивает радиусы обслуживания лопастных зажимов смесителей ХТС и пересчитывает компоновочные сбросы гравитационных печей под конкретную высоту кровельной фермы.'}
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-2 bg-[#00252b]/45 border border-teal-800 p-4 rounded text-xs font-mono text-[#e65410]">
            <HardHat className="h-5 w-5 text-[#e65410] shrink-0" />
            <span>
              {lang === 'en' ? 'Bespoke layouts calculated in 3D' : 'Проектирование в AutoCAD/КОМПАС 3D'}
            </span>
          </div>
        </div>

        {/* Separator block before footer */}
        <div className="mt-16">
          <TrustBanner lang={lang} />
        </div>

      </div>
    </div>
  );
}
