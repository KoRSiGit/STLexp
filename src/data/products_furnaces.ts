import { Product } from '../types';

export const PRODUCTS_FURNACES: Product[] = [
  {
    id: 'induction-furnace-gw',
    category: 'furnaces',
    subcategory: 'induction',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    subsubcategory: 'steel-shell',
    subsubcategoryRu: 'Стальной каркас GW',
    subsubcategoryEn: 'Steel shell type GW',
    title: 'Индукционная тигельная плавильная печь',
    titleEn: 'Medium frequency coreless induction melting furnace',
    model: 'GW-1.5-1000',
    description: 'Среднечастотная индукционная плавильная печь в прочном стальном каркасе с гидравлическим наклоном. Идеальна для эффективной плавки чугуна, углеродистой и легированной стали, меди и латуни. Обеспечивает электромагнитное перемешивание для выравнивания сплава.',
    descriptionEn: 'Medium frequency coreless steel frame induction melting furnace with hydraulic tilting. Ideal for highly efficient smelting of grey/nodular iron, steels, copper, brass and bronze alloys. Delivers clean electromagnetic bath stirring.',
    imageUrl: '/img/foto/Menu/PL-pechi-g.jpg',
    capacity: '1.5 тонны',
    capacityEn: '1.5 tons',
    power: '1000 кВт',
    powerEn: '1000 kW',
    features: [
      'Стальной жесткий каркас печи для надежности и минимизации магнитных потерь',
      'Энергосберегающие тиристорные преобразователи частоты (ТПЧ) нового поколения',
      'Система контроля проедания футеровки тигля (защита от прорыва металла)',
      'Гидравлическое плавное опрокидывание с выносного пульта управления'
    ],
    featuresEn: [
      'High strength rigid steel shell minimizing structural leakage and flux losses',
      'Advanced energy-efficient solid-state SCR frequency converters (pumping up to 98% efficiency)',
      'Digital hearth ground leak detection and lining wear indicator system',
      'Smooth heavy-duty hydraulic tilting system controlled via proportional remote board'
    ],
    specs: [
      { name: 'Емкость тигля по стали', value: '1500 кг', nameEn: 'Crucible capacity (steel)', valueEn: '1500 kg' },
      { name: 'Номинальная мощность ТПЧ', value: '1000 кВт', nameEn: 'Rated power supply converter', valueEn: '1000 kW' },
      { name: 'Рабочая частота печи', value: '500 - 1000 Гц', nameEn: 'Operating frequency range', valueEn: '500 - 1000 Hz' },
      { name: 'Удельный расход электроэнергии', value: '550 кВтч/т (до 1600 °C)', nameEn: 'Specific electricity budget', valueEn: '550 kWh/ton (up to 1600°C)' },
      { name: 'Скорость плавления стали', value: '1.8 тонн/час', nameEn: 'Melting speed rate (steel)', valueEn: '1.8 t/h' },
      { name: 'Давление в гидросистеме', value: '12 - 14 МПа', nameEn: 'Hydraulic system pressure limit', valueEn: '12 - 14 MPa' }
    ],
    variantModels: [
      { model: 'GW-0.5', capacity: '0.5 т', capacityEn: '0.5 t', power: '350 кВт', powerEn: '350 kW', extraField: 'Частота', extraFieldVal: '1000 Гц', extraFieldValEn: '1000 Hz' },
      { model: 'GW-1.0', capacity: '1.0 т', capacityEn: '1.0 t', power: '750 кВт', powerEn: '750 kW', extraField: 'Частота', extraFieldVal: '1000 Гц', extraFieldValEn: '1000 Hz' },
      { model: 'GW-1.5', capacity: '1.5 т', capacityEn: '1.5 t', power: '1000 кВт', powerEn: '1000 kW', extraField: 'Частота', extraFieldVal: '500 Гц', extraFieldValEn: '500 Hz' },
      { model: 'GW-2.0', capacity: '2.0 т', capacityEn: '2.0 t', power: '1500 кВт', powerEn: '1500 kW', extraField: 'Частота', extraFieldVal: '500 Гц', extraFieldValEn: '500 Hz' },
      { model: 'GW-3.0', capacity: '3.0 т', capacityEn: '3.0 t', power: '2000 кВт', powerEn: '2000 kW', extraField: 'Частота', extraFieldVal: '500 Гц', extraFieldValEn: '500 Hz' },
      { model: 'GW-5.0', capacity: '5.0 т', capacityEn: '5.0 t', power: '3000 кВт', powerEn: '3000 kW', extraField: 'Частота', extraFieldVal: '300 Гц', extraFieldValEn: '300 Hz' },
      { model: 'GW-10.0', capacity: '10.0 т', capacityEn: '10.0 t', power: '6000 кВт', powerEn: '6000 kW', extraField: 'Частота', extraFieldVal: '200 Гц', extraFieldValEn: '200 Hz' }
    ]
  },
  {
    id: 'ladle-casting-steel',
    category: 'furnaces',
    subcategory: 'ladles',
    subcategoryRu: 'Заливочные ковши',
    subcategoryEn: 'Pouring Ladles',
    subsubcategory: 'teapot',
    subsubcategoryRu: 'Чайниковые ковши КЛ',
    subsubcategoryEn: 'Teapot ladles KL',
    title: 'Литейный чайниковый ковш серии КЛ',
    titleEn: 'Foundry teapot pouring ladle KL series',
    model: 'КЛ-1.0',
    description: 'Литейный ковш чайникового типа для разливки стали и чугуна. Слив осуществляется снизу из донной зоны через встроенный чайниковый сифон, что предотвращает попадание поверхностного кислого шлака в литейную форму. Идеально чистая заливка.',
    descriptionEn: 'Foundry pouring teapot ladle designed to dispense cast iron and steel. Feeds molten charge from the deep clean bottom levels through an integrated ceramic baffle/siphon, keeping slag inclusions completely out of the molding gate.',
    imageUrl: '/img/foto/Menu/PL-pechi-kovsh.jpg',
    capacity: '1.0 тонна',
    capacityEn: '1.0 ton',
    power: 'Ручной/Крановый',
    powerEn: 'Manual/Crane hoist',
    features: [
      'Самоблокирующийся червячный редуктор наклона для точного дозирования струи',
      'Защитный тепловой экран рукоятки оператора для защиты от лучистого тепла',
      'Сифонное донное отверстие для полного отделения поверхностного шлака',
      'Толстостенная сварная конструкция корпуса ковша по ГОСТ нормам безопасности'
    ],
    featuresEn: [
      'Self-locking fail-safe worm gearbox tilt drive delivering high resolution pour control',
      'Heavy radiation deflecting heat shields protecting operations crane crews',
      'Internal teapot-shaped layout ensuring slag-free metal tapping outtake',
      'Thick double-welded shell made from high-strength carbon boiler steel'
    ],
    specs: [
      { name: 'Вместимость жидкого металла', value: '1000 кг (по стали)', nameEn: 'Molten metal capacity', valueEn: '1000 kg (steel basis)' },
      { name: 'Тип наклона', value: 'Червячный редуктор наклона', nameEn: 'Tilting type drive', valueEn: 'Manual self-locking worm gear' },
      { name: 'Передаточное число редуктора', value: 'i = 1:52', nameEn: 'Gearbox reduction ratio', valueEn: 'i = 1:52' },
      { name: 'Высота ковша без траверсы', value: '980 мм', nameEn: 'Ladle shell height (no bale)', valueEn: '980 mm' },
      { name: 'Диаметр корпуса ковша', value: '850 мм', nameEn: 'Ladle shell outer diameter', valueEn: '850 mm' },
      { name: 'Толщина стальной стенки', value: '12 мм', nameEn: 'Steel shell metal thickness', valueEn: '12 mm' }
    ],
    variantModels: [
      { model: 'КЛ-0.5', capacity: '0.5 т', capacityEn: '0.5 t', power: 'Крановый', powerEn: 'Crane', extraField: 'Диаметр', extraFieldVal: '700 мм', extraFieldValEn: '700 mm' },
      { model: 'КЛ-1.0', capacity: '1.0 т', capacityEn: '1.0 t', power: 'Крановый', powerEn: 'Crane', extraField: 'Диаметр', extraFieldVal: '850 мм', extraFieldValEn: '850 mm' },
      { model: 'КЛ-2.0', capacity: '2.0 т', capacityEn: '2.0 t', power: 'Крановый', powerEn: 'Crane', extraField: 'Диаметр', extraFieldVal: '1100 мм', extraFieldValEn: '1100 mm' },
      { model: 'КЛ-3.0', capacity: '3.0 т', capacityEn: '3.0 t', power: 'Крановый', powerEn: 'Crane', extraField: 'Диаметр', extraFieldVal: '1300 мм', extraFieldValEn: '1300 mm' },
      { model: 'КЛ-5.0', capacity: '5.0 т', capacityEn: '5.0 t', power: 'Электропривод', powerEn: 'Motorized', extraField: 'Диаметр', extraFieldVal: '1600 мм', extraFieldValEn: '1600 mm' }
    ]
  },
  {
    id: 'ladle-casting-iron',
    category: 'furnaces',
    subcategory: 'ladles',
    subcategoryRu: 'Заливочные ковши',
    subcategoryEn: 'Pouring Ladles',
    subsubcategory: 'drum',
    subsubcategoryRu: 'Барабанные ковши КБ',
    subsubcategoryEn: 'Drum ladles KB',
    title: 'Ковш заливочный барабанного типа с редуктором',
    titleEn: 'Foundry drum-type pouring ladle KB series',
    model: 'КБ-0.5',
    description: 'Закрытый барабанный ковш серии КБ для разливки серого, высокопрочного и легированного чугуна. Цилиндрическая закрытая форма минимизирует потери тепла жидкого чугуна при транспортировке и защищает металл от окисления воздухом.',
    descriptionEn: 'Enclosed drum-type pouring ladle KB series designed for molten cast iron distribution. Its cylindrical enclosed architecture reduces heat loss during crane transit and protects molten iron from quick oxidation.',
    imageUrl: '/img/foto/Menu/PL-pechi-kovsh.jpg',
    capacity: '0.5 тонны',
    capacityEn: '0.5 tons',
    power: 'Ручной/Крановый',
    powerEn: 'Manual/Crane',
    features: [
      'Цилиндрический барабанный корпус для удержания теплоты расплава',
      'Надежный заливочный носок с защитой от шлака',
      'Высококачественный червячный редуктор для точного контроля наклона ковша',
      'Жесткая подвесная траверса со скобой крана повышенной надежности'
    ],
    featuresEn: [
      'Enclosed cylindrical layout keeping high bath heat levels',
      'Optimized slag-baffled pouring nozzle',
      'Heavy-duty safety self-locking worm gear for smooth tilt angle controls',
      'Solid heavy steel crane yoke with safety locking brackets'
    ],
    specs: [
      { name: 'Емкость по расплаву чугуна', value: '500 кг', nameEn: 'Iron holding capacity', valueEn: '500 kg' },
      { name: 'Тип привода наклона', value: 'Ручной червячный редуктор', nameEn: 'Tilting drive mechanism', valueEn: 'Manual self-locking worm' },
      { name: 'Высота ковша с траверсой', value: '1100 мм', nameEn: 'Height including yoke', valueEn: '1100 mm' },
      { name: 'Ширина барабана', value: '750 мм', nameEn: 'Drum width', valueEn: '750 mm' },
      { name: 'Диаметр барабана outer', value: '600 мм', nameEn: 'Outer drum diameter', valueEn: '600 mm' }
    ],
    variantModels: [
      { model: 'КБ-0.5', capacity: '0.5 т', capacityEn: '0.5 t', power: 'Ручной', powerEn: 'Manual', extraField: 'Диаметр барабана', extraFieldVal: '600 мм', extraFieldValEn: '600 mm' },
      { model: 'КБ-1.0', capacity: '1.0 т', capacityEn: '1.0 t', power: 'Крановый', powerEn: 'Crane', extraField: 'Диаметр барабана', extraFieldVal: '750 мм', extraFieldValEn: '750 mm' }
    ]
  },
  {
    id: 'ladle-drying-stand',
    category: 'furnaces',
    subcategory: 'induction',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    subsubcategory: 'drying-stands',
    subsubcategoryRu: 'Стенды сушки ковшей СС',
    subsubcategoryEn: 'Drying stands SS',
    title: 'Стенд для сушки и разогрева литейных ковшей',
    titleEn: 'Gas-fired ladle preheating and drying stand SS series',
    model: 'ССГ-1.5',
    description: 'Газовый/электрический вертикальный стенд для принудительного прогрева и контролируемой сушки футеровки литейных ковшей емкостью до 5 тонн. Гарантирует быстрое выведение влаги из огнеупора перед заливкой, исключая взрывоопасные ситуации.',
    descriptionEn: 'Vertical ladle dryer and preheating burner system (gas or electric options). Used to controlled dry green clay/refractory monolithic linings in ladles up to 5 tons. Safe operation eliminates humidity bursts during steel tapping.',
    imageUrl: '/img/foto/Menu/PL-pechi-kovsh.jpg',
    capacity: 'до 5 тонн',
    capacityEn: 'up to 5 tons',
    power: '45 кВт (электро/газ)',
    powerEn: '45 kW (electric/gas)',
    features: [
      'Пневматический/гидравлический подъем теплоизолированной крышки',
      'Пропорциональный контроль температуры нагрева по ПИД-закону',
      'Экологическая автоматическая горелка Kromschroder / Baltur с контролем пламени',
      'Внутренняя футеровка крышки из износостойкого базальтового ультраволокна'
    ],
    featuresEn: [
      'Pneumatic or hydraulic mechanical lifting of the refractory top hood shield',
      'Digital PID temperature cycle ramping avoiding lining spallation cracks',
      'Industrial safe Baltur/Kromschroder automatic burner with integrated flame scanners',
      'High insulation ceramic fiber wool shield reflecting massive IR back to lining'
    ],
    specs: [
      { name: 'Емкость обслуживаемых ковшей', value: '500 - 3000 кг', nameEn: 'Applicable ladle sizes', valueEn: '500 - 3000 kg' },
      { name: 'Максимальная температура нагрева', value: '1100 °C', nameEn: 'Preheat temperature ceiling', valueEn: '1100 °C' },
      { name: 'Тип топлива', value: 'Природный газ / Сжиженный газ', nameEn: 'Fuel resource', valueEn: 'Natural gas / LPG' },
      { name: 'Расход природного газа', value: '2 - 6 м³/час', nameEn: 'Gas consumption budget', valueEn: '2 - 6 m³/h' },
      { name: 'Время прогрева до 800 °C', value: '45 минут', nameEn: 'Heat-up speed to 800 °C', valueEn: '45 min' }
    ]
  }
];
