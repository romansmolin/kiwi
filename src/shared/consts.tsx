import Latvia from "@/components/icons/Latvia";
import Russia from "@/components/icons/Russia";
import UnitedKingdom from "@/components/icons/UnitedKingdom";

export const menuItems = [
  { label: 'header.home', href: 'home' },
  { label: 'header.prices', href: '/#price' },
  { label: 'header.contacts', href: '/#contact-us' },
  { label: 'header.about-us', href: '/about' },
  { label: 'header.characters', href: '/characters' },
  { label: 'header.payment-options', href: '/payment-options' },
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
    title: "about-us.first-block.title",
    paragraphs: [
      "about-us.first-block.paragraphs.first",
      "about-us.first-block.paragraphs.second"
    ]
  },
  trustSection: {
    title: "about-us.second-block.title",
    points: [
      "about-us.second-block.items.0",
      "about-us.second-block.items.1",
      "about-us.second-block.items.2",
      "about-us.second-block.items.3"
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
