import { Product } from '../types';

export const PRODUCTS_XTC: Product[] = [
  {
    id: 'xtc-mixer-single-arm',
    category: 'sand-mixers-xtc',
    subcategory: 'mixers',
    subcategoryRu: 'Смесители ХТС',
    subcategoryEn: 'No-Bake Mixers',
    subsubcategory: 'single-arm',
    subsubcategoryRu: 'Однорукавного типа СХ',
    subsubcategoryEn: 'Single-arm type CX',
    title: 'Однорукавный смеситель ХТС непрерывного действия',
    titleEn: 'Single-arm continuous resin-sand mixer',
    model: 'СХ-10',
    description: 'Высокопроизводственный однорукавный смеситель для формовки по ХТС-процессу (холоднотвердеющие смеси). Обеспечивает высокоточное дозирование связующего (смолы) и катализатора с мгновенным прекращением подачи, предотвращая появление брака смеси.',
    descriptionEn: 'High-performance single-arm mixer for cold-recovering sand casting processes (no-bake/XTC). Features high-precision dosing of resin binder and catalyst with instant shut-off, preventing sand mix wastage.',
    imageUrl: '/img/foto/Menu/smes-s.jpg',
    capacity: '10 тонн/час',
    capacityEn: '10 tons/hour',
    power: '7.5 кВт',
    powerEn: '7.5 kW',
    features: [
      'Индивидуальный шестеренный регулируемый насос для смолы и катализатора',
      'Функция быстрой очистки камеры смешивания (EasyClean)',
      'Система ЧПУ на базе ПЛК Delta/Siemens с сенсорной панелью управления',
      'Износостойкие лопатки из карбида вольфрама для долгого срока службы'
    ],
    featuresEn: [
      'Individual adjustable geartype dosing pumps for resin and catalyst',
      'Rapid mixing chamber cleaning function (EasyClean)',
      'PLC touch screen control system based on Delta/Siemens hardware',
      'Wear-resistant tungsten carbide blades for extended operating lifespan'
    ],
    specs: [
      { name: 'Производительность', value: '5 - 12 тонн/час', nameEn: 'Capacity range', valueEn: '5 - 12 tons/hour' },
      { name: 'Радиус действия рукава', value: '2500 мм', nameEn: 'Arm operating radius', valueEn: '2500 mm' },
      { name: 'Высота выгрузки смеси', value: '1350 мм', nameEn: 'Discharge height', valueEn: '1350 mm' },
      { name: 'Точность дозирования смолы', value: '±1.0%', nameEn: 'Resin dosing accuracy', valueEn: '±1.0%' },
      { name: 'Точность дозирования отвердителя', value: '±1.5%', nameEn: 'Catalyst dosing accuracy', valueEn: '±1.5%' },
      { name: 'Макс. установленная мощность', value: '7.5 кВт', nameEn: 'Max installed power', valueEn: '7.5 kW' },
      { name: 'Габаритные размеры (ДхШхВ)', value: '3100 х 980 х 1650 мм', nameEn: 'Dimensions (LxWxH)', valueEn: '3100 x 980 x 1650 mm' }
    ],
    variantModels: [
      { model: 'СХ-3', capacity: '3 тонн/час', capacityEn: '3 t/h', power: '4.0 кВт', powerEn: '4.0 kW', extraField: 'Радиус рукава', extraFieldVal: '1800 мм', extraFieldValEn: '1800 mm' },
      { model: 'СХ-5', capacity: '5 тонн/час', capacityEn: '5 t/h', power: '5.5 кВт', powerEn: '5.5 kW', extraField: 'Радиус рукава', extraFieldVal: '2200 мм', extraFieldValEn: '2200 mm' },
      { model: 'СХ-10', capacity: '10 тонн/час', capacityEn: '10 t/h', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Радиус рукава', extraFieldVal: '2500 мм', extraFieldValEn: '2500 mm' },
      { model: 'СХ-15', capacity: '15 тонн/час', capacityEn: '15 t/h', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Радиус рукава', extraFieldVal: '3000 мм', extraFieldValEn: '3000 mm' },
      { model: 'СХ-20', capacity: '20 тонн/час', capacityEn: '20 t/h', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Радиус рукава', extraFieldVal: '3500 мм', extraFieldValEn: '3500 mm' },
      { model: 'СХ-30', capacity: '30 тонн/час', capacityEn: '30 t/h', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Радиус рукава', extraFieldVal: '4200 мм', extraFieldValEn: '4200 mm' }
    ]
  },
  {
    id: 'xtc-mixer-double-arm',
    category: 'sand-mixers-xtc',
    subcategory: 'mixers',
    subcategoryRu: 'Смесители ХТС',
    subcategoryEn: 'No-Bake Mixers',
    subsubcategory: 'double-arm',
    subsubcategoryRu: 'Двухрукавного типа СХФ',
    subsubcategoryEn: 'Double-arm type CXF',
    title: 'Двухрукавный смеситель ХТС непрерывного действия',
    titleEn: 'Double-arm continuous resin-sand mixer',
    model: 'СХФ-15',
    description: 'Поворотный двухсекционный лопастной смеситель непрерывного действия. Предназначен для заполнения крупных заливочных форм и средних опок в пределах большого технологического радиуса действия рукавов (до 4.5 метров). Обеспечивает гибкий охват формовочной зоны.',
    descriptionEn: 'Double-arm articulating continuous resin-sand mixer with secondary slewing swivel arm. Designed to fill massive foundry flasks across a large operating radius (up to 4.5 meters). Increases molding flexibility.',
    imageUrl: '/img/foto/Menu/smes-s.jpg',
    capacity: '15 тонн/час',
    capacityEn: '15 tons/hour',
    power: '15.0 кВт',
    powerEn: '15.0 kW',
    features: [
      'Артикуляционная двухсекционная стрела для максимального радиуса обслуживания',
      'Высоконадежные зубчатые насосы-дозаторы с преобразователями частоты',
      'Система подогрева насосного шкафа для стабильной вязкости смолы зимой',
      'Раздельная подача связующих и катализатора непосредственно в сопло смесителя'
    ],
    featuresEn: [
      'Two-stage folding articulation boom for largest reachable floor layout',
      'Super rigid gear pumps controlled via smart frequency micro-converters',
      'Heated pumping cabinet maintaining optimal chemical viscosity during winters',
      'Separate terminal outlets feeding reactants directly into the vortex nozzle tip'
    ],
    specs: [
      { name: 'Диапазон производительности', value: '10 - 20 тонн/час', nameEn: 'Capacity range', valueEn: '10 - 20 tons/hour' },
      { name: 'Максимальный рабочий радиус', value: '4500 мм', nameEn: 'Maximum operating radius', valueEn: '4500 mm' },
      { name: 'Длина первого рукава', value: '2500 мм', nameEn: 'Primary arm length', valueEn: '2500 mm' },
      { name: 'Длина смесительного рукава', value: '2000 мм', nameEn: 'Mixing arm length', valueEn: '2000 mm' },
      { name: 'Точность дозирования компонентов', value: '≤ ±1.0%', nameEn: 'Dosing precision limit', valueEn: '≤ ±1.0%' },
      { name: 'Общая установленная мощность', value: '15.0 кВт', nameEn: 'Total installed power', valueEn: '15.0 kW' }
    ],
    variantModels: [
      { model: 'СХФ-10', capacity: '10 тонн/час', capacityEn: '10 t/h', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Макс. радиус', extraFieldVal: '3500 мм', extraFieldValEn: '3500 mm' },
      { model: 'СХФ-15', capacity: '15 тонн/час', capacityEn: '15 t/h', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Макс. радиус', extraFieldVal: '4500 мм', extraFieldValEn: '4500 mm' },
      { model: 'СХФ-20', capacity: '20 тонн/час', capacityEn: '20 t/h', power: '18.5 кВт', powerEn: '18.5 kW', extraField: 'Макс. радиус', extraFieldVal: '5000 мм', extraFieldValEn: '5000 mm' },
      { model: 'СХФ-30', capacity: '30 тонн/час', capacityEn: '30 t/h', power: '30.0 кВт', powerEn: '30.0 kW', extraField: 'Макс. радиус', extraFieldVal: '5500 мм', extraFieldValEn: '5500 mm' }
    ]
  },
  {
    id: 'xtc-reclamation-mechanical',
    category: 'sand-mixers-xtc',
    subcategory: 'reclamation',
    subcategoryRu: 'Регенерация песка ХТС',
    subcategoryEn: 'No-Bake Reclamation',
    subsubcategory: 'mechanical',
    subsubcategoryRu: 'Механическая регенерация РП',
    subsubcategoryEn: 'Mechanical reclamation RP',
    title: 'Линия механической регенерации песка ХТС',
    titleEn: 'No-bake / resin sand mechanical reclamation line',
    model: 'РП-8',
    description: 'Автоматизированная установка для очистки, классификации и фракционирования отработанного формовочного песка ХТС с целью его повторного вовлечения в производственный цикл. Снижает затраты на покупку свежего песка до 90%.',
    descriptionEn: 'Automated plant for shake-out, calcination, and classification of used no-bake foundry sand. Recovers high-quality sands and cuts fresh sand supply costs by up to 90%.',
    imageUrl: '/img/foto/Menu/regenerazia.jpg',
    capacity: '8 тонн/час',
    capacityEn: '8 tons/hour',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Бережное механическое дегродирование пленок смолы методом взаимного трения зерен песка',
      'Эффективная двухуровневая виброочистка от металлических включений и спекшихся конгломератов',
      'Высокая степень удаления мелкой пылевидной фракции (сепаратор запыленности)',
      'Интегрированный пневмотранспорт для передачи регенерата в силосы хранения'
    ],
    featuresEn: [
      'Gentle mechanical scrubbing of residual binder film using abrasive grain friction',
      'Highly efficient dual-stage vibration screen sorting out metal scraps and lumps',
      'De-dusting air separator providing near-total control over fine powders',
      'Integrated pneumatic conveyor to deliver reclaimed sand directly to storage silos'
    ],
    specs: [
      { name: 'Производительность линии', value: '6 - 8 тонн/час', nameEn: 'Throughput capacity', valueEn: '6 - 8 tons/hour' },
      { name: 'Выход качественного регенерата', value: '≥ 85%', nameEn: 'Reclaimed sand recovery rate', valueEn: '≥ 85%' },
      { name: 'Температура входящего песка', value: 'до 120 °C', nameEn: 'Inlet sand temperature', valueEn: 'up to 120 °C' },
      { name: 'Эффективность удаления пыли (<0.1 мм)', value: '≥ 95%', nameEn: 'Dust removal efficiency (<0.1mm)', valueEn: '≥ 95%' },
      { name: 'Общая потребляемая мощность', value: '45 кВт', nameEn: 'Total power consumption', valueEn: '45 kW' },
      { name: 'Расход сжатого воздуха', value: '2.5 м³/мин', nameEn: 'Compressed air flow rate', valueEn: '2.5 m/min' }
    ],
    variantModels: [
      { model: 'РП-3', capacity: '3 тонн/час', capacityEn: '3 t/h', power: '25 кВт', powerEn: '25 kW', extraField: 'Степень очистки', extraFieldVal: '90%', extraFieldValEn: '90%' },
      { model: 'РП-5', capacity: '5 тонн/час', capacityEn: '5 t/h', power: '37 кВт', powerEn: '37 kW', extraField: 'Степень очистки', extraFieldVal: '92%', extraFieldValEn: '92%' },
      { model: 'РП-8', capacity: '8 тонн/час', capacityEn: '8 t/h', power: '45 кВт', powerEn: '45 kW', extraField: 'Степень очистки', extraFieldVal: '95%', extraFieldValEn: '95%' },
      { model: 'РП-12', capacity: '12 тонн/час', capacityEn: '12 t/h', power: '55 кВт', powerEn: '55 kW', extraField: 'Степень очистки', extraFieldVal: '95%', extraFieldValEn: '95%' },
      { model: 'РП-20', capacity: '20 тонн/час', capacityEn: '20 t/h', power: '90 кВт', powerEn: '90 kW', extraField: 'Степень очистки', extraFieldVal: '96%', extraFieldValEn: '96%' }
    ]
  },
  {
    id: 'xtc-reclamation-thermal',
    category: 'sand-mixers-xtc',
    subcategory: 'reclamation',
    subcategoryRu: 'Регенерация песка ХТС',
    subcategoryEn: 'No-Bake Reclamation',
    subsubcategory: 'thermal',
    subsubcategoryRu: 'Термическая регенерация РП-Т',
    subsubcategoryEn: 'Thermal calcining RP-T',
    title: 'Установка термической регенерации песка ХТС',
    titleEn: 'Thermal calcination sand reclamation system',
    model: 'РП-Т3',
    description: 'Установка прокалки отработанного песка в печи кипящего слоя. Идеально выжигает органические остатки смолы и полимеризованного связующего с активной рекуперацией тепла. Используется для жестких требований к качеству регенерата в прецизионном стальном литье.',
    descriptionEn: 'Fluid bed thermal calcination furnace developed to burn off organic binders and phenolic resin coatings from spent sand grain. Perfect for high-duty mold core sand circuits making steel parts.',
    imageUrl: '/img/foto/Menu/sistema-regeneracii-3.jpg',
    capacity: '3 тонн/час',
    capacityEn: '3 tons/hour',
    power: '120 кВт (газ/электро)',
    powerEn: '120 kW (gas/electric)',
    features: [
      'Полное выжигание остаточной смолы (L.O.I. снижается до уровня < 0.15%)',
      'Энергоэффективная рекуперация тепла для предварительного нагрева воздуха печи',
      'Печь непрерывного действия с футеровкой из жаропрочного бетона',
      'Двухконтурное циклонное охлаждение песка до комнатных температур'
    ],
    featuresEn: [
      'Complete burn-out of resin coatings (L.O.I. reduced to less than 0.15%)',
      'Energy efficient thermal recuperators utilizing exhaust heat to preheat furnace blower drafts',
      'Heavy monolithic refractory cast linings resisting continuous thermal loads',
      'Dual-stage cyclonic sand coolers dropping returned grain temperatures immediately'
    ],
    specs: [
      { name: 'Производительность прокалки', value: '3.0 тонны/час', nameEn: 'Calcination capacity', valueEn: '3.0 tons/hour' },
      { name: 'Температура обжига песка', value: '650 - 750 °C', nameEn: 'Calcination temperature', valueEn: '650 - 750 °C' },
      { name: 'Расход топлива (природный газ)', value: '18 - 22 м³/тонна', nameEn: 'Natural gas consumption rate', valueEn: '18 - 22 m³/ton' },
      { name: 'Показатель остаточных смол L.O.I.', value: '≤ 0.15 %', nameEn: 'Residual Loss On Ignition index', valueEn: '≤ 0.15 %' },
      { name: 'Управление технологическими циклами', value: 'ЧПУ на базе Siemens S7-1500', nameEn: 'Control execution hardware', valueEn: 'PLC Siemens S7-1500' }
    ],
    variantModels: [
      { model: 'РП-Т1', capacity: '1 тонна/час', capacityEn: '1 t/h', power: '75 кВт', powerEn: '75 kW', extraField: 'Остаточный LOI', extraFieldVal: '≤ 0.15%', extraFieldValEn: '≤ 0.15%' },
      { model: 'РП-Т3', capacity: '3 тонны/час', capacityEn: '3 t/h', power: '120 кВт', powerEn: '120 kW', extraField: 'Остаточный LOI', extraFieldVal: '≤ 0.15%', extraFieldValEn: '≤ 0.15%' },
      { model: 'РП-Т5', capacity: '5 тонн/час', capacityEn: '5 t/h', power: '180 кВт', powerEn: '180 kW', extraField: 'Остаточный LOI', extraFieldVal: '≤ 0.12%', extraFieldValEn: '≤ 0.12%' }
    ]
  },
  {
    id: 'xtc-vibro-tables',
    category: 'sand-mixers-xtc',
    subcategory: 'compaction',
    subcategoryRu: 'Вибростолы и формовка',
    subcategoryEn: 'Compaction Tables',
    subsubcategory: 'tables',
    subsubcategoryRu: 'Вибростолы уплотнительные ВСФ',
    subsubcategoryEn: 'Compaction tables VSF',
    title: 'Вибростол уплотнительный формовочный серии ВСФ',
    titleEn: 'Foundry mold compaction vibration table VSF',
    model: 'ВСФ-2.5',
    description: 'Уплотнительный вибростол с регулируемой частотой колебаний. Предназначен для равномерного распределения и плотной укладки песчаной смеси ХТС вокруг заменяемых литейных моделей внутри опок. Исключает раковины и воздушные пустоты.',
    descriptionEn: 'Heavy duty molding sand compaction table with fully adjustable frequency. Designed to settle, densify and compact no-bake/XTC chemical binders around complex model boxes inside molding flasks.',
    imageUrl: '/img/foto/Menu/vibr-z.jpg',
    capacity: '2.5 тонны',
    capacityEn: '2.5 tons',
    power: '4.4 кВт',
    powerEn: '4.4 kW',
    features: [
      'Два дебалансных регулируемых вибровозбудителя высокого ресурса',
      'Инверторное регулирование частоты и амплитуды вибрации (ЧП Delta)',
      'Низкая посадочная высота для удобной интеграции в рольганговые линии',
      'Усиленная сварная стальная конструкция стола с демпфирующими подушками'
    ],
    featuresEn: [
      'Two high-duty adjustable eccentric unbalance vibrators',
      'Inverter frequency regulation via smart Delta micro-drive controllers',
      'Low structural working height allowing neat conveyor layout fittings',
      'Reinforced welded frame structure isolated by high-deflection rubber dampers'
    ],
    specs: [
      { name: 'Грузоподъемность максимальная', value: '2500 кг', nameEn: 'Max payload capacity', valueEn: '2500 kg' },
      { name: 'Размеры рабочей платформы', value: '1500 х 1200 мм', nameEn: 'Working platform dimensions', valueEn: '1500 x 1200 mm' },
      { name: 'Частота колебаний (регулируемая)', value: '0 - 50 Гц', nameEn: 'Vibration frequency range', valueEn: '0 - 50 Hz' },
      { name: 'Высота стола над полом', value: '450 мм', nameEn: 'Table height above ground', valueEn: '450 mm' },
      { name: 'Вибросила возбудителей', value: '2 х 20 кН', nameEn: 'Excitation force index', valueEn: '2 x 20 kN' },
      { name: 'Мощность приводных моторов', value: '4.4 кВт', nameEn: 'Drive motor power rating', valueEn: '4.4 kW' }
    ],
    variantModels: [
      { model: 'ВСФ-1.0', capacity: '1.0 т', capacityEn: '1.0 t', power: '2.2 кВт', powerEn: '2.2 kW', extraField: 'Размер стола', extraFieldVal: '1000 х 800 мм', extraFieldValEn: '1000 x 800 mm' },
      { model: 'ВСФ-2.5', capacity: '2.5 т', capacityEn: '2.5 t', power: '4.4 кВт', powerEn: '4.4 kW', extraField: 'Размер стола', extraFieldVal: '1500 х 1200 мм', extraFieldValEn: '1500 x 1200 mm' },
      { model: 'ВСФ-5.0', capacity: '5.0 т', capacityEn: '5.0 t', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Размер стола', extraFieldVal: '2000 х 1600 мм', extraFieldValEn: '2000 x 1600 mm' }
    ]
  }
];
