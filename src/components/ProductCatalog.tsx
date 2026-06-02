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
      descRu: 'Промышленные дробеметные камеры подвесного и барабанного типов для декорки, удаления песчаного пригара и окалины.',
      descEn: 'Industrial heavy hanger and rubber tumble belt shotblasters for thorough decoring, rust and sand burn-on removal.',
      icon: Zap,
      color: 'border-yellow-500/20 hover:border-yellow-500',
      tagRu: 'ФИНИШНАЯ ОЧИСТКА',
      tagEn: 'FINISHING CLEANING',
      statsRu: 'Ресурс брони: сталь Mn13',
      statsEn: 'Lining material: Mn13 Steel',
      subcategoriesRu: [
        { label: 'Модели ленточного типа Q32', query: 'Q32', subId: 'shot-blast-machines' },
        { label: 'Модели барабанного типа Q31', query: 'Q31', subId: 'shot-blast-machines' },
        { label: 'Подвесные крюковые камеры Q37', query: 'Q37', subId: 'shot-blast-machines' }
      ],
      subcategoriesEn: [
        { label: 'Tumble belt models Q32', query: 'Q32', subId: 'shot-blast-machines' },
        { label: 'Tumble drum models Q31', query: 'Q31', subId: 'shot-blast-machines' },
        { label: 'Hanger hook chambers Q37', query: 'Q37', subId: 'shot-blast-machines' }
      ]
    },
    {
      id: 'casting-machines' as ProductCategory,
      titleRu: 'Литейные машины формования',
      titleEn: 'Molding & Casting Machinery',
      descRu: 'Литейные полуавтоматы кокильного литья с регулируемым гидравлическим наклоном, и центробежные литейные установки.',
      descEn: 'Complex semi-automated gravity die casting systems with flexible tilting angles, and horizontal centrifugal systems.',
      icon: Cpu,
      color: 'border-indigo-500/20 hover:border-indigo-500',
      tagRu: 'ЛИТЬЕ В ФОРМЫ',
      tagEn: 'CASTING PROCESSES',
      statsRu: 'Усилия запирания: до 200 кН',
      statsEn: 'Mould clamping limits: 200 kN',
      subcategoriesRu: [
        { label: 'Кокильные машины КМ-Г', query: 'KM', subId: 'molders' },
        { label: 'Центробежные машины ЦЛ', query: 'CL', subId: 'molders' }
      ],
      subcategoriesEn: [
        { label: 'Gravity molders KM-G', query: 'KM', subId: 'molders' },
        { label: 'Centrifugal stations CL', query: 'CL', subId: 'molders' }
      ]
    },
    {
      id: 'cooling-systems' as ProductCategory,
      titleRu: 'Промышленные градирни и охлаждение',
      titleEn: 'Industrial Cooling & Environment',
      descRu: 'Замкнутые испарительные градирни ГЗ с чистыми медными теплообменниками для защиты катушек индуктора от сухой накипи.',
      descEn: 'Closed evaporative water cooling towers GZ protecting induction power systems and cables from chemical calcium scale.',
      icon: Wind,
      color: 'border-cyan-500/20 hover:border-cyan-500',
      tagRu: 'ХЛАДОСНАБЖЕНИЕ',
      tagEn: 'COOLING INFRASTRUCTURE',
      statsRu: 'Теплосъем: медный контур T2',
      statsEn: 'Heat removal: Copper coil T2',
      subcategoriesRu: [
        { label: 'Закрытые градирни ГЗ', query: 'GZ', subId: 'cooling-towers' }
      ],
      subcategoriesEn: [
        { label: 'Closed circuit towers GZ', query: 'GZ', subId: 'cooling-towers' }
      ]
    }
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSubcategory = activeSubcategory === 'all' || product.subcategory === activeSubcategory;
    const matchesSubsubcategory = activeSubsubcategory === 'all' || product.subsubcategory === activeSubsubcategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.titleEn && product.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.descriptionEn && product.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSubcategory && matchesSubsubcategory && matchesSearch;
  });

  const toggleSpecs = (id: string) => {
    setExpandedProductSpecs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectDivision = (categoryId: ProductCategory, query?: string, subId?: string) => {
    setActiveCategory(categoryId);
    if (subId) {
      setActiveSubcategory(subId);
    } else {
      setActiveSubcategory('all');
    }
    if (query) {
      setSearchQuery(query);
    } else {
      setSearchQuery('');
    }
  };

  const handleAddCustomModel = (baseProduct: Product, specModel: string) => {
    // Generate a cloned product item with the specific variant mark selected by the user
    const clonedProduct: Product = {
      ...baseProduct,
      model: specModel,
      title: `${baseProduct.title} (${specModel})`,
      titleEn: baseProduct.titleEn ? `${baseProduct.titleEn} (${specModel})` : undefined
    };
    onAddToRFQ(clonedProduct);
  };

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
      <div className="bg-[#0b0f19] text-white py-14 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
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
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                {activeCategory === 'all'
                  ? (lang === 'en' 
                    ? 'Advanced casting systems matched to certified GOST standards. Full engineering customization, design of technological layouts, and support.' 
                    : 'Специализированное литейное оборудование, сертифицированное под стандарты металлургии СНГ. Проектирование компоновок, поставка узлов, шеф-монтаж и запуск.')
                  : categories.find(c => c.id === activeCategory)?.descRu
                }
              </p>
            </div>
            
            {/* Real Search Box */}
            <div className="w-full lg:max-w-md bg-gray-900 p-5 rounded-lg border border-gray-800 space-y-2 shrink-0">
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
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-950 border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:ring-1 focus:ring-[#e65410] focus:border-[#e65410] focus:outline-hidden font-mono"
                />
              </div>
              <p className="text-[9px] text-gray-500 font-mono italic">
                {lang === 'en' ? 'e.g., "CX-10", "reclamation", "induction crucible", "water tower"' : 'Например: "СХ-10", "регенерация", "индукционная печь", "ВСФ"'}
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
              <p className="text-sm text-gray-500 max-w-2xl mt-1">
                {lang === 'en'
                  ? 'Select a division category to view its specialized equipment variants, physical models, and capacity marks.'
                  : 'Выберите интересующий вас раздел литейного цеха. Каждый раздел организован отдельной страницей с типами и марками оборудования.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {sltDivisions.map((div) => {
                const IconComp = div.icon;
                const title = lang === 'en' ? div.titleEn : div.titleRu;
                const desc = lang === 'en' ? div.descEn : div.descRu;
                const tag = lang === 'en' ? div.tagEn : div.tagRu;
                const stats = lang === 'en' ? div.statsEn : div.statsRu;
                const subs = lang === 'en' ? div.subcategoriesEn : div.subcategoriesRu;

                return (
                  <div
                    key={div.id}
                    className={`bg-white border rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group ${div.color} shadow-xs shadow-gray-100`}
                    onClick={() => handleSelectDivision(div.id)}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-650 group-hover:bg-[#e65410] group-hover:text-white transition-colors">
                          {tag}
                        </span>
                        <IconComp className="h-5 w-5 text-gray-400 group-hover:text-[#e65410] transition duration-300" />
                      </div>

                      {/* Meta info */}
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-sm sm:text-base text-gray-900 group-hover:text-[#e65410] leading-snug transition duration-150 uppercase">
                          {title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">
                          {desc}
                        </p>
                      </div>

                      {/* Subcategories bullet links */}
                      <div className="border-t border-gray-100 pt-3.5 space-y-1.5">
                        <span className="text-[8px] font-mono uppercase text-gray-400 block tracking-widest font-black">
                          {lang === 'en' ? 'Models & Sub-units:' : 'Модельный ряд комплексов:'}
                        </span>
                        <ul className="space-y-1 text-[11px] text-gray-650 font-medium">
                          {subs.map((sub, idx) => (
                            <li 
                              key={idx} 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectDivision(div.id, sub.query, sub.subId);
                              }}
                              className="flex items-center space-x-1 hover:text-[#e65410] transition-colors cursor-pointer py-0.5"
                            >
                              <span className="text-orange-500 font-mono text-[10px]">›</span>
                              <span className="underline decoration-transparent hover:decoration-[#e65410]">{sub.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Stats block */}
                    <div className="border-t border-gray-100 mt-5 pt-3 flex items-center justify-between text-[10px] font-mono text-gray-400">
                      <span className="font-semibold">{stats}</span>
                      <span className="font-bold flex items-center gap-1 text-[#e65410] text-[9px] uppercase tracking-wider">
                        <span>Перейти</span>
                        <ArrowRight className="h-3 w-3 shrink-0 transform group-hover:translate-x-1 transition-transform" />
                      </span>
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
          
          /* Render Page B: Dedicated Section Page - Clean Full Width Layout without Sidebar and Subcategory filters */
          <div className="w-full space-y-6 animate-fade-in">
            {/* Header / Breadcrumb navigation panel with Back button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-gray-200 p-4 rounded-lg shadow-2xs">
              {/* Breadcrumb path navigation */}
              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubcategory('all');
                    setSearchQuery('');
                  }}
                  className="hover:text-gray-900 hover:underline border-none bg-transparent cursor-pointer p-0"
                >
                  {lang === 'en' ? 'Catalog' : 'Каталог'}
                </button>
                <span>/</span>
                <span className="text-[#e65410] font-bold">
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
                className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#0b0f19] hover:bg-slate-800 text-white font-mono text-[10px] uppercase font-bold rounded shadow-xs transition cursor-pointer self-start sm:self-auto"
              >
                <ArrowRight className="h-3.5 w-3.5 transform rotate-180 text-[#e65410]" />
                <span>{lang === 'en' ? 'Back to Divisions' : 'Назад к разделам'}</span>
              </button>
            </div>

            {/* MAIN CATALOG CONTENT ON THE DEDICATED PAGE */}
            <div className="space-y-6">
              
              {/* Counter and header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-3 gap-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-gray-900 uppercase">
                    {categories.find(c => c.id === activeCategory)?.label}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    {lang === 'en' ? 'Showing custom configurations for:' : 'Доступный номенклатурный перечень по направлению:'} <span className="text-gray-800 font-bold">Сибтехлит</span>
                  </p>
                </div>
                <span className="self-start sm:self-center bg-orange-500/10 text-[#e65410] text-[10px] font-mono px-2.5 py-1 rounded font-black border border-orange-500/20 shrink-0">
                  {filteredProducts.length} {lang === 'en' ? 'models matching' : 'позиций в базе'}
                </span>
              </div>

              {/* Products Rendering for separate category page */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-gray-200 p-12 text-center rounded-lg max-w-lg mx-auto">
                  <AlertCircle className="h-10 w-10 text-orange-600 mx-auto" />
                  <h3 className="font-bold text-lg text-gray-900 mt-4">{t.noProductsFound}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    В данной категории нет агрегатов, соответствующих вашему поисковому запросу "{searchQuery}". Попробуйте очистить строку поиска.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-6 px-4 py-2 bg-[#e65410] hover:bg-[#cc4a0c] text-white rounded text-xs font-bold transition cursor-pointer border-none"
                  >
                    Очистить поиск
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
                        className="flex items-center space-x-1.5 px-3 py-2 bg-white hover:bg-gray-100 text-gray-705 hover:text-gray-950 font-bold font-sans text-xs rounded border border-gray-200 shadow-2xs transition cursor-pointer"
                      >
                        <ArrowRight className="h-4 w-4 transform rotate-180 text-[#e65410]" />
                        <span>{lang === 'en' ? 'Back to list of models' : 'Назад к выбору моделей'}</span>
                      </button>

                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
                        
                        {/* Column Left (4 units size): Image, Capacity fields and Main spec add button */}
                        <div className="lg:col-span-4 p-5 sm:p-6 bg-gray-50 border-r border-gray-200 flex flex-col justify-between">
                          <div className="space-y-4">
                            
                            {/* Product Frame Image */}
                            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden rounded border border-gray-350">
                              <img
                                src={p.imageUrl}
                                alt={pTitle}
                                className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition duration-300"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 left-2 bg-gray-950/90 border border-gray-800 text-[#e65410] font-mono text-xs uppercase font-black tracking-widest px-2.5 py-0.5 rounded">
                                Базовая: {p.model}
                              </div>
                            </div>

                            {/* Capacity ratings */}
                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              {pCapacity && (
                                <div className="bg-white border border-gray-200 p-2.5 rounded">
                                  <span className="block text-[8px] text-gray-400 uppercase tracking-wider font-bold">ЕДИНЩА / ВЕС</span>
                                  <span className="font-extrabold text-gray-900 block mt-0.5">{pCapacity}</span>
                                </div>
                              )}
                              {pPower && (
                                <div className="bg-white border border-gray-200 p-2.5 rounded">
                                  <span className="block text-[8px] text-gray-400 uppercase tracking-wider font-bold">МОЩНОСТЬ</span>
                                  <span className="font-extrabold text-gray-900 block mt-0.5">{pPower}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Base specifications additions */}
                          <div className="mt-5 pt-4 border-t border-gray-200 space-y-2">
                            <button
                              onClick={() => onAddToRFQ(p)}
                              className={`w-full py-2.5 px-3 font-bold rounded text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition border-none cursor-pointer outline-none ${
                                isAdded
                                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                  : 'bg-[#e65410] hover:bg-orange-700 text-white font-mono'
                              }`}
                            >
                              {isAdded ? (
                                <>
                                  <Check className="h-3.5 w-3.5 shrink-0" />
                                  <span>{t.inSpecsBtn} ({p.model})</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="h-3.5 w-3.5 shrink-0" />
                                  <span>Выбрать базовую Спец</span>
                                </>
                              )}
                            </button>
                            <p className="text-[9px] text-[#e65410] text-center font-mono">
                              *Разработка КД по ТЗ заказчика включена в стоимость.
                            </p>
                          </div>
                        </div>

                        {/* Column Right (8 units size): Title, description, features list, specification variants table */}
                        <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between space-y-5">
                          
                          <div className="space-y-3">
                            <div className="flex items-center space-x-1.5 flex-wrap gap-y-1.5">
                              <span className="px-1.5 py-0.5 font-mono text-[8px] font-black uppercase tracking-widest border border-orange-500/20 text-[#e65410] bg-[#e65410]/5 rounded">
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
                                  <span className="px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-100 rounded">
                                    {lang === 'en' ? p.subcategoryEn || p.subcategory : p.subcategoryRu || p.subcategory}
                                  </span>
                                </>
                              )}

                              {p.subsubcategory && (
                                <>
                                  <span className="text-gray-300 text-[10px] font-mono select-none">/</span>
                                  <span className="px-1.5 py-0.5 font-mono text-[8px] font-black uppercase tracking-widest text-[#e65410] border border-orange-400/30 bg-orange-500/10 rounded animate-fade-in">
                                    {lang === 'en' ? p.subsubcategoryEn || p.subsubcategory : p.subsubcategoryRu || p.subsubcategory}
                                  </span>
                                </>
                              )}
                              <div className="h-px bg-gray-150 grow min-w-[20px]" />
                            </div>

                            {/* Title heading */}
                            <h2 className="text-lg sm:text-xl font-extrabold text-gray-950 tracking-tight font-sans uppercase">
                              {pTitle}
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                              {pDesc}
                            </p>

                            {/* Tech benefits list style */}
                            <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-lg">
                              <h4 className="text-[9px] font-mono font-black uppercase text-gray-550 tracking-widest flex items-center space-x-1 mb-2">
                                <Settings className="h-3 w-3 text-[#e65410]" />
                                <span>Технологические преимущества серии {p.model}:</span>
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-700">
                                {pFeatures.map((feat, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-[#e65410] mr-1.5 font-bold">✓</span>
                                    <span className="leading-tight">{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* INTERACTIVE COMPARATIVE SPECIFICATION OPTIONS: MARKS AND AGGREGATE TYPES IN THE SERIES */}
                          {p.variantModels && p.variantModels.length > 0 && (
                            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-xs">
                              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                                <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                                  <Sliders className="h-3 w-3 text-[#e65410]" />
                                  <span>Типы и марки агрегатов в серии {p.model}:</span>
                                </h4>
                                <span className="text-[9px] font-mono text-gray-500">Сибтехлит оригинал</span>
                              </div>
                              
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-150 text-[11px] font-sans">
                                  <thead className="bg-[#0b0f19] text-white">
                                    <tr>
                                      <th scope="col" className="px-3 py-2 text-left font-mono font-black uppercase text-gray-300">Марка</th>
                                      <th scope="col" className="px-3 py-2 text-left font-mono font-black uppercase text-gray-300">Пр-сть / Емкость</th>
                                      <th scope="col" className="px-3 py-2 text-left font-mono font-black uppercase text-gray-300">Мощность</th>
                                      {p.variantModels[0]?.extraField && (
                                        <th scope="col" className="px-3 py-2 text-left font-mono font-black uppercase text-gray-300">
                                          {p.variantModels[0].extraField}
                                        </th>
                                      )}
                                      <th scope="col" className="px-3 py-2 text-right font-mono font-black uppercase text-[#e65410]">Выбор</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-100 bg-white">
                                    {p.variantModels.map((variant, vidx) => {
                                      const isVariantSelectedInCart = isSelectedVariantInSpecs(p.id, variant.model);
                                      return (
                                        <tr key={vidx} className={vidx % 2 === 0 ? 'bg-gray-50/40' : ''}>
                                          <td className="px-3 py-2 font-mono font-extrabold text-gray-900 border-none">
                                            {variant.model}
                                          </td>
                                          <td className="px-3 py-2 text-gray-650 font-medium border-none">
                                            {lang === 'en' && variant.capacityEn ? variant.capacityEn : variant.capacity}
                                          </td>
                                          <td className="px-3 py-2 text-gray-650 font-semibold border-none">
                                            {variant.power}
                                          </td>
                                          {variant.extraField && (
                                            <td className="px-3 py-2 text-gray-500 font-mono border-none">
                                              {lang === 'en' && variant.extraFieldValEn ? variant.extraFieldValEn : variant.extraFieldVal}
                                            </td>
                                          )}
                                          <td className="px-3 py-2 text-right border-none">
                                            <button
                                              onClick={() => handleAddCustomModel(p, variant.model)}
                                              className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition border-none cursor-pointer ${
                                                isVariantSelectedInCart
                                                  ? 'bg-emerald-50 text-emerald-700 font-extrabold border border-emerald-300'
                                                  : 'bg-orange-50 hover:bg-[#e65410] hover:text-white text-[#e65410] font-black'
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
                          <div>
                            <button
                              onClick={() => toggleSpecs(p.id)}
                              className="w-full py-2.5 px-3.5 bg-gray-100 hover:bg-gray-150 transition border border-gray-250 flex items-center justify-between text-[11px] font-mono uppercase font-black text-gray-600 cursor-pointer select-none outline-none"
                            >
                              <span className="flex items-center space-x-1.5">
                                <Table className="h-3.5 w-3.5 text-[#e65410] shrink-0" />
                                <span>Технические габариты и ГОСТ-константы серии {p.model}</span>
                              </span>
                              <ChevronDown className={`h-3.5 w-3.5 transform transition-transform text-[#e65410] ${isSpecsExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {isSpecsExpanded && (
                              <div className="border border-t-0 border-gray-250 bg-white animate-slideDown overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <tbody className="divide-y divide-gray-100 text-[11px]">
                                    {p.specs.map((s, idx) => {
                                      const sName = lang === 'en' && s.nameEn ? s.nameEn : s.name;
                                      const sVal = lang === 'en' && s.valueEn ? s.valueEn : s.value;
                                      return (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/45' : ''}>
                                          <td className="px-4 py-2 text-gray-650 font-semibold leading-tight border-none">
                                            {sName}
                                          </td>
                                          <td className="px-4 py-2 font-mono font-bold text-gray-900 text-right leading-tight border-none">
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
                /* 2. CARD-BASED GRID VIEW OF CATEGORY PRODUCTS */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {filteredProducts.map((p) => {
                    const pTitle = lang === 'en' && p.titleEn ? p.titleEn : p.title;
                    const pDesc = lang === 'en' && p.descriptionEn ? p.descriptionEn : p.description;
                    const pCapacity = lang === 'en' && p.capacityEn ? p.capacityEn : p.capacity;

                    return (
                      <div
                        key={p.id}
                        onClick={() => setSelectedProductId(p.id)}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group shadow-xs shadow-gray-100"
                      >
                        <div className="p-5 space-y-4">
                          {/* Framed image */}
                          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden rounded border border-gray-200">
                            <img
                              src={p.imageUrl}
                              alt={pTitle}
                              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-all duration-300"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2 left-2 bg-gray-950/90 border border-gray-800 text-[#e65410] font-mono text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded">
                              Серия: {p.model}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-1 flex-wrap gap-y-1">
                              <span className="px-1.5 py-0.5 font-mono text-[8px] font-black uppercase tracking-widest border border-orange-200 text-[#e65410] bg-[#e65410]/5 rounded">
                                {p.category === 'sand-mixers-xtc' && (lang === 'en' ? 'No-Bake' : 'ХТС')}
                                {p.category === 'furnaces' && (lang === 'en' ? 'Melting' : 'Плавка')}
                                {p.category === 'green-sand' && (lang === 'en' ? 'Green Sand' : 'ПГС')}
                                {p.category === 'core-making' && (lang === 'en' ? 'Sand Core' : 'Стержни')}
                                {p.category === 'shot-blast' && (lang === 'en' ? 'Shot Blasting' : 'Дробемёт')}
                                {p.category === 'casting-machines' && (lang === 'en' ? 'Casting' : 'Литье')}
                                {p.category === 'cooling-systems' && (lang === 'en' ? 'Cooling' : 'Охлаждение')}
                              </span>
                              
                              {p.subsubcategory && (
                                <span className="px-1.5 py-0.5 font-mono text-[8px] font-medium uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-100 rounded">
                                  {lang === 'en' ? p.subsubcategoryEn || p.subsubcategory : p.subsubcategoryRu || p.subsubcategory}
                                </span>
                              )}
                            </div>

                            <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#e65410] leading-snug uppercase transition-colors line-clamp-2">
                              {pTitle}
                            </h3>

                            <p className="text-xs text-gray-550 leading-relaxed line-clamp-3">
                              {pDesc}
                            </p>
                          </div>
                        </div>

                        {/* Action strip */}
                        <div className="border-t border-gray-150 p-4 bg-gray-50/60 flex items-center justify-between text-[11px] font-mono">
                          <span className="text-gray-500 font-medium">
                            {pCapacity ? `${lang === 'en' ? 'Cap: ' : 'Пр-сть: '} ${pCapacity}` : ''}
                          </span>
                          <span className="font-black flex items-center gap-1.5 text-[#e65410] uppercase tracking-wider text-[10px]">
                            <span>{lang === 'en' ? 'Details' : 'Описание'}</span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 transform group-hover:translate-x-1.5 transition-transform" />
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
        <div className="bg-gradient-to-r from-gray-900 to-[#0b0f19] text-white p-8 rounded-lg border border-gray-800 space-y-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-16">
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
          <div className="shrink-0 flex items-center space-x-2 bg-gray-950/40 border border-gray-800 p-4 rounded text-xs font-mono text-[#e65410]">
            <HardHat className="h-5 w-5 text-[#e65410] shrink-0" />
            <span>
              {lang === 'en' ? 'Bespoke layouts calculated in 3D' : 'Проектирование в AutoCAD/КОМПАС 3D'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
