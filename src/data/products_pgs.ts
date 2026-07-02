import { Product } from '../types';

export const PRODUCTS_PGS: Product[] = [
  {
    id: 'green-sand-mixer-st',
    category: 'green-sand',
    subcategory: 'mixers',
    subcategoryRu: 'Смесители ПГС',
    subcategoryEn: 'Green Sand Mixers',
    subsubcategory: 'st-intensive',
    subsubcategoryRu: 'Интенсивные смесители СТ',
    subsubcategoryEn: 'Intensive mixers ST',
    title: 'Интенсивный чашечный смеситель ПГС вертикально-роторный',
    titleEn: 'High-intensity vertical rotor green sand mixer ST series',
    model: 'СТ-12',
    description: 'Высокоэффективный интенсивный чашечный смеситель (бегуны) с вертикальной вихревой головкой. Предназначен для приготовления песчано-глинистых формовочных смесей (ПГС) путем интенсивного перетирания, затирания и гомогенизации компонентов.',
    descriptionEn: 'High-speed vertical rotor counter-current green sand intensive mixer. Incorporates mechanical rollers and dynamic vortex rotors to perfectly blend sands, bentonites, coal dust, and water into premium molding clays.',
    imageUrl: '/img/foto/Menu/pgs-s11.jpg',
    capacity: '1200 кг/замес',
    capacityEn: '1200 kg/batch',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Вихревой высокоскоростной ротор с твердосплавным наплавлением лопастей',
      'Принудительное соскабливание стенок чаши против залипания глины',
      'Автоматический дозатор воды с тензодатчиками влажности',
      'Пневматический донный люк выгрузки для сокращения рабочего цикла'
    ],
    featuresEn: [
      'High-speed vortex rotators treated with hard alloy tungsten deposits',
      'Heavy-duty scraping blades keeping the inside of the pan perfectly clean',
      'Digital moisture sensing probe managing automatic water injection system',
      'Pneumatically driven bottom sliding hatch ensuring lightning fast batch discharges'
    ],
    specs: [
      { name: 'Единоразовая загрузка чаши', value: '1200 кг', nameEn: 'Pan loading capacity', valueEn: '1200 kg' },
      { name: 'Производительность смесителя', value: '15 - 18 тонн/час', nameEn: 'Output performance', valueEn: '15 - 18 t/h' },
      { name: 'Диаметр чаши смесителя', value: '2100 мм', nameEn: 'Pan inside diameter', valueEn: '2100 mm' },
      { name: 'Частота вращения ротора', value: '450 об/мин', nameEn: 'High speed rotor speed', valueEn: '450 rpm' },
      { name: 'Частота вращения скребков', value: '18 об/мин', nameEn: 'Main scraping plow speed', valueEn: '18 rpm' },
      { name: 'Установленная мощность', value: '45 кВт', nameEn: 'Main drive electric rating', valueEn: '45 kW' }
    ],
    variantModels: [
      { model: 'СТ-3', capacity: '300 кг', capacityEn: '300 kg', power: '15.0 кВт', powerEn: '15.0 kW', extraField: 'Диаметр чаши', extraFieldVal: '1200 мм', extraFieldValEn: '1200 mm' },
      { model: 'СТ-5', capacity: '500 кг', capacityEn: '500 kg', power: '22.0 кВт', powerEn: '22.0 kW', extraField: 'Диаметр чаши', extraFieldVal: '1500 мм', extraFieldValEn: '1500 mm' },
      { model: 'СТ-10', capacity: '1000 кг', capacityEn: '1000 kg', power: '37.0 кВт', powerEn: '37.0 kW', extraField: 'Диаметр чаши', extraFieldVal: '1900 мм', extraFieldValEn: '1900 mm' },
      { model: 'СТ-12', capacity: '1200 кг', capacityEn: '1200 kg', power: '45.0 кВт', powerEn: '45.0 kW', extraField: 'Диаметр чаши', extraFieldVal: '2100 мм', extraFieldValEn: '2100 mm' },
      { model: 'СТ-15', capacity: '1500 кг', capacityEn: '1500 kg', power: '55.0 кВт', powerEn: '55.0 kW', extraField: 'Диаметр чаши', extraFieldVal: '2300 мм', extraFieldValEn: '2300 mm' }
    ]
  },
  {
    id: 'green-sand-cooler-os60',
    category: 'green-sand',
    subcategory: 'green-coolers',
    subcategoryRu: 'Охладители оборотной смеси',
    subcategoryEn: 'Fluid Bed Sand Coolers',
    subsubcategory: 'os-coolers',
    subsubcategoryRu: 'Охладители ОС',
    subsubcategoryEn: 'OS fluid bed coolers',
    title: 'Охладитель оборотной песчаной смеси непрерывного действия',
    titleEn: 'Continuous green sand fluid bed cooler OS series',
    model: 'ОС-30',
    description: 'Охладитель оборотной смеси ПГС в виброкипящем слое. Используется для интенсивного охлаждения и выравнивания влажности горячего оборотного песка после выбивки форм перед новым циклом смешивания. Стабилизирует технологические параметры глинистого песка.',
    descriptionEn: 'Continuous fluid-bed cooling tower designed to cool returned hot molding sand down before the new batch mixing phase. Reduces scrap rates caused by high sand temperatures.',
    imageUrl: '/img/foto/Menu/pgs-vibrochl.jpg',
    capacity: '30 тонн/час',
    capacityEn: '30 tons/hour',
    power: '37 кВт',
    powerEn: '37 kW',
    features: [
      'Охлаждение за счет испарения впрыскиваемой воды и продувки встречным воздухом',
      'Система вибропривода для продольного перемещения кипящего слоя песка',
      'Автоматический компьютерный контроль температуры на входе и выходе',
      'Износостойкая сетка кипящего слоя из жаропрочной перфорированной нержавеющей стали'
    ],
    featuresEn: [
      'Cooling driven by controlled evaporation of fine water sprays and high airflow',
      'Dual vibration eccentric motors generating steady travel speed along bed plates',
      'Computerized PLC monitoring in/out temperature to dynamically tune water sprays',
      'Heavy-duty heat resistant stainless steel deck plates preventing rust and blockages'
    ],
    specs: [
      { name: 'Номинальная производительность', value: '30 тонн/час', nameEn: 'Nominal output capacity', valueEn: '30 tons/hour' },
      { name: 'Температура входящего песка', value: 'до 140 °C', nameEn: 'Input sand temperature', valueEn: 'up to 140 °C' },
      { name: 'Температура песка на выходе', value: '≤ 40 °C (или Токруж + 15 °C)', nameEn: 'Output sand temperature', valueEn: '≤ 40 °C' },
      { name: 'Мощность вентилятора продува', value: '30 кВт', nameEn: 'Blower fan motor rating', valueEn: '30 kW' },
      { name: 'Давление воды распыления', value: '0.4 - 0.6 МПа', nameEn: 'Water atomization pressure', valueEn: '0.4 - 0.6 MPa' },
      { name: 'Расход воды охлаждения', value: '1.2 - 2.5 м³/час', nameEn: 'Cooling water consumption budget', valueEn: '1.2 - 2.5 m³/h' }
    ],
    variantModels: [
      { model: 'ОС-20', capacity: '20 т/ч', capacityEn: '20 t/h', power: '22 кВт', powerEn: '22 kW', extraField: 'Длина слоя', extraFieldVal: '3200 мм', extraFieldValEn: '3200 mm' },
      { model: 'ОС-30', capacity: '30 т/ч', capacityEn: '30 t/h', power: '37 кВт', powerEn: '37 kW', extraField: 'Длина слоя', extraFieldVal: '4200 мм', extraFieldValEn: '4200 mm' },
      { model: 'ОС-60', capacity: '60 т/ч', capacityEn: '60 t/h', power: '75 кВт', powerEn: '75 kW', extraField: 'Длина слоя', extraFieldVal: '5500 мм', extraFieldValEn: '5500 mm' }
    ]
  },
  {
    id: 'green-sand-line-afl6080',
    category: 'green-sand',
    subcategory: 'molding-lines',
    subcategoryRu: 'Автоматические формовочные линии ПГС',
    subcategoryEn: 'Automated Molding Lines',
    subsubcategory: 'afl-lines',
    subsubcategoryRu: 'Линии АФЛ',
    subsubcategoryEn: 'Automated lines AFL',
    title: 'Автоматическая безопочная формовочная линия ПГС',
    titleEn: 'Flaskless horizontal automated molding line AFL series',
    model: 'АФЛ-6080',
    description: 'Высокопроизводительная автоматическая линия безопочной формовки с горизонтальным разъемом. Обеспечивает непрерывный цикл изготовления глинистых форм, автоматическую сборку полуформ, установку стержней и быструю транспортировку к месту заливки.',
    descriptionEn: 'Ultra high-output horizontal flaskless automated molding line. Maximizes productivity by executing flaskless pattern molding, automatic mold matching, core setting, and steady pouring transit loops.',
    imageUrl: '/img/foto/Menu/pgs-fd.jpg',
    capacity: '120 форм/час',
    capacityEn: '120 molds/hour',
    power: '55 кВт',
    powerEn: '55 kW',
    features: [
      'Горизонтальный разъем формы для надежного удержания тяжелых стержней',
      'Импульсно-прессовый высокоэффективный метод уплотнения смеси песком',
      'Система быстрой замены модельных плит для мелкосерийного гибкого литья',
      'Интегрированный прецизионный робот-заливщик расплава в формы'
    ],
    featuresEn: [
      'Horizontal parting line layout securing heavy core placements from shifts',
      'Combined air-impulse sand blowing and hydraulic squeeze compaction process',
      'Rapid pattern plate exchange mechanism enabling high product mix flexibility',
      'Integrated precision robotic pouring cup synchronizing with mold feed speeds'
    ],
    specs: [
      { name: 'Размер формовочного кома (ДхШ)', value: '800 х 600 мм', nameEn: 'Mold block size (LxW)', valueEn: '800 x 600 mm' },
      { name: 'Высота полуформы (верх/низ)', value: '180 - 250 мм', nameEn: 'Half-mold height range', valueEn: '180 - 250 mm' },
      { name: 'Максимальная скорость формовки', value: '120 форм/час', nameEn: 'Maximum molding speed', valueEn: '120 molds/h' },
      { name: 'Гидравлическое усилие прессования', value: '350 кН', nameEn: 'Main hydraulic squeeze force', valueEn: '350 kN' },
      { name: 'Энергопотребление суммарное', value: '55 кВт', nameEn: 'Total system power rating', valueEn: '55 kW' },
      { name: 'Вес комплекта оборудования', value: '18 тонн', nameEn: 'Overall machinery assembly weight', valueEn: '18 tons' }
    ],
    variantModels: [
      { model: 'АФЛ-5060', capacity: '100 ф/ч', capacityEn: '100 m/h', power: '37 кВт', powerEn: '37 kW', extraField: 'Размер кома', extraFieldVal: '600 х 500 мм', extraFieldValEn: '600 x 500 mm' },
      { model: 'АФЛ-6080', capacity: '120 ф/ч', capacityEn: '120 m/h', power: '55 кВт', powerEn: '55 kW', extraField: 'Размер кома', extraFieldVal: '800 х 600 мм', extraFieldValEn: '800 x 600 mm' },
      { model: 'АФЛ-80100', capacity: '90 ф/ч', capacityEn: '90 m/h', power: '90 кВт', powerEn: '90 kW', extraField: 'Размер кома', extraFieldVal: '1000 х 800 мм', extraFieldValEn: '1000 x 800 mm' }
    ]
  },
  {
    id: 'green-sand-machine-fm20',
    category: 'green-sand',
    subcategory: 'molding-machines',
    subcategoryRu: 'Формовочные машины',
    subcategoryEn: 'Molding Machines',
    subsubcategory: 'fm-machines',
    subsubcategoryRu: 'Формовочные машины ФМ',
    subsubcategoryEn: 'Molding machines FM',
    title: 'Встряхивающая формовочная машина с допрессовкой',
    titleEn: 'Pneumatic jolt-squeeze molding machine FM series',
    model: 'ФМ-20',
    description: 'Классическая однопозиционная настольная формовочная машина пневматического действия. Выполняет предварительное встряхивание оборотной смеси в опоке с последующим мощным верхним подпрессовыванием. Обеспечивает простую и быструю ручную сборку форм.',
    descriptionEn: 'Pneumatic benchtop jolt-squeeze foundry molding machine. Features combined high-frequency pneumatic table jolting and hydraulic head squeezing. Ideal for flexible jobbing shops.',
    imageUrl: '/img/foto/Menu/pgs-resh.jpg',
    capacity: 'Номинально 40 форм/час',
    capacityEn: 'Nominal 40 molds/hour',
    power: 'Пневмо 0.6 МПа',
    powerEn: 'Pneumatic 0.6 MPa',
    features: [
      'Надежный узел встряхивания поршневого типа с регулируемым ходом',
      'Поворотная траверса прессования для свободного доступа оператора к модели',
      'Встроенные регулируемые штифты вытяжки модели для идеальной кромки полуформы',
      'Прочные литые чугунные элементы рамы для глушения виброударов'
    ],
    featuresEn: [
      'Piston jolt mechanism with adjustable travel stroke',
      'Heavy-duty swinging squeeze head giving clear front access',
      'Adjustable pins lifting the flask away without destroying mold cavities',
      'Thick cast iron pedestal frame absorbing massive impact cycles'
    ],
    specs: [
      { name: 'Размер стола машины', value: '750 х 550 мм', nameEn: 'Table plate dimensions', valueEn: '750 x 550 mm' },
      { name: 'Усилие подпрессовки (при 0.6 МПа)', value: '60 кН (6 тонн)', nameEn: 'Squeeze force at 0.6 MPa', valueEn: '60 kN (6 tons)' },
      { name: 'Высота подъема штифтов вытяжки', value: '180 мм', nameEn: 'Pattern draw lift height', valueEn: '180 mm' },
      { name: 'Расход сжатого воздуха', value: '1.2 м³/замес', nameEn: 'Compressed air flow requirement', valueEn: '1.2 m³/batch' },
      { name: 'Грузоподъемность стола', value: '250 кг', nameEn: 'Table load capacity limit', valueEn: '250 kg' }
    ],
    variantModels: [
      { model: 'ФМ-10', capacity: '150 кг', capacityEn: '150 kg', power: '0.6 МПа', powerEn: '0.6 MPa', extraField: 'Размер стола', extraFieldVal: '600 х 450 мм', extraFieldValEn: '600 x 450 mm' },
      { model: 'ФМ-20', capacity: '250 кг', capacityEn: '250 kg', power: '0.6 МПа', powerEn: '0.6 MPa', extraField: 'Размер стола', extraFieldVal: '750 х 550 мм', extraFieldValEn: '750 x 550 mm' },
      { model: 'ФМ-40', capacity: '500 кг', capacityEn: '500 kg', power: '0.6 МПа', powerEn: '0.6 MPa', extraField: 'Размер стола', extraFieldVal: '1000 х 800 мм', extraFieldValEn: '1000 x 800 mm' }
    ]
  },
  {
    id: 'core-shooter-sa400',
    category: 'core-making',
    subcategory: 'shooters',
    subcategoryRu: 'Стержневые автоматы',
    subcategoryEn: 'Core Shooters',
    subsubcategory: 'sa-shooters',
    subsubcategoryRu: 'Стержневые автоматы СА',
    subsubcategoryEn: 'Core shooters SA',
    title: 'Стержневой автомат пескострельного типа Cold-box-amine',
    titleEn: 'Automatic cold-box amine core shooter SA series',
    model: 'СА-400',
    description: 'Высокоавтоматизированный пескострельный стержневой автомат для изготовления стержней по процессу Cold-box-amine. Песчаная смесь выстреливается в стержневой ящик сжатым воздухом, после чего продувается третичным амином для мгновенного отверждения.',
    descriptionEn: 'High productivity cold-box-amine sand core shooter machinery. Shoots dry silicate-resin sand mix inside split core boxes, then injects vaporized amine catalyst for lightning speed hardening.',
    imageUrl: '/img/foto/Menu/Stergn.jpg',
    capacity: 'Объем выстрела 15 литров (до 25 кг)',
    capacityEn: 'Shoot volume 15 L (up to 25 kg)',
    power: '22 кВт + Пневмо',
    powerEn: '22 kW + Pneumatic',
    features: [
      'Горизонтальный и вертикальный гидравлический разъем стержневых ящиков',
      'Точный автоматический дозатор аминов и газовая система герметизации',
      'Система быстрой переналадки стреляющей плиты и очистки сопла',
      'Совместимость с автоматическими скрубберами нейтрализации газов'
    ],
    featuresEn: [
      'Heavy horizontal and vertical hydraulic split clamps securing boxes under high blow pressures',
      'Highly precise amine vapor generation and airtight gas seal lock plate controls',
      'Automatic quick nozzle block clean-ups preventing resin buildup blockages',
      'Engineered terminal interfaces hookable to clean chemical gas scrubbers'
    ],
    specs: [
      { name: 'Максимальный объем выстрела', value: '15 литров', nameEn: 'Maximum shoot volume capacity', valueEn: '15 liters' },
      { name: 'Размеры стержневого ящика', value: '650 х 550 х 400 мм', nameEn: 'Core box envelope dimensions', valueEn: '650 x 550 x 400 mm' },
      { name: 'Усилие смыкания плит', value: '150 кН', nameEn: 'Plates hydraulic clamp force', valueEn: '150 kN' },
      { name: 'Рабочее давление воздуха выстрела', value: '0.4 - 0.6 МПа', nameEn: 'Shooting compressed air draft', valueEn: '0.4 - 0.6 MPa' },
      { name: 'Производительность стержней', value: '60 - 80 циклов/час', nameEn: 'Throughput execution speed', valueEn: '60 - 80 cycles/h' }
    ],
    variantModels: [
      { model: 'СА-150', capacity: '5 литров', capacityEn: '5 L', power: '15 кВт', powerEn: '15 kW', extraField: 'Усилие зажима', extraFieldVal: '80 кН', extraFieldValEn: '80 kN' },
      { model: 'СА-400', capacity: '15 литров', capacityEn: '15 L', power: '22 кВт', powerEn: '22 kW', extraField: 'Усилие зажима', extraFieldVal: '150 кН', extraFieldValEn: '150 kN' },
      { model: 'СА-800', capacity: '40 литров', capacityEn: '40 L', power: '37 кВт', powerEn: '37 kW', extraField: 'Усилие зажима', extraFieldVal: '250 кН', extraFieldValEn: '250 kN' }
    ]
  },
  {
    id: 'core-shooter-hot-box',
    category: 'core-making',
    subcategory: 'shooters',
    subcategoryRu: 'Стержневые автоматы',
    subcategoryEn: 'Core Shooters',
    subsubcategory: 'hot-box',
    subsubcategoryRu: 'Стержневые машины Hot-Box',
    subsubcategoryEn: 'Hot-box machines',
    title: 'Стержневая машина горячей оснастки Hot-Box',
    titleEn: 'Foundry Hot-Box core shooting machine series',
    model: 'САГ-20',
    description: 'Стержневой автомат горячего отверждения стержней (процессы Hot-Box, Shell-процесс, Croning). Стержневой ящик оснащен встроенной системой электрического или газового нагрева. Обеспечивает изготовление тонкостенных пустотелых высокоточных стержней.',
    descriptionEn: 'Electric or gas heated Hot-Box and shell core sand shooter station. Designed to mold hollow high-precision cores with high thermal and dimensional stability under metal flow impact.',
    imageUrl: '/img/foto/Menu/Stergn.jpg',
    capacity: 'Вес стержня до 20 кг',
    capacityEn: 'Core weight up to 20 kg',
    power: '45 кВт (нагрев)',
    powerEn: '45 kW (heating power)',
    features: [
      'Высокоточные нагревательные плиты с индивидуальным ПИД контролем температуры',
      'Автоматический пневматический выталкиватель готовых стержней из ящика',
      'Защитное ограждение рабочей зоны с блокировочными датчиками безопасности',
      'Сверхнадежные направляющие скольжения для затвора сопла вдува песка'
    ],
    featuresEn: [
      'High watt density heater elements managed via multizone PID temperature controllers',
      'Integrated pneumatic stripper pins popping out cured sands without fractures',
      'Safety enclosure frames featuring locked interlock micro switches',
      'Heavy-duty linear guide rails securing perfect alignment under nozzle seal thrusts'
    ],
    specs: [
      { name: 'Емкость бункера смеси', value: '80 кг', nameEn: 'Dry sand hopper capacity', valueEn: '80 kg' },
      { name: 'Максимальная температура нагрева', value: '300 °C', nameEn: 'Core box heating ceiling', valueEn: '300 °C' },
      { name: 'Давление вдува воздуха', value: '0.5 - 0.7 МПа', nameEn: 'Compressed air blow pressure', valueEn: '0.5 - 0.7 MPa' },
      { name: 'Время одного цикла отверждения', value: '30 - 90 сек', nameEn: 'Curing time range', valueEn: '30 - 90 sec' }
    ]
  },
  {
    id: 'core-scrubber',
    category: 'core-making',
    subcategory: 'shooters',
    subcategoryRu: 'Стержневые автоматы',
    subcategoryEn: 'Core Shooters',
    subsubcategory: 'scrubbers',
    subsubcategoryRu: 'Скрубберы нейтрализации',
    subsubcategoryEn: 'Gas scrubbers',
    title: 'Система нейтрализации аминовых газов (Скруббер)',
    titleEn: 'Amine gas scrubber and chemical neutralization system',
    model: 'СНА-1000',
    description: 'Промышленная кислотная абсорбционная колонна (скруббер) для нейтрализации высокотоксичных аминовых газов (DMEA/TEA), выбрасываемых стержневыми автоматами. Обеспечивает экологические показатели выбросов в атмосферу по нормам ПДК СНГ.',
    descriptionEn: 'Wet absorption packed-column gas scrubber running acidic solution neutralize amine vapors (TEA/DMEA). Fits any active Cold-Box-Amine casting workshop maintaining emissions safety.',
    imageUrl: '/img/foto/Menu/Stergn.jpg',
    capacity: '1000 м³/час очистки',
    capacityEn: '1000 m³/h output',
    power: '7.5 кВт',
    powerEn: '7.5 kW',
    features: [
      'Антикоррозионный корпус из химически стойкого полипропилена (PP-H)',
      'Насадочная часть с кольцами Рашига для максимальной площади контакта фаз',
      'Автоматический контроль pH раствора нейтрализации со впрыском серной кислоты',
      'Каплеуловитель на выходе для удаления следов влаги из воздушного потока'
    ],
    featuresEn: [
      'Corrosion proof housing built from dense chemically inert PP-H sheets',
      'Internal packed bed filled with high surface area Raschig rings',
      'Onboard automatic pH sensor dosage loop injecting sulphuric acid chemical inputs',
      'High capacity mist eliminator packing drier air drafts down the chimney lines'
    ],
    specs: [
      { name: 'Производительность вентилятора', value: '1000 м³/час', nameEn: 'Exhaust fan flow capacity', valueEn: '1000 m³/h' },
      { name: 'Эффективность улавливания амина', value: '≥ 99.5%', nameEn: 'Amine capture efficiency rate', valueEn: '≥ 99.5%' },
      { name: 'Емкость резервуара абсорбента', value: '450 литров', nameEn: 'Bottom neutralizer tank capacity', valueEn: '450 L' },
      { name: 'Давление центробежного насоса', value: '0.25 МПа', nameEn: 'Circulating pump pressure', valueEn: '0.25 MPa' }
    ]
  }
];
