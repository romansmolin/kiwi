
export const menuItems = [
    {label: 'Главная', href: '#'},
    {label: 'Цены', href: '#'},
    {label: 'Контакты', href: '#'},
    {label: 'О нас', href: '#'}, 
    {label: 'Герои', href: '#'},    
    {label: 'Программы', href: '#'},
    {label: 'Информация', href: '#'},        
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
