import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'xtc-mixer-s10',
    category: 'sand-mixers-xtc',
    subcategory: 'mixers',
    subcategoryRu: 'Смесители ХТС',
    subcategoryEn: 'No-Bake Mixers',
    title: 'Однорукавный смеситель ХТС непрерывного действия',
    titleEn: 'Single-arm continuous resin-sand mixer',
    model: 'СХ-10',
    description: 'Высокопроизводительный однорукавный смеситель для формовки по ХТС-процессу (холоднотвердеющие смеси). Обеспечивает высокоточное дозирование связующего (смолы) и катализатора с мгновенным прекращением подачи, предотвращая появление брака смеси.',
    descriptionEn: 'High-performance single-arm mixer for cold-recovering sand casting processes (no-bake/XTC). Features high-precision dosing of resin binder and catalyst with instant shut-off, preventing sand mix wastage.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
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
    id: 'xtc-reclamation-r8',
    category: 'sand-mixers-xtc',
    subcategory: 'reclamation',
    subcategoryRu: 'Регенерация песка ХТС',
    subcategoryEn: 'No-Bake Reclamation',
    title: 'Линия механической регенерации песка ХТС',
    titleEn: 'No-bake / resin sand mechanical reclamation line',
    model: 'РП-8',
    description: 'Автоматизированная установка для очистки, классификации и фракционирования отработанного формовочного песка ХТС с целью его повторного вовлечения в производственный цикл. Снижает затраты на покупку свежего песка до 90%.',
    descriptionEn: 'Automated plant for shake-out, calcination, and classification of used no-bake foundry sand. Recovers high-quality sands and cuts fresh sand supply costs by up to 90%.',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    capacity: '8 тонн/час',
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
      { model: 'РП-15', capacity: '15 тонн/час', capacityEn: '15 t/h', power: '75 кВт', powerEn: '75 kW', extraField: 'Степень очистки', extraFieldVal: '96%', extraFieldValEn: '96%' },
      { model: 'РП-20', capacity: '20 тонн/час', capacityEn: '20 t/h', power: '90 кВт', powerEn: '90 kW', extraField: 'Степень очистки', extraFieldVal: '96%', extraFieldValEn: '96%' }
    ]
  },
  {
    id: 'xtc-vibro-vs5',
    category: 'sand-mixers-xtc',
    subcategory: 'compaction',
    subcategoryRu: 'Вибростолы и формовка',
    subcategoryEn: 'Compaction Tables',
    title: 'Вибростол формовочный уплотнительный',
    titleEn: 'Vibrating mold compaction table',
    model: 'ВСФ-12',
    description: 'Профессиональный вибрационный стол для уплотнения смеси в опоках и формовочных комплектах по ХТС-процессу. Равномерно распределяет смесь по всему объему модели, удаляет воздушные пустоты и пористость, гарантируя беспористую лицевую поверхность отливки.',
    descriptionEn: 'Heavy duty vibrating compaction grid design to pack sand mixes securely within flasks, especially optimized for no-bake lines. Maximizes sand compaction structure and purges micro air cavities.',
    imageUrl: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80',
    capacity: 'До 3.0 тонн опоки',
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
  {
    id: 'furnace-induction-gw1',
    category: 'furnaces',
    subcategory: 'furnaces-list',
    subcategoryRu: 'Индукционные печи',
    subcategoryEn: 'Induction Furnaces',
    title: 'Индукционная тигельная плавильная печь',
    titleEn: 'Induction crucible melting furnace',
    model: 'GW-1.0-800',
    description: 'Высокочастотная индукционная плавильная установка с гидравлическим наклоном тигля. Предназначена для эффективной плавки черных металлов (чугун, сталь) и цветных сплавов (бронза, латунь, медь). Обладает высоким КПД и точной регулировкой температуры нагрева.',
    descriptionEn: 'High-frequency induction melting furnace system with double hydraulic tilt cylinders. Highly efficient melting for ferrous metals (cast iron, carbon steel) and non-ferrous alloys. Extremely accurate thermal monitoring.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    capacity: '1.0 тонна стали',
    capacityEn: '1.0 ton of steel',
    power: '800 кВт',
    powerEn: '800 kW',
    features: [
      'Прочный сварной стальной корпус печи с гидравлическим подъемом плиты',
      'Микропроцессорные тиристорные преобразователи частоты с цифровым автоподбором резонанса',
      'Система контроля проедания и прорыва футеровки защищает узел от аварий',
      'Закрытый гидравлический контур для надежного наклона'
    ],
    featuresEn: [
      'Rigid welded steel structure of the furnace frame with secure magnetic yokes',
      'Microprocessor thyrister frequency inverter with smart dynamic resonance adaptation',
      'Anti-penetration lining leakage detection guard module to minimize hazards',
      'Closed hydraulic loop for smooth tilt cylinder discharge operation'
    ],
    specs: [
      { name: 'Номинальная емкость печи', value: '1.0 тонна по стали / чугуну', nameEn: 'Nominal furnace capacity', valueEn: '1.0 ton of steel / iron' },
      { name: 'Мощность источника питания', value: '800 кВт', nameEn: 'Inverter power supply', valueEn: '800 kW' },
      { name: 'Рабочая частота индуктора', value: '1000 Гц', nameEn: 'Operating frequency', valueEn: '1000 Hz' },
      { name: 'Скорость плавления (до 1600 °C)', value: '1.6 тонны/час', nameEn: 'Melting rate (to 1600 °C)', valueEn: '1.6 tons/hour' },
      { name: 'Удельный расход электроэнергии', value: '550 - 620 кВт·ч/т (при жидком старте)', nameEn: 'Specific energy usage', valueEn: '550 - 620 kWh/t (molten start)' },
      { name: 'Расход охлаждающей воды контура', value: '40 м³/час', nameEn: 'Water cooling loop requirement', valueEn: '40 m³/hour' }
    ],
    variantModels: [
      { model: 'GW-0.25-160', capacity: '0.25 тонны', capacityEn: '0.25 tons', power: '160 кВт', powerEn: '160 kW', extraField: 'Частота тока', extraFieldVal: '1000 Гц', extraFieldValEn: '1000 Hz' },
      { model: 'GW-0.5-350', capacity: '0.50 тонны', capacityEn: '0.50 tons', power: '350 кВт', powerEn: '350 kW', extraField: 'Частота тока', extraFieldVal: '1000 Гц', extraFieldValEn: '1000 Hz' },
      { model: 'GW-1.0-800', capacity: '1.00 тонна', capacityEn: '1.00 ton', power: '800 кВт', powerEn: '800 kW', extraField: 'Частота тока', extraFieldVal: '1000 Гц', extraFieldValEn: '1000 Hz' },
      { model: 'GW-2.0-1500', capacity: '2.00 тонны', capacityEn: '2.00 tons', power: '1500 кВт', powerEn: '1500 kW', extraField: 'Частота тока', extraFieldVal: '500 Гц', extraFieldValEn: '500 Hz' },
      { model: 'GW-3.0-2500', capacity: '3.00 тонны', capacityEn: '3.00 tons', power: '2500 кВт', powerEn: '2500 kW', extraField: 'Частота тока', extraFieldVal: '500 Гц', extraFieldValEn: '500 Hz' },
      { model: 'GW-5.0-3750', capacity: '5.00 тонн', capacityEn: '5.00 tons', power: '3750 кВт', powerEn: '3750 kW', extraField: 'Частота тока', extraFieldVal: '500 Гц', extraFieldValEn: '500 Hz' }
    ]
  },
  {
    id: 'ladle-kl2',
    category: 'furnaces',
    subcategory: 'ladles',
    subcategoryRu: 'Заливочные ковши',
    subcategoryEn: 'Pouring Ladles',
    title: 'Ковш литейный чайникового типа с редуктором',
    titleEn: 'Foundry teapot pouring ladle with gearbox',
    model: 'КЛ-2',
    description: 'Чайниковый заливочный ковш для приема жидкого металла из индукционных печей и последующей бережной разливки в песчаные формы. Чайниковая сифонная система задерживает шлак внутри ковша, подавая в изложницу исключительно чистый расплав.',
    descriptionEn: 'Teapot pouring ladle designed to transfer liquid grey iron/cast steel from induction furnaces to sand molds. Bottom syphon gate holds back slag automatically during direct pours.',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
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
  {
    id: 'green-sand-mixer-st1500',
    category: 'green-sand',
    subcategory: 'mixers',
    subcategoryRu: 'Смесители',
    subcategoryEn: 'Mixers',
    title: 'Интенсивный чашечный смеситель ПГС вертикально-роторный',
    titleEn: 'Intensive vertical rotor green sand muller mixer',
    model: 'СТ-1500',
    description: 'Высокоэффективный смеситель чашечного типа для приготовления песчано-глинистых формовочных смесей ПГС периодического действия. Спаренные вертикальные катки и скоростной ротор обеспечивают идеальное распределение формовочной глины бентонита и влаги в объеме песка.',
    descriptionEn: 'High-temperature cycle intensive green sand muller mixer. Double load rollers and high-speed vertical rotor blades provide perfect distribution of bentonite clay bonding layers and water across the base silica grain volume.',
    imageUrl: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80',
    capacity: '15 тонн/час',
    capacityEn: '15 tons/hour',
    power: '37 кВт',
    powerEn: '37 kW',
    features: [
      'Оснащен скоростным завихрителем (ротором) со сменными лопатками из карбида вольфрама',
      'Автоматилированный пневматический донный затвор разгрузки с датчиками положения',
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
    subcategoryRu: 'Охладители смеси',
    subcategoryEn: 'Sand Coolers',
    title: 'Охладитель оборотной песчаной смеси непрерывного действия',
    titleEn: 'Continuous fluid bed green sand cooler & dust remover',
    model: 'ОС-60',
    description: 'Специализированная промышленная установка кипящего слоя для непрерывного охлаждения горячей оборотной ПГС смеси после выбивки отливок. Возвращает формовочный песок до оптимальной рабочей температуры, удаляя остаточную пыль.',
    descriptionEn: 'Fluidized bed continuous green sand cooler. Cools hot spent sand directly returned from automated shake-out lines back to process temperature limits, utilizing high air flow moisture evaporation and fine dust separation.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
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
    subcategoryEn: 'Automatic green sand molding lines',
    title: 'Автоматическая безопочная формовочная линия ПГС',
    titleEn: 'Automatic flaskless green sand molding line',
    model: 'АФЛ-6080',
    description: 'Интегрированный автоматизированный комплекс для высокоскоростного безопочного формования из песчано-глинистых смесей. Идеальное решение для серийного производства чугунного и стального литья высокой точности.',
    descriptionEn: 'High-speed automated flaskless green sand molding line. Ideal solution for bulk foundry operations producing precision cast iron and structural steel components with high surface repeat accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
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
    title: 'Встряхивающая формовочная машина с допрессовкой',
    titleEn: 'Jolt squeeze green sand molding machine',
    model: 'ФМ-20',
    description: 'Классическая однопозиционная формовочная машина с пневматическим приводом для встряхивания и мощной силовой допрессовки. Предназначена для быстрого формования опок средних размеров в единичном и мелкосерийном цикле.',
    descriptionEn: 'Pneumatic jolt squeeze molding machine. Engineered to compress green sand aggregates uniformly inside medium-sized metal flasks for custom and medium-run foundry jobs.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
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
  {
    id: 'core-shooter-sa400',
    category: 'core-making',
    subcategory: 'shooters',
    subcategoryRu: 'Стержневые автоматы',
    subcategoryEn: 'Core Shooters',
    title: 'Стержневой автомат пескострельного типа Cold-box-amine',
    titleEn: 'Pneumatic cold-box-amine automated core shooter machine',
    model: 'СА-400',
    description: 'Автоматизированная стержневая машина для крупносерийного производства сложных песчаных стержней методом пескострельного надува с последующим отверждением газообразным амином (Cold-Box-Amine процесс).',
    descriptionEn: 'High yield automated core blowing machine for precision volume output of foundry sand cores. Employs classic high speed shooting injection coupled with gaseous amine curing (Cold-Box process).',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
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
    id: 'shot-blast-q37',
    category: 'shot-blast',
    subcategory: 'hanger',
    subcategoryRu: 'Подвесные камеры Q37',
    subcategoryEn: 'Hanger Blast Chambers',
    title: 'Дробеметная камера подвесного типа',
    titleEn: 'Hanger-type shot blasting chamber',
    model: 'Q378',
    description: 'Дробеметная камера периодического действия с вращающимся подвесным крюком. Разработана для очистки от пригара формовочной смеси, окалины, ржавчины и заусенцев отливок сложной пространственной конфигурации массой до 1.5 тонн.',
    descriptionEn: 'Batch-operated overhead hook shot blasting cabinet. Engineered for decoring, desand, and descaling cast items with complex configurations up to 1.5-ton load capacity.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    capacity: 'До 1.5 тонн нагрузки',
    capacityEn: 'Up to 1.5-ton cargo',
    power: '22 кВт',
    powerEn: '22 kW',
    features: [
      'Две высокопроизводительные турбины прямого привода с высокой плотностью факела дроби',
      'Регулировка скорости вращения и реверса крюка для обработки скрытых полостей отливок',
      'Многоступенчатая система фильтрации и сепарации дроби от пыли с эффективностью 99.8%',
      'Внутренняя защита камеры из ударопрочных плит марганцовистой стали Mn13'
    ],
    featuresEn: [
      'Two high efficiency direct-drive blast wheels ensuring dense abrasive projection pattern',
      'Rotary hook with adjustable spinning speed and auto-reverse to blast deep pockets',
      'Multi-stage airflow separator and dust collector filter with 99.8% extraction efficiency',
      'Internal heavy protective lining made of impact-resistant Mn13 manganese steel plates'
    ],
    specs: [
      { name: 'Максимальный диаметр подвески', value: 'Ø1100 мм', nameEn: 'Maximum hook swing diameter', valueEn: 'Ø1100 mm' },
      { name: 'Максимальная высота отливок', value: '1500 мм', nameEn: 'Maximum vertical clearance', valueEn: '1500 mm' },
      { name: 'Грузоподъемность крюка', value: '1500 кг', nameEn: 'Hook load capacity limit', valueEn: '1500 kg' },
      { name: 'Количество турбин (турбоголовок)', value: '2 шт.', nameEn: 'Quantity of turbine wheels', valueEn: '2 units' },
      { name: 'Мощность одного дробеметного колеса', value: '11 кВт', nameEn: 'Single turbine motor power', valueEn: '11 kW' },
      { name: 'Общая мощность аспирации', value: '7.5 кВт', nameEn: 'Aspiration system power', valueEn: '7.5 kW' },
      { name: 'Производительность очистки за цикл', value: '3 - 8 минут', nameEn: 'Typical blast cycle duration', valueEn: '3 - 8 minutes' }
    ],
    variantModels: [
      { model: 'Q376', capacity: 'До 0.6 тонн', capacityEn: 'Up to 0.6 tons', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Размер детали', extraFieldVal: 'Ø800х1200 мм', extraFieldValEn: 'Ø800x1200 mm' },
      { model: 'Q378', capacity: 'До 1.5 тонн', capacityEn: 'Up to 1.5 tons', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Размер детали', extraFieldVal: 'Ø1100х1500 мм', extraFieldValEn: 'Ø1100x1500 mm' },
      { model: 'Q3710', capacity: 'До 2.0 тонн', capacityEn: 'Up to 2.0 tons', power: '33.0 кВт', powerEn: '33.0 kW', extraField: 'Размер детали', extraFieldVal: 'Ø1400х1800 мм', extraFieldValEn: 'Ø1400x1800 mm' },
      { model: 'Q3715', capacity: 'До 3.0 тонн', capacityEn: 'Up to 3.0 tons', power: '45.0 кВт', powerEn: '45.0 kW', extraField: 'Размер детали', extraFieldVal: 'Ø1600х2000 мм', extraFieldValEn: 'Ø1600x2000 mm' },
      { model: 'Q3720', capacity: 'До 5.0 тонн', capacityEn: 'Up to 5.0 tons', power: '55.0 кВт', powerEn: '55.0 kW', extraField: 'Размер детали', extraFieldVal: 'Ø2000х2400 мм', extraFieldValEn: 'Ø2000x2400 mm' }
    ]
  },
  {
    id: 'shot-blast-q32',
    category: 'shot-blast',
    subcategory: 'tumble',
    subcategoryRu: 'Барабанные дробеметы Q32',
    subcategoryEn: 'Tumble Belt Blasters',
    title: 'Дробеметная установка барабанного типа',
    titleEn: 'Tumble belt shotblaster with rubber belt',
    model: 'Q326',
    description: 'Компактная высокопроизводительная дробеметная камера барабанного типа с износостойкой резиновой лентой. Предназначена для интенсивной очистки мелких деталей, штамповок и отливок весом до 30 кг от песка, пригара и окалины во вращающемся режиме.',
    descriptionEn: 'Rotary rubber tumble belt mechanical blast cabinet. Best for mass processing small forgings or castings up to 30 kg, removing burn-on residue via tumbling under dense abrasive jet flows.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    capacity: 'Загрузка до 600 кг',
    capacityEn: 'Batch limit up to 600 kg',
    power: '15.5 кВт',
    powerEn: '15.5 kW',
    features: [
      'Износостойкая резиновая транспортерная лента повышенной толщины и эластичности',
      'Высокомощное центробежное дробеметное колесо с прямой передачей вращения',
      'Автоматическая разгрузка обработанных деталей путем реверсивного движения ленты',
      'Двухступенчатая очистка пылевоздушного спектра рукавным сертифицированным фильтром'
    ],
    featuresEn: [
      'Extra thick wear-resistant endless rubber apron ensuring smooth structural rolling',
      'High speed directly coupled turbine blade wheel projecting heavy shot streams',
      'Automatic discharge of processed casting workpieces by simply reversing the conveyor belt',
      'High capacity air ventilation and dust collection system with a cartridge filter'
    ],
    specs: [
      { name: 'Объем загрузочной камеры', value: '0.15 м³', nameEn: 'Tumble chamber net volume', valueEn: '0.15 m³' },
      { name: 'Максимальный вес одной детали', value: '30 кг', nameEn: 'Maximum single component weight', valueEn: '30 kg' },
      { name: 'Грузоподъемность барабана', value: '600 кг', nameEn: 'Total tumble weight limit', valueEn: '600 kg' },
      { name: 'Количество и мощность турбин', value: '1 х 11.0 кВт', nameEn: 'Blast wheel motor power', valueEn: '1 x 11.0 kW' },
      { name: 'Производительность подачи дроби', value: '120 кг/мин', nameEn: 'Blast abrasive feed rate limit', valueEn: '120 kg/min' },
      { name: 'Продолжительность очистки партии', value: '5 - 15 минут', nameEn: 'Processing cycle time range', valueEn: '5 - 15 minutes' }
    ],
    variantModels: [
      { model: 'Q324', capacity: 'Загрузка до 300 кг', capacityEn: 'Batch 300 kg', power: '11.0 кВт', powerEn: '11.0 kW', extraField: 'Объем барабана', extraFieldVal: '0.08 м³', extraFieldValEn: '0.08 m³' },
      { model: 'Q326', capacity: 'Загрузка до 600 кг', capacityEn: 'Batch 600 kg', power: '15.5 кВт', powerEn: '15.5 kW', extraField: 'Объем барабана', extraFieldVal: '0.15 м³', extraFieldValEn: '0.15 m³' },
      { model: 'Q3210', capacity: 'Загрузка до 1000 кг', capacityEn: 'Batch 1000 kg', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Объем барабана', extraFieldVal: '0.30 м³', extraFieldValEn: '0.30 m³' }
    ]
  },
  {
    id: 'casting-gravity-k800',
    category: 'casting-machines',
    subcategory: 'gravity',
    subcategoryRu: 'Кокильные машины',
    subcategoryEn: 'Gravity Die Casters',
    title: 'Кокильная машина с гидравлическим наклоном кокиля',
    titleEn: 'Hydraulic tilt gravity die casting machine',
    model: 'КМ-800-Г',
    description: 'Универсальный полуавтоматический кокильный станок для литья алюминиевых, медных и магниевых сплавов в металлические формы (кокили). Поворотная гидравлическая плита обеспечивает плавное заполнение формы металлом без завихрений.',
    descriptionEn: 'Universal semi-automatic permanent mold casting machine for aluminum, brass, or magnesium alloys. Tilting hydraulic base plates guarantee non-turbulent casting flow.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
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
    subcategory: 'centrifugal',
    subcategoryRu: 'Центробежные машины',
    subcategoryEn: 'Centrifugal Casters',
    title: 'Центробежная литейная машина',
    titleEn: 'Horizontal centrifugal casting machine',
    model: 'ЦЛ-400',
    description: 'Литейная машина центробежного типа для изготовления полых цилиндрических отливок высокого качества (втулки, гильзы, кольца) из чугуна, стали и бронзы. Вращение изложницы гарантирует плотную мелкозернистую структуру отливки без раковин.',
    descriptionEn: 'Horizontal centrifugal casting station configured to manufacture high-density cylindrical hollow sleeve castings out of bronze, cast steel, or iron, eliminating gas pores.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    capacity: 'Отливка до Ø400 мм',
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
  {
    id: 'cooling-tower-wt100',
    category: 'cooling-systems',
    subcategory: 'towers',
    subcategoryRu: 'Закрытые градирни',
    subcategoryEn: 'Closed Cooling Towers',
    title: 'Испарительная закрытая градирня для печей и тиристоров',
    titleEn: 'Closed evaporative cooling tower for furnaces',
    model: 'ГЗ-100',
    description: 'Специализированный охладитель закрытого типа для индукционных печей и водоохлаждаемых силовых кабелей. Предотвращает образование накипи в трубопроводах индуктора благодаря циркуляции дистиллированного теплоносителя в медном змеевике.',
    descriptionEn: 'Specialized closed circuit evaporative cooling tower for induction equipment and thyristor power supplies. Protects the induction coil from hard-water scale by circulating pure demi-water inside clean copper heat exchange grids.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
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
  }
];
