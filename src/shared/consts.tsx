export const menuItems = [
  { label: 'Главная', href: '/' },
  { label: 'Цены', href: '/#price' },
  { label: 'Контакты', href: '/#contact-us' },
  { label: 'О нас', href: '/about' },
  { label: 'Герои', href: '/characters' },
]

export const priceItems = [
  {
    title: "Стандарт+",
    subtitle: "Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: {
      amount: 90,
    },
    includes: {
      items: [
        { text: "Продолжительность - 1,5 часа", icon: "check" },
        { text: "Любимый герой", icon: "check" },
        { text: "Музыкальное сопровожение", icon: "check" },
        { text: "Тематический реквизит", icon: "check" },
        { text: "Активные игры и танцы", icon: "check" },
        { text: "Вынос вашего тортика", icon: "check" }
      ]
    },
  },
  {
    title: "Стандарт",
    priority: true,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: {
      amount: 70,
    },
    includes: {
      header: "Включает:",
      items: [
        { text: "Продолжительность - 1 час", icon: "check" },
        { text: "Любимый герой", icon: "check" },
        { text: "Музыкальное сопровожение", icon: "check" },
        { text: "Тематический реквизит", icon: "check" },
        { text: "Активные игры и танцы", icon: "check" },
        { text: "Вынос вашего тортика", icon: "check" }
      ]
    },
  },
  {
    title: "Продленная",
    subtitle: "Plan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: {
      amount: 120,
    },
    includes: {
      header: "Включает:",
      items: [
        { text: "Продолжительность - 2 часа", icon: "check" },
        { text: "Любимый герой", icon: "check" },
        { text: "Музыкальное сопровожение", icon: "check" },
        { text: "Тематический реквизит", icon: "check" },
        { text: "Активные игры и танцы", icon: "check" },
        { text: "Аквагрим", icon: "check" },
        { text: "Вынос вашего тортика", icon: "check" }
      ]
    },
  }
]

export const aboutUsContent = {
  aboutSection: {
    title: "О нас",
    paragraphs: [
      "Здравствуйте, меня зовут Исида (я справа) и по образованию я психолог, педагог и гештальт терапевт. Начала работать аниматором в 15 лет и вот уже более 16 лет не разлучаюсь с этой веселой и праздничной профессией",
      "Здравствуйте, меня зовут Алиса. Работаю аниматором более 7 лет. Я тот человек, который умеет организовать команду, всегда ответственно подходит к работе и проводит праздники на 100%."
    ]
  },
  trustSection: {
    title: "Почему Вам стоит довериться нам",
    points: [
      "Мы работали аниматорами в различных Рижских фирмах, а также набирались опыта в городе Калининград",
      "У нас богатый опыт в волонтерской деятельности",
      "Мы ежегодно организовываем социальные мероприятия, такие как «Бесплатный праздник для семьи» и «Больница для Плюшевых друзей»",
      "В 2015 году мы создали летний «Лагерь Корпорация добра»"
    ]
  }
};

export const benefits = [
  {value: '+1000', title: 'Поставленных Праздников'},
  {value: '+30', title: 'Уникальных Персонажей'},
  {value: '+9', title: 'Лет Опыта'}
]
