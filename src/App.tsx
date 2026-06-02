import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import FoundryCalculator from './components/FoundryCalculator';
import AIAssistant from './components/AIAssistant';
import AboutCompany from './components/AboutCompany';
import RFQCart from './components/RFQCart';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import InStockEquipment from './components/InStockEquipment';
import { Product, RFQItem } from './types';

export default function App() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [rfqItems, setRfqItems] = useState<RFQItem[]>([]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | undefined>(undefined);

  const handleAddToRFQ = (product: Product) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQty = (pId: string, qty: number) => {
    setRfqItems((prev) =>
      prev.map((item) =>
        item.product.id === pId ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemoveItem = (pId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== pId));
  };

  const handleClearRFQ = () => {
    setRfqItems([]);
  };

  const handleNavigateToCatalog = (category?: string) => {
    setSelectedCategoryFilter(category);
    setCurrentTab('catalog');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rfqItemsCount = rfqItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const rfqItemsKeys = rfqItems.map((item) => item.product.id);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-600 selection:text-white">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'catalog') {
            setSelectedCategoryFilter(undefined);
          }
          window.scrollTo({ top: 0 });
        }}
        onCategorySelect={(category, query, subId, productId) => {
          setSelectedCategoryFilter(category);
          setCurrentTab('catalog');
          if (query) {
            (window as any)._pendingCatalogQuery = query;
          } else {
            (window as any)._pendingCatalogQuery = '';
          }
          if (subId) {
            (window as any)._pendingCatalogSubId = subId;
          } else {
            (window as any)._pendingCatalogSubId = 'all';
          }
          if (productId) {
            (window as any)._pendingProductId = productId;
          } else {
            (window as any)._pendingProductId = '';
          }
          window.dispatchEvent(new CustomEvent('catalog-query-sync'));
        }}
        rfqItemsCount={rfqItemsCount}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Areas inside a simple transitions manager */}
      <main className="grow">
        {currentTab === 'home' && (
          <Hero
            onNavigateToCatalog={handleNavigateToCatalog}
            onAddToRFQ={(prod) => {
              handleAddToRFQ(prod);
              setCurrentTab('rfq');
            }}
            lang={lang}
          />
        )}

        {currentTab === 'catalog' && (
          <ProductCatalog
            onAddToRFQ={handleAddToRFQ}
            selectedCategory={selectedCategoryFilter}
            rfqItemsKeys={rfqItemsKeys}
            lang={lang}
          />
        )}

        {currentTab === 'calc' && <FoundryCalculator lang={lang} />}

        {currentTab === 'about' && (
          <AboutCompany 
            lang={lang} 
            onContactRequest={() => {
              setCurrentTab('rfq');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'in-stock' && (
          <InStockEquipment 
            lang={lang} 
            onAddToRFQ={(prod) => {
              handleAddToRFQ(prod);
              setCurrentTab('rfq');
            }}
            rfqItemsKeys={rfqItemsKeys}
          />
        )}

        {currentTab === 'contacts' && (
          <Contacts lang={lang} />
        )}

        {currentTab === 'assistant' && <AIAssistant lang={lang} />}

        {currentTab === 'rfq' && (
          <RFQCart
            rfqItems={rfqItems}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onClearRFQ={handleClearRFQ}
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0 });
        }}
        lang={lang}
      />
    </div>
  );
}

