import { Product } from '../types';

export const PRODUCTS_OTHERS: Product[] = [
  {
    id: 'shot-blast-q32-rubber',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot Blasting',
    subsubcategory: 'q32-rubber',
    subsubcategoryRu: 'Ленточные дробеметы Q32',
    subsubcategoryEn: 'Tumble belt blasters Q32',
    title: 'Дробеметная установка ленточного типа с резиновым транспортером',
    titleEn: 'Rubber tumble belt shot blasting machine Q32 series',
    model: 'Q32-6',
    description: 'Компактная дробеметная установка периодического действия с бесконечной резиновой лентой. Идеально очищает отливки, поковки и сварные заготовки от литейного пригара, окалины, ржавчины и заусенцев методом бережной галтовки под факелом дроби.',
    descriptionEn: 'High reliability batch rubber tumble belt shot blaster. Cleans and descales sand cast iron parts, hot forgings, and welded steel works by gently tumbling them inside a rubber belt pocket.',
    imageUrl: '/img/foto/Menu/ZIP-drob.jpg',
    capacity: 'Загрузка 200 кг (объем 0.15 м³)',
    capacityEn: 'Max load 200 kg (0.15 m³ volume)',
    power: '15 кВт',
    powerEn: '15 kW',
    features: [
      'Бесконечная износостойкая перфорированная резиновая лента толщиной 16 мм',
      'Высокоскоростная дробеметная турбина прямого привода с лопатками из инструментальной стали',
      'Эффективная система сепарации дроби от пыли и песка (воздушный сепаратор)',
      'Удобная автоматическая выгрузка деталей обратным ходом транспортера'
    ],
    featuresEn: [
      'Highly rugged multi-layer wear-resistant perforated rubber belt',
      'Direct-driven shot turbine blast wheel containing tool steel alloy blades',
      'Gravity sand-dust air wash separator providing pristine shot quality rounds',
      'Auto reverse belt motion unloading parts directly into shipping boxes'
    ],
    specs: [
      { name: 'Объем загрузки камеры', value: '0.15 м³', nameEn: 'Chamber load volume', valueEn: '0.15 m³' },
      { name: 'Максимальный вес одной детали', value: '15 кг', nameEn: 'Maximum single part weight', valueEn: '15 kg' },
      { name: 'Максимальный вес всей загрузки', value: '200 кг', nameEn: 'Maximum batch load weight', valueEn: '200 kg' },
      { name: 'Производительность турбины', value: '120 кг/мин', nameEn: 'Shot turbine feed rate', valueEn: '120 kg/min' },
      { name: 'Мощность турбинного привода', value: '7.5 кВт', nameEn: 'Blast wheel motor power', valueEn: '7.5 kW' }
    ],
    variantModels: [
      { model: 'Q32-3', capacity: '100 кг', capacityEn: '100 kg', power: '11 кВт', powerEn: '11 kW', extraField: 'Объем', extraFieldVal: '0.08 м³', extraFieldValEn: '0.08 m³' },
      { model: 'Q32-6', capacity: '200 кг', capacityEn: '200 kg', power: '15 кВт', powerEn: '15 kW', extraField: 'Объем', extraFieldVal: '0.15 м³', extraFieldValEn: '0.15 m³' },
      { model: 'Q32-10', capacity: '600 кг', capacityEn: '600 kg', power: '24 кВт', powerEn: '24 kW', extraField: 'Объем', extraFieldVal: '0.30 м³', extraFieldValEn: '0.30 m³' }
    ]
  },
  {
    id: 'shot-blast-q31-drum',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot Blasting',
    subsubcategory: 'q31-drum',
    subsubcategoryRu: 'Барабанные дробеметы Q31',
    subsubcategoryEn: 'Tumble steel drum systems Q31',
    title: 'Дробеметная установка барабанного типа (стальной конвейер)',
    titleEn: 'Steel apron tumble belt shot blasting machine Q31 series',
    model: 'Q31-10',
    description: 'Сверхмощная дробеметная установка с бесконечной гусеничной стальной лентой (траками). Специально спроектирована для жестких условий литейного цеха с целью очистки тяжелых отливок весом до 50 кг и агрессивных деталей с острыми гранями.',
    descriptionEn: 'Heavy duty steel link tumble belt blast cleaning system. Ideal for handling aggressive cast steel and iron parts up to 50 kg single weight with sharp abrasive flash lines.',
    imageUrl: '/img/foto/Menu/ZIP-drob.jpg',
    capacity: 'Загрузка 600 кг',
    capacityEn: 'Max load 600 kg',
    power: '30 кВт',
    powerEn: '30 kW',
    features: [
      'Повышенная износостойкость стального пластинчатого конвейера',
      'Высокоскоростная центробежная турбина заброса дроби',
      'Автоматический подъемный затвор загрузочного люка'
    ],
    featuresEn: [
      'High resistance steel apron link conveyor design',
      'High speed centrifugal blast wheel throwing shot rounds',
      'Automatic vertical lift front loading chamber door'
    ],
    specs: [
      { name: 'Объем камеры галтовки', value: '0.35 м³', nameEn: 'Chamber internal volume', valueEn: '0.35 m³' },
      { name: 'Максимальный вес одной детали', value: '50 кг', nameEn: 'Max single part load', valueEn: '50 kg' },
      { name: 'Производительность заброса дроби', value: '250 кг/мин', nameEn: 'Shot blasting rate', valueEn: '250 kg/min' }
    ]
  },
  {
    id: 'shot-blast-q37-hanger',
    category: 'shot-blast',
    subcategory: 'shot-blast-machines',
    subcategoryRu: 'Дробемётное оборудование',
    subcategoryEn: 'Shot Blasting',
    subsubcategory: 'q37-hanger',
    subsubcategoryRu: 'Подвесные дробеметы Q37',
    subsubcategoryEn: 'Overhead hook chambers Q37',
    title: 'Дробеметная камера подвесного типа (крюковые дробеметы)',
    titleEn: 'Overhead hanger hook shot blast chamber Q37 series',
    model: 'Q37-10',
    description: 'Двухпозиционная дробеметная камера подвесного типа с крюковым подвесом. Предназначена для очистки отливок сложной формы, хрупких тонкостенных деталей, которые невозможно подвергать соударению в галтовочных барабанах.',
    descriptionEn: 'Overhead conveyor hanger hook type shot blasting chamber. Designed to blast-clean fragile complex shape iron/steel parts without any inter-part impact damages during cycle.',
    imageUrl: '/img/foto/Menu/ZIP-drob.jpg',
    capacity: 'Грузоподъемность 1000 кг',
    capacityEn: 'Lifting capacity 1000 kg',
    power: '37 кВт',
    powerEn: '37 kW',
    features: [
      'Два независимых подвесных крюка на рельсовом разветвлении для бесперебойной работы',
      'Пневматический затвор распашных дверей для высокой герметизации',
      'Многозонное расположение метательных турбин для равномерного факела очистки'
    ],
    featuresEn: [
      'Two independent crane hook rails running in dual parallel shuttle branches',
      'Airtight pneumatic seal gates sealing the dual swinging front chamber doors',
      'Multi-axis offset turbine placements throwing homogeneous dense steel shots'
    ],
    specs: [
      { name: 'Макс. габариты очищаемой заготовки', value: 'Ø1000 х 1500 мм', nameEn: 'Max workpiece envelope size', valueEn: 'Ø1000 x 1500 mm' },
      { name: 'Грузоподъемность крюка подвеса', value: '1000 кг', nameEn: 'Hanger hook load capacity', valueEn: '1000 kg' },
      { name: 'Количество дробеметных турбин', value: '2 х 11.0 кВт', nameEn: 'Shot wheel quantity & power', valueEn: '2 x 11.0 kW' }
    ],
    variantModels: [
      { model: 'Q37-5', capacity: '500 кг', capacityEn: '500 kg', power: '22 кВт', powerEn: '22 kW', extraField: 'Размер детали', extraFieldVal: 'Ø600 х 1100 мм', extraFieldValEn: 'Ø600 x 1100 mm' },
      { model: 'Q37-10', capacity: '1000 кг', capacityEn: '1000 kg', power: '37 кВт', powerEn: '37 kW', extraField: 'Размер детали', extraFieldVal: 'Ø1000 х 1500 мм', extraFieldValEn: 'Ø1000 x 1500 mm' },
      { model: 'Q37-20', capacity: '2000 кг', capacityEn: '2000 kg', power: '45 кВт', powerEn: '45 kW', extraField: 'Размер детали', extraFieldVal: 'Ø1300 х 2000 мм', extraFieldValEn: 'Ø1300 x 2000 mm' }
    ]
  },
  {
    id: 'casting-gravity-k800',
    category: 'casting-machines',
    subcategory: 'gravity',
    subcategoryRu: 'Литейные формообразующие машины',
    subcategoryEn: 'Casting Machinery',
    subsubcategory: 'tilt-kokil',
    subsubcategoryRu: 'Кокильные станки КМ',
    subsubcategoryEn: 'Tilt gravity molders KM',
    title: 'Кокильная машина с гидравлическим наклоном кокиля',
    titleEn: 'Hydraulic tilting gravity die-casting machine (gravity molder)',
    model: 'КМ-800',
    description: 'Профессиональная наклоняемая машина для литья цветных сплавов (алюминий, латунь, бронза) в кокиль. Контролируемый наклон заливочной формы обеспечивает ламинарное заполнение полости металлом, сводя к минимуму захват воздуха и усадочную пористость.',
    descriptionEn: 'Professional hydraulic tilt gravity die casting machine. Progressive tilting rotation minimizes metal flow turbulence and limits air entrapment inside aluminum or brass die cavities.',
    imageUrl: '/img/foto/Menu/Kokil.jpg',
    capacity: 'Вес отливки до 35 кг',
    capacityEn: 'Cast weight up to 35 kg',
    power: '7.5 кВт (гидравлика)',
    powerEn: '7.5 kW (hydraulic)',
    features: [
      'Программируемая регулировка угла и угловой скорости наклона кокиля (ЧПУ Delta)',
      'Жесткие хромированные направляющие колонны смыкания кокиля',
      'Встроенные гидравлические толкатели выталкивания детали на каретку',
      'Выносная надежная гидравлическая станция с воздушным охлаждением масла'
    ],
    featuresEn: [
      'Programmable progressive tilt speed adjustments driven by advanced Delta touch screen PLC',
      'Four heavy chrome-plated guidance columns ensuring true linear die closure',
      'Double integrated hydraulic stripper cylinder pop-up and carriage capture plate',
      'Standalone hydraulic oil pumping unit equipped with heavy-duty air heat-exchanger'
    ],
    specs: [
      { name: 'Макс. размеры зажимаемой плиты', value: '800 х 700 мм', nameEn: 'Maximum die plate size', valueEn: '800 x 700 mm' },
      { name: 'Максимальный ход раскрытия плит', value: '450 мм', nameEn: 'Opening hydraulic stroke', valueEn: '450 mm' },
      { name: 'Номинальное гидравлическое смыкание', value: '120 кН', nameEn: 'Clamping hydraulic force', valueEn: '120 kN' },
      { name: 'Диапазон регулировки угла наклона', value: '0 - 90° (регулируемый)', nameEn: 'Tilting angle span', valueEn: '0 - 90° (fully adjustable)' }
    ]
  },
  {
    id: 'casting-centrifugal-cl400',
    category: 'casting-machines',
    subcategory: 'centrifugal',
    subcategoryRu: 'Литейные формообразующие машины',
    subcategoryEn: 'Casting Machinery',
    subsubcategory: 'centrifugal-cl',
    subsubcategoryRu: 'Центробежные машины ЦЛ',
    subsubcategoryEn: 'Centrifugal stations CL',
    title: 'Центробежная литейная машина горизонтальная',
    titleEn: 'Horizontal axis centrifugal casting machine CL series',
    model: 'ЦЛ-400',
    description: 'Высокоскоростная горизонтальная центробежная машина для отливки пустотелых заготовок (втулок, гильз, барабанов, труб) из чугуна, бронзы и стальных сплавов. Центробежная сила обеспечивает сверхплотную структуру металла без раковин.',
    descriptionEn: 'High speed horizontal axis centrifugal casting station. Rotational forces generate highly compacted material grain density in bronze sleeves, steel liners, or iron tubes.',
    imageUrl: '/img/foto/Menu/zm-gor.jpg',
    capacity: 'Втулки диаметром до 400 мм',
    capacityEn: 'Bushings up to 400 mm diameter',
    power: '15 кВт',
    powerEn: '15 kW',
    features: [
      'Стабильная бесступенчатая регулировка скорости вращения изложницы',
      'Пневматический запуск защитного кожуха',
      'Система водяного охлаждения вращающейся пресс-формы'
    ],
    featuresEn: [
      'Infinitely variable variable frequency speed drive rotation',
      'Safety enclosure lid lifted and dropped via pneumatic cylinders',
      'Direct exterior water spraying cooling system for die moulds'
    ],
    specs: [
      { name: 'Диаметр изготавливаемых втулок', value: '100 - 400 мм', nameEn: 'Manufactured bushing diameter', valueEn: '100 - 400 mm' },
      { name: 'Максимальная длина заготовки', value: '500 мм', nameEn: 'Maximum sleeve length', valueEn: '500 mm' },
      { name: 'Частота вращения изложницы', value: '300 - 1500 об/мин', nameEn: 'Mould rotating speed range', valueEn: '300 - 1500 rpm' }
    ]
  },
  {
    id: 'cooling-tower-wt100',
    category: 'cooling-systems',
    subcategory: 'cooling-towers',
    subcategoryRu: 'Охладительное оборудование',
    subcategoryEn: 'Water Cooling',
    subsubcategory: 'towers-gz',
    subsubcategoryRu: 'Испарительные градирни ГЗ',
    subsubcategoryEn: 'Closed cooling towers GZ',
    title: 'Испарительная закрытая градирня для печей и тиристоров',
    titleEn: 'Closed-circuit evaporative water cooling tower GZ series',
    model: 'ГЗ-100',
    description: 'Двухконтурная испарительная градирня закрытого типа (сухой охладитель / чиллер). Предотвращает образование накипи во внутренних медных индукторах плавильных печей и тиристоров (ТПЧ) за счет циркуляции дистиллированной воды в чистом замкнутом контуре.',
    descriptionEn: 'Closed loop evaporative water cooling tower. Eliminates mineral deposits inside expensive furnace inductors and high frequency SCR power cabinets by running pure distilled water in a secondary copper tube radiator array.',
    imageUrl: '/img/foto/Menu/ZIP-kondens.jpg',
    capacity: 'Номинальное охлаждение 100 м³/час',
    capacityEn: 'Nominal flow 100 m³/hour',
    power: '7.5 кВт',
    powerEn: '7.5 kW',
    features: [
      'Теплообменный блок из прецизионных цельнотянутых медных трубок Т2',
      'Внешний мокрый контур орошения со специальными форсунками',
      'Высоконапорные осевые вентиляторы с полимерными лопастями',
      'Автоматическая защита от замерзания в зимних климатических зонах'
    ],
    featuresEn: [
      'Heavy-duty cooling coils made of T2 high quality solid-drawn copper tubes',
      'Spray nozzles distributing micro water droplets across coil arrays',
      'High efficiency axial fan blowers built from non-corrosive lightweight polymers',
      'Automatic PLC anti-freeze and temperature dumping logic for harsh subzero winter states'
    ],
    specs: [
      { name: 'Номинальный расход охлаждаемой воды', value: '100 м³/час', nameEn: 'Nominal water circulation rate', valueEn: '100 m³/h' },
      { name: 'Номинальная теплосъемная мощность', value: '450 кВт', nameEn: 'Heat rejection capacity', valueEn: '450 kW' },
      { name: 'Материал теплообменных змеевиков', value: 'Медь высокой чистоты Т2', nameEn: 'Heat exchange coil metal', valueEn: 'High purity T2 copper' },
      { name: 'Мощность циркуляционных насосов', value: '2 х 2.2 кВт', nameEn: 'Circulation pumps motor rating', valueEn: '2 x 2.2 kW' }
    ]
  },
  {
    id: 'lgm-predvspenivatel',
    category: 'lgm-equipment',
    subcategory: 'pre-expanders',
    subcategoryRu: 'Предвспениватели ЛГМ',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'predvspenivatel-pv',
    subsubcategoryRu: 'Предвспениватели ПВ',
    subsubcategoryEn: 'Pre-expanders PV',
    title: 'Предвспениватель полистирола циклического действия',
    titleEn: 'Batch-type raw polystyrene pre-expander PV series',
    model: 'ПВ-120',
    description: 'Высокоточная циклическая машина для предвспенивания вспенивающегося полистирола (EPS). Используется в литье по газифицируемым моделям (ЛГМ) для получения однородных пеномоделей со стабильной плотностью гранул.',
    descriptionEn: 'High precision batch-type expandable polystyrene (EPS) pre-expander. Essential for Lost Foam (LGM) foundries to mold extremely consistent bead density patterns.',
    imageUrl: '/img/foto/Menu/lgm-pred.jpg',
    capacity: 'Производительность 120 кг/час',
    capacityEn: 'Throughput 120 kg/hour',
    power: '4 кВт (нагрев паром)',
    powerEn: '4 kW (steam heating basis)',
    features: [
      'Система точного объемного дозирования гранулята',
      'Стабильная подача сухого насыщенного пара в камеру',
      'Встроенная вибросушка кипящего слоя пенополистирола'
    ],
    featuresEn: [
      'Highly precise bead volume scale dispenser',
      'Stable direct saturated dry steam injection manifold',
      'Integrated fluidized bed drying unit shaking excess moisture'
    ],
    specs: [
      { name: 'Плотность вспенивания сырья', value: '12 - 30 г/литр', nameEn: 'Molding bead density range', valueEn: '12 - 30 g/L' },
      { name: 'Объем расширительной камеры', value: '0.45 м³', nameEn: 'Expansion chamber volume', valueEn: '0.45 m³' }
    ]
  },
  {
    id: 'lgm-modelavtomat',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'modelavtomat-fa',
    subsubcategoryRu: 'Модельные автоматы ФА',
    subsubcategoryEn: 'Model molders FA',
    title: 'Автоматический формовочный автомат пеномоделей ЛГМ',
    titleEn: 'Automatic Lost Foam polystyrene pattern molder FA series',
    model: 'ФА-800',
    description: 'Автоматическая шприц-машина пенополистирольных заготовок (моделей). Задувает гранулы полистирола в форму, спекает их под паром и охлаждает вакуумным контуром. Получаются идеальные газифицируемые модели.',
    descriptionEn: 'Automatic shape molding machine for EPS foam pattern clusters. Fills EPS beads, sinters them via high-pressure dry steam, and vacuums moisture for shape-perfect Lost Foam patterns.',
    imageUrl: '/img/foto/Menu/lgm-avtom.jpg',
    capacity: 'Размер плиты 1000 х 800 мм',
    capacityEn: 'Platen size 1000 x 800 mm',
    power: '15 кВт',
    powerEn: '15 kW',
    features: [
      'Автоматическое регулирование давления пропаривания по датчикам',
      'Вакуумное ускоренное охлаждение готового блока пеномодели',
      'Безопасное двухкнопочное управление циклом запуска смыкания'
    ],
    featuresEn: [
      'Automatic sensor closed loop regulation of steam baking',
      'Deep vacuum assisted rapid cooling circuit of molded EPS blocks',
      'Fail-safe dual push button startup trigger control'
    ],
    specs: [
      { name: 'Размеры зажимной матрицы плиты', value: '1000 х 800 мм', nameEn: 'Clamping matrix size', valueEn: '1000 x 800 mm' },
      { name: 'Время полного цикла формовки', value: '45 - 80 сек', nameEn: 'Complete cycle time', valueEn: '45 - 80 sec' }
    ]
  },
  {
    id: 'lgm-block-forma',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'block-forma',
    subsubcategoryRu: 'Блок-формы',
    subsubcategoryEn: 'Block molding matrices',
    title: 'Блок-форма прессования полистирола',
    titleEn: 'Foundry LGM block mold matrix system',
    model: 'БФ-600',
    description: 'Матричная оснастка (блок-форма) для теплового спекания газифицируемых заготовок. Оснащена каналами впрыска сухого пара высокого давления и водяной рубашкой быстрого контурного охлаждения.',
    descriptionEn: 'High reliability block shape matrix tooling for Lost Foam bead sintering. Outfitted with high efficiency dry steam vents and deep water cooling channels.',
    imageUrl: '/img/foto/Menu/blok-forma-znak3.jpg',
    capacity: 'Объем до 60 литров',
    capacityEn: 'Volume up to 60 L',
    power: 'Крановое крепление',
    powerEn: 'Manual or crane clamp',
    features: [
      'Прецизионная фрезеровка каналов вентиляции пара',
      'Высокая герметичность стыковочных плит против утечек давления',
      'Быстроразъемные соединения подвода воды и пара'
    ],
    featuresEn: [
      'Precision CNC milled steam core vent paths',
      'Airtight silicone gaskets resisting thermal pressure leaks',
      'Quick-couplers for immediate utility lines connect'
    ],
    specs: [
      { name: 'Размеры рабочей матрицы', value: '600 х 500 х 400 мм', nameEn: 'Matrix working volume', valueEn: '600 x 500 x 400 mm' },
      { name: 'Рабочее давление пара', value: '0.3 - 0.5 МПа', nameEn: 'Operating steam pressure', valueEn: '0.3 - 0.5 MPa' }
    ]
  },
  {
    id: 'lgm-avtoklav',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'autoclaves',
    subsubcategoryRu: 'Автоклавы ЛГМ',
    subsubcategoryEn: 'LGM autoclaves',
    title: 'Автоклав высокого давления для ЛГМ моделей',
    titleEn: 'Lost Foam autoclave sintering system',
    model: 'АК-1.2',
    description: 'Сосуд под давлением (автоклав) периодического действия для спекания сложных габаритных блоков полистирола. Обеспечивает равномерный прогрев во всей камере паром, гарантируя нулевую пористость на спаях моделей.',
    descriptionEn: 'High capacity batch autoclave developed for Lost Foam patterns. Distributes heat consistently across the pressure chamber, guaranteeing dense, smooth weld surfaces.',
    imageUrl: '/img/foto/Menu/lgm-avtoklav.jpg',
    capacity: 'Объем камеры 1.2 м³',
    capacityEn: 'Chamber volume 1.2 m³',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Толстостенный стальной сертифицированный сосуд по стандартам котлонадзора',
      'Быстрозажимной байонетный затвор крышки с блокировочным замком',
      'Автоматический слив конденсата во избежание деформации моделей'
    ],
    featuresEn: [
      'Thick boiler steel pressure vessel certified to industrial standards',
      'Rapid lock bayonet door clamp featuring mechanical safety interlock pins',
      'Automatic steam condensate trap system preventing pattern deformations'
    ],
    specs: [
      { name: 'Диаметр рабочей камеры', value: '1000 мм', nameEn: 'Chamber inside diameter', valueEn: '1000 mm' },
      { name: 'Максимальное давление пара', value: '0.6 МПа', nameEn: 'Maximum steam draft limit', valueEn: '0.6 MPa' }
    ]
  },
  {
    id: 'lgm-kraskomeshalka',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'paint-mixers',
    subsubcategoryRu: 'Краскомешалки',
    subsubcategoryEn: 'LGM paint mixers',
    title: 'Лопастная краскомешалка противопригарного покрытия',
    titleEn: 'Anti-burn-on wash paint coating mixer for LGM patterns',
    model: 'КМ-150',
    description: 'Лопастной смеситель для приготовления, поддержания взвешенного состояния и охлаждения противопригарной водно-спиртовой краски, которой покрывают пенополистирольные модели ЛГМ.',
    descriptionEn: 'Anti-burnout wash paint slurry mixer. Prepares and constantly circulates water- or alcohol-based ceramic slurry coatings used to dip Lost Foam pattern blocks.',
    imageUrl: '/img/foto/Menu/lgm-krask.jpg',
    capacity: 'Объем бака 150 литров',
    capacityEn: 'Tank volume 150 L',
    power: '3.0 кВт',
    powerEn: '3.0 kW',
    features: [
      'Лопастной двухвинтовой механизм непрерывного перемешивания суспензии',
      'Емкость из полированной нержавеющей стали AISI 304',
      'Герметичный пылезащищенный редукторный электропривод'
    ],
    featuresEn: [
      'Dual-impeller continuous slurry homogenization drive',
      'Mixing tank fabricated from mirror polished stainless steel AISI 304',
      'Heavy-duty dustproof gear motor drive assembly'
    ],
    specs: [
      { name: 'Диаметр смесительной лопасти', value: '250 мм', nameEn: 'Stirring blade diameter', valueEn: '250 mm' },
      { name: 'Обороты вращения вала', value: '60 - 150 об/мин', nameEn: 'Shaft rotating speed', valueEn: '60 - 150 rpm' }
    ]
  },
  {
    id: 'lgm-vibrostol',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'black-shop',
    subsubcategoryRu: 'Вибростолы ЛГМ',
    subsubcategoryEn: 'Lost Foam vibration tables',
    title: 'Трехкоординатный вибростол «Чёрного» цеха ЛГМ',
    titleEn: 'Three-dimensional Lost Foam sand compaction table series',
    model: 'ВС-1.5',
    description: 'Уплотнительный вибростол трехмерного действия. Предназначен для засыпки сухого песка и его затекания в поднутрения пенополистирольного куста внутри вакуумной опоки.',
    descriptionEn: 'Multi-directional three-dimensional Lost Foam vibration sand compaction table. Settles and packs dry binderless silica sand around EPS pattern structures inside vacuum flasks.',
    imageUrl: '/img/foto/Menu/lgm-vibr.jpg',
    capacity: 'Нагрузка до 1.5 тонн',
    capacityEn: 'Lifting payload 1.5 tons',
    power: '2 х 3.0 кВт',
    powerEn: '2 x 3.0 kW',
    features: [
      'Гармоническое трехкоординатное уплотнение за счет разности фаз эксцентриков',
      'Пневматический зажим вакуумной опоки к рабочей платформе стола',
      'Частотные инверторы для тонкой настройки амплитуды песка'
    ],
    featuresEn: [
      'Harmonic 3-axis vibration compaction utilizing out-of-phase unbalance weights',
      'Heavy pneumatic side clamp cylinders locking vacuum flask to table deck',
      'Smart micro-frequency drives tuning vibration frequencies directly in runtime'
    ],
    specs: [
      { name: 'Размеры вибростола', value: '1200 х 1200 мм', nameEn: 'Vibration table size', valueEn: '1200 x 1200 mm' },
      { name: 'Виброускорение платформы', value: '1.2 - 2.0 g', nameEn: 'Vibration acceleration rate', valueEn: '1.2 - 2.0 g' }
    ]
  },
  {
    id: 'lgm-opoka',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'black-shop',
    subsubcategoryRu: 'Вакуумные опоки',
    subsubcategoryEn: 'Vacuum flasks',
    title: 'Вакуумная формовочная опока для ЛГМ процесса',
    titleEn: 'LGM vacuum molding flask assembly',
    model: 'ОВ-1.0',
    description: 'Герметичная опока, оснащенная встроенными вакуумными коллекторами (фильтрами). Позволяет удерживать сухой безсвязующий песок в жестком сжатом состоянии в момент заливки расплавленного металла.',
    descriptionEn: 'Sealed vacuum molding flask containing inside filtration manifolds. Compacts and holds dry unbound sand solid under deep atmospheric negative pressures while metal replaces EPS patterns.',
    imageUrl: '/img/foto/Menu/lgm-opoka.jpg',
    capacity: 'Внутренний объем 1.0 м³',
    capacityEn: 'Internal volume 1.0 m³',
    power: 'Клапанное вакуумное соединение',
    powerEn: 'Airtight valve hookup',
    features: [
      'Внутренняя износостойкая щелевая сетка фильтрации от песка',
      'Сверхнадежный вакуумный затвор с резиновым быстроразъемным уплотнением',
      'Усиленная стальная рама толщиной до 12 мм против коробления'
    ],
    featuresEn: [
      'Internal heavy-duty sand filtering wire-wrapped mesh screens',
      'Industrial vacuum connection valve with heavy-duty rapid rubber couplers',
      'Double structural steel perimeter reinforcements preventing vacuum collapses'
    ],
    specs: [
      { name: 'Рабочие размеры опоки', value: '1100 х 900 х 1000 мм', nameEn: 'Flask inside dimensions', valueEn: '1100 x 900 x 1000 mm' },
      { name: 'Толщина вакуумного фланца', value: '16 мм', nameEn: 'Vacuum flange thickness', valueEn: '16 mm' }
    ]
  },
  {
    id: 'lgm-vaksys',
    category: 'lgm-equipment',
    subcategory: 'model-molders',
    subcategoryRu: 'Модельные автоматы',
    subcategoryEn: 'Lost Foam LGM',
    subsubcategory: 'black-shop',
    subsubcategoryRu: 'Вакуумные системы',
    subsubcategoryEn: 'Vacuum pump units',
    title: 'Водокольцевая вакуумная система откачки газов',
    titleEn: 'Water-ring vacuum pump system for Lost Foam foundries',
    model: 'СВ-45',
    description: 'Насосная вакуумная станция на базе водокольцевого вакуум-насоса (ВВН) со встроенным резервуаром-отделителем воды и рекуперацией. Создает глубокий контролируемый вакуум в опоках во время литья.',
    descriptionEn: 'High capacity liquid-ring vacuum pump unit. Creates and maintains the deep negative pressure vacuum within flasks during Lost Foam metal filling processes.',
    imageUrl: '/img/foto/Menu/lgm-vaksys.jpg',
    capacity: 'Расход воздуха 45 м³/мин',
    capacityEn: 'Airflow capacity 45 m³/min',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Водокольцевой износостойкий вакуумный насос высокой надежности',
      'Интегрированный бак сепаратора оборотной воды для экономии ресурса',
      'Электронный прецизионный вакуумный выключатель с ЧПУ управлением'
    ],
    featuresEn: [
      'Extremely durable cast-iron water ring vacuum pump',
      'Onboard water recycling separator tank reducing fresh water usage',
      'Precise digital vacuum pressure switch feeding telemetry back to PLC'
    ],
    specs: [
      { name: 'Предельное вакуумное давление', value: '-0.085 МПа', nameEn: 'Max vacuum draft index', valueEn: '-0.085 MPa' },
      { name: 'Расход циркуляционной воды', value: '80 литров/мин', nameEn: 'Water cycle flow rate', valueEn: '80 L/min' }
    ]
  },
  {
    id: 'lgm-liquidation-complex',
    category: 'lgm-equipment',
    subcategory: 'liquidation',
    subcategoryRu: 'Ликвидация комплекса ЛГМ',
    subcategoryEn: 'Lost Foam LGM',
    title: 'Ликвидация полного литейного комплекса ЛГМ по сниженной цене',
    titleEn: 'Liquidation sale of a full Lost Foam LGM casting complex',
    model: 'ЛГМ-К-300',
    description: 'Распродажа готового технологического комплекса для литья по газифицируемым моделям (ЛГМ). В комплекте: пескострельный предвспениватель, автоматический автоклав спекания, трехкоординатный вибростол, вакуумные опоки с водокольцевой системой ВВН-45. Идеально для старта литейного бизнеса.',
    descriptionEn: 'Urgent liquidation sale of an operational Lost Foam (LGM) foundry system. Bundle includes pre-expanders, automatic shape molders, 3D vibration compaction deck, vacuum flasks, and complete pumping systems.',
    imageUrl: '/img/foto/Menu/lgm-1.jpg',
    capacity: 'Годовой объем до 300 тонн отливок',
    capacityEn: 'Annual output up to 300 tons castings',
    power: '75 кВт общая',
    powerEn: '75 kW total connected load',
    features: [
      'Готовое протестированное оборудование в полной комплектации',
      'Огромная скидка за счет срочности (ликвидация склада)',
      'Комплект рабочих чертежей и технологических регламентов в подарок',
      'Возможность шеф-монтажа и пусконаладки специалистами Сибтехлит'
    ],
    featuresEn: [
      'Ready to ship pre-engineered layout in mint operating conditions',
      'Unmatched discount due to warehouse liquidation priority',
      'Complete set of process documentation and designs included',
      'Optional rapid commissioning and startup by Sibtehlit service teams'
    ],
    specs: [
      { name: 'Номинальная годовая мощность', value: '300 тонн готовых деталей', nameEn: 'Nominal annual capacity', valueEn: '300 tons finished parts' },
      { name: 'Максимальный вес одной детали', value: '150 кг (сталь/чугун)', nameEn: 'Maximum part weight rating', valueEn: '150 kg' }
    ]
  },
  {
    id: 'lvm-boilerclave',
    category: 'lvm-equipment',
    subcategory: 'boilers',
    subcategoryRu: 'Бойлерклавы депарафинизации',
    subcategoryEn: 'Investment LVM',
    subsubcategory: 'boiler-bk',
    subsubcategoryRu: 'Бойлерклавы БК',
    subsubcategoryEn: 'Boilerclaves BK',
    title: 'Бойлерклав автоматического удаления воска водяным паром',
    titleEn: 'Industrial steam dewaxing autoclave / Boilerclave BK series',
    model: 'БК-1000',
    description: 'Бойлерклав (автоклав депарафинизации) для вытопки модельного воскового состава из керамических оболочек в литье по выплавляемым моделям (ЛВМ). Пар подается за доли секунды под большим давлением, исключая растрескивание формы.',
    descriptionEn: 'High capacity steam dewaxing autoclave. Injects dry high pressure steam within milliseconds, instantly melting out the wax models before heat expansion forces can crack ceramic shells.',
    imageUrl: '/img/foto/Menu/lgm-avtoklav.jpg',
    capacity: 'Объем емкости 1.0 м³',
    capacityEn: 'Vessel volume 1.0 m³',
    power: '75 кВт (парогенератор)',
    powerEn: '75 kW (steam generator)',
    features: [
      'Высоконапорный впрыск пара за счет расширительного баллона',
      'Автоматический донный клапан для быстрого слива воска',
      'Многоуровневая система тепловой и механической защиты дверного затвора'
    ],
    featuresEn: [
      'High-velocity steam discharge assisted by a surge vessel',
      'Automatic bottom dump valve flushing melted wax out instantly',
      'Heavy-duty thermal and mechanical interlock safety door clamps'
    ],
    specs: [
      { name: 'Рабочее давление пара в камере', value: '0.8 МПа (8 Бар)', nameEn: 'Operating steam pressure', valueEn: '0.8 MPa (8 Bar)' },
      { name: 'Скорость набора давления впуск', value: '≤ 3.0 сек', nameEn: 'Pressure ramping inlet speed', valueEn: '≤ 3.0 sec' }
    ]
  },
  {
    id: 'lvm-robot-manipulator',
    category: 'lvm-equipment',
    subcategory: 'shell-making',
    subcategoryRu: 'Изготовление керамических оболочек',
    subcategoryEn: 'Investment LVM',
    subsubcategory: 'robots',
    subsubcategoryRu: 'Роботы-манипуляторы',
    subsubcategoryEn: 'Robot manipulators',
    title: 'Робот-манипулятор для изготовления керамической оболочки',
    titleEn: 'Articulated robotic arm manipulator for ceramic shell dipping',
    model: 'РК-350',
    description: 'Промышленный шестиосевой робот-манипулятор высокой грузоподъемности. Выполняет автоматические циклы погружения воскового блока в шликер суспензии и последующую обсыпку песком в кипящем слое. Гарантирует абсолютную стабильность толщины оболочки.',
    descriptionEn: 'Articulated 6-axis industrial robot manipulator. Automates repeating dipping and sanding loops, delivering highly consistent shell layer thickness for precise investment casting.',
    imageUrl: '/img/foto/Menu/manip.jpg',
    capacity: 'Грузоподъемность руки 350 кг',
    capacityEn: 'Robotic payload capacity 350 kg',
    power: '12 кВт',
    powerEn: '12 kW',
    features: [
      'Высокий класс пылевлагозащиты манипулятора (IP67) под шликер',
      'Специализированная программа плавного вращения для удаления излишков',
      'Интегрированный датчик веса для контроля толщины слоев'
    ],
    featuresEn: [
      'High IP67 dust and water rating resisting ceramic slurry sprays',
      'Custom spin and sway motions program stripping excess liquids off models',
      'Built-in load cell monitoring dry-run and wet shell weights'
    ],
    specs: [
      { name: 'Количество программируемых осей', value: '6 осей движения', nameEn: 'Controlled axes number', valueEn: '6 kinematic axes' },
      { name: 'Радиус действия руки робота', value: '2800 мм', nameEn: 'Reach operating radius', valueEn: '2800 mm' }
    ]
  },
  {
    id: 'lvm-fluidized-bed',
    category: 'lvm-equipment',
    subcategory: 'shell-making',
    subcategoryRu: 'Изготовление керамических оболочек',
    subcategoryEn: 'Investment LVM',
    subsubcategory: 'fluidized-beds',
    subsubcategoryRu: 'Установки обсыпки',
    subsubcategoryEn: 'Sanding towers',
    title: 'Установка обсыпки модельных блоков (кипящий слой)',
    titleEn: 'Fluidized bed sand rain sanding tower for investment casting',
    model: 'УОК-500',
    description: 'Установка воздушно-кипящего слоя песка (кварцевый песок, шамот). Продувка воздухом снизу создает эффект псевдоожижения песка для мягкого погружения сложного воскового куста в обсыпочный материал.',
    descriptionEn: 'Aerated sand rain fluidized bed sanding unit. Bottom airflow aerates and suspends fine ceramic aggregate, allowing gentle immersion of delicate wax pattern clusters.',
    imageUrl: '/img/foto/Menu/lgm-vibr.jpg',
    capacity: 'Диаметр бака 500 мм',
    capacityEn: 'Vessel diameter 500 mm',
    power: '3.0 кВт воздуходувка',
    powerEn: '3.0 kW air blower',
    features: [
      'Однородное распределение псевдоожиженного песчаного слоя',
      'Низкое выделение пыли благодаря встроенным вытяжным патрубкам',
      'Износостойкая стальная решетка воздухораспределителя'
    ],
    featuresEn: [
      'Perfect density distribution of fluidized dry sand',
      'Low dust generation assisted by suction ports',
      'Thick alloy steel bottom air distributor screen'
    ],
    specs: [
      { name: 'Высота кипящего слоя песка', value: '450 мм', nameEn: 'Fluid bed active height', valueEn: '450 mm' },
      { name: 'Расход нагнетаемого воздуха', value: '2.5 м³/мин', nameEn: 'Air supply volume requirement', valueEn: '2.5 m³/min' }
    ]
  },
  {
    id: 'lvm-suspension-mixer',
    category: 'lvm-equipment',
    subcategory: 'suspension-prep',
    subcategoryRu: 'Приготовление огнеупорной суспензии',
    subcategoryEn: 'Investment LVM',
    title: 'Смеситель L-типа для приготовления огнеупорной суспензии',
    titleEn: 'Foundry L-type slurry mixer for refractory suspension prep',
    model: 'СЛ-250',
    description: 'Смеситель с якорной или пропеллерной лопастью для смешивания силикатных и циркониевых связующих с пылевидными огнеупорными наполнителями. Имеет рубашку водяного охлаждения для гашения тепла вращения.',
    descriptionEn: 'Anchor/propeller hybrid slurry mixer. Mixes ethyl silicates or silica sols with fine zircon powders under strict cooling control to prepare high-quality ceramic molds.',
    imageUrl: '/img/foto/Menu/smes-s.jpg',
    capacity: 'Объем емкости 250 литров',
    capacityEn: 'Vessel volume 250 L',
    power: '4.0 кВт',
    powerEn: '4.0 kW',
    features: [
      'Двухскоростной мощный двигатель с высоким крутящим моментом',
      'Рубашка водяного охлаждения для поддержания вязкости шликера',
      'Донный шаровой кран полного прохода для выгрузки готовой смеси'
    ],
    featuresEn: [
      'High torque two-speed heavy duty electric motor',
      'Water jacket cooling preserving slurry chemical stability',
      'Full port bottom sanitary ball valve flushing slurry out'
    ],
    specs: [
      { name: 'Частота вращения вала мешалки', value: '40 - 200 об/мин', nameEn: 'Rotating speed range', valueEn: '40 - 200 rpm' },
      { name: 'Температурная водяная рубашка', value: 'Встроенный штуцер подключения', nameEn: 'Water cooling jacket hookups', valueEn: 'Standard threaded fittings' }
    ]
  },
  {
    id: 'thermal-furnace-slide',
    category: 'thermal-furnaces',
    subcategory: 'treatment-chambers',
    subcategoryRu: 'Камерные термопечи',
    subcategoryEn: 'Thermal Furnaces',
    subsubcategory: 'slide-pod',
    subsubcategoryRu: 'Термопечи с выдвижным подом СДО',
    subsubcategoryEn: 'Car-bottom Kilns SDO',
    title: 'Камерная термическая печь с выдвижным подом',
    titleEn: 'Industrial car-bottom resistance heat treatment furnace SDO series',
    model: 'СДО-12.24.12',
    description: 'Мощная электрическая печь сопротивления с механическим выдвижным подом (тележкой). Предназначена для высокотемпературного отжига, закалки, нормализации стального и чугунного литья. Конструкция обеспечивает простую крановую загрузку деталей.',
    descriptionEn: 'Electric car-bottom resistance heat treatment furnace equipped with a motorized rolling hearth. Developed to perform heavy steel annealing, quenching, and tempering. Top crane loading is extremely convenient.',
    imageUrl: '/img/foto/Menu/Term_pod.jpg',
    capacity: 'Грузоподъемность пода 10 тонн',
    capacityEn: 'Hearth load capacity 10 tons',
    power: '180 кВт',
    powerEn: '180 kW',
    features: [
      'Моторизованный цепной привод выкатной тележки (пода печи)',
      'Нагревательные элементы спирального типа из суперфехрали Х23Ю5Т',
      'Многозонный цифровой регулятор температуры на базе ПЛК Owen/Siemens',
      'Механический подъем двери печи с надежным лабиринтным уплотнением'
    ],
    featuresEn: [
      'Motorized heavy duty chain drive pull-out car hearth structure',
      'Heating elements wound from super alloy Kanthal/FeCrAl wires',
      'Precise multi-zone micro-processor temperature controls using Owen/Siemens electronics',
      'Pneumatic automatic door lift featuring thick fiber-to-fiber thermal seals'
    ],
    specs: [
      { name: 'Размеры рабочей камеры (ДхШхВ)', value: '2400 х 1200 х 1200 мм', nameEn: 'Chamber workspace sizes (LxWxH)', valueEn: '2400 x 1200 x 1200 mm' },
      { name: 'Максимальная рабочая температура', value: '1100 °C', nameEn: 'Maximum heat cycle range', valueEn: '1100 °C' },
      { name: 'Грузоподъемность выкатного пода', value: '10 000 кг', nameEn: 'Motorized hearth load rating', valueEn: '10,000 kg' },
      { name: 'Установленная электрическая мощность', value: '180 кВт', nameEn: 'Total installed electric power', valueEn: '180 kW' },
      { name: 'Количество зон термоконтроля', value: '3 независимые зоны', nameEn: 'Independently controlled zones', valueEn: '3 zones' }
    ],
    variantModels: [
      { model: 'СДО-6.12.6', capacity: '3 тонны', capacityEn: '3 tons', power: '90 кВт', powerEn: '90 kW', extraField: 'Камера', extraFieldVal: '1200 х 600 х 600 мм', extraFieldValEn: '1200 x 600 x 600 mm' },
      { model: 'СДО-12.24.12', capacity: '10 тонн', capacityEn: '10 tons', power: '180 кВт', powerEn: '180 kW', extraField: 'Камера', extraFieldVal: '2400 х 1200 х 1200 мм', extraFieldValEn: '2400 x 1200 x 1200 mm' },
      { model: 'СДО-18.36.18', capacity: '20 тонн', capacityEn: '20 tons', power: '360 кВт', powerEn: '360 kW', extraField: 'Камера', extraFieldVal: '3600 х 1800 х 1800 мм', extraFieldValEn: '3600 x 1800 x 1800 mm' }
    ]
  },
  {
    id: 'thermal-furnace-chamber',
    category: 'thermal-furnaces',
    subcategory: 'treatment-chambers',
    subcategoryRu: 'Камерные термопечи',
    subcategoryEn: 'Thermal Furnaces',
    subsubcategory: 'fixed-chamber',
    subsubcategoryRu: 'Стационарные камерные печи RT3',
    subsubcategoryEn: 'Fixed chamber kilns RT3',
    title: 'Камерная термическая печь серии RT3',
    titleEn: 'Foundry fixed-chamber heat treatment furnace RT3 series',
    model: 'РТ3-120',
    description: 'Стационарная электрическая камерная печь для нагрева мелких и средних литейных полуфабрикатов. Оснащена распашной дверцей и толстостенным огнеупорным подом из жаростойкого плиточного карбида кремния.',
    descriptionEn: 'High performance fixed-chamber electric thermal furnace. Features swinging heavy-duty insulated doors and SiC (Silicon Carbide) hearth plates designed to load tooling molds.',
    imageUrl: '/img/foto/Menu/Term_kam.jpg',
    capacity: 'Объем камеры 240 литров',
    capacityEn: 'Chamber volume 240 L',
    power: '45 кВт',
    powerEn: '45 kW',
    features: [
      'Стационарная конструкция с возможностью напольной установки',
      'Прочные нагревательные элементы по всем стенкам камеры',
      'Износостойкий под из плит карбида кремния'
    ],
    featuresEn: [
      'Rigid fixed floor-standing industrial kiln box',
      'Heating elements surrounding all inside walls',
      'Highly rugged Silicon Carbide floor plates'
    ],
    specs: [
      { name: 'Внутренние габариты рабочей зоны', value: '800 х 600 х 500 мм', nameEn: 'Chamber workspace envelope', valueEn: '800 x 600 x 500 mm' },
      { name: 'Предельная рабочая температура', value: '1150 °C', nameEn: 'Maximum heating temperature', valueEn: '1150 °C' }
    ]
  },
  {
    id: 'obrubka-wedge',
    category: 'obrubka-stanki',
    subcategory: 'fettling-tools',
    subcategoryRu: 'Обрубной инструмент',
    subcategoryEn: 'Fettling Jaws',
    title: 'Гидравлический литейный клин для удаления литников',
    titleEn: 'Foundry hydraulic wedge splitter for gating riser removal',
    model: 'ГК-80',
    description: 'Универсальный портативный гидравлический обрубной клин серии ГК (гидроклин). Предназначен для мгновенного отделения (отсекания) литниковых систем, выпоров и прибылей от отливок из чугуна и высокопрочных сплавов без повреждения тела детали.',
    descriptionEn: 'Portable hydraulic gating and riser splitter wedge GK series. Specially engineered to snap off cast iron and alloy steel risers and gates without inducing microfissures or casting core body cracks.',
    imageUrl: '/img/foto/Menu/vibr-z.jpg',
    capacity: 'Усилие реза 80 кН (8 тонн)',
    capacityEn: 'Splitting force 80 kN (8 tons)',
    power: '3.0 кВт гидростанция',
    powerEn: '3.0 kW hydraulic power pack',
    features: [
      'Высокопрочные закаленные стальные щеки клина (высоколегированная инструментальная сталь)',
      'Полноповоротный подвесной кронштейн 360 градусов на пружинном балансире',
      'Мгновенная реакция ножей — отсекание литника за 1.5 секунды',
      'Защитная эргономичная двухручная кнопка пуска для абсолютной безопасности оператора'
    ],
    featuresEn: [
      'High tensile strength tool steel alloy wedge splitter tips',
      '360-degree rotating hanging gimbal bracket suspended via elastic tool balancer',
      'Extremely quick cycle times splitting thick risers within 1.5 seconds flat',
      'Dual active control handle trigger buttons ensuring hands-free operator safety zone'
    ],
    specs: [
      { name: 'Максимальное раскрытие щек', value: '35 мм', nameEn: 'Maximum wedge opening gap', valueEn: '35 mm' },
      { name: 'Максимальное усилие раскалывания', value: '80 кН (8 тонн)', nameEn: 'Peak mechanical splitting force', valueEn: '80 kN (8 tons)' },
      { name: 'Время полного смыкания/раскрытия', value: '1.5 сек', nameEn: 'Cycle open/close time', valueEn: '1.5 sec' },
      { name: 'Вес портативного пистолета', value: '25 кг', nameEn: 'Handheld splitting gun weight', valueEn: '25 kg' },
      { name: 'Рабочее давление масла в шлангах', value: '70 МПа (700 Бар)', nameEn: 'Hydraulic hose operating pressure', valueEn: '70 MPa (700 Bar)' }
    ],
    variantModels: [
      { model: 'ГК-50', capacity: '50 кН', capacityEn: '50 kN', power: '2.2 кВт', powerEn: '2.2 kW', extraField: 'Вес пистолета', extraFieldVal: '18 кг', extraFieldValEn: '18 kg' },
      { model: 'ГК-80', capacity: '80 кН', capacityEn: '80 kN', power: '3.0 кВт', powerEn: '3.0 kW', extraField: 'Вес пистолета', extraFieldVal: '25 кг', extraFieldValEn: '25 kg' },
      { model: 'ГК-120', capacity: '120 кН', capacityEn: '120 kN', power: '4.0 кВт', powerEn: '4.0 kW', extraField: 'Вес пистолета', extraFieldVal: '38 кг', extraFieldValEn: '38 kg' }
    ]
  },
  {
    id: 'obrubka-core-shakeout',
    category: 'obrubka-stanki',
    subcategory: 'fettling-tools',
    subcategoryRu: 'Обрубной инструмент',
    subcategoryEn: 'Fettling Jaws',
    title: 'Вибрационная машина для выбивки песчаных стержней',
    titleEn: 'Foundry pneumatic core knockout and vibration shakeout station',
    model: 'ВКМ-1.2',
    description: 'Пневматическая вибрационная машина выбивки литейных стержней. Зажимает отливку пневмоцилиндром и воздействует высокочастотной мощной силой вибрации, заставляя песчаный внутренний стержень полностью высыпаться наружу.',
    descriptionEn: 'Pneumatic clamp core knockout and sand shakeout station. Securely locks the casting with strong pneumatic rams and shakes out sand cores using heavy-duty vibration hammers.',
    imageUrl: '/img/foto/Menu/vibr-z.jpg',
    capacity: 'Для деталей весом до 150 кг',
    capacityEn: 'For castings up to 150 kg',
    power: '0.6 МПа сжатый воздух',
    powerEn: '0.6 MPa compressed air',
    features: [
      'Мощный пневматический зажим деталей цилиндром',
      'Высокочастотный направленный пневмовибратор',
      'Жесткая износостойкая опорная плита'
    ],
    featuresEn: [
      'Strong pneumatic clamping cylinder holding castings secure',
      'High frequency directional pneumatic vibration system',
      'Ultra rigid wear resistant base table surface'
    ],
    specs: [
      { name: 'Усилие пневматического прижима', value: '12 кН (1.2 тонны)', nameEn: 'Pneumatic clamping thrust force', valueEn: '12 kN (1.2 tons)' },
      { name: 'Частота пневмовибратора', value: '45 Гц', nameEn: 'Pneumatic vibrator frequency', valueEn: '45 Hz' }
    ]
  }
];
