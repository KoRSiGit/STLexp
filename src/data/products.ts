import { Product } from '../types';
import sandMixerXTC from '../assets/images/sand_mixer_xtc_1781504511099.jpg';
import inductionFurnaceImg from '../assets/images/induction_furnace_1781504526346.jpg';
import shotBlasterImg from '../assets/images/shot_blaster_1781504543211.jpg';

export const PRODUCTS: Product[] = [
  // SECTION 1: NO-BAKE MOLDING (ХТС)
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
    capacityEn: '8 tons/hour',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Бережное механическое дегродирование пленок смолы методом взаимного трения зерен песка',
      'Эффективная двухуровневая виброочистка от металлических включений и спекшихся конгломератов',
      'Высока степень удаления мелкой пылевидной фракции (сепаратор запыленности)',
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
    imageUrl: sandMixerXTC,
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
    title: 'Вибростол формовочный уплотнительный',
    titleEn: 'Vibrating mold compaction table',
    model: 'ВСФ-12',
    description: 'Профессиональный вибрационный стол для уплотнения смеси в опоках и формовочных комплектах по ХТС-процессу. Равномерно распределяет смесь по всему объему модели, удаляет воздушные пустоты и пористость, гарантируя беспористую лицевую поверхность отливки.',
    descriptionEn: 'Heavy duty vibrating compaction grid design to pack sand mixes securely within flasks, especially optimized for no-bake lines. Maximizes sand compaction structure and purges micro air cavities.',
    imageUrl: '/img/foto/Menu/KANTOVATEL.jpg',
    capacityEn: 'Up to 3.0 tons load',
    power: '4.4 кВт',
    powerEn: '4.4 kW',
    features: [
      'Два спаренных регулируемых вибромотора с противоположным направлением вращения',
      'Возможность регулировки статической силы возбуждения грузами-дебалансами',
      'Педальное пусковое управление для интеграции в рукавные заливочные пути',
      'Высокопрочные амортизаторы из импортного неопрена для защиты фундамента'
    ],
    featuresEn: [
      'Twin synchronized adjustable vibromotors providing linear vertical vibration vectors',
      'Manually adjustable flyweights to calibrate static exciting force dynamically',
      'Foot-pedal starter trigger control for seamless operation directly under resin mixers',
      'Highly rugged dampers made of imported compounds to absorb shock and protect floors'
    ],
    specs: [
      { name: 'Рабочая площадь стола', value: '1500 х 1200 мм', nameEn: 'Compaction table sizing', valueEn: '1500 x 1200 mm' },
      { name: 'Максимальная грузоподъемность', value: '3000 кг', nameEn: 'Maximum payload weight', valueEn: '3000 kg' },
      { name: 'Частота колебаний вибростола', value: '3000 об/мин', nameEn: 'Vibration cycle frequency', valueEn: '3000 rpm' },
      { name: 'Номинальная амплитуда', value: '0.5 - 1.5 мм', nameEn: 'Vertical amplitude range', valueEn: '0.5 - 1.5 mm' },
      { name: 'Вынуждающая сила сопряжения', value: '40 кН', nameEn: 'Compaction exciting force', valueEn: '40 kN' },
      { name: 'Габаритные установочные размеры', value: '1500 х 1200 х 750 мм', nameEn: 'Dimensions (LxWxH)', valueEn: '1500 x 1200 x 750 mm' }
    ],
    variantModels: [
      { model: 'ВСФ-6', capacity: 'До 1.0 тонны', capacityEn: 'Up to 1.0 ton', power: '2.2 кВт', powerEn: '2.2 kW', extraField: 'Размер плиты', extraFieldVal: '1000х800 мм', extraFieldValEn: '1000x800 mm' },
      { model: 'ВСФ-12', capacity: 'До 3.0 тонн', capacityEn: 'Up to 3.0 tons', power: '4.4 кВт', powerEn: '4.4 kW', extraField: 'Размер плиты', extraFieldVal: '1500х1200 мм', extraFieldValEn: '1500x1200 mm' },
      { model: 'ВСФ-20', capacity: 'До 5.0 тонн', capacityEn: 'Up to 5.0 tons', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Размер плиты', extraFieldVal: '2000х1500 мм', extraFieldValEn: '2000x1500 mm' },
      { model: 'ВСФ-30', capacity: 'До 8.0 тонн', capacityEn: 'Up to 8.0 tons', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Размер плиты', extraFieldVal: '2400х1800 мм', extraFieldValEn: '2400x1800 mm' }
    ]
  },

  // SECTION 2: MELTING FURNACES (ПЛАВКА)
  {
    id: 'furnace-induction-aluminum-reducer',
    category: 'furnaces',
    subcategory: 'induction',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    subsubcategory: 'aluminum-reducer',
    subsubcategoryRu: 'В алюминиевом корпусе на редукторе (до 1т)',
    subsubcategoryEn: 'Aluminum shell on reducer (up to 1t)',
    title: 'Индукционные плавильные печи в алюминиевом корпусе на редукторе',
    titleEn: 'Aluminum shell crucible induction furnaces on electromechanical tilting reducer',
    model: 'GW 0.5-350-1',
    description: 'Индукционная тигельная плавильная печь в корпусе из прочного алюминиевого сплава емкостью тигля до 1 тонны на червячном редукторе наклона. Корпус электропечи выполнен из алюминиевого сплава и состоит из двух симметричных половин, соединенных через электроизоляцию для предотвращения короткозамкнутых вихревых контуров. Простая, легкая и ремонтопригодная конструкция идеально подходит как крупным литейным заводам, так и малым предприятиям фасонного литья.',
    descriptionEn: 'Thyristor coreless induction smelting furnace in a lightweight aluminum alloy split shell with crucible capacity up to 1 ton on a mechanical reduction gear. Divided into two insulated matching symmetrical frames to prevent hot parasitic loops. An extremely maintainable, compact, and economical design perfectly fitting both small workshops and big foundries.',
    imageUrl: inductionFurnaceImg,
    capacity: '0.50 тонн стали',
    capacityEn: '0.50 tons of steel',
    power: '350 кВт',
    powerEn: '350 kW',
    features: [
      'Два плавильных узла (посты), работающие попеременно от одного ТПЧ',
      'Корпус из высокоуглеродистого алюминиевого сплава с надежной изоляцией',
      'Электромеханический редуктор с плавным червячным приводом наклона тигля',
      'Индукционные катушки из толстостенной медной трубки высокой проводимости',
      'Удобный пульт дистанционного управления наклоном печей в ручном режиме',
      'Минимальные габариты для экономии полезной площади литейного участка'
    ],
    featuresEn: [
      'Twin melting posts operating alternately powered by a highly reliable thyristor frequency inverter',
      'High-grade cast aluminum alloy housing with comprehensive joint-point isolation',
      'Electromechanical drive reducer for fine-flow slow pouring manipulation',
      'Inductor coils crafted of thick-walled high-purity electrolytic oxygen-free copper profile tubing',
      'Responsive local control panel regulating the rotation speed of the crucible',
      'Reduced overall dimensions saving premium industrial floor and ceiling clearances'
    ],
    specs: [
      { name: 'Номинальная емкость печи по чугуну', value: '500 кг', nameEn: 'Nominal raw capacity (cast iron)', valueEn: '500 kg' },
      { name: 'Мощность тиристорного преобразователя', value: '350 кВт', nameEn: 'Inverter rated power', valueEn: '350 kW' },
      { name: 'Номинальная рабочая частота тока', value: '1.0 кГц', nameEn: 'Resonant operational frequency', valueEn: '1.0 kHz' },
      { name: 'Напряжение сети плавильного контура', value: '3 фазы, 380В, 50 Гц', nameEn: 'Substation input grid voltage', valueEn: '3 phases, 380V, 50 Hz' },
      { name: 'Скорость плавления стали (до 1650°С)', value: '0.54 тонн/час', nameEn: 'Steel melting rate (to 1650°C)', valueEn: '0.54 tons/hour' },
      { name: 'Скорость плавления чугуна (до 1450°С)', value: '0.60 тонн/час', nameEn: 'Iron melting rate (to 1450°C)', valueEn: '0.60 tons/hour' }
    ],
    variantModels: [
      { model: 'GW 0.1-100-1', capacity: '0.10 тонн', capacityEn: '0.10 tons', power: '100 кВт', powerEn: '100 kW', extraField: 'Плавление стали', extraFieldVal: '0.11 тонн/час', extraFieldValEn: '0.11 t/h' },
      { model: 'GW 0.1-160-1', capacity: '0.10 тонн', capacityEn: '0.10 tons', power: '160 кВт', powerEn: '160 kW', extraField: 'Плавление стали', extraFieldVal: '0.18 тонн/час', extraFieldValEn: '0.18 t/h' },
      { model: 'GW 0.15-100-1', capacity: '0.15 тонн', capacityEn: '0.15 tons', power: '100 кВт', powerEn: '100 kW', extraField: 'Плавление стали', extraFieldVal: '0.10 тонн/час', extraFieldValEn: '0.10 t/h' },
      { model: 'GW 0.15-160-1', capacity: '0.15 тонн', capacityEn: '0.15 tons', power: '160 кВт', powerEn: '160 kW', extraField: 'Плавление стали', extraFieldVal: '0.20 тонн/час', extraFieldValEn: '0.20 t/h' },
      { model: 'GW 0.25-160-1', capacity: '0.25 тонн', capacityEn: '0.25 tons', power: '160 кВт', powerEn: '160 kW', extraField: 'Плавление стали', extraFieldVal: '0.19 тонн/час', extraFieldValEn: '0.19 t/h' },
      { model: 'GW 0.25-250-1', capacity: '0.25 тонн', capacityEn: '0.25 tons', power: '250 кВт', powerEn: '250 kW', extraField: 'Плавление стали', extraFieldVal: '0.37 тонн/час', extraFieldValEn: '0.37 t/h' },
      { model: 'GW 0.5-250-1', capacity: '0.50 тонн', capacityEn: '0.50 tons', power: '250 кВт', powerEn: '250 kW', extraField: 'Плавление стали', extraFieldVal: '0.31 тонн/час', extraFieldValEn: '0.31 t/h' },
      { model: 'GW 0.5-350-1', capacity: '0.50 тонн', capacityEn: '0.50 tons', power: '350 кВт', powerEn: '350 kW', extraField: 'Плавление стали', extraFieldVal: '0.54 тонн/час', extraFieldValEn: '0.54 t/h' },
      { model: 'GW 0.5-500-1', capacity: '0.50 тонн', capacityEn: '0.50 tons', power: '500 кВт', powerEn: '500 kW', extraField: 'Плавление стали', extraFieldVal: '0.84 тонн/час', extraFieldValEn: '0.84 t/h' },
      { model: 'GW 0.75-350-1', capacity: '0.75 тонн', capacityEn: '0.75 tons', power: '350 кВт', powerEn: '350 kW', extraField: 'Плавление стали', extraFieldVal: '0.54 тонн/час', extraFieldValEn: '0.54 t/h' },
      { model: 'GW 0.75-500-1', capacity: '0.75 тонн', capacityEn: '0.75 tons', power: '500 кВт', powerEn: '500 kW', extraField: 'Плавление стали', extraFieldVal: '0.69 тонн/час', extraFieldValEn: '0.69 t/h' },
      { model: 'GW 1-500-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '500 кВт', powerEn: '500 kW', extraField: 'Плавление стали', extraFieldVal: '0.76 тонн/час', extraFieldValEn: '0.76 t/h' },
      { model: 'GW 1-750-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '750 кВт', powerEn: '750 kW', extraField: 'Плавление стали', extraFieldVal: '1.27 тонн/час', extraFieldValEn: '1.27 t/h' }
    ]
  },
  {
    id: 'furnace-induction-steel-reducer',
    category: 'furnaces',
    subcategory: 'induction',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    subsubcategory: 'steel-reducer',
    subsubcategoryRu: 'В стальном корпусе на редукторе (до 1т)',
    subsubcategoryEn: 'Steel shell on reducer (up to 1t)',
    title: 'Индукционные плавильные печи на редукторе в стальном корпусе',
    titleEn: 'Steel shell crucible induction furnaces on electromechanical tilting reducer',
    model: 'GW 0.5-350S-R',
    description: 'Специальные индукционные плавильные печи емкостью тигля до 1 тонны, выполненные в виде жесткого сварного стального защитного кожуха на мотор-редукторе наклона. В отличие от алюминиевых корпусов, стальная конструкция обеспечивает непревзойденную форму жесткости и оборудуется магнитными шунтами (магнитопроводами из электротехнической кремниевой стали), которые направляют магнитный поток внутрь тигля и экранируют наружное излучение. Жесткий щит предотвращает термические перекосы и существенно увеличивает эксплуатационный ресурс футеровочной массы.',
    descriptionEn: 'Highly reliable steel structure induction melting furnaces with capacities up to 1 ton on mechanical worm gearbox rotators. Crafted with rigid heavy plates and padded with back yokes (magnetic sheaths made of silicon transformer steel laminations). This shields the outer control board, guards against heat displacement distortions, keeps stray EM fields low, and extends the furnace refractory lining lifespan.',
    imageUrl: inductionFurnaceImg,
    capacity: '0.50 тонн стали',
    capacityEn: '0.50 tons of steel',
    power: '350 кВт',
    powerEn: '350 kW',
    features: [
      'Стальные магнитные ярлыки (шунты) исключают вихревой нагрев элементов рамы печи',
      'Минимальное внешнее электромагнитное излучение, безопасное для персонала цеха',
      'Мощная антивибрационная сварная стальная конструкция опор',
      'Защитная теплоизоляционная откидная крышка тигля в базовом комплекте',
      'Контроль заземления расплава и сканирование пробоя изоляции индуктора',
      'Самоблокирующийся редуктор наклона для удержания тигля в любом полупозиционном состоянии'
    ],
    featuresEn: [
      'High-performance packet magnetic yokes focus lines directly inside keeping steel frame cold',
      'Symmetric ground-fault and coil insulating relays maintaining operator safety standards',
      'Rugged structural welded beams resisting heavy loads and thermal shocks',
      'Durable hinged furnace thermal lid covers decreasing convective radiation loss',
      'Automatic lining wear leakage and ground loop scanner diagnostics included',
      'Self-locking gear system ensuring positive locking at any tilting discharge angle'
    ],
    specs: [
      { name: 'Предельная вместимость жидкой стали', value: '500 кг', nameEn: 'Max molten steel capacity', valueEn: '500 kg' },
      { name: 'Система экранирования корпуса', value: 'Ферромагнитные ярлыки-шунты', nameEn: 'EM Screening method', valueEn: 'Laminated magnetic back yokes' },
      { name: 'Угол аварийного наклона тигля', value: 'до 95 градусов', nameEn: 'Max total tilting degree', valueEn: 'Up to 95 degrees' },
      { name: 'Питание тиристорного инвертора', value: '3 фазы, 380В, 50 Гц', nameEn: 'Inverter connection voltage', valueEn: '3 phases, 380V, 50 Hz' },
      { name: 'Период чистой плавки со стали', value: '50-60 минут', nameEn: 'Full steel cycle time', valueEn: '50-60 minutes' }
    ],
    variantModels: [
      { model: 'GW 0.1-100-1', capacity: '0.10 тонн', capacityEn: '0.10 tons', power: '100 кВт', powerEn: '100 kW', extraField: 'Плавление стали', extraFieldVal: '0.11 тонн/час', extraFieldValEn: '0.11 t/h' },
      { model: 'GW 0.15-160-1', capacity: '0.15 тонн', capacityEn: '0.15 tons', power: '160 кВт', powerEn: '160 kW', extraField: 'Плавление стали', extraFieldVal: '0.20 тонн/час', extraFieldValEn: '0.20 t/h' },
      { model: 'GW 0.25-250-1', capacity: '0.25 тонн', capacityEn: '0.25 tons', power: '250 кВт', powerEn: '250 kW', extraField: 'Плавление стали', extraFieldVal: '0.37 тонн/час', extraFieldValEn: '0.37 t/h' },
      { model: 'GW 0.5-350-1', capacity: '0.50 тонн', capacityEn: '0.50 tons', power: '350 кВт', powerEn: '350 kW', extraField: 'Плавление стали', extraFieldVal: '0.54 тонн/час', extraFieldValEn: '0.54 t/h' },
      { model: 'GW 0.75-500-1', capacity: '0.75 тонн', capacityEn: '0.75 tons', power: '500 кВт', powerEn: '500 kW', extraField: 'Плавление стали', extraFieldVal: '0.69 тонн/час', extraFieldValEn: '0.69 t/h' },
      { model: 'GW 1-500-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '500 кВт', powerEn: '500 kW', extraField: 'Плавление стали', extraFieldVal: '0.76 тонн/час', extraFieldValEn: '0.76 t/h' },
      { model: 'GW 1-750-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '750 кВт', powerEn: '750 kW', extraField: 'Плавление стали', extraFieldVal: '1.27 тонн/час', extraFieldValEn: '1.27 t/h' }
    ]
  },
  {
    id: 'furnace-induction-steel-hydraulic',
    category: 'furnaces',
    subcategory: 'induction',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    subsubcategory: 'steel-hydraulic',
    subsubcategoryRu: 'В стальном корпусе на гидравлике (до 20т)',
    subsubcategoryEn: 'Steel shell on hydraulics (up to 20t)',
    title: 'Индукционные плавильные печи на гидравлике в стальном корпусе',
    titleEn: 'Heavy duty steel shell induction melting furnaces on hydraulic tilting cylinders',
    model: 'GW 3-2000-0.5',
    description: 'Массивные промышленные плавильные комплексы емкостью от 1 до 20 тонн под гидравлическим управлением наклона ванны. Конструкция выполнена в виде единой несущей стальной чаши с защитными шунтами из электротехнической стали, полностью перекрывающими внешнюю сторону катушек медного индуктора. Полнофункциональная гидравлическая насосная станция оснащена дублированными телескопическими цилиндрами, предохранительными клапанами удержания от падения давления и обеспечивает прецизионно плавный наклон тяжелых тиглей для безопасного слива в ковши.',
    descriptionEn: 'High capacity heavy-duty metallurgical melting installations ranging from 1 to 20 tons raw payloads, powered by bilateral double-acting hydraulic cylinders. Features computer-modeled structural steel shell shielding and deep back yokes encompassing over 95% of active magnetic flux lines. The professional hydraulic pump station is furnished with pilot locks, accumulator systems, and speed throttles ensuring extremely smooth material transfers even at critical max tilts.',
    imageUrl: inductionFurnaceImg,
    capacity: '3.00 тонн стали',
    capacityEn: '3.00 tons of steel',
    power: '2000 кВт',
    powerEn: '2000 kW',
    features: [
      'Двухцилиндровый гидравлический подъем со скоростными дросселями контроля потока',
      'Сплошной пояс ярлыков-шунтов экранирует электромагнитное излучение от рамы печи',
      'Защитное водяное охлаждение балок верхнего фланцевого кольца и опорных стоек',
      'Усиленный сварной металлический каркас защищает индуктор от механических деформаций',
      'Профессиональная аналого-цифровая система ЧПУ на процессоре Siemens с мониторингом датчиков',
      'Выталкиватель изношенного тигля (гидравлический плунжер выталкивания футеровки) — опция'
    ],
    featuresEn: [
      'Twin hydraulic tilting rams operating with load holding check safety valves',
      'Dense heavy magnetic plate armor shields up to 95% of inductive stray stray losses',
      'Water-cooled top flange ring blocks and copper busbar terminals protecting auxiliary details',
      'Ultra-thick structural sheet-steel body shell completely safe to thermal stresses',
      'Active HMI computer screen controlling water parameters, load factor and faults',
      'Hydraulic bottom refractory lining ejector piston for fast crucible cleanup (optional)'
    ],
    specs: [
      { name: 'Предельная плавильная вместимость', value: '3000 кг жидкой стали', nameEn: 'Crucible liquid capacity', valueEn: '3000 kg molten steel' },
      { name: 'Потребляемая мощность инвертора ТПЧ', value: '2000 кВт', nameEn: 'Thyristor inverter maximum power', valueEn: '2000 kW' },
      { name: 'Средняя частота плавильного тока', value: '500 Гц', nameEn: 'Generator current frequency', valueEn: '500 Hz' },
      { name: 'Производительность плавки стали 1550°С', value: '3.58 тонн/час', nameEn: 'Steel melting throughput (1550°C)', valueEn: '3.58 tons/hour' },
      { name: 'Удельный расход энергии при плавке', value: '600 кВт·ч/тонну', nameEn: 'Specific electricity usage', valueEn: '600 kWh/ton' },
      { name: 'Серийное гидроуправление', value: 'Два плунжера, рабочее давление 14 МПа', nameEn: 'Standard hydraulic pack data', valueEn: 'Dual rams, working pressure 14 MPa' }
    ],
    variantModels: [
      { model: 'GW 0.5-350-1', capacity: '0.50 тонн', capacityEn: '0.50 tons', power: '350 кВт', powerEn: '350 kW', extraField: 'Производительность', extraFieldVal: '0.57 т/ч', extraFieldValEn: '0.57 t/h' },
      { model: 'GW 0.5-500-0.5', capacity: '0.50 тонн', capacityEn: '0.50 tons', power: '500 кВт', powerEn: '500 kW', extraField: 'Производительность', extraFieldVal: '0.87 т/ч', extraFieldValEn: '0.87 t/h' },
      { model: 'GW 0.75-350-1', capacity: '0.75 тонн', capacityEn: '0.75 tons', power: '350 кВт', powerEn: '350 kW', extraField: 'Производительность', extraFieldVal: '0.60 т/ч', extraFieldValEn: '0.60 t/h' },
      { model: 'GW 0.75-500-1', capacity: '0.75 тонн', capacityEn: '0.75 tons', power: '500 кВт', powerEn: '500 kW', extraField: 'Производительность', extraFieldVal: '0.70 т/ч', extraFieldValEn: '0.70 t/h' },
      { model: 'GW 1-500-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '500 кВт', powerEn: '500 kW', extraField: 'Производительность', extraFieldVal: '0.78 т/ч', extraFieldValEn: '0.78 t/h' },
      { model: 'GW 1-600-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '600 кВт', powerEn: '600 kW', extraField: 'Производительность', extraFieldVal: '0.94 т/ч', extraFieldValEn: '0.94 t/h' },
      { model: 'GW 1-750-0.5', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '750 кВт', powerEn: '750 kW', extraField: 'Производительность', extraFieldVal: '1.29 т/ч', extraFieldValEn: '1.29 t/h' },
      { model: 'GW 1.5-750-0.5', capacity: '1.50 тонн', capacityEn: '1.50 tons', power: '750 кВт', powerEn: '750 kW', extraField: 'Производительность', extraFieldVal: '1.21 т/ч', extraFieldValEn: '1.21 t/h' },
      { model: 'GW 1.5-1000-0.5', capacity: '1.50 тонн', capacityEn: '1.50 tons', power: '1000 кВт', powerEn: '1000 kW', extraField: 'Производительность', extraFieldVal: '1.62 т/ч', extraFieldValEn: '1.62 t/h' },
      { model: 'GW 2-1000-0.5', capacity: '2.00 тонн', capacityEn: '2.00 tons', power: '1000 кВт', powerEn: '1000 kW', extraField: 'Производительность', extraFieldVal: '1.59 т/ч', extraFieldValEn: '1.59 t/h' },
      { model: 'GW 2-1500-0.5', capacity: '2.00 тонн', capacityEn: '2.00 tons', power: '1500 кВт', powerEn: '1500 kW', extraField: 'Производительность', extraFieldVal: '2.72 т/ч', extraFieldValEn: '2.72 t/h' },
      { model: 'GW 3-1500-0.5', capacity: '3.00 тонн', capacityEn: '3.00 tons', power: '1500 кВт', powerEn: '1500 kW', extraField: 'Производительность', extraFieldVal: '2.59 т/ч', extraFieldValEn: '2.59 t/h' },
      { model: 'GW 3-2000-0.5', capacity: '3.00 тонн', capacityEn: '3.00 tons', power: '2000 кВт', powerEn: '2000 kW', extraField: 'Производительность', extraFieldVal: '3.58 т/ч', extraFieldValEn: '3.58 t/h' },
      { model: 'GW 3-2500-0.5', capacity: '3.00 тонн', capacityEn: '3.00 tons', power: '2500 кВт', powerEn: '2500 kW', extraField: 'Производительность', extraFieldVal: '4.63 т/ч', extraFieldValEn: '4.63 t/h' },
      { model: 'GW 5-2500-0.5', capacity: '5.00 тонн', capacityEn: '5.00 tons', power: '2500 кВт', powerEn: '2500 kW', extraField: 'Производительность', extraFieldVal: '4.48 т/ч', extraFieldValEn: '4.48 t/h' }
    ]
  },
  {
    id: 'furnace-induction-non-ferrous',
    category: 'furnaces',
    subcategory: 'induction',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    subsubcategory: 'non-ferrous',
    subsubcategoryRu: 'Для цветных металлов',
    subsubcategoryEn: 'For non-ferrous metals',
    title: 'Индукционные плавильные печи для цветных металлов (серии GWT и GWL)',
    titleEn: 'Coreless induction smelting furnaces for non-ferrous metals (GWT & GWL)',
    model: 'GWT 0.3-160-1',
    description: 'Индукционные тигельные плавильные тиристорные печи серии GWT (для меди, бронзы, латуни, никеля) и серии GWL (для алюминия, цинка, магния, силумина). Окончательные характеристики индуктора и теплового экрана подобраны специально для цветных сплавов: медь плавится при температуре до 1200 °С, алюминий — при низкой температуре 700 °С с регулируемым циклическим индукционным перемешиванием. Это препятствует выделению водорода, удаляет окислы из поддонной зоны ванны, выжигает вредные включения и выдает идеально однородную структуру сплава высокой прочности без пористости.',
    descriptionEn: 'Specialized high-frequency crucible induction smelting complexes comprising series GWT (engineered for copper, bronzes, brasses, and nickel with melt temp to 1200°C) and series GWL (made for aluminum alloys, silumins, zinc, and magnesium with melt temp up to 700°C). Inductor coil pitches and inverter properties are tailored to optimize electro-dynamic bath scrubbing. This drives fast micro-degassification, gathers oxide films, avoids hot spots, and outputs pore-free homogeneous foundry castings.',
    imageUrl: inductionFurnaceImg,
    capacity: '0.30 тонн меди',
    capacityEn: '0.30 tons of copper',
    power: '160 кВт',
    powerEn: '160 kW',
    features: [
      'Повышенный выход годного за счет регулирования электродинамического перемешивания',
      'Высокая частота ТПЧ гарантирует быстрый нагрев цветных сплавов без перегрузок',
      'Минимальный угар дорогостоящих легирующих добавок (цинк, олово, кремний, никель)',
      'Специальная термоизоляционная крышка тигля высокой теплопроводности',
      'Попеременный нагрев в двух плавильных постах от одиночного инвертора питания',
      'Датчик контроля точной температуры ванны и режим автоматического поддержания расплава'
    ],
    featuresEn: [
      'Controlled electromagnetic bath stirring eliminating alloy separation and gas inclusions',
      'Specifically customized frequencies perfectly matching aluminum/copper material resistivities',
      'Drastically reduced oxidation loss of expensive alloying additives like tin, zinc and nickel',
      'Graphite or silicon insulated crucible lid caps for sustained high thermal barriers',
      'Shared generator setup allowing alternative operations on twin crucible installations',
      'Direct pyrometer monitoring system and automated thermal stabilization programs'
    ],
    specs: [
      { name: 'Емкость тигля по меди (серия GWT)', value: '300 кг', nameEn: 'Crucible capacity (copper, GWT)', valueEn: '300 kg' },
      { name: 'Номинальная мощность нагревателя ТПЧ', value: '160 кВт', nameEn: 'Thyristor generator output power', valueEn: '160 kW' },
      { name: 'Диапазон частот индукционного нагрева', value: '1.0 кГц', nameEn: 'Operating coil current frequency', valueEn: '1.0 kHz' },
      { name: 'Напряжение силовой части комплекса', value: '3 фазы, 380В, 50 Гц', nameEn: 'Power cabinet connection volts', valueEn: '3 phases, 380V, 50 Hz' },
      { name: 'Рабочая производительность плавки меди', value: '0.30 тонн/час', nameEn: 'Copper melting throughput GWT', valueEn: '0.30 tons/hour' },
      { name: 'Удельный расход электроэнергии меди', value: '540 кВт·ч/тонну', nameEn: 'Specific electricity usage (copper)', valueEn: '540 kWh/ton' }
    ],
    variantModels: [
      { model: 'GWT 0.18-100-1', capacity: '0.18 тонн меди', capacityEn: '0.18 tons copper', power: '100 кВт', powerEn: '100 kW', extraField: 'Плавка меди', extraFieldVal: '0.17 тонн/час', extraFieldValEn: '0.17 t/h' },
      { model: 'GWT 0.3-160-1', capacity: '0.30 тонн меди', capacityEn: '0.30 tons copper', power: '160 кВт', powerEn: '160 kW', extraField: 'Плавка меди', extraFieldVal: '0.30 тонн/час', extraFieldValEn: '0.30 t/h' },
      { model: 'GWT 1.8-500-0.5', capacity: '1.80 тонн меди', capacityEn: '1.80 tons copper', power: '500 кВт', powerEn: '500 kW', extraField: 'Плавка меди', extraFieldVal: '1.08 тонн/час', extraFieldValEn: '1.08 t/h' },
      { model: 'GWT 2.4-600-0.5', capacity: '2.40 тонн меди', capacityEn: '2.40 tons copper', power: '600 кВт', powerEn: '600 kW', extraField: 'Плавка меди', extraFieldVal: '1.33 тонн/час', extraFieldValEn: '1.33 t/h' },
      { model: 'GWL 0.05-50-1', capacity: '0.05 тонн алюм.', capacityEn: '0.05 tons alum.', power: '50 кВт', powerEn: '50 kW', extraField: 'Плавка алюминия', extraFieldVal: '0.07 тонн/час', extraFieldValEn: '0.07 t/h' },
      { model: 'GWL 0.15-100-1', capacity: '0.15 тонн алюм.', capacityEn: '0.15 tons alum.', power: '100 кВт', powerEn: '100 kW', extraField: 'Плавка алюминия', extraFieldVal: '0.15 тонн/час', extraFieldValEn: '0.15 t/h' },
      { model: 'GWL 0.50-250-1', capacity: '0.50 тонн алюм.', capacityEn: '0.50 tons alum.', power: '250 кВт', powerEn: '250 kW', extraField: 'Плавка алюминия', extraFieldVal: '0.40 тонн/час', extraFieldValEn: '0.40 t/h' },
      { model: 'GWL 1-350-1', capacity: '1.00 тонна алюм.', capacityEn: '1.00 ton alum.', power: '350 кВт', powerEn: '350 kW', extraField: 'Плавка алюминия', extraFieldVal: '0.58 тонн/час', extraFieldValEn: '0.58 t/h' }
    ]
  },
  {
    id: 'ladle-kl-teapot',
    category: 'furnaces',
    subcategory: 'ladles',
    subcategoryRu: 'Заливочные ковши',
    subcategoryEn: 'Pouring Ladles',
    subsubcategory: 'teapot',
    subsubcategoryRu: 'Чайникового типа КЛ',
    subsubcategoryEn: 'Teapot type KL',
    title: 'Ковш заливочный чайникового типа с редуктором',
    titleEn: 'Foundry teapot pouring ladle with gearbox',
    model: 'КЛ-2.0',
    description: 'Чайниковый заливочный ковш для приема жидкого металла из индукционных печей и последующей бережной разливки в песчаные формы. Чайниковая сифонная система задерживает шлак внутри ковша, подавая в изложницу исключительно чистый расплав.',
    descriptionEn: 'Teapot pouring ladle designed to transfer liquid grey iron/cast steel from induction furnaces to sand molds. Bottom syphon gate holds back slag automatically during direct pours.',
    imageUrl: inductionFurnaceImg,
    capacity: '2.0 тонны расплава',
    capacityEn: '2.0 tons steel capacity',
    power: 'Ручной редуктор 1:90',
    powerEn: 'Manual worm gear 1:90',
    features: [
      'Чайниковый носик для автоматического слива металла из придонной зоны ковша (без шлака)',
      'Червячный самотормозящийся редуктор для безопасного наклона одной рукой',
      'Сертифицированная траверса из утолщенной стали повышенной грузоподъемности КД',
      'Защитные экраны на цапфах для предохранения рук разливщика от теплового излучения'
    ],
    featuresEn: [
      'Teapot syphon design feeding pure non-slag molten steel directly to mould cavities',
      'Worm self-locking reduction gearbox enabling high precision hand-wheel tilting',
      'Rugged certified heavy load lifting bail complying with strict metallurgy safety codes',
      'Heat reflection shield plates protecting operators and crane gears against radiant heat'
    ],
    specs: [
      { name: 'Номинальная емкость по чугуну', value: '2000 кг', nameEn: 'Nominal cast iron capacity', valueEn: '2000 kg' },
      { name: 'Диаметр верхнего фланца ковша', value: 'Ø1150 мм', nameEn: 'Ladle shell top diameter', valueEn: 'Ø1150 mm' },
      { name: 'Толщина заливочной футеровки', value: '100 мм', nameEn: 'Lining refractory thickness', valueEn: '100 mm' },
      { name: 'Передаточное число редуктора', value: '1:90', nameEn: 'Gearbox output speed ratio', valueEn: '1:90' },
      { name: 'Вес ковша (без футеровки)', value: '750 кг', nameEn: 'Net empty weight (unlined)', valueEn: '750 kg' }
    ],
    variantModels: [
      { model: 'КЛ-0.5', capacity: 'Емкость 500 кг', capacityEn: 'Capacity 500 kg', power: 'Ручной редуктор 1:60', powerEn: 'Manual worm 1:60', extraField: 'Самоторможение', extraFieldVal: 'Да', extraFieldValEn: 'Yes' },
      { model: 'КЛ-1.0', capacity: 'Емкость 1000 кг', capacityEn: 'Capacity 1000 kg', power: 'Ручной редуктор 1:60', powerEn: 'Manual worm 1:60', extraField: 'Самоторможение', extraFieldVal: 'Да', extraFieldValEn: 'Yes' },
      { model: 'КЛ-2.0', capacity: 'Емкость 2000 кг', capacityEn: 'Capacity 2000 kg', power: 'Ручной редуктор 1:90', powerEn: 'Manual worm 1:90', extraField: 'Самоторможение', extraFieldVal: 'Да', extraFieldValEn: 'Yes' },
      { model: 'КЛ-3.0', capacity: 'Емкость 3000 кг', capacityEn: 'Capacity 3000 kg', power: 'Редуктор червячный 1:120', powerEn: 'Manual worm 1:120', extraField: 'Самоторможение', extraFieldVal: 'Да', extraFieldValEn: 'Yes' },
      { model: 'КЛ-5.0', capacity: 'Емкость 5000 кг', capacityEn: 'Capacity 5000 kg', power: 'Редуктор червячный 1:120', powerEn: 'Manual worm 1:120', extraField: 'Самоторможение', extraFieldVal: 'Да', extraFieldValEn: 'Yes' }
    ]
  },

  // SECTION 3: GREEN SAND (ПГС)
  {
    id: 'green-sand-mixer-st1500',
    category: 'green-sand',
    subcategory: 'mixers',
    subcategoryRu: 'Смесители ПГС',
    subcategoryEn: 'Green Sand Mixers',
    subsubcategory: 'vertical-rotor',
    subsubcategoryRu: 'Вертикально-роторные смесители СТ',
    subsubcategoryEn: 'Vertical rotor mixers ST',
    title: 'Интенсивный чашечный смеситель ПГС вертикально-роторный',
    titleEn: 'Intensive vertical rotor green sand muller mixer',
    model: 'СТ-1500',
    description: 'Высокоэффективный смеситель чашечного типа для приготовления песчано-глинистых формовочных смесей ПГС периодического действия. Спаренные вертикальные катки и скоростной ротор обеспечивают идеальное распределение формовочной глины бентонита и влаги в объеме песка.',
    descriptionEn: 'High-temperature cycle intensive green sand muller mixer. Double load rollers and high-speed vertical rotor blades provide perfect distribution of bentonite clay bonding layers and water across the base silica grain volume.',
    imageUrl: sandMixerXTC,
    capacity: '15 тонн/час',
    capacityEn: '15 tons/hour',
    power: '37 кВт',
    powerEn: '37 kW',
    features: [
      'Оснащен скоростным завихрителем (ротором) со сменными лопатками из карбида вольфрама',
      'Автоматизированный пневматический донный затвор разгрузки с датчиками положения',
      'Корпус чаши из высокопрочной износостойкой стали с марганцевыми бронеплитами Mn13',
      'Интегрированные форсунки с ЧПУ для автоматического увлажнения смеси во время замеса'
    ],
    featuresEn: [
      'Equipped with high-speed multi-blade vertical rotor with tungsten carbide tip blades',
      'Pneumatically operated bottom discharge slide gate with induction status sensors',
      'Muller pan lining composed of heat-treated durable high manganese steel wear plates Mn13',
      'HMI microprocessor-monitored water spraying nozzles for automated humidity dosing'
    ],
    specs: [
      { name: 'Производительность за замес', value: '1000 кг', nameEn: 'Batch mixing size', valueEn: '1000 kg' },
      { name: 'Продолжительность цикла уплотнения', value: '2 - 3 минуты', nameEn: 'Mixing cycle time', valueEn: '2 - 3 minutes' },
      { name: 'Часовая производительность', value: '15 - 20 тонн/час', nameEn: 'Throughput capacity', valueEn: '15 - 20 tons/hour' },
      { name: 'Частота вращения ротора', value: '75 об/мин', nameEn: 'Rotor spin velocity', valueEn: '75 rpm' },
      { name: 'Частота вращения скребков', value: '22 об/мин', nameEn: 'Scraper spin velocity', valueEn: '22 rpm' },
      { name: 'Установленная мощность привода ротора', value: '37 кВт', nameEn: 'Rotor drive motor rating', valueEn: '37 kW' },
      { name: 'Вес установки пустого замеса', value: '5800 кг', nameEn: 'Dry machine construction weight', valueEn: '5800 kg' }
    ],
    variantModels: [
      { model: 'СТ-500', capacity: '5 тонн/час', capacityEn: '5 t/h', power: '15 кВт', powerEn: '15 kW', extraField: 'Вес замеса', extraFieldVal: '350 кг', extraFieldValEn: '350 kg' },
      { model: 'СТ-1000', capacity: '10 тонн/час', capacityEn: '10 t/h', power: '22 кВт', powerEn: '22 kW', extraField: 'Вес замеса', extraFieldVal: '650 кг', extraFieldValEn: '650 kg' },
      { model: 'СТ-1500', capacity: '15 тонн/час', capacityEn: '15 t/h', power: '37 кВт', powerEn: '37 kW', extraField: 'Вес замеса', extraFieldVal: '1000 кг', extraFieldValEn: '1000 kg' },
      { model: 'СТ-2000', capacity: '20 тонн/час', capacityEn: '20 t/h', power: '55 кВт', powerEn: '55 kW', extraField: 'Вес замеса', extraFieldVal: '1500 кг', extraFieldValEn: '1500 kg' },
      { model: 'СТ-3000', capacity: '30 тонн/час', capacityEn: '30 t/h', power: '75 кВт', powerEn: '75 kW', extraField: 'Вес замеса', extraFieldVal: '2200 кг', extraFieldValEn: '2200 kg' }
    ]
  },
  {
    id: 'green-sand-cooler-os60',
    category: 'green-sand',
    subcategory: 'green-coolers',
    subcategoryRu: 'Охладители оборотной смеси',
    subcategoryEn: 'Spent Sand Coolers',
    subsubcategory: 'fluid-bed',
    subsubcategoryRu: 'Установки кипящего слоя песка ОС',
    subsubcategoryEn: 'Fluid bed spend coolers OS',
    title: 'Охладитель оборотной песчаной смеси непрерывного действия',
    titleEn: 'Continuous fluid bed green sand cooler & dust remover',
    model: 'ОС-60',
    description: 'Специализированная промышленная установка кипящего слоя для непрерывного охлаждения горячей оборотной ПГС смеси после выбивки отливок. Возвращает формовочный песок до оптимальной рабочей температуры, удаляя остаточную пыль.',
    descriptionEn: 'Fluidized bed continuous green sand cooler. Cools hot spent sand directly returned from automated shake-out lines back to process temperature limits, utilizing high air flow moisture evaporation and fine dust separation.',
    imageUrl: sandMixerXTC,
    capacity: '60 тонн/час',
    capacityEn: '60 tons/hour',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Активное водяное испарительное охлаждение с автоматической дозировкой увлажнения',
      'Подача очищенного холодного воздуха высокого объема под наклонный кипящий слой песка',
      'Регулируемые вибрационные приводы для плавной транспортировки песка через ванну',
      'Удаление мелкодисперсной глинистой пыли методом воздушной сепарации'
    ],
    featuresEn: [
      'Active evaporative water nozzle spray cooling with smart logic calculations',
      'High flow rate clean air draft pushed through bottom air distribution plates',
      'Twin adjustable vibrating motors to optimize speed of sand passing across cooling grids',
      'Integrated vertical classifier and exhaust hood to purge excess spent sand dust'
    ],
    specs: [
      { name: 'Производительность номинальная', value: '60 тонн/час', nameEn: 'Throughput capacity limit', valueEn: '60 tons/hour' },
      { name: 'Температура горячего песка на входе', value: 'до 150 °C', nameEn: 'Inlet hot sand temperature', valueEn: 'up to 150 °C' },
      { name: 'Температура песка на выгрузке', value: '≤ 40 °C', nameEn: 'Outlet output temperature', valueEn: '≤ 40 °C' },
      { name: 'Эффективность охлаждения по градиенту', value: 'ΔT ≥ 100 °C', nameEn: 'Cooling temperature drop', valueEn: 'ΔT ≥ 100 °C' },
      { name: 'Расход вентиляционного воздуха', value: '18000 м³/час', nameEn: 'Total intake fan volume', valueEn: '18000 m³/hour' },
      { name: 'Статическая установленная мощность', value: '45 кВт', nameEn: 'Total installed electrical load', valueEn: '45 kW' }
    ],
    variantModels: [
      { model: 'ОС-30', capacity: '30 тонн/час', capacityEn: '30 t/h', power: '30 кВт', powerEn: '30 kW', extraField: 'Площадь сетки', extraFieldVal: '1.8 м²', extraFieldValEn: '1.8 m²' },
      { model: 'ОС-60', capacity: '60 тонн/час', capacityEn: '60 t/h', power: '45 кВт', powerEn: '45 kW', extraField: 'Площадь сетки', extraFieldVal: '3.2 м²', extraFieldValEn: '3.2 m²' },
      { model: 'ОС-100', capacity: '100 тонн/час', capacityEn: '100 t/h', power: '75 кВт', powerEn: '75 kW', extraField: 'Площадь сетки', extraFieldVal: '5.4 м²', extraFieldValEn: '5.4 m²' }
    ]
  },
  {
    id: 'green-sand-line-afl6080',
    category: 'green-sand',
    subcategory: 'molding-lines',
    subcategoryRu: 'Автоматические формовочные линии ПГС',
    subcategoryEn: 'Automatic Molding Lines',
    subsubcategory: 'automatic-afl',
    subsubcategoryRu: 'Автоматические линии АФЛ',
    subsubcategoryEn: 'Automatic flaskless lines AFL',
    title: 'Автоматическая безопочная формовочная линия ПГС',
    titleEn: 'Automatic flaskless green sand molding line',
    model: 'АФЛ-6080',
    description: 'Интегрированный автоматизированный комплекс для высокоскоростного безопочного формования из песчано-глинистых смесей. Идеальное решение для серийного производства чугунного и стального литья высокой точности.',
    descriptionEn: 'High-speed automated flaskless green sand molding line. Ideal solution for bulk foundry operations producing precision cast iron and structural steel components with high surface repeat accuracy.',
    imageUrl: sandMixerXTC,
    capacity: '120 форм/час',
    capacityEn: '120 molds/hour',
    power: '110 кВт',
    powerEn: '110 kW',
    features: [
      'Горизонтальный разъем и гидравлическое прессование с двухсторонним уплотнением',
      'Автоматическая система сборки и транспортировки собранных форм на заливочные участки',
      'Система ЧПУ с цифровым хранением до 500 технологических рецептов оснастки',
      'Интегрированные лазерные датчики совмещения полуформ высокой точности (до 0.1 мм)'
    ],
    featuresEn: [
      'Horizontal parting plane with high-pressure dual compaction cylinders',
      'Automated mold transfer and weight jack setter line integrating into pouring tracks',
      'Industrial PLC memory storing over 500 dynamic mold profile parameters',
      'Integrated laser positioning systems ensuring tight mold alignment (unmatched 0.1 mm)'
    ],
    specs: [
      { name: 'Размер формовочной плиты', value: '800 х 600 мм', nameEn: 'Mold size range', valueEn: '800 x 600 mm' },
      { name: 'Высота полуформы регулируемая', value: '150 - 350 мм', nameEn: 'Adjustable mold height', valueEn: '150 - 350 mm' },
      { name: 'Скорость производства', value: '110 - 130 форм/час', nameEn: 'Cycle throughput limit', valueEn: '110 - 130 molds/hour' },
      { name: 'Точность юстировки полуформ', value: '≤ 0.15 мм', nameEn: 'Parting line mismatch accuracy', valueEn: '≤ 0.15 mm' },
      { name: 'Рабочее давление гидравлики', value: '16 МПа', nameEn: 'Main hydraulic cylinder pressure', valueEn: '16 MPa' },
      { name: 'Подача сжатого воздуха', value: '4.5 м³/мин', nameEn: 'Required pneumatic supply', valueEn: '4.5 m³/min' }
    ],
    variantModels: [
      { model: 'АФЛ-5060', capacity: '100 форм/ч', capacityEn: '100 m/h', power: '75 кВт', powerEn: '75 kW', extraField: 'Размер формы', extraFieldVal: '600х500 мм', extraFieldValEn: '600x500 mm' },
      { model: 'АФЛ-6080', capacity: '120 форм/ч', capacityEn: '120 m/h', power: '110 кВт', powerEn: '110 kW', extraField: 'Размер формы', extraFieldVal: '800х600 мм', extraFieldValEn: '800x600 mm' },
      { model: 'АФЛ-80100', capacity: '90 форм/ч', capacityEn: '90 m/h', power: '135 кВт', powerEn: '135 kW', extraField: 'Размер формы', extraFieldVal: '1000х800 мм', extraFieldValEn: '1000x800 mm' }
    ]
  },
  {
    id: 'green-sand-machine-fm20',
    category: 'green-sand',
    subcategory: 'molding-machines',
    subcategoryRu: 'Формовочные машины',
    subcategoryEn: 'Molding Machines',
    subsubcategory: 'jolt-squeeze',
    subsubcategoryRu: 'Встряхивающие прессовые ФМ',
    subsubcategoryEn: 'Jolt squeeze machines FM',
    title: 'Встряхивающая формовочная машина с допрессовкой',
    titleEn: 'Jolt squeeze green sand molding machine',
    model: 'ФМ-20',
    description: 'Классическая однопозиционная формовочная машина с пневматическим приводом для встряхивания и мощной силовой допрессовки. Предназначена для быстрого формования опок средних размеров в единичном и мелкосерийном цикле.',
    descriptionEn: 'Pneumatic jolt squeeze molding machine. Engineered to compress green sand aggregates uniformly inside medium-sized metal flasks for custom and medium-run foundry jobs.',
    imageUrl: sandMixerXTC,
    capacity: 'Опоки до 800х600 мм',
    capacityEn: 'Flasks up to 800x600',
    power: 'Пневмопривод 0.6 МПа',
    powerEn: 'Pneumatic 0.6 MPa',
    features: [
      'Совмещение операций встряхивания и прессования для достижения максимальной плотности углов',
      'Пневматический цилиндр съема формы с регулируемой скоростью и пневмовыталкивателями',
      'Закаленная стальная наковальня и амортизатор удара для продления срока службы',
      'Простое рычажное полуавтоматическое управление'
    ],
    featuresEn: [
      'Synchronized jolt and squeeze operations ensuring high compaction even at box corners',
      'Pneumatically driven slow-draw frame with built-in adjustable speed controls',
      'Heavy-duty hardened anvil design resisting dynamic cyclic high jolt impacts',
      'Robust hand lever operated control console reducing training requirements'
    ],
    specs: [
      { name: 'Грузоподъемность стола', value: '400 кг', nameEn: 'Table load capacity limit', valueEn: '400 kg' },
      { name: 'Размеры формовочного стола', value: '750 х 550 мм', nameEn: 'compaction table dimensions', valueEn: '750 x 550 mm' },
      { name: 'Ход встряхивания', value: '50 - 80 мм', nameEn: 'Jolt stroke limits', valueEn: '50 - 80 mm' },
      { name: 'Диаметр прессового цилиндра', value: 'Ø320 мм', nameEn: 'Piping squeeze cylinder OD', valueEn: 'Ø320 mm' },
      { name: 'Высота уплотняемой опоки', value: '100 - 400 мм', nameEn: 'Maximum mold flask height', valueEn: '100 - 400 mm' },
      { name: 'Расход воздуха за цикл', value: '0.8 м³', nameEn: 'Compressed air volume per blow', valueEn: '0.8 m³' }
    ],
    variantModels: [
      { model: 'ФМ-10', capacity: 'Опока 600х400', capacityEn: 'Flask 600x400', power: '0.6 МПа', powerEn: '0.6 MPa', extraField: 'Прессовый узел', extraFieldVal: 'Ø200 мм', extraFieldValEn: 'Ø200 mm' },
      { model: 'ФМ-20', capacity: 'Опока 800х600', capacityEn: 'Flask 800x600', power: '0.6 МПа', powerEn: '0.6 MPa', extraField: 'Прессовый узел', extraFieldVal: 'Ø320 мм', extraFieldValEn: 'Ø320 mm' },
      { model: 'ФМ-35', capacity: 'Опока 1000х800', capacityEn: 'Flask 1000x800', power: '0.6 МПа', powerEn: '0.6 MPa', extraField: 'Прессовый узел', extraFieldVal: 'Ø450 мм', extraFieldValEn: 'Ø450 mm' }
    ]
  },

  // SECTION 4: CORE MAKING (СТЕРЖНЕВОЕ ОБОРУДОВАНИЕ)
  {
    id: 'core-shooter-sa400',
    category: 'core-making',
    subcategory: 'shooters',
    subcategoryRu: 'Стержневые автоматы',
    subcategoryEn: 'Core Shooters',
    subsubcategory: 'cold-box-amine',
    subsubcategoryRu: 'Cold-Box-Amine процесс СА',
    subsubcategoryEn: 'Cold-Box-Amine SA series',
    title: 'Стержневой автомат пескострельного типа Cold-box-amine',
    titleEn: 'Pneumatic cold-box-amine automated core shooter machine',
    model: 'СА-400',
    description: 'Автоматизированная стержневая машина для крупносерийного производства сложных песчаных стержней методом пескострельного надува с последующим отверждением газообразным амином (Cold-Box-Amine процесс).',
    descriptionEn: 'High yield automated core blowing machine for precision volume output of foundry sand cores. Employs classic high speed shooting injection coupled with gaseous amine curing (Cold-Box process).',
    imageUrl: sandMixerXTC,
    capacity: 'Стержневой ящик до 40 л',
    capacityEn: 'Box capacity up to 40L',
    power: '15 кВт',
    powerEn: '15 kW',
    features: [
      'Двухпозиционный зажимной узел с сервоприводом для исключения смещения полуформ',
      'Прецизионный герметичный аминовый генератор газового цикла со сменными генераторами',
      'Экологическая аспирационная кабина вентиляции с угольными адсорберами сопряжения',
      'Сенсорное ЧПУ на базе ПЛК Siemens S7-1200 для контроля графиков надува и продувки'
    ],
    featuresEn: [
      'Hydraulic or servo mold locking clamp block eliminating parting line sand shifts',
      'High precision integrated chemical amine gas generator safe cabinet system',
      'Full sealed protective safety cabinet with built-in suction hoods and scrubbers',
      'Siemens S7-1200 HMI controlling blowing speed, gas timings and air purge steps'
    ],
    specs: [
      { name: 'Максимальный объем стержня', value: '40 л (около 60 кг)', nameEn: 'Max sand core volume', valueEn: '40 liters (~60 kg)' },
      { name: 'Размеры плит крепления ящика', value: '650 х 550 мм', nameEn: 'Mounting plates sizing', valueEn: '650 x 550 mm' },
      { name: 'Усилие запирания ящика', value: '120 кН', nameEn: 'Mold clamping force limit', valueEn: '120 kN' },
      { name: 'Давление стреляющего воздуха', value: '0.4 - 0.7 МПа', nameEn: 'Cylinder shooting air pressure', valueEn: '0.4 - 0.7 MPa' },
      { name: 'Производительность заготовок', value: 'до 80 циклов/час', nameEn: 'Throughput productivity rate', valueEn: 'up to 80 runs/hour' },
      { name: 'Расход сжатого воздуха', value: '3.5 м³/мин', nameEn: 'Clean compressed air volume', valueEn: '3.5 m³/min' }
    ],
    variantModels: [
      { model: 'СА-12', capacity: 'Стержни до 12л', capacityEn: 'Cores up to 12L', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Размер плит', extraFieldVal: '450х350 мм', extraFieldValEn: '450x350 mm' },
      { model: 'СА-25', capacity: 'Стержни до 25л', capacityEn: 'Cores up to 25L', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Размер плит', extraFieldVal: '550х450 мм', extraFieldValEn: '550x450 mm' },
      { model: 'СА-40', capacity: 'Стержни до 40л', capacityEn: 'Cores up to 40L', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Размер плит', extraFieldVal: '650х550 мм', extraFieldValEn: '650x550 mm' },
      { model: 'СА-80', capacity: 'Стержни до 80л', capacityEn: 'Cores up to 80L', power: '22.5 кВт', powerEn: '22.5 kW', extraField: 'Размер плит', extraFieldVal: '850х750 мм', extraFieldValEn: '850x750 mm' }
    ]
  },
  {
    id: 'core-shooter-hot-box',
    category: 'core-making',
    subcategory: 'shooters',
    subcategoryRu: 'Стержневые автоматы',
    subcategoryEn: 'Core Shooters',
    subsubcategory: 'hot-box',
    subsubcategoryRu: 'Hot-Box нагреваемый процесс СТ',
    subsubcategoryEn: 'Hot-Box heated process ST',
    title: 'Стержневая машина горячей оснастки Hot-Box',
    titleEn: 'Electric heated Hot-Box core shooting machine',
    model: 'СТ-20H',
    description: 'Пескострельный стержневой автомат с электрическим нагревом металлического стержневого ящика. Предназначен для работы по процессам Hot-Box и Shell-процессам (оболочковые формы). Гарантирует прецизионную геометрию и высокую газопроницаемость тонких стержней.',
    descriptionEn: 'High reliability sand core blower configured for heated tooling boxes (Hot-box and Shell resin systems). Integrated electro-heaters provide rapid mold baking, producing incredibly lightweight high-strength shell cores.',
    imageUrl: sandMixerXTC,
    capacity: 'Стержневой ящик до 20 л',
    capacityEn: 'Weight size limit 20L',
    power: '45 кВт (электронагрев)',
    powerEn: '45 kW (electric mold heat)',
    features: [
      'Многозонный нагревательный контроллер температуры (до 300°C) с термопарами обратной связи',
      'Выталкивающая система с регулировкой глубины выдвижения стержня',
      'Пневматический цилиндр наддува песка с износостойким уплотнением сопла',
      'Автоматический зажимной гидропереключатель для предотвращения просыпания песка'
    ],
    featuresEn: [
      'Multi-zone digitally adjustable electric cartridge shell heaters (up to 300°C)',
      'Built-in linear pneumatic core ejector systems with stroke limit pins',
      'Heavy duty shooting sand tank with polyurethane sealing washers to avoid leaks',
      'Double locking latch with side safe limit sensors to abort in case of misalignment'
    ],
    specs: [
      { name: 'Максимальный вес стержня', value: '20 кг', nameEn: 'Maximum sand weight', valueEn: '20 kg' },
      { name: 'Размер нагревательных плит', value: '500 х 400 мм', nameEn: 'Heater plate size', valueEn: '500 x 400 mm' },
      { name: 'Диапазон рабочих температур уставки', value: '150 - 300 °C', nameEn: 'Baking temperature range', valueEn: '150 - 300 °C' },
      { name: 'Мощность нагревательных патронов', value: '24 кВт', nameEn: 'Heating elements rating', valueEn: '24 kW' },
      { name: 'Полный рабочий цикл (базовый)', value: '45 - 90 секунд', nameEn: 'Total cycle time range', valueEn: '45 - 90 seconds' }
    ],
    variantModels: [
      { model: 'СТ-10H', capacity: 'Ящик до 10л', capacityEn: 'Up to 10L', power: '24 кВт', powerEn: '24 kW', extraField: 'Плита нагрева', extraFieldVal: '400х300 мм', extraFieldValEn: '400x300 mm' },
      { model: 'СТ-20H', capacity: 'Ящик до 20л', capacityEn: 'Up to 20L', power: '45 кВт', powerEn: '45 kW', extraField: 'Плита нагрева', extraFieldVal: '500х400 мм', extraFieldValEn: '500x400 mm' }
    ]
  },

  // SECTION 5: SHOT BLAST DIVISION (ДРОБЕМЁТЫ - THE USER'S DIRECT FOCUS EXAMPLE)
  {
    id: 'shot-blast-q32-rubber',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot blasting units',
    subsubcategory: 'tumble-rubber',
    subsubcategoryRu: 'Ленточного типа',
    subsubcategoryEn: 'Tumble belt rubber apron type',
    title: 'Дробеметная установка ленточного типа с резиновым транспортером',
    titleEn: 'Tumble belt shot blasters with rubber belt',
    model: 'Q3210',
    description: 'Высокопроизводственное дробеметное оборудование периодического действия. Внутри камеры детали бережно перекатываются на бесконечной толстой резиновой ленте-транспортере (ленточное исполнение) под направленным центробежным факелом абразива высокой плотности. Позволяет полностью автоматизировать разгрузку путем реверсивного движения ленты наружу.',
    descriptionEn: 'High-power batch tumble belt mechanical shotblast system. Features a thick protective rubber belt conveyor supporting and continuous turning of small-to-medium castings under a powerful directed abrasive stream. Reversing the belt direction unloads parts automatically.',
    imageUrl: shotBlasterImg,
    capacity: 'Загрузка до 1000 кг',
    capacityEn: 'Batch limit up to 1000 kg',
    power: '22.0 кВт',
    powerEn: '22.0 kW',
    features: [
      'Износостойкая резиновая бесконечная лента-транспортер увеличенной толщины со стальным кордом',
      'Высокомощное центробежное дробеметное колесо с высокоэффективной прямой передачей',
      'Автоматическое открытие/закрытие двери камеры с пневматическим уплотнением',
      'Интегрированный ковшовый элеватор, воздушный сепаратор дроби и картриджный аспиратор'
    ],
    featuresEn: [
      'Endless reinforced rubber apron belt resisting heavy impacts and intense friction wear',
      'Highly efficient motor-coupled turbine wheel projecting optimized high flow density',
      'Pneumatically operated vertical chamber gate with air-locked rubber curtain sealings',
      'Built-in bucket elevator, dynamic separator and heavy duty dry dust controller'
    ],
    specs: [
      { name: 'Объем загрузочной камеры ленты', value: '0.30 м³', nameEn: 'Chamber load volume', valueEn: '0.30 m³' },
      { name: 'Максимальный вес одной детали', value: '35 кг', nameEn: 'Maximum single workpiece weight', valueEn: '35 kg' },
      { name: 'Номинальная грузоподъемность', value: '1000 кг', nameEn: 'Maximum payload weight', valueEn: '1000 kg' },
      { name: 'Количество турбин дробления', value: '1 шт. (22 кВт)', nameEn: 'Turbine wheels count', valueEn: '1 unit (22 kW)' },
      { name: 'Расход дроби при обработке', value: '180 кг/мин', nameEn: 'Abrasive projection rate', valueEn: '180 kg/min' },
      { name: 'Средний цикл очистки отливок', value: '6 - 12 минут', nameEn: 'Standard cleaning cycle time', valueEn: '6 - 12 minutes' }
    ],
    variantModels: [
      { model: 'Q324', capacity: 'Загрузка до 300 кг', capacityEn: 'Batch limit 300 kg', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Объем барабана', extraFieldVal: '0.08 м³', extraFieldValEn: '0.08 m³' },
      { model: 'Q326', capacity: 'Загрузка до 600 кг', capacityEn: 'Batch limit 600 kg', power: '15.5 кВт', powerEn: '15.5 kW', extraField: 'Объем барабана', extraFieldVal: '0.15 м³', extraFieldValEn: '0.15 m³' },
      { model: 'Q3210', capacity: 'Загрузка до 1000 кг', capacityEn: 'Batch limit 1000 kg', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Объем барабана', extraFieldVal: '0.30 м³', extraFieldValEn: '0.30 m³' }
    ]
  },
  {
    id: 'shot-blast-q31-drum',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot blasting units',
    subsubcategory: 'tumble-steel',
    subsubcategoryRu: 'Барабанного типа',
    subsubcategoryEn: 'Tumble steel drum type',
    title: 'Дробеметная установка барабанного типа (стальной конвейер)',
    titleEn: 'Tumble steel flight drum-type shotblaster',
    model: 'Q3113',
    description: 'Супертяжелые дробеметные установки барабанного типа периодического действия. Детали перекатываются под мощным струйным факелом во вращающемся барабане со стальными звеньями конвейера из сверхустойчивой марганцовистой стали. Лучшее индустриальное решение для тяжелых толстостенных отливок чугуна весом до 100 кг, твердых поковок и масштабной окалины после печи.',
    descriptionEn: 'Ultra heavy duty drum batch shot blasting system with manganese steel flight conveyors. Designed to roll and tumble heavier castings (up to 100 kg per item) safely beneath a high volume abrasive flow.',
    imageUrl: shotBlasterImg,
    capacity: 'Загрузка до 1200 кг',
    capacityEn: 'Batch limit up to 1200 kg',
    power: '37.0 кВт',
    powerEn: '37.0 kW',
    features: [
      'Стальной звеньевой конвейер-чешуя из высокопрочной брони Mn13 с износостойкостью 10000 часов',
      'Закаленный бесшовный вращающийся барабан во избежание захвата тонких кромок деталей',
      'Турбоголовка высокой мощности с прямым ременным демпфирующим приводом',
      'Автоматический механический загрузочный ковш (скиповый подъемник) в базовой комплектации'
    ],
    featuresEn: [
      'Highly reinforced Mn13 heavy steel flight links designed for heavy iron cast impacts',
      'Gapless rotating drum construction protecting parts from being wedged or pinched',
      'High capacity blast turbine with direct V-belt vibration absorption drive',
      'Integrated hydraulic skip loader providing automated bulk hardware loading sequence'
    ],
    specs: [
      { name: 'Объем вращающегося барабана', value: '0.40 м³', nameEn: 'Steel drum capacity volume', valueEn: '0.40 m³' },
      { name: 'Максимальный одиночный вес отливки', value: '100 кг', nameEn: 'Max single component weight', valueEn: '100 kg' },
      { name: 'Вес разовой загрузки барабана', value: '1200 кг', nameEn: 'Aggregate batch weight limits', valueEn: '1200 kg' },
      { name: 'Мощность турбинного индуктора', value: '1 х 30.0 кВт', nameEn: 'Blast wheel motor power rating', valueEn: '1 x 30.0 kW' },
      { name: 'Производительность подачи дроби', value: '250 кг/мин', nameEn: 'Media flow extraction rate', valueEn: '250 kg/min' },
      { name: 'Габаритные размеры (ДхШхВ)', value: '3800 х 2400 х 4100 мм', nameEn: 'Dimensions (LxWxH)', valueEn: '3800 x 2400 x 4100 mm' }
    ],
    variantModels: [
      { model: 'Q3110', capacity: 'Загрузка до 600 кг', capacityEn: 'Batch limit 600 kg', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Вес детали', extraFieldVal: '50 кг', extraFieldValEn: '50 kg' },
      { model: 'Q3113', capacity: 'Загрузка до 1200 кг', capacityEn: 'Batch limit 1200 kg', power: '37.0 кВт', powerEn: '37.0 kW', extraField: 'Вес детали', extraFieldVal: '100 кг', extraFieldValEn: '100 kg' },
      { model: 'Q3115', capacity: 'Загрузка до 2000 кг', capacityEn: 'Batch limit 2000 kg', power: '55.0 кВт', powerEn: '55.0 kW', extraField: 'Вес детали', extraFieldVal: '150 кг', extraFieldValEn: '150 kg' }
    ]
  },
  {
    id: 'shot-blast-q37-hanger',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot blasting units',
    subsubcategory: 'hanger-hook',
    subsubcategoryRu: 'Подвесные',
    subsubcategoryEn: 'Overhead hook type',
    title: 'Дробеметная камера подвесного типа (крюковые дробеметы)',
    titleEn: 'Hanger-type shotblaster with rotary hooks',
    model: 'Q3710',
    description: 'Профессиональная дробеметная камера подвесного типа серии Q37 с вращающимися и колеблющимися подвесными крюками. Позволяет обрабатывать отливки сложной пространственной формы, подвешенные на крюковой подвеске грузоподъемностью до 2.0 тонн (стальные каркасы, корпуса редукторов, блоки цилиндров). Исключает взаимное соударение деталей во время очистки.',
    descriptionEn: 'Heavy duty overhead hook hanger shot blast cabinet. Multiple high-precision rotor wheels blast complex spatial shapes suspending and spinning from dual-track trolley hooks. Prevents components from bumping each other.',
    imageUrl: shotBlasterImg,
    capacity: 'До 2.0 тонн на крюке',
    capacityEn: 'Up to 2.0 tons load',
    power: '33.0 кВт',
    powerEn: '33.0 kW',
    features: [
      'Два или три высокомощных дробеметных колеса, установленных под выверенными углами атаки',
      'Система непрерывного автоматического вращения и продольного реверса подвески крюка',
      'Полная внутренняя бронировка камеры горячекатаной марганцевой сталью толщиной 12 мм',
      'Эффективная очистка запыленного воздуха в патронном циклонном фильтре'
    ],
    featuresEn: [
      'Multiple heavy direct-drive turbine engines placed at strategically computed angles',
      'Dynamic spinning and auto-reversing overhead hoist hook supporting total area views',
      '12mm thick heavy wear Mn13 steel plates securing the inner direct-impact chamber',
      'Cartridge exhaust ventilator returning clean workplace air back to the room'
    ],
    specs: [
      { name: 'Максимальный диаметр обметания', value: 'Ø1400 мм', nameEn: 'Maximum swing load diameter', valueEn: 'Ø1400 mm' },
      { name: 'Максимальная высота заготовки', value: '1800 мм', nameEn: 'Maximum vertical space clearance', valueEn: '1800 mm' },
      { name: 'Грузоподъемность одного крюка', value: '2000 кг', nameEn: 'Hanger hoist load capacity', valueEn: '2000 kg' },
      { name: 'Количество установленных турбин', value: '2 шт.', nameEn: 'Turbine wheels qty', valueEn: '2 units' },
      { name: 'Удельный выброс дроби турбоголовок', value: '2 x 120 кг/мин', nameEn: 'Total media projection output', valueEn: '2 x 120 kg/min' },
      { name: 'Мощность одного двигателя турбины', value: '11.0 кВт', nameEn: 'Single blast engine rating', valueEn: '11.0 kW' }
    ],
    variantModels: [
      { model: 'Q376', capacity: 'Подвес до 600 кг', capacityEn: 'Hook load 600 kg', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Высота детали', extraFieldVal: '1200 мм', extraFieldValEn: '1200 mm' },
      { model: 'Q378', capacity: 'Подвес до 1500 кг', capacityEn: 'Hook load 1500 kg', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Высота детали', extraFieldVal: '1500 мм', extraFieldValEn: '1500 mm' },
      { model: 'Q3710', capacity: 'Подвес до 2000 кг', capacityEn: 'Hook load 2000 kg', power: '33.0 кВт', powerEn: '33.0 kW', extraField: 'Высота детали', extraFieldVal: '1800 мм', extraFieldValEn: '1800 mm' },
      { model: 'Q3715', capacity: 'Подвес до 3000 кг', capacityEn: 'Hook load 3000 kg', power: '45.0 кВт', powerEn: '45.0 kW', extraField: 'Высота детали', extraFieldVal: '2000 мм', extraFieldValEn: '2000 mm' },
      { model: 'Q3720', capacity: 'Подвес до 5000 кг', capacityEn: 'Hook load 5000 kg', power: '55.0 кВт', powerEn: '55.0 kW', extraField: 'Высота детали', extraFieldVal: '2400 мм', extraFieldValEn: '2400 mm' }
    ]
  },

  // SECTION 6: CASTING FORMING MACHINES (ЛИТЕЙНЫЕ МАШИНЫ)
  {
    id: 'casting-gravity-k800',
    category: 'casting-machines',
    subcategory: 'molders',
    subcategoryRu: 'Литейные формообразующие машины',
    subcategoryEn: 'Molding & Casting Machinery',
    subsubcategory: 'gravity-die',
    subsubcategoryRu: 'Кокильные станки КМ-Г',
    subsubcategoryEn: 'Gravity die systems KM-G',
    title: 'Кокильная машина с гидравлическим наклоном кокиля',
    titleEn: 'Hydraulic tilt gravity die casting machine',
    model: 'КМ-800-Г',
    description: 'Универсальный полуавтоматический кокильный станок для литья алюминиевых, медных и магниевых сплавов в металлические формы (кокили). Поворотная гидравлическая плита обеспечивает плавное заполнение формы металлом без завихрений.',
    descriptionEn: 'Universal semi-automatic permanent mold casting machine for aluminum, brass, or magnesium alloys. Tilting hydraulic base plates guarantee non-turbulent casting flow.',
    imageUrl: inductionFurnaceImg,
    capacity: 'Кокиль до 1200х800 мм',
    capacityEn: 'Mold size up to 1200x800',
    power: '11 кВт',
    powerEn: '11 kW',
    features: [
      'Угол наклона кокиля регулируется бесступенчато в диапазоне от 0° до 90°',
      'Усилие смыкания плит до 150 кН для исключения облоя отливок',
      'Сенсорный дисплей для графического программирования скорости и угла наклона',
      'Автоматические сталкиватели отливок с пневматическим приводом'
    ],
    featuresEn: [
      'Infinitely variable mold tilt angle configurable from 0° completely up to 90°',
      'High clamping force up to 150 kN to eliminate steel flash completely',
      'HMI touchscreen interface to program speed ramps and precise angle thresholds',
      'Auto casting part ejectors powered by integrated heavy-duty pneumatic actuators'
    ],
    specs: [
      { name: 'Размер опорных плит кокиля', value: '1200 х 800 мм', nameEn: 'Mounting plate size', valueEn: '1200 x 800 mm' },
      { name: 'Максимальное раскрытие плит', value: '650 мм', nameEn: 'Maximum opening stroke', valueEn: '650 mm' },
      { name: 'Максимальный вес заливаемой формы', value: '800 кг', nameEn: 'Maximum permanent mold weight', valueEn: '800 kg' },
      { name: 'Угол поворота при заливке', value: '0 - 90 градусов (настраивается)', nameEn: 'Pouring tilt inclination', valueEn: '0 - 90 degrees (adjustable)' },
      { name: 'Номинальное давление гидросистемы', value: '10 МПа', nameEn: 'Nominal hydraulic pressure', valueEn: '10 MPa' },
      { name: 'Вес машины', value: '3400 кг', nameEn: 'System total weight', valueEn: '3400 kg' }
    ],
    variantModels: [
      { model: 'КМ-400-Г', capacity: 'Кокиль 600х400 мм', capacityEn: 'Die 600x400 mm', power: '5.5 кВт', powerEn: '5.5 kW', extraField: 'Усилие прижима', extraFieldVal: '80 кН', extraFieldValEn: '80 kN' },
      { model: 'КМ-600-Г', capacity: 'Кокиль 900х600 мм', capacityEn: 'Die 900x600 mm', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Усилие прижима', extraFieldVal: '120 кН', extraFieldValEn: '120 kN' },
      { model: 'КМ-800-Г', capacity: 'Кокиль 1200х800 мм', capacityEn: 'Die 1200x800 mm', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Усилие прижима', extraFieldVal: '150 кН', extraFieldValEn: '150 kN' },
      { model: 'КМ-1200-Г', capacity: 'Кокиль 1600х1200 мм', capacityEn: 'Die 1600x1200 mm', power: '18.5 кВт', powerEn: '18.5 kW', extraField: 'Усилие прижима', extraFieldVal: '200 кН', extraFieldValEn: '200 kN' }
    ]
  },
  {
    id: 'casting-centrifugal-cl400',
    category: 'casting-machines',
    subcategory: 'molders',
    subcategoryRu: 'Литейные формообразующие машины',
    subcategoryEn: 'Molding & Casting Machinery',
    subsubcategory: 'centrifugal',
    subsubcategoryRu: 'Центробежные полуавтоматы ЦЛ',
    subsubcategoryEn: 'Centrifugal stations CL',
    title: 'Центробежная литейная машина горизонтальная',
    titleEn: 'Horizontal centrifugal casting machine',
    model: 'ЦЛ-400',
    description: 'Литейная машина центробежного типа для изготовления полых цилиндрических отливок высокого качества (втулки, гильзы, кольца) из чугуна, стали и бронзы. Вращение изложницы гарантирует плотные изотропные свойства отливки.',
    descriptionEn: 'Horizontal centrifugal casting station configured to manufacture high-density cylindrical hollow sleeve castings out of bronze, cast steel, or iron, eliminating gas pores.',
    imageUrl: inductionFurnaceImg,
    capacity: 'Отливки до Ø400 мм',
    capacityEn: 'Outer diameter up to 400mm',
    power: '18.5 кВт',
    powerEn: '18.5 kW',
    features: [
      'Бесступенчатое регулируемое ЧПУ-управление скоростью вращения ротора',
      'Форсуночный водяной душ для активного двухстороннего охлаждения стальной изложницы',
      'Защитный герметичный сдвижной кожух с концевыми выключателями блокировок безопасности',
      'Быстросъемная система фиксации изложниц для моментальной смены типоразмера'
    ],
    featuresEn: [
      'Dynamic variable frequency motor control with interactive CNC rotational speed presets',
      'Symmetric water shower cooling bar to adjust freezing speed inside steel mould linings',
      'Pneumatically driven complete protective safety canopy with fail-secure safety interlocks',
      'Quick-clamping mould fixture enabling prompt size retooling inside 20 minutes'
    ],
    specs: [
      { name: 'Наружный диаметр отливок', value: 'Ø100 - Ø400 мм', nameEn: 'Finished external OD sweep', valueEn: 'Ø100 - Ø400 mm' },
      { name: 'Максимальная длина отливки', value: '600 мм', nameEn: 'Maximum tubular casting length', valueEn: '600 mm' },
      { name: 'Скорость вращения ротора', value: '200 - 1500 об/мин', nameEn: 'Mold rotation speed limits', valueEn: '200 - 1500 rpm' },
      { name: 'Мощность главного сервопривода', value: '18.5 кВт', nameEn: 'Centrifugal motor continuous power', valueEn: '18.5 kW' },
      { name: 'Система съема готовой отливки', value: 'Выталкиватель гидравлический', nameEn: 'Part ejection device', valueEn: 'Hydraulic core rod cylinder' },
      { name: 'Вес станка', value: '2400 кг', nameEn: 'Total system net weight', valueEn: '2400 kg' }
    ],
    variantModels: [
      { model: 'ЦЛ-250', capacity: 'Ø50 - Ø250 мм', capacityEn: 'Ø50 - Ø250 mm', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Длина отливки', extraFieldVal: '400 мм', extraFieldValEn: '400 mm' },
      { model: 'ЦЛ-400', capacity: 'Ø100 - Ø400 мм', capacityEn: 'Ø100 - Ø400 mm', power: '18.5 кВт', powerEn: '18.5 kW', extraField: 'Длина отливки', extraFieldVal: '600 мм', extraFieldValEn: '600 mm' },
      { model: 'ЦЛ-600', capacity: 'Ø200 - Ø600 мм', capacityEn: 'Ø200 - Ø600 mm', power: '30.0 кВт', powerEn: '30.0 kW', extraField: 'Длина отливки', extraFieldVal: '800 мм', extraFieldValEn: '800 mm' }
    ]
  },

  // SECTION 7: COOLING SYSTEMS (ГРАДИРНИ)
  {
    id: 'cooling-tower-wt100',
    category: 'cooling-systems',
    subcategory: 'cooling-towers',
    subcategoryRu: 'Охладительное оборудование',
    subcategoryEn: 'Cooling Equipment',
    subsubcategory: 'closed-circuit',
    subsubcategoryRu: 'Закрытые испарительные градирни ГЗ',
    subsubcategoryEn: 'Closed evaporative towers GZ',
    title: 'Испарительная закрытая градирня для печей и тиристоров',
    titleEn: 'Closed evaporative cooling tower for furnaces',
    model: 'ГЗ-100',
    description: 'Специализированный охладитель закрытого типа для индукционных печей и водоохлаждаемых силовых кабелей. Предотвращает образование накипи в трубопроводах индуктора благодаря циркуляции дистиллированного теплоносителя в медном змеевике.',
    descriptionEn: 'Specialized closed circuit evaporative cooling tower for induction equipment and thyristor power supplies. Protects the induction coil from hard-water scale by circulating pure demi-water inside clean copper heat exchange grids.',
    imageUrl: inductionFurnaceImg,
    capacity: 'Расход 100 м³/час',
    capacityEn: 'Throughflow 100 m³/h',
    power: '18.5 кВт',
    powerEn: '18.5 kW',
    features: [
      'Медный теплообменник (змеевик) с высокой стойкостью к коррозии',
      'Низкошумные осевые вентиляторы с датчиками вибрации и автоматической регулировкой',
      'Интегрированный бак подпиточной воды со встроенным центробежным насосом орошения',
      'Сезонные режимы работы (сухой зимний воздухоохладитель и мокрый летний испаритель)'
    ],
    featuresEn: [
      'Red copper (T2) or premium stainless steel (AISI 304) corrosion-resisting heat bundle',
      'Low noise forced air draft axial fans equipped with vibration cut-off switches',
      'Integrated water make-up sump featuring built-in industrial centrifugal spray pump',
      'Flex seasonal modes (dry air run for cold periods, evaporative sprinkle wash for warm summer)'
    ],
    specs: [
      { name: 'Номинальный расход жидкости', value: '100 м³/час', nameEn: 'Nominal flow rate', valueEn: '100 m³/hour' },
      { name: 'Тепловая мощность сброса', value: '870 кВт', nameEn: 'Thermal rejection capacity', valueEn: '870 kW' },
      { name: 'Материал теплообменных секций', value: 'Красная медь T2 / Нержавеющая сталь AISI 304', nameEn: 'Coil tube raw material', valueEn: 'Red copper T2 / Stainless AISI 304' },
      { name: 'Общая мощность вентиляторов', value: '11 кВт', nameEn: 'Aggregate ventilation power', valueEn: '11 kW' },
      { name: 'Мощность насоса орошения', value: '2.2 кВт', nameEn: 'Spray sprinkle pump power', valueEn: '2.2 kW' },
      { name: 'Габаритные размеры (ДхШхВ)', value: '3200 х 2100 х 3800 мм', nameEn: 'Dimensions (LxWxH)', valueEn: '3200 x 2100 x 3800 mm' },
      { name: 'Сухой вес агрегата', value: '4200 кг', nameEn: 'Dry net weight', valueEn: '4200 kg' }
    ],
    variantModels: [
      { model: 'ГЗ-25', capacity: 'Расход 25 м³/час', capacityEn: 'Flow 25 m³/h', power: '5.5 кВт', powerEn: '5.5 kW', extraField: 'Мощность рассеивания', extraFieldVal: '220 кВт', extraFieldValEn: '220 kW' },
      { model: 'ГЗ-50', capacity: 'Расход 50 м³/час', capacityEn: 'Flow 50 m³/h', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Мощность рассеивания', extraFieldVal: '435 кВт', extraFieldValEn: '435 kW' },
      { model: 'ГЗ-100', capacity: 'Расход 100 м³/час', capacityEn: 'Flow 100 m³/h', power: '18.5 кВт', powerEn: '18.5 kW', extraField: 'Мощность рассеивания', extraFieldVal: '870 кВт', extraFieldValEn: '870 kW' },
      { model: 'ГЗ-150', capacity: 'Расход 150 м³/час', capacityEn: 'Flow 150 m³/h', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Мощность рассеивания', extraFieldVal: '1300 кВт', extraFieldValEn: '1300 kW' },
      { model: 'ГЗ-200', capacity: 'Расход 200 м³/час', capacityEn: 'Flow 200 m³/h', power: '37.0 кВт', powerEn: '37.0 kW', extraField: 'Мощность рассеивания', extraFieldVal: '1740 кВт', extraFieldValEn: '1740 kW' }
    ]
  },
  {
    id: 'casting-gravity-kmv',
    category: 'casting-machines',
    subcategory: 'molders',
    subcategoryRu: 'Литейные формообразующие машины',
    subcategoryEn: 'Molding & Casting Machinery',
    subsubcategory: 'gravity-die-vertical',
    subsubcategoryRu: 'Кокильные станки КМ-В',
    subsubcategoryEn: 'Gravity die systems KM-V (vertical)',
    title: 'Кокильная машина с вертикальным разъемом кокиля',
    titleEn: 'Vertical parting gravity die casting machine',
    model: 'КМ-600-В',
    description: 'Универсальный полуавтоматический кокильный станок с вертикальной плоскостью разъема металлических форм. Обеспечивает высокоточное литье деталей со сложной внешней конфигурацией и развитыми стержневыми полостями. Конструкция гарантирует жесткую центровку и исключает деформацию плит при заливке.',
    descriptionEn: 'Heavy duty semi-automatic vertical parting line permanent mold casting machine. Designed for casting pieces requiring complex core pull systems and multiple slide cylinders.',
    imageUrl: inductionFurnaceImg,
    capacity: 'Кокиль до 1000х600 мм',
    capacityEn: 'Mold size up to 1000x600',
    power: '7.5 кВт',
    powerEn: '7.5 kW',
    features: [
      'Вертикальное гидравлическое смыкание и размыкание полуформ с высокой надежностью',
      'Система программируемых стержневыталкивателей для извлечения отливок с любой глубины',
      'Усиленная сварная рама с термообработкой для долголетней работы в агрессивной среде',
      'Возможность работы со стержнями сложной пространственной конфигурации и стержневыми песчаными блоками'
    ],
    featuresEn: [
      'Rigid vertical hydraulic mold lock and split mechanisms preventing mold shifts',
      'Programmable integrated hydralic core ejector pins with adjustable stroke depths',
      'Heat-treated heavy steel frame resisting extreme cyclic thermal and stress loads',
      'Equipped to integrate complex sand cores or automated multi-axis side slides'
    ],
    specs: [
      { name: 'Размер опорных плит кокиля', value: '1000 х 600 мм', nameEn: 'Mounting plate size', valueEn: '1000 x 600 mm' },
      { name: 'Размер хода размыкания', value: '500 мм', nameEn: 'Die opening stroke', valueEn: '500 mm' },
      { name: 'Максимальный вес полуформы кокиля', value: '600 кг', nameEn: 'Max mold weight', valueEn: '600 kg' },
      { name: 'Сила гидрозажима плит', value: '120 кН', nameEn: 'Hydraulic clamping force', valueEn: '120 kN' },
      { name: 'Номинальное гидравлическое давление', value: '8 МПа', nameEn: 'Hydraulic system pressure', valueEn: '8 MPa' }
    ],
    variantModels: [
      { model: 'КМ-400-В', capacity: 'Кокиль 600х400 мм', capacityEn: 'Die 600x400 mm', power: '5.5 кВт', powerEn: '5.5 kW', extraField: 'Усилие прижима', extraFieldVal: '80 кН', extraFieldValEn: '80 kN' },
      { model: 'КМ-600-В', capacity: 'Кокиль 1000х600 мм', capacityEn: 'Die 1000x600 mm', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Усилие прижима', extraFieldVal: '120 кН', extraFieldValEn: '120 kN' },
      { model: 'КМ-800-В', capacity: 'Кокиль 1200х800 мм', capacityEn: 'Die 1200x800 mm', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Усилие прижима', extraFieldVal: '150 кН', extraFieldValEn: '150 kN' }
    ]
  },
  {
    id: 'ladle-kb-drum',
    category: 'furnaces',
    subcategory: 'ladles',
    subcategoryRu: 'Заливочные ковши',
    subcategoryEn: 'Pouring Ladles',
    subsubcategory: 'drum',
    subsubcategoryRu: 'Барабанные ковши серии КБ',
    subsubcategoryEn: 'Drum type series KB',
    title: 'Ковш заливочный барабанного типа с редуктором',
    titleEn: 'Foundry drum-type pouring ladle with gearbox',
    model: 'КБ-1.5',
    description: 'Литейный ковш барабанного типа закрытой конструкции. Обладает превосходной теплоемкостью со сниженными потерями тепла от зеркала расплава, что делает его незаменимым при транспортировке на средние и дальние расстояния в крупных цехах. Подача расплава из узкого горлышка гарантирует спокойное заполнение.',
    descriptionEn: 'High capacity insulated drum-type pouring ladle designed to maintain molten metal temperature during long shop transfers. Enclosed shell limits radiant dissipation.',
    imageUrl: inductionFurnaceImg,
    capacity: '1.5 тонны расплава',
    capacityEn: '1.5 tons capacity',
    power: 'Червячный редуктор 1:120',
    powerEn: 'Worm gear ratio 1:120',
    features: [
      'Закрытая барабанная конфигурация сводит суточные излучаемые теплопотери электропечи к минимуму',
      'Высоконадежный самозапирающийся косозубый червячный редуктор для точной фиксации наклона',
      'Термостойкие стальные опорные подшипники цапф для плавного качания ковша на траверсе',
      'Фальцевые зазоры корпуса обеспечивают безопасный выход остаточных газов при сушке футеровки'
    ],
    featuresEn: [
      'Enclosed barrel geometry limits heat dissipation from molten metal surface up to 60%',
      'Heavy-duty self-locking worm gearbox enabling micrometric hand-wheel tilting angle precision',
      'High-temperature structural support bearings for ultra-smooth ladle rotation',
      'Safe exhaust relief vents built into the shell to vent core gases during drying'
    ],
    specs: [
      { name: 'Номинальная емкость по стали', value: '1500 кг', nameEn: 'Nominal steel capacity', valueEn: '1500 kg' },
      { name: 'Длина корпуса барабана', value: '1250 мм', nameEn: 'Ladle drum shell length', valueEn: '1250 mm' },
      { name: 'Толщина термоизоляционной футеровки', value: '110 мм', nameEn: 'Refractory insulation thickness', valueEn: '110 mm' },
      { name: 'Передаточное отношение редуктора', value: '1:120', nameEn: 'Gearbox output speed ratio', valueEn: '1:120' },
      { name: 'Сухой пустой вес ковша', value: '680 кг', nameEn: 'Dry empty weight', valueEn: '680 kg' }
    ],
    variantModels: [
      { model: 'КБ-0.5', capacity: 'Емкость 500 кг', capacityEn: 'Capacity 500 kg', power: 'Червячный редуктор 1:80', powerEn: 'Worm 1:80', extraField: 'Тип', extraFieldVal: 'Барабанный', extraFieldValEn: 'Drum' },
      { model: 'КБ-1.0', capacity: 'Емкость 1000 кг', capacityEn: 'Capacity 1000 kg', power: 'Червячный редуктор 1:100', powerEn: 'Worm 1:100', extraField: 'Тип', extraFieldVal: 'Барабанный', extraFieldValEn: 'Drum' },
      { model: 'КБ-1.5', capacity: 'Емкость 1500 кг', capacityEn: 'Capacity 1500 kg', power: 'Червячный редуктор 1:120', powerEn: 'Worm 1:120', extraField: 'Тип', extraFieldVal: 'Барабанный', extraFieldValEn: 'Drum' },
      { model: 'КБ-2.0', capacity: 'Емкость 2000 кг', capacityEn: 'Capacity 2000 kg', power: 'Червячный редуктор 1:120', powerEn: 'Worm 1:120', extraField: 'Тип', extraFieldVal: 'Барабанный', extraFieldValEn: 'Drum' }
    ]
  },
  {
    id: 'shot-blast-q35-table',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot blasting units',
    subsubcategory: 'rotary-table',
    subsubcategoryRu: 'С поворотным столом серии Q35',
    subsubcategoryEn: 'Rotary table series Q35',
    title: 'Дробеметная установка с поворотным столом',
    titleEn: 'Rotary table type shot blasting machine',
    model: 'Q3512',
    description: 'Специализированная промышленная установка для поверхностной дробеметной очистки деталей, критичных к взаимному соударению (например, шестерни, тонкостенные картеры, лопатки турбин, крышки). Детали укладываются на вращающийся горизонтальный поворотный стол, который подставляет их под мощные факелы дробеструйных турбин.',
    descriptionEn: 'Specialized industrial flat-table shot blast machine designed to clean flat, thin-walled, or friction-susceptible components (gears, structural lids, impellers) without tumbling collision.',
    imageUrl: shotBlasterImg,
    capacity: 'Стол Ø1200 мм, нагрузка до 1.5 т',
    capacityEn: 'Table Ø1200, up to 1500 kg',
    power: '29.5 кВт',
    powerEn: '29.5 kW',
    features: [
      'Горизонтальный наклонный поворотный стол из легированной марганцевой стали для идеального охвата',
      'Одна или две мощные высокооборотные турбины, расположенные под рассчитанными углами',
      'Защитная резиновая завеса и глухая бронировка камеры стальными пластинами толщиной 12 мм',
      'Автоматический шкаф управления с регулировкой частоты вращения стола для деликатной очистки'
    ],
    featuresEn: [
      'Synchronized flat rotating table constructed from Mn13 alloy plates for maximum impact protection',
      'One or two precision direct-drive balance blasting turbines delivering dense flow profiles',
      'Heavy double-layered protective rubber curtain coupled with chromium lining scales',
      'Smart VFD cabinet allowing custom table spin acceleration for high-finish jobs'
    ],
    specs: [
      { name: 'Диаметр поворотного стола', value: 'Ø1200 мм', nameEn: 'Rotary table diameter', valueEn: 'Ø1200 mm' },
      { name: 'Максимальная высота заготовок', value: '600 мм', nameEn: 'Max workpiece height', valueEn: '600 mm' },
      { name: 'Максимальная грузоподъемность стола', value: '1500 кг', nameEn: 'Max table loading capacity', valueEn: '1500 kg' },
      { name: 'Количество турбин', value: '1 шт (22 кВт)', nameEn: 'Blasting wheel engines count', valueEn: '1 unit (22 kW)' },
      { name: 'Производительность подачи дроби', value: '150 кг/мин', nameEn: 'Blasting discharge rate', valueEn: '150 kg/min' }
    ],
    variantModels: [
      { model: 'Q3510', capacity: 'Стол Ø1000 мм', capacityEn: 'Table Ø1000 mm', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Нагрузка стола', extraFieldVal: '1000 кг', extraFieldValEn: '1000 kg' },
      { model: 'Q3512', capacity: 'Стол Ø1200 мм', capacityEn: 'Table Ø1200 mm', power: '29.5 кВт', powerEn: '29.5 kW', extraField: 'Нагрузка стола', extraFieldVal: '1500 кг', extraFieldValEn: '1500 kg' },
      { model: 'Q3515', capacity: 'Стол Ø1500 мм', capacityEn: 'Table Ø1500 mm', power: '37.0 кВт', powerEn: '37.0 kW', extraField: 'Нагрузка стола', extraFieldVal: '2000 кг', extraFieldValEn: '2000 kg' }
    ]
  },
  {
    id: 'shot-blast-q69-profile',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot blasting units',
    subsubcategory: 'roller-conveyor',
    subsubcategoryRu: 'Проходного типа серии Q69',
    subsubcategoryEn: 'Roller conveyor series Q69',
    title: 'Дробеметная установка проходного рольгангового типа',
    titleEn: 'Roller conveyor-type plate and beam shot blaster',
    model: 'Q6910',
    description: 'Высокомощный автоматизированный дробеметный комплекс непрерывного проходного действия. Предназначен для скоростной очистки стального листа, двутавра, швеллера, профильных труб и заварных металлоконструкций от ржавчины и окалины перед сваркой или покраской. Рольганговый транспортер проводит профиль насквозь через камеру под факелами 4-8 турбин.',
    descriptionEn: 'High productivity automatic continuous pass-through system. Transports structural beams, pipes, and metal plates on durable roller beds beneath multi-turbine configurations.',
    imageUrl: shotBlasterImg,
    capacity: 'Ширина проема 1000 мм',
    capacityEn: 'Passage width 1000 mm',
    power: '75.0 кВт',
    powerEn: '75.0 kW',
    features: [
      'Высокопрочный стальной рольганг непрерывного сквозного контроля с регулировкой скорости хода',
      'Система из 4 или 6 центробежных турбоголовок высокой мощности, расположенных крест-накрест',
      'Сверхэффективный узел сдува дроби со встроенной нейлоновой щеткой и воздушной пушкой',
      'Интегрированный каскадный воздушный сепаратор, самоочищающийся импульсный рукавный фильтр'
    ],
    featuresEn: [
      'Durable continuous heavy loading conveyor rollers with adjustable variable speed line inverter',
      '4 or 6 advanced crosswise turbine layouts covering total top and bottom profiles in one sweep',
      'High-pressure air blow-off and nylon sweep brushes removing abrasive carry-over on parts',
      'Cascade air separator separating reuseable steel shots from dust and rust flakes'
    ],
    specs: [
      { name: 'Ширина загружаемого листа', value: '1000 мм', nameEn: 'Maximum sheet feeding width', valueEn: '1000 mm' },
      { name: 'Высота проходного проема', value: '600 мм', nameEn: 'Maximum bundle height', valueEn: '600 mm' },
      { name: 'Скорость рольганга прохода', value: '0.5 - 4.5 м/мин', nameEn: 'Conveyor feeding rate limits', valueEn: '0.5 - 4.5 m/min' },
      { name: 'Количество мощных турбин', value: '4 шт. х 11 кВт', nameEn: 'Turbine wheels count', valueEn: '4 units x 11 kW' },
      { name: 'Общая установленная мощность установки', value: '75.0 кВт', nameEn: 'Total system dynamic power', valueEn: '75.0 kW' }
    ],
    variantModels: [
      { model: 'Q698', capacity: 'Ширина листа 800 мм', capacityEn: 'Sheet 800 mm', power: '55.0 кВт', powerEn: '55.0 kW', extraField: 'Турбины', extraFieldVal: '4 шт.', extraFieldValEn: '4 units' },
      { model: 'Q6910', capacity: 'Ширина листа 1000 мм', capacityEn: 'Sheet 1000 mm', power: '75.0 кВт', powerEn: '75.0 kW', extraField: 'Турбины', extraFieldVal: '4 шт.', extraFieldValEn: '4 units' },
      { model: 'Q6915', capacity: 'Ширина листа 1500 мм', capacityEn: 'Sheet 1500 mm', power: '110.0 кВт', powerEn: '110.0 kW', extraField: 'Турбины', extraFieldVal: '6 шт.', extraFieldValEn: '6 units' },
      { model: 'Q6920', capacity: 'Ширина листа 2000 мм', capacityEn: 'Sheet 2000 mm', power: '145.0 кВт', powerEn: '145.0 kW', extraField: 'Турбины', extraFieldVal: '8 шт.', extraFieldValEn: '8 units' }
    ]
  },
  {
    id: 'green-sand-vibro-screen',
    category: 'green-sand',
    subcategory: 'green-coolers',
    subcategoryRu: 'Охладители оборотной смеси',
    subcategoryEn: 'Spent Sand Coolers',
    subsubcategory: 'vibroscreens',
    subsubcategoryRu: 'Вибросита формовочной земли ВС',
    subsubcategoryEn: 'Vibrating screens VS',
    title: 'Вибросито для очистки сухого песка и формовочной смеси',
    titleEn: 'Vibrating screen for foundry sand classification',
    model: 'ВС-15',
    description: 'Специализированное механическое сито вибрационного типа для разделения сухого песка и песчано-бентонитовых формовочных смесей. Идеально очищает исходный или регенерированный песок от кусков глины, спекшихся металлических корок, шлаковых гранул и посторонних примесей перед подачей в смеситель.',
    descriptionEn: 'Electric vibrating screen engineered for classifying spent sand. Removes agglomerated lumps, iron bits, and foreign items from the molding material recycle loops.',
    imageUrl: sandMixerXTC,
    capacity: '15 тонн/час',
    capacityEn: '15 tons/hour',
    power: '4.0 кВт',
    powerEn: '4.0 kW',
    features: [
      'Два оппозитно расположенных пылезащищенных вибродвигателя с регулировкой частоты',
      'Быстросменные натяжные металлические сетки со сменяемой ячейкой от 1.5 до 8 мм',
      'Полностью закрытый пылезащитный металлический кожух со штуцером под аспирацию',
      'Закаленная опорная подвеска на витых спиральных стальных пружинах круглого сечения'
    ],
    featuresEn: [
      'Two opposing dust-proof vibration motors with manually tunable force counterweights',
      'Tensioned quick-release mesh panels with variable hole grids from 1.5mm up to 8mm',
      'Sealed steel container structure complete with active vacuum aspiration connection',
      'Pre-compressed heavy duty helical suspension springs absorbing 95% foundation load'
    ],
    specs: [
      { name: 'Производительность сита', value: '15 тонн/час', nameEn: 'Sifting output capacity', valueEn: '15 tons/hour' },
      { name: 'Размеры рабочего сита плиты', value: '1800 х 900 мм', nameEn: 'Screen deck screen sizing', valueEn: '1800 x 900 mm' },
      { name: 'Амплитуда колебаний сита', value: '1.0 - 2.5 мм', nameEn: 'Vibratory amplitude limits', valueEn: '1.0 - 2.5 mm' },
      { name: 'Статическая нагрузка виброприводов', value: '16 кН', nameEn: 'Stator exciting force', valueEn: '16 kN' },
      { name: 'Потребляемая установленная мощность', value: '4.0 кВт', nameEn: 'Installed electrical motor rating', valueEn: '4.0 kW' }
    ],
    variantModels: [
      { model: 'ВС-5', capacity: '5 тонн/час', capacityEn: '5 t/h', power: '2.2 кВт', powerEn: '2.2 kW', extraField: 'Сетка', extraFieldVal: '1200х600 мм', extraFieldValEn: '1200x600 mm' },
      { model: 'ВС-10', capacity: '10 тонн/час', capacityEn: '10 t/h', power: '3.0 кВт', powerEn: '3.0 kW', extraField: 'Сетка', extraFieldVal: '1500х750 мм', extraFieldValEn: '1500x750 mm' },
      { model: 'ВС-15', capacity: '15 тонн/час', capacityEn: '15 t/h', power: '4.0 кВт', powerEn: '4.0 kW', extraField: 'Сетка', extraFieldVal: '1800х900 мм', extraFieldValEn: '1800x900 mm' },
      { model: 'ВС-25', capacity: '25 тонн/час', capacityEn: '25 t/h', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Сетка', extraFieldVal: '2000х1200 мм', extraFieldValEn: '2000x1200 mm' }
    ]
  },
  // SECTION 8: LGM EQUIPMENT (ОБОРУДОВАНИЕ ЛГМ)
  {
    id: 'lgm-predvspenivatel',
    category: 'lgm-equipment',
    subcategory: 'pre-expanders',
    subcategoryRu: 'Предвспениватели ЛГМ',
    subcategoryEn: 'LGM Pre-Expanders',
    subsubcategory: 'batch',
    subsubcategoryRu: 'Циклического действия',
    subsubcategoryEn: 'Batch Process',
    title: 'Предвспениватель полистирола циклического действия',
    titleEn: 'Batch polystyrene pre-expander machine',
    model: 'ПВ-1200',
    description: 'Предназначен для первичного и вторичного вспенивания гранул полистирола под воздействием водяного пара с последующей сушкой в кипящем слое. Обеспечивает точный контроль плотности вспенивания (от 12 до 35 г/л), что критически важно для качества выжигаемых моделей ЛГМ.',
    descriptionEn: 'Designed for primary and secondary pre-foaming of expandable polystyrene (EPS) beads via steam circulation, followed by fluid-bed drying. Delivers ultra-precise density control (12 to 35 g/L) critical for LGM casting surface quality.',
    imageUrl: sandMixerXTC,
    capacity: '120 кг/час',
    capacityEn: '120 kg/hour',
    power: '7.5 кВт',
    powerEn: '7.5 kW',
    features: [
      'Автоматический весовой дозатор сырья с тензодатчиками высокой точности',
      'Пропорциональный клапан подачи пара с ЧПУ для стабильного давления',
      'Встроенная сушильная кровать кипящего слоя с подогревом воздуха',
      'Система пневматической подачи вспененного материала в бункеры вылеживания'
    ],
    featuresEn: [
      'Fully automated raw material gravimetric weight dosing with precision load cells',
      'Proportional digital steam inlet regulation valve maintaining stable pressure',
      'Built-in heated fluid bed drying station preventing moisture entrapment',
      'Pneumatic transfer blower conveying pre-foamed beads directly to aging silos'
    ],
    specs: [
      { name: 'Объем вспенивающей камеры', value: '0.8 м³', nameEn: 'Chamber expander volume', valueEn: '0.8 m³' },
      { name: 'Диапазон плотности вспенивания', value: '12 - 35 г/л', nameEn: 'Produced density range', valueEn: '12 - 35 g/L' },
      { name: 'Расход параметра (давление 0.6 МПа)', value: '180 кг/час', nameEn: 'Steam consumption rate', valueEn: '180 kg/h' },
      { name: 'Погрешность плотности', value: '≤ ±0.3 г/л', nameEn: 'Density discrepancy variance', valueEn: '≤ ±0.3 g/L' },
      { name: 'Установленная мощность приводов', value: '7.5 кВт', nameEn: 'Installed motor power', valueEn: '7.5 kW' }
    ],
    variantModels: [
      { model: 'ПВ-800', capacity: '80 кг/час', capacityEn: '80 kg/h', power: '5.5 кВт', powerEn: '5.5 kW', extraField: 'Объем камеры', extraFieldVal: '0.5 м³', extraFieldValEn: '0.5 m³' },
      { model: 'ПВ-1200', capacity: '120 кг/час', capacityEn: '120 kg/h', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Объем камеры', extraFieldVal: '0.8 м³', extraFieldValEn: '0.8 m³' }
    ]
  },
  {
    id: 'lgm-modelavtomat',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Model Molding Machines',
    subsubcategory: 'pneumatic',
    subsubcategoryRu: 'Пневмогидравлические',
    subsubcategoryEn: 'Pneumohydraulic',
    title: 'Автоматический формовочный автомат пеномоделей ЛГМ',
    titleEn: 'Automatic lost foam pattern molding machine',
    model: 'ФА-1080',
    description: 'Высокоавтоматизированный формовочный пресс для спекания модельных плит из вспененного полистирола. Оборудован раздельными вакуумной и паровой рубашками, плитой выталкивателей пневмопривода и контуром водяного охлаждения для быстрого цикла отверждения.',
    descriptionEn: 'High-efficiency pattern sintering press compiling fine-grade expandable polystyrene pattern blocks. Outfitted with dual vacuum/steam chambers, pneumatic pin ejectors, and high-velocity cooling sprays.',
    imageUrl: sandMixerXTC,
    capacity: 'Плита 1000х800 мм',
    capacityEn: 'Plate 1000x800 mm',
    power: '11 кВт',
    powerEn: '11 kW',
    features: [
      'Система быстрого гидравлического смыкания полуформ с механическим запиранием',
      'Индивидуальные клапаны парового спекания для каждой стороны пресс-формы',
      'Эффективная вакуумная система для мгновенного удаления влаги и быстрого охлаждения',
      'Контроллер ПЛК Siemens с возможностью сохранения до 100 рецептов спекания'
    ],
    featuresEn: [
      'High-speed hydraulic mold clamping system with mechanical safety locks',
      'Individual steam sintering valves dedicated to each pattern side plate',
      'Advanced vacuum exhaust unit for rapid moisture drying and cooling cycles',
      'Programmable Siemens PLC holding up to 100 sintering recipe configurations'
    ],
    specs: [
      { name: 'Размер формовочной плиты', value: '1000 х 800 мм', nameEn: 'Clamping platter size', valueEn: '1000 x 800 mm' },
      { name: 'Максимальная высота модели', value: '350 мм', nameEn: 'Maximum pattern depth', valueEn: '350 mm' },
      { name: 'Ход подвижной плиты', value: '450 мм', nameEn: 'Movable stroke length', valueEn: '450 mm' },
      { name: 'Давление пара в рубашке', value: '0.15 - 0.25 МПа', nameEn: 'Steam chest pressure', valueEn: '0.15 - 0.25 MPa' },
      { name: 'Производительный цикл формовки', value: '60 - 150 сек/корпус', nameEn: 'Typical production cycle time', valueEn: '60 - 150 sec' }
    ],
    variantModels: [
      { model: 'ФА-860', capacity: 'Плита 800х600 мм', capacityEn: 'Plate 800x600 mm', power: '7.5 кВт', powerEn: '7.5 kW', extraField: 'Давление гидр.', extraFieldVal: '12 МПа', extraFieldValEn: '12 MPa' },
      { model: 'ФА-1080', capacity: 'Плита 1000х800 мм', capacityEn: 'Plate 1000x800 mm', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Давление гидр.', extraFieldVal: '15 МПа', extraFieldValEn: '15 MPa' }
    ]
  },
  {
    id: 'lgm-liquidation-complex',
    category: 'lgm-equipment',
    subcategory: 'liquidation',
    subcategoryRu: 'Ликвидация комплекса ЛГМ',
    subcategoryEn: 'LGM Complex Liquidation',
    subsubcategory: 'liquidation-complex',
    subsubcategoryRu: 'Полный комплекс ЛГМ',
    subsubcategoryEn: 'Full LGM Complex',
    title: 'Ликвидация полного литейного комплекса ЛГМ по сниженной цене',
    titleEn: 'Liquidation of entire Lost Foam (LGM) casting complex at a reduced price',
    model: 'Комплекс ЛГМ-300',
    description: 'Уникальное предложение по комплектной ликвидации литейного цеха ЛГМ (литьё по газифицируемым моделям). Комплекс включает в себя оборудование «Черного цеха» (формовка, вакуумная система, 3D вибростолы, контейнеры, кантователи, транспортные эстакады, выбивные узлы, системы регенерации и пескооборота с охлаждением) и «Белого цеха» (изготовление пенополистирольных моделей, предвспениватели, автоклавы спекания, склеечные станки). Прекрасный шанс запустить современное литейное производство со скидкой более 50% от стоимости нового аналогичного оборудования.',
    descriptionEn: 'An exceptional, fully-integrated, complete liquidation offer for an active Lost Foam (LGM) casting workshop. The package covers the complete sequence of advanced molding, vacuum systems, 3D compaction tables, flask transporters, heavy flask hydraulic turnover device, vibrating sand shakeout grid L251, spent sand fluid-bed coolers, and pneumatic sand loop conveyance ("Black Shop"), alongside EPS batch pre-expanders, pattern sintering presses, and steam boilers ("White Shop"). Offered at more than 50% discount compared to brand new machinery.',
    imageUrl: sandMixerXTC,
    capacity: 'Линия до 1000 т/год',
    capacityEn: 'Up to 1000 t/year',
    power: 'Регулируемая по участкам',
    powerEn: 'Area regulated',
    features: [
      'Вибростол с регулируемой 3D частотой вибрации и пневматическими захватами опок (грузоподъемность 3 тонны)',
      'Узел гидравлического переворачивания (кантователь) опок с углом 126 градусов',
      'Выбивная решетка L122/L251 массой загрузки до 1 тонны для мягкого удаления песка',
      'Охладитель кипящего слоя песка производительностью 10 т/ч со шкафом управления',
      'Камерный пневмонасос объемом 200 литров для передачи оборотного песка',
      'Уникальный шанс укомплектовать предприятие оригинальным б/у оборудованием за половину цены'
    ],
    featuresEn: [
      'Pneumoid 3D compaction table with instant active clamps (3 ton maximum layout capacity)',
      'High-capacity hydraulic flask turnover tilter yielding 126-degree rotational flips',
      'Gentle sand shakeout vibrating grid panel L122 / L251 protecting thin finished castings',
      'Spent sand fluidized-bed cooler unit with twin fans moving up to 10 tons of sand per hour',
      'High-pressure dense-phase pneumatic conveyor pump with 200-liter chamber volume',
      'A true golden opportunity to build high-capacity Lost Foam casting facilities at fraction of new cost'
    ],
    specs: [
      { name: 'Грузоподъемность вибростола с пневмозахватом', value: '3.0 тонны', nameEn: 'Compaction table load capacity', valueEn: '3.0 tons' },
      { name: 'Габариты плиты стола формовки', value: '1700 х 1000 х 750 мм', nameEn: 'Compaction table platter sizing', valueEn: '1700 x 1000 x 750 mm' },
      { name: 'Угол кантования гидропереворачивателя', value: '126 градусов', nameEn: 'Flask turner maximum tilt angle', valueEn: '126 degrees' },
      { name: 'Установленная мощность кантователя', value: '15 кВт', nameEn: 'Flask turner motor horsepower', valueEn: '15 kW' },
      { name: 'Длина и ширина полотна выбивной решетки', value: '4000 х 900 мм', nameEn: 'Shakeout panel grid dimensions', valueEn: '4000 x 900 mm' },
      { name: 'Производительность охлаждения сухого песка', value: '10 тонн/час', nameEn: 'Sand cooler throughput capacity', valueEn: '10 tons/hour' },
      { name: 'Объем пневмокамерного насоса подачи песка', value: '200 литров', nameEn: 'Pneumatic vessel transport volume', valueEn: '200 liters' }
    ],
    variantModels: [
      { model: 'Вибростол ЛГМ', capacity: 'Грузоподъемность 3.0 т', capacityEn: 'Capacity 3.0 tons', power: 'Мощность захвата', powerEn: 'Clamping power', extraField: 'Количество в комплексе', extraFieldVal: '1 шт.', extraFieldValEn: '1 unit' },
      { model: 'Гидрокантователь', capacity: 'Поворот на 126°', capacityEn: 'Tilt 126°', power: 'Гидростанция 15 кВт', powerEn: 'Hydraulic 15 kW', extraField: 'Количество в комплексе', extraFieldVal: '1 шт.', extraFieldValEn: '1 unit' },
      { model: 'Выбивная решетка L251', capacity: 'Грузоподъемность 1.0 т', capacityEn: 'Capacity 1.0 ton', power: 'Длина 4000 мм', powerEn: 'Length 4000 mm', extraField: 'Количество в комплексе', extraFieldVal: '1 шт.', extraFieldValEn: '1 unit' },
      { model: 'Виброгрохот L122', capacity: 'Полотно 1500х1500 мм', capacityEn: 'Size 1500x1500 mm', power: 'Мощность 13.2 кВт', powerEn: 'Power 13.2 kW', extraField: 'Количество в комплексе', extraFieldVal: '1 шт.', extraFieldValEn: '1 unit' },
      { model: 'Охладитель песка (кипящий слой)', capacity: 'Производительность 10 т/ч', capacityEn: 'Throughput 10 t/h', power: 'Воздуходувка 22 кВт', powerEn: 'Blower 22 kW', extraField: 'Количество в комплексе', extraFieldVal: '1 шт.', extraFieldValEn: '1 unit' },
      { model: 'Пневмокамерный насос Р200', capacity: 'Вместимость 200 л', capacityEn: 'Volume 200 L', power: 'Производительность 10 т/ч', powerEn: 'Throughput 10 t/h', extraField: 'Количество в комплексе', extraFieldVal: '1 шт.', extraFieldValEn: '1 unit' }
    ]
  },
  // SECTION 9: LVM INVESTMENT CASTING (ОБОРУДОВАНИЕ ЛВМ)
  {
    id: 'lvm-boilerclave',
    category: 'lvm-equipment',
    subcategory: 'boilers',
    subcategoryRu: 'Бойлерклавы депарафинизации',
    subcategoryEn: 'Dewaxing Boilerclaves',
    subsubcategory: 'steam',
    subsubcategoryRu: 'Паровые инжекционные',
    subsubcategoryEn: 'Steam Injection',
    title: 'Бойлерклав автоматического удаления воска водяным паром',
    titleEn: 'Automated steam dewaxing autoclave (Boilerclave)',
    model: 'БК-900',
    description: 'Установка премиум-класса для удаления легкоплавких модельных составов (воска) из керамических оболочковых форм ЛВМ. Нагнетание пара высокого давления происходит за 1-2 секунды, предотвращая растрескивание хрупкой керамической корки за счет моментального оплавления внешнего слоя.',
    descriptionEn: 'High-grade autoclave vessel for rapid removal of fusible wax models from shell molds. Elevates steam pressure in under 2 seconds, guaranteeing crack-free dewaxing via instant outer layer clearance.',
    imageUrl: inductionFurnaceImg,
    capacity: 'Диаметр 900 мм',
    capacityEn: 'Diameter 900 mm',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Сверхбыстрый впуск пара высокого давления через систему клапанов с большим проходным сечением',
      'Пневматический затвор байонетного типа двери автоклава с тройной ступенью безопасности',
      'Внутренний наклонный конусный лоток с подогреваемым сепаратором для сбора воска',
      'Полная запись графиков температуры, давления взрыва по стандартам ISO'
    ],
    featuresEn: [
      'Ultra-fast high volume steam inlet valve injecting thermal energy in 1.5 seconds',
      'Pneumatic bayonet lock mechanism door with triple mechanical safety interlocks',
      'Inclined heating reservoir basin delivering clean wax recovery directly to storage',
      'Advanced data logging records charts of temp/pressure curves per ISO standards'
    ],
    specs: [
      { name: 'Диапазон диаметров камеры', value: '900 мм', nameEn: 'Vessel inner diameter', valueEn: '900 mm' },
      { name: 'Глубина рабочей камеры', value: '1100 мм', nameEn: 'Vessel working depth', valueEn: '1100 mm' },
      { name: 'Рабочее давление пара', value: '0.6 - 0.8 МПа', nameEn: 'Operating steam pressure', valueEn: '0.6 - 0.8 MPa' },
      { name: 'Время набора полного давления', value: '≤ 1.8 сек', nameEn: 'Full pressurization time', valueEn: '≤ 1.8 sec' },
      { name: 'Температура стерилизации пара', value: '160 - 180 °C', nameEn: 'Saturated steam temperature', valueEn: '160 - 180 °C' }
    ],
    variantModels: [
      { model: 'БК-700', capacity: 'Диаметр 700 мм', capacityEn: 'Diameter 700 mm', power: '30 кВт', powerEn: '30 kW', extraField: 'Объем камеры', extraFieldVal: '350 л', extraFieldValEn: '350 L' },
      { model: 'БК-900', capacity: 'Диаметр 900 мм', capacityEn: 'Diameter 900 mm', power: '45 кВт', powerEn: '45 kW', extraField: 'Объем камеры', extraFieldVal: '700 л', extraFieldValEn: '700 L' }
    ]
  },
  // SECTION 10: HEAT TREATMENT FURNACES (ТЕРМИЧЕСКИЕ ПЕЧИ)
  {
    id: 'thermal-furnace-slide',
    category: 'thermal-furnaces',
    subcategory: 'treatment-chambers',
    subcategoryRu: 'Камерные термопечи',
    subcategoryEn: 'Chamber Thermal Kilns',
    subsubcategory: 'car-bottom',
    subsubcategoryRu: 'С выдвижным подом печи',
    subsubcategoryEn: 'Car-Bottom Furnaces',
    title: 'Камерная термическая печь с выдвижным подом',
    titleEn: 'Industrial car-bottom heat treatment furnace',
    model: 'СДО-15',
    description: 'Электрическая или газовая промышленная печь с выдвижной рельсовой платформой (подом). Предназначена для нормализации, закалки, отпуска и отжига массивных стальных и чугунных отливок. Надежная волокнистая термоизоляция на основе силиката алюминия обеспечивает высокую энергоэффективность.',
    descriptionEn: 'Electric or gas industrial car-bottom furnace equipped with a motorized rolling railway flatcar. Purpose-built for normalizing, quenching, tempering, and annealing large-tonnage iron and steel castings.',
    imageUrl: '/img/foto/Menu/Term_pod.jpg',
    capacityEn: '15 tons parts',
    power: '240 кВт',
    powerEn: '240 kW',
    features: [
      'Моторизованный привод выдвижения пода с частотной регулировкой плавности хода',
      'Многозонный цифровой ПИД-контроль нагрева по спиральным фехралевым элементам',
      'Экологическая уплотнительная юбка с песочным или пневматическим затвором',
      'Корпус повышенной жесткости со сварной рамой из швеллеров и Mn-бронированных накладок'
    ],
    featuresEn: [
      'Motorized rack-and-pinion roll-out car movement supported by frequency drives',
      'Multi-zone digital PID thermo-control powering spiral Fe-Cr-Al alloy elements',
      'Environmental sealing skirt with high-temperature sand or pneumatic seal block',
      'Reinforced rigid steel enclosure built of thick hot-rolled structural channels'
    ],
    specs: [
      { name: 'Максимальная рабочая температура', value: '1100 °C', nameEn: 'Max operating temperature', valueEn: '1100 °C' },
      { name: 'Размеры рабочего пространства (ДхШхВ)', value: '4500 х 2200 х 1800 мм', nameEn: 'Effective workspace size (LxWxH)', valueEn: '4500 x 2200 x 1800 mm' },
      { name: 'Номинальная тепловая мощность', value: '240 кВт', nameEn: 'Rated heating capacity', valueEn: '240 kW' },
      { name: 'Неравномерность нагрева в камере', value: '≤ ±5 °C', nameEn: 'Temperature uniformity delta', valueEn: '≤ ±5 °C' },
      { name: 'Время выдвижения пода', value: '2.5 мин', nameEn: 'Flatcar rollout travel time', valueEn: '2.5 min' }
    ],
    variantModels: [
      { model: 'СДО-5', capacity: '5 тонн деталей', capacityEn: '5 tons parts', power: '120 кВт', powerEn: '120 kW', extraField: 'Длина пода', extraFieldVal: '2500 мм', extraFieldValEn: '2500 mm' },
      { model: 'СДО-10', capacity: '10 тонн деталей', capacityEn: '10 tons parts', power: '180 кВт', powerEn: '180 kW', extraField: 'Длина пода', extraFieldVal: '3500 мм', extraFieldValEn: '3500 mm' },
      { model: 'СДО-15', capacity: '15 тонн деталей', capacityEn: '15 tons parts', power: '240 кВт', powerEn: '240 kW', extraField: 'Длина пода', extraFieldVal: '4500 мм', extraFieldValEn: '4500 mm' }
    ]
  },
  // SECTION 11: FINISHING & MACHINING (ОБРУБНОЕ И ВСПОМОГАТЕЛЬНОЕ ОБОРУДОВАНИЕ)
  {
    id: 'obrubka-wedge',
    category: 'obrubka-stanki',
    subcategory: 'fettling-tools',
    subcategoryRu: 'Обрубной инструмент',
    subcategoryEn: 'Fettling Tools',
    subsubcategory: 'wedges',
    subsubcategoryRu: 'Литейные гидроклинья',
    subsubcategoryEn: 'Hydraulic wedges',
    title: 'Гидравлический литейный клин для удаления литников',
    titleEn: 'Hydraulic fettling wedge for riser removal',
    model: 'ГК-25',
    description: 'Компактное гидравлическое устройство для бескомпромиссного отделения литниковых систем, выпоров и питателей от чугунных отливок. Исключает ручную кувалдовую рубку отливок, кардинально снижая трудозатраты и предотвращая микротрещины в металле.',
    descriptionEn: 'Compact hydraulic tool for separation of feeders and risers from grey and ductile iron castings. Eliminates manual sledgehammer operations, reducing labor risk and preventing microcracks.',
    imageUrl: sandMixerXTC,
    capacity: 'Сила 25 тонн',
    capacityEn: 'Splitting force 25t',
    power: '4.0 кВт',
    powerEn: '4.0 kW',
    features: [
      'Мгновенное раскалывание перемычек чугуна одним нажатием кнопки на рукоятке',
      'Высокопрочные кованые разжимные щеки с титановым износостойким азотированием',
      'Портативная гидростанция повышенного давления (до 70 МПа) на колесном шасси',
      'Удобный эргономичный подвес на тросовом балансире с вращением на 360°'
    ],
    featuresEn: [
      'Instant splitting of target iron risers via a single trigger button on the handle',
      'Ultra-hard forged splitting jaws hardened with titanium nitride wear coatings',
      'Mobile hydraulic power pack delivering extreme pressure (70 MPa) on roll wheels',
      'Ergonomic overhead steel rope spring balancer with universal 360 rotation'
    ],
    specs: [
      { name: 'Максимальное усилие раскалывания', value: '250 кН (25 т)', nameEn: 'Maximum splitting expand force', valueEn: '250 kN (25 t)' },
      { name: 'Ширина зева (разжим щек)', value: '35 мм', nameEn: 'Maximum jaw separation span', valueEn: '35 mm' },
      { name: 'Длина захода щеки в зазор', value: '60 мм', nameEn: 'Blade insertion depth', valueEn: '60 mm' },
      { name: 'Рабочее гидравлическое давление', value: '70 МПа (700 бар)', nameEn: 'Rated hydraulic pack pressure', valueEn: '70 MPa (700 bar)' },
      { name: 'Потребляемая мощность маслостанции', value: '4.0 кВт', nameEn: 'E-motor oil station power', valueEn: '4.0 kW' }
    ],
    variantModels: [
      { model: 'ГК-15', capacity: 'Сила 15 тонн', capacityEn: 'Force 15 t', power: '3.0 кВт', powerEn: '3.0 kW', extraField: 'Разжим щек', extraFieldVal: '25 мм', extraFieldValEn: '25 mm' },
      { model: 'ГК-25', capacity: 'Сила 25 тонн', capacityEn: 'Force 25 t', power: '4.0 кВт', powerEn: '4.0 kW', extraField: 'Разжим щек', extraFieldVal: '35 мм', extraFieldValEn: '35 mm' },
      { model: 'ГК-40', capacity: 'Сила 40 тонн', capacityEn: 'Force 40 t', power: '5.5 кВт', powerEn: '5.5 kW', extraField: 'Разжим щек', extraFieldVal: '45 мм', extraFieldValEn: '45 mm' }
    ]
  }
];
