import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'xtc-mixer-s10',
    category: 'sand-mixers-xtc',
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
    ]
  },
  {
    id: 'xtc-reclamation-r8',
    category: 'sand-mixers-xtc',
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
      { name: 'Расход сжатого воздуха', value: '2.5 м³/мин', nameEn: 'Compressed air flow rate', valueEn: '2.5 m³/min' }
    ]
  },
  {
    id: 'furnace-induction-gw1',
    category: 'furnaces',
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
    ]
  },
  {
    id: 'shot-blast-q37',
    category: 'shot-blast',
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
    ]
  },
  {
    id: 'casting-gravity-k800',
    category: 'casting-machines',
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
    ]
  },
  {
    id: 'cooling-tower-wt100',
    category: 'cooling-systems',
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
    ]
  }
];
