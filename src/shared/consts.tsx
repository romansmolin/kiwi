import Latvia from "@/components/icons/Latvia";
import Russia from "@/components/icons/Russia";
import UnitedKingdom from "@/components/icons/UnitedKingdom";

export const menuItems = [
  { label: 'header.home', href: 'home' },
  { label: 'header.prices', href: '/#price' },
  { label: 'header.contacts', href: '/#contact-us' },
  { label: 'header.about-us', href: '/about' },
  { label: 'header.characters', href: '/characters' },
]

export const priceItems = [
  {
    title: "prices.plans.standard-plus.title",
    price: {
      amount: 90,
    },
    includes: {
      items: [
        { text: "prices.plans.standard-plus.items.0.text" },
        { text: "prices.plans.standard-plus.items.1.text" },
        { text: "prices.plans.standard-plus.items.2.text" },
        { text: "prices.plans.standard-plus.items.3.text" },
        { text: "prices.plans.standard-plus.items.4.text" },
        { text: "prices.plans.standard-plus.items.5.text" }
      ]
    },
  },
  {
    title: "prices.plans.standard.title",
    price: {
      amount: 70,
    },
    priority: true,
    includes: {
      items: [
        { text: "prices.plans.standard.items.0.text" },
        { text: "prices.plans.standard.items.1.text" },
        { text: "prices.plans.standard.items.2.text" },
        { text: "prices.plans.standard.items.3.text" },
        { text: "prices.plans.standard.items.4.text" },
        { text: "prices.plans.standard.items.5.text" }
      ]
    },
  },
  {
    title: "prices.plans.extended.title",
    price: {
      amount: 120,
    },
    includes: {
      items: [
        { text: "prices.plans.extended.items.0.text" },
        { text: "prices.plans.extended.items.1.text" },
        { text: "prices.plans.extended.items.2.text" },
        { text: "prices.plans.extended.items.3.text" },
        { text: "prices.plans.extended.items.4.text" },
        { text: "prices.plans.extended.items.5.text" },
        { text: "prices.plans.extended.items.6.text" }
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
  {value: '+1000', title: 'benefits.list.first'},
  {value: '+30', title: 'benefits.list.second'},
  {value: '+9', title: 'benefits.list.third'}
]

export const languages = [
  {value: 'ru', svg: <Russia />, title: "Russian"},
  {value: 'lv', svg: <Latvia />, title: "Latvian"},
  {value: 'en', svg: <UnitedKingdom />, title: "English"}
]
