import { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { Search, ChevronDown, Check, Plus, AlertCircle } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

interface ProductCatalogProps {
  onAddToRFQ: (product: Product) => void;
  selectedCategory?: string;
  rfqItemsKeys: string[];
  lang: 'ru' | 'en';
}

export default function ProductCatalog({ onAddToRFQ, selectedCategory, rfqItemsKeys, lang }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(
    (selectedCategory as ProductCategory) || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProductSpecs, setExpandedProductSpecs] = useState<Record<string, boolean>>({});

  const t = TRANSLATIONS[lang];

  const categories: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: t.catAll },
    { id: 'sand-mixers-xtc', label: t.catXtc },
    { id: 'furnaces', label: t.catFurnaces },
    { id: 'shot-blast', label: t.catShotBlast },
    { id: 'casting-machines', label: t.catCasting },
    { id: 'cooling-systems', label: t.catCooling },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.titleEn && product.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.descriptionEn && product.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleSpecs = (id: string) => {
    setExpandedProductSpecs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="border-b border-gray-200 pb-8 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#e65410] font-bold">{t.catalogSpecTitle}</span>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-display">{t.catalogHeader}</h1>
              <p className="text-gray-650 text-sm mt-1 max-w-2xl leading-relaxed">
                {t.catalogDesc}
              </p>
            </div>
            
            {/* Search inputs */}
            <div className="relative w-full md:w-80 shrink-0 select-none">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-900 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Category Selector Pills matching design theme */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-gray-200/50">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition cursor-pointer select-none border ${
                activeCategory === cat.id
                  ? 'bg-[#111827] text-white shadow-inner border-gray-900'
                  : 'bg-white text-gray-750 hover:text-gray-950 hover:bg-gray-105 border-gray-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-gray-200 p-12 text-center rounded-lg max-w-lg mx-auto">
            <AlertCircle className="h-10 w-10 text-orange-600 mx-auto" />
            <h3 className="font-bold text-lg text-gray-900 mt-4">{t.noProductsFound}</h3>
            <p className="text-gray-500 text-sm mt-1">
              {t.noProductsDesc}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-6 px-4 py-2 bg-gray-900 text-white rounded text-xs transition hover:bg-gray-800 cursor-pointer border-none"
            >
              {t.resetFilters}
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredProducts.map((p) => {
              const isSpecsExpanded = !!expandedProductSpecs[p.id];
              const isAdded = rfqItemsKeys.includes(p.id);

              const pTitle = lang === 'en' && p.titleEn ? p.titleEn : p.title;
              const pDesc = lang === 'en' && p.descriptionEn ? p.descriptionEn : p.description;
              const pFeatures = lang === 'en' && p.featuresEn ? p.featuresEn : p.features;
              const pCapacity = lang === 'en' && p.capacityEn ? p.capacityEn : p.capacity;
              const pPower = lang === 'en' && p.powerEn ? p.powerEn : p.power;

              return (
                <div
                  key={p.id}
                  id={`product-${p.id}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-lg transition duration-200"
                >
                  
                  {/* Image & Main stats sidebar (4 columns) */}
                  <div className="lg:col-span-4 p-6 sm:p-8 bg-gray-50 border-r border-gray-200 flex flex-col justify-between">
                    <div>
                      {/* Image container representation with high contrast frame */}
                      <div className="relative aspect-video sm:aspect-4/3 w-full bg-slate-900 overflow-hidden rounded border border-gray-300">
                        <img
                          src={p.imageUrl}
                          alt={pTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-350 filter brightness-95 hover:brightness-100"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-2 bg-[#111827]/90 text-amber-500 font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                          {p.model}
                        </div>
                      </div>

                      {/* Mini spec indicators */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {pCapacity && (
                          <div className="bg-white border border-gray-200 p-3 rounded">
                            <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t.capacityLabel}</span>
                            <span className="font-bold text-sm text-gray-900 mt-1 block leading-tight">{pCapacity}</span>
                          </div>
                        )}
                        {pPower && (
                          <div className="bg-white border border-gray-200 p-3 rounded">
                            <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t.powerLabel}</span>
                            <span className="font-bold text-sm text-gray-900 mt-1 block leading-tight">{pPower}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      {/* Add Button */}
                      <button
                        onClick={() => onAddToRFQ(p)}
                        className={`w-full py-3.5 px-4 font-bold rounded text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition cursor-pointer select-none border-none outline-none ${
                          isAdded
                            ? 'bg-emerald-600 hover:bg-emerald-750 text-white'
                            : 'bg-[#e65410] hover:bg-[#cc4a0c] text-white shadow shadow-orange-500/15'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>{t.inSpecsBtn}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4" />
                            <span>{t.addToSpecsBtn}</span>
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-gray-400 text-center font-mono italic">
                        {t.drawingFreeMsg}
                      </p>
                    </div>

                  </div>

                  {/* High quality specification and description panel (8 columns) */}
                  <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                    
                    {/* General info */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest border border-orange-500/30 text-[#e65410] bg-[#e65410]/5 rounded">
                          {p.category === 'sand-mixers-xtc' && t.catXtc}
                          {p.category === 'furnaces' && t.catFurnaces}
                          {p.category === 'shot-blast' && t.catShotBlast}
                          {p.category === 'casting-machines' && t.catCasting}
                          {p.category === 'cooling-systems' && t.catCooling}
                        </span>
                        <div className="h-px bg-gray-200 grow" />
                      </div>

                      <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight font-display uppercase">
                        {pTitle}
                      </h2>

                      <p className="text-sm text-gray-650 leading-relaxed">
                        {pDesc}
                      </p>

                      {/* Main Benefits bullet-list */}
                      <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-lg">
                        <h4 className="text-xs font-mono font-bold uppercase text-gray-500 tracking-wider mb-3">{t.specSectionHeader}</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          {pFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-start text-xs text-gray-701">
                              <span className="text-[#e65410] mr-2 font-mono font-bold">✓</span>
                              <span className="leading-tight">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specification Table Accordion matching custom theme */}
                    <div className="mt-8">
                      <button
                        onClick={() => toggleSpecs(p.id)}
                        className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 transition border border-gray-200 flex items-center justify-between text-xs font-mono uppercase font-black tracking-wider text-gray-600 cursor-pointer select-none outline-none"
                      >
                        <span>{t.specsAccordionTitle} {p.model}</span>
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isSpecsExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isSpecsExpanded && (
                        <div className="border border-t-0 border-gray-200 overflow-hidden bg-white animate-slideDown">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#111827] text-white">
                              <tr>
                                <th scope="col" className="px-5 py-3 text-left text-[10px] font-mono uppercase tracking-wider">{t.specsTableCol1}</th>
                                <th scope="col" className="px-5 py-3 text-right text-[10px] font-mono uppercase tracking-wider">{t.specsTableCol2}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                              {p.specs.map((s, idx) => {
                                const sName = lang === 'en' && s.nameEn ? s.nameEn : s.name;
                                const sVal = lang === 'en' && s.valueEn ? s.valueEn : s.value;
                                return (
                                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/50' : ''}>
                                    <td className="px-5 py-2.5 text-xs font-semibold text-gray-700 leading-tight">{sName}</td>
                                    <td className="px-5 py-2.5 text-xs font-mono font-bold text-gray-900 text-right leading-tight">{sVal}</td>
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
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
