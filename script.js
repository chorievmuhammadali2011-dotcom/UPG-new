

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " сум";
};

const escapeHTML = (text) => {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
};



const translations = {

    ru: {
        loading: "Загрузка UPG...",
        home: "Главная",
        catalog: "Каталог",
        builder: "Собери ПК",
        components: "Комплектующие",

        heroTitle: "Собери ПК,<br><em>который создан</em><br>для победы.",
        heroText: "100+ комплектующих с фотографиями, мощный PC Builder и удобные фильтры.",
        build: "Собрать ПК →",
        look: "Каталог",

        catalogLabel: "КАТАЛОГ",
        catalogTitle: "112 товаров",
        clear: "Сбросить фильтры",

        filters: "Фильтры",
        category: "Категория",
        brand: "Бренд",
        price: "Цена",
        rating: "Рейтинг",
        sort: "Сортировка",

        search: "Поиск RTX, Ryzen, ASUS...",

        nothing: "Ничего не найдено",
        change: "Измени фильтры или поисковый запрос.",

        builderTitle: "Собери свой ПК",
        builderText: "Выбирай детали — цена обновляется автоматически.",
        yourBuild: "ТВОЯ СБОРКА",
        reset: "Сбросить",
        total: "Итого",
        addBuild: "Добавить сборку",
        compatible: "✓ Базовая совместимость AM5 / DDR5",

        componentsLabel: "КОМПЛЕКТУЮЩИЕ",
        componentsTitle: "Всё для сборки",

        helpTitle: "Не знаешь, что выбрать?",
        helpText: "Укажи бюджет и цель — подберём сбалансированную сборку.",
        choose: "Подобрать ПК →",

        navigation: "Навигация",
        contact: "Контакты",

        cart: "Корзина",
        checkout: "Оформить заказ",

        modalTitle: "Подберём сборку",
        modalText: "Напиши бюджет и для чего нужен компьютер.",
        send: "Отправить запрос"
    },

    uz: {
        loading: "UPG yuklanmoqda...",
        home: "Bosh sahifa",
        catalog: "Katalog",
        builder: "Kompyuter yig‘ish",
        components: "Komponentlar",

        heroTitle: "G‘alaba uchun<br><em>yaratilgan</em><br>PC yig‘.",
        heroText: "100+ komponent, fotosuratlar, PC Builder va qulay filtrlar.",
        build: "PC yig‘ish →",
        look: "Katalog",

        catalogLabel: "KATALOG",
        catalogTitle: "112 ta mahsulot",
        clear: "Filtrlarni tozalash",

        filters: "Filtrlar",
        category: "Kategoriya",
        brand: "Brend",
        price: "Narx",
        rating: "Reyting",
        sort: "Saralash",

        search: "RTX, Ryzen, ASUS qidirish...",

        nothing: "Hech narsa topilmadi",
        change: "Filtr yoki qidiruv so‘rovini o‘zgartiring.",

        builderTitle: "O‘z PC'ingizni yig‘ing",
        builderText: "Detallarni tanlang — narx avtomatik hisoblanadi.",
        yourBuild: "SIZNING YIG‘MANGIZ",
        reset: "Tozalash",
        total: "Jami",
        addBuild: "Yig‘mani qo‘shish",
        compatible: "✓ AM5 / DDR5 asosiy moslik",

        componentsLabel: "KOMPONENTLAR",
        componentsTitle: "Yig‘ish uchun hammasi",

        helpTitle: "Nimani tanlashni bilmaysizmi?",
        helpText: "Budjet va maqsadingizni yozing — biz mos PC tanlaymiz.",
        choose: "PC tanlash →",

        navigation: "Navigatsiya",
        contact: "Aloqa",

        cart: "Savatcha",
        checkout: "Buyurtma berish",

        modalTitle: "PC tanlab beramiz",
        modalText: "Budjetingizni va kompyuter nima uchun kerakligini yozing.",
        send: "So‘rov yuborish"
    },

    en: {
        loading: "Loading UPG...",
        home: "Home",
        catalog: "Catalog",
        builder: "PC Builder",
        components: "Components",

        heroTitle: "Build a PC<br><em>made</em><br>to win.",
        heroText: "100+ components with photos, powerful PC Builder and smart filters.",
        build: "Build a PC →",
        look: "Catalog",

        catalogLabel: "CATALOG",
        catalogTitle: "112 products",
        clear: "Clear filters",

        filters: "Filters",
        category: "Category",
        brand: "Brand",
        price: "Price",
        rating: "Rating",
        sort: "Sort",

        search: "Search RTX, Ryzen, ASUS...",

        nothing: "Nothing found",
        change: "Change the filters or search query.",

        builderTitle: "Build your PC",
        builderText: "Choose components — the price updates automatically.",
        yourBuild: "YOUR BUILD",
        reset: "Reset",
        total: "Total",
        addBuild: "Add build",
        compatible: "✓ Basic AM5 / DDR5 compatibility",

        componentsLabel: "COMPONENTS",
        componentsTitle: "Everything for your build",

        helpTitle: "Don't know what to choose?",
        helpText: "Tell us your budget and goal — we'll suggest a balanced build.",
        choose: "Choose a PC →",

        navigation: "Navigation",
        contact: "Contact",

        cart: "Cart",
        checkout: "Checkout",

        modalTitle: "We'll choose a build",
        modalText: "Enter your budget and what the computer is for.",
        send: "Send request"
    }
};


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const imagePool = {

    gpu: [
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85"
    ],

    cpu: [
        "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=85"
    ],

    ram: [
        "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=900&q=85"
    ],

    ssd: [
        "https://images.unsplash.com/photo-1597872252632-9d9d0b2d6e14?auto=format&fit=crop&w=900&q=85"
    ],

    motherboard: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85"
    ],

    psu: [
        "https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=900&q=85"
    ],

    case: [
        "https://images.unsplash.com/photo-1587202372634-32705e3bf1f6?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=900&q=85"
    ],

    cooling: [
        "https://images.unsplash.com/photo-1587202372162-3e2e4f9b4a1c?auto=format&fit=crop&w=900&q=85"
    ],

    monitor: [
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85"
    ],

    keyboard: [
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85"
    ],

    mouse: [
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85"
    ],

    headset: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"
    ]
};


/* =========================================================
   PRODUCT GENERATOR
========================================================= */

const products = [];

let productId = 1;

function addProducts(category, brand, names, prices, specs) {

    names.forEach((name, index) => {

        products.push({

            id: productId++,

            category,

            brand,

            name,

            price: prices[index % prices.length],

            spec: specs[index % specs.length],

            rating: Number(
                (4.5 + Math.random() * 0.5).toFixed(1)
            ),

            image:
                imagePool[category][
                    index % imagePool[category].length
                ],

            stock: true,

            popular: index < 3
        });

    });
}


/* ================= GPU ================= */

addProducts(
    "gpu",
    "NVIDIA",
    [
        "GeForce RTX 5090 32GB",
        "GeForce RTX 5080 16GB",
        "GeForce RTX 5070 Ti 16GB",
        "GeForce RTX 5070 12GB",
        "GeForce RTX 5060 Ti 16GB",
        "GeForce RTX 5060 8GB",
        "GeForce RTX 5050 8GB"
    ],
    [
        42000000,
        25000000,
        18000000,
        13000000,
        9500000,
        7000000,
        5600000
    ],
    [
        "GDDR7 • Ray Tracing • DLSS",
        "GDDR7 • 4K Gaming",
        "GDDR7 • 16GB VRAM",
        "GDDR7 • 12GB VRAM"
    ]
);

addProducts(
    "gpu",
    "ASUS",
    [
        "ROG Astral RTX 5090",
        "ROG Astral RTX 5080",
        "TUF Gaming RTX 5070 Ti",
        "TUF Gaming RTX 5070",
        "Dual RTX 5060 Ti",
        "Dual RTX 5060"
    ],
    [
        47000000,
        29000000,
        20000000,
        14500000,
        10500000,
        7600000
    ],
    [
        "OC Edition • GDDR7",
        "Triple Fan • Gaming",
        "Factory OC • RGB"
    ]
);

addProducts(
    "gpu",
    "MSI",
    [
        "RTX 5090 Gaming Trio",
        "RTX 5080 Gaming Trio",
        "RTX 5070 Ti Gaming Trio",
        "RTX 5070 Gaming Trio",
        "RTX 5060 Ti Gaming OC",
        "RTX 5060 Ventus"
    ],
    [
        45500000,
        28000000,
        19500000,
        14000000,
        10200000,
        7400000
    ],
    [
        "Gaming Trio • Triple Fan",
        "Ventus • Dual Fan",
        "OC • GDDR7"
    ]
);

addProducts(
    "gpu",
    "Gigabyte",
    [
        "AORUS RTX 5090 Master",
        "AORUS RTX 5080 Master",
        "Gaming OC RTX 5070 Ti",
        "Gaming OC RTX 5070",
        "Windforce RTX 5060 Ti",
        "Windforce RTX 5060"
    ],
    [
        44800000,
        27500000,
        18800000,
        13700000,
        9900000,
        7200000
    ],
    [
        "AORUS Master • OC",
        "Gaming OC • GDDR7",
        "Windforce • Triple Fan"
    ]
);


/* ================= CPU ================= */

addProducts(
    "cpu",
    "AMD",
    [
        "Ryzen 9 9950X3D",
        "Ryzen 9 9950X",
        "Ryzen 9 9900X3D",
        "Ryzen 9 9900X",
        "Ryzen 7 9800X3D",
        "Ryzen 7 9700X",
        "Ryzen 5 9600X",
        "Ryzen 7 7800X3D"
    ],
    [
        12500000,
        10500000,
        9800000,
        8500000,
        7800000,
        5600000,
        3900000,
        6200000
    ],
    [
        "AM5 • 16 Cores",
        "AM5 • Zen 5",
        "AM5 • 3D V-Cache",
        "AM5 • Gaming"
    ]
);

addProducts(
    "cpu",
    "Intel",
    [
        "Core Ultra 9 285K",
        "Core Ultra 7 265K",
        "Core Ultra 7 265KF",
        "Core Ultra 5 245K",
        "Core Ultra 5 225F",
        "Core i7-14700K",
        "Core i5-14600K"
    ],
    [
        11000000,
        7600000,
        7200000,
        5700000,
        4300000,
        6800000,
        5200000
    ],
    [
        "LGA1851 • AI PC",
        "LGA1851 • Hybrid",
        "Gaming • Unlocked"
    ]
);


/* ================= RAM ================= */

addProducts(
    "ram",
    "Kingston",
    [
        "FURY Beast 16GB DDR5",
        "FURY Beast 32GB DDR5",
        "FURY Beast 64GB DDR5",
        "FURY Renegade 32GB",
        "FURY Renegade 64GB"
    ],
    [
        900000,
        1600000,
        3100000,
        2100000,
        3800000
    ],
    [
        "DDR5 • 6000MHz",
        "DDR5 • 6400MHz",
        "Dual Channel"
    ]
);

addProducts(
    "ram",
    "Corsair",
    [
        "Vengeance 16GB DDR5",
        "Vengeance 32GB DDR5",
        "Vengeance 64GB DDR5",
        "Dominator Titanium 32GB",
        "Dominator Titanium 64GB"
    ],
    [
        950000,
        1750000,
        3300000,
        2600000,
        4700000
    ],
    [
        "DDR5 • 6000MHz",
        "XMP • EXPO",
        "RGB"
    ]
);

addProducts(
    "ram",
    "G.Skill",
    [
        "Trident Z5 32GB",
        "Trident Z5 64GB",
        "Trident Z5 Neo 32GB",
        "Ripjaws S5 32GB"
    ],
    [
        1900000,
        3600000,
        2050000,
        1550000
    ],
    [
        "DDR5 • 6000MHz",
        "DDR5 • 6400MHz",
        "EXPO"
    ]
);


/* ================= SSD ================= */

addProducts(
    "ssd",
    "Samsung",
    [
        "990 PRO 1TB",
        "990 PRO 2TB",
        "990 PRO 4TB",
        "990 EVO Plus 1TB",
        "990 EVO Plus 2TB"
    ],
    [
        1500000,
        2700000,
        5100000,
        1350000,
        2500000
    ],
    [
        "NVMe • PCIe 4.0",
        "Read up to 7450MB/s",
        "M.2 2280"
    ]
);

addProducts(
    "ssd",
    "WD",
    [
        "Black SN850X 1TB",
        "Black SN850X 2TB",
        "Black SN850X 4TB",
        "Black SN7100 1TB",
        "Black SN7100 2TB"
    ],
    [
        1450000,
        2650000,
        4900000,
        1250000,
        2300000
    ],
    [
        "PCIe 4.0 • Gaming",
        "NVMe • High Speed",
        "M.2"
    ]
);

addProducts(
    "ssd",
    "Kingston",
    [
        "KC3000 1TB",
        "KC3000 2TB",
        "FURY Renegade 1TB",
        "FURY Renegade 2TB"
    ],
    [
        1300000,
        2400000,
        1400000,
        2550000
    ],
    [
        "PCIe 4.0",
        "NVMe",
        "High Performance"
    ]
);


/* ================= MOTHERBOARD ================= */

addProducts(
    "motherboard",
    "ASUS",
    [
        "ROG Crosshair X870E Hero",
        "ROG Strix X870-F Gaming",
        "TUF Gaming X870-Plus",
        "ROG Strix B650E-F",
        "TUF Gaming B650-Plus"
    ],
    [
        11500000,
        8500000,
        6200000,
        5200000,
        3900000
    ],
    [
        "AM5 • X870E",
        "AM5 • DDR5",
        "Wi-Fi • PCIe 5.0"
    ]
);

addProducts(
    "motherboard",
    "MSI",
    [
        "MEG X870E ACE",
        "MPG X870E Carbon",
        "MAG X870 Tomahawk",
        "MAG B650 Tomahawk",
        "PRO B650-S"
    ],
    [
        12500000,
        8900000,
        6100000,
        4400000,
        3300000
    ],
    [
        "AM5 • DDR5",
        "Wi-Fi 7",
        "PCIe 5.0"
    ]
);

addProducts(
    "motherboard",
    "Gigabyte",
    [
        "X870E AORUS Master",
        "X870 AORUS Elite",
        "B650 AORUS Elite AX",
        "B650 Gaming X AX"
    ],
    [
        9900000,
        6700000,
        4300000,
        3500000
    ],
    [
        "AM5 • DDR5",
        "AORUS • Wi-Fi",
        "PCIe 5.0"
    ]
);


/* ================= PSU ================= */

addProducts(
    "psu",
    "Corsair",
    [
        "RM650e 650W",
        "RM750e 750W",
        "RM850x 850W",
        "RM1000x 1000W",
        "HX1200 1200W"
    ],
    [
        1500000,
        1800000,
        2300000,
        2900000,
        4100000
    ],
    [
        "80+ Gold",
        "Fully Modular",
        "ATX 3.1"
    ]
);

addProducts(
    "psu",
    "be quiet!",
    [
        "Pure Power 12 M 650W",
        "Pure Power 12 M 750W",
        "Pure Power 12 M 850W",
        "Dark Power 13 1000W"
    ],
    [
        1450000,
        1750000,
        2200000,
        3400000
    ],
    [
        "80+ Gold",
        "ATX 3.0",
        "Modular"
    ]
);

addProducts(
    "psu",
    "Seasonic",
    [
        "Focus GX-750",
        "Focus GX-850",
        "Vertex GX-1000",
        "Prime TX-1300"
    ],
    [
        1700000,
        2100000,
        3100000,
        4900000
    ],
    [
        "80+ Gold",
        "Fully Modular",
        "ATX 3.0"
    ]
);


/* ================= CASE ================= */

addProducts(
    "case",
    "Lian Li",
    [
        "O11 Dynamic EVO",
        "O11D EVO RGB",
        "Lancool III",
        "Lancool 216",
        "O11 Vision"
    ],
    [
        2400000,
        3200000,
        2100000,
        1800000,
        3500000
    ],
    [
        "ATX • Tempered Glass",
        "RGB",
        "High Airflow"
    ]
);

addProducts(
    "case",
    "NZXT",
    [
        "H5 Flow",
        "H6 Flow",
        "H7 Flow",
        "H9 Flow",
        "H9 Elite"
    ],
    [
        1600000,
        2100000,
        2500000,
        2900000,
        3900000
    ],
    [
        "ATX",
        "Tempered Glass",
        "Airflow"
    ]
);

addProducts(
    "case",
    "Corsair",
    [
        "4000D Airflow",
        "5000D Airflow",
        "5000X RGB",
        "7000D Airflow"
    ],
    [
        1700000,
        2300000,
        2900000,
        4300000
    ],
    [
        "ATX",
        "Airflow",
        "Tempered Glass"
    ]
);


/* ================= COOLING ================= */

addProducts(
    "cooling",
    "Arctic",
    [
        "Liquid Freezer III 240",
        "Liquid Freezer III 360",
        "Liquid Freezer III 420",
        "Freezer 36"
    ],
    [
        1400000,
        1800000,
        2300000,
        700000
    ],
    [
        "AIO",
        "ARGB",
        "High Performance"
    ]
);

addProducts(
    "cooling",
    "NZXT",
    [
        "Kraken 240",
        "Kraken 360",
        "Kraken Elite 360",
        "Kraken Elite 420"
    ],
    [
        1900000,
        2500000,
        3200000,
        3600000
    ],
    [
        "AIO • RGB",
        "LCD Display",
        "Intel / AMD"
    ]
);

addProducts(
    "cooling",
    "Noctua",
    [
        "NH-D15 G2",
        "NH-U12A",
        "NH-L9a-AM5"
    ],
    [
        1500000,
        1300000,
        700000
    ],
    [
        "Air Cooling",
        "High Performance",
        "AM5"
    ]
);


/* ================= MONITORS ================= */

addProducts(
    "monitor",
    "ASUS",
    [
        "ROG Swift 27 1440p 360Hz",
        "TUF Gaming 27 180Hz",
        "ROG OLED 32 4K 240Hz",
        "TUF 24 180Hz"
    ],
    [
        8500000,
        3500000,
        15000000,
        2200000
    ],
    [
        "1440p • 360Hz",
        "Fast IPS",
        "OLED • 4K"
    ]
);

addProducts(
    "monitor",
    "Samsung",
    [
        "Odyssey G7 32",
        "Odyssey G6 27",
        "Odyssey OLED G8",
        "Odyssey G5 32"
    ],
    [
        7000000,
        4700000,
        11000000,
        3900000
    ],
    [
        "Gaming",
        "240Hz",
        "QHD"
    ]
);


/* ================= KEYBOARD ================= */

addProducts(
    "keyboard",
    "Logitech",
    [
        "G Pro X TKL",
        "G915 TKL",
        "G715 Wireless",
        "G413 SE"
    ],
    [
        1800000,
        2400000,
        2200000,
        900000
    ],
    [
        "Mechanical",
        "Wireless",
        "RGB"
    ]
);


/* ================= MOUSE ================= */

addProducts(
    "mouse",
    "Logitech",
    [
        "G Pro X Superlight 2",
        "G502 X Lightspeed",
        "G703 Lightspeed",
        "G305 Lightspeed"
    ],
    [
        1700000,
        1900000,
        1300000,
        700000
    ],
    [
        "Wireless",
        "Gaming",
        "High DPI"
    ]
);


/* ================= HEADSET ================= */

addProducts(
    "headset",
    "HyperX",
    [
        "Cloud III Wireless",
        "Cloud Alpha Wireless",
        "Cloud III",
        "Cloud Stinger 2"
    ],
    [
        1500000,
        2200000,
        1100000,
        650000
    ],
    [
        "Gaming",
        "Wireless",
        "7.1 Surround"
    ]
);


/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {
    all: "Все",
    gpu: "Видеокарты",
    cpu: "Процессоры",
    ram: "Оперативная память",
    ssd: "SSD",
    motherboard: "Материнские платы",
    psu: "Блоки питания",
    case: "Корпуса",
    cooling: "Охлаждение",
    monitor: "Мониторы",
    keyboard: "Клавиатуры",
    mouse: "Мыши",
    headset: "Гарнитуры"
};


/* =========================================================
   STATE
========================================================= */

let state = {

    category: "all",

    brands: [],

    maxPrice: 40000000,

    rating: 0,

    sort: "popular",

    search: "",

    language:
        localStorage.getItem("upg-language") || "ru",

    cart:
        JSON.parse(
            localStorage.getItem("upg-cart") || "[]"
        ),

    builder: {

        gpu: null,
        cpu: null,
        ram: null,
        ssd: null,
        motherboard: null,
        psu: null,
        case: null,
        cooling: null

    }

};


/* =========================================================
   PRODUCT IMAGE FALLBACK
========================================================= */

function productImage(category, index = 0) {

    const list = imagePool[category] || imagePool.gpu;

    return list[index % list.length];

}


/* =========================================================
   FILTERED PRODUCTS
========================================================= */

function getFilteredProducts() {

    let result = [...products];

    if (state.category !== "all") {

        result = result.filter(
            product =>
                product.category === state.category
        );

    }

    if (state.brands.length) {

        result = result.filter(
            product =>
                state.brands.includes(product.brand)
        );

    }

    result = result.filter(
        product =>
            product.price <= state.maxPrice
    );

    result = result.filter(
        product =>
            product.rating >= state.rating
    );

    if (state.search.trim()) {

        const query =
            state.search
                .trim()
                .toLowerCase();

        result = result.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.brand
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)

                ||

                product.spec
                    .toLowerCase()
                    .includes(query)

            );

        });

    }


    switch (state.sort) {

        case "cheap":

            result.sort(
                (a, b) =>
                    a.price - b.price
            );

            break;

        case "expensive":

            result.sort(
                (a, b) =>
                    b.price - a.price
            );

            break;

        case "rating":

            result.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            break;

        case "name":

            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

            break;

        default:

            result.sort(
                (a, b) =>
                    Number(b.popular) -
                    Number(a.popular)
            );

    }

    return result;
}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    const grid = $("#grid");
    const empty = $("#empty");
    const found = $("#found");

    if (!grid) return;

    const result =
        getFilteredProducts();

    grid.innerHTML = "";

    if (found) {

        found.textContent =
            `Найдено: ${result.length}`;

    }

    if (!result.length) {

        empty?.classList.remove("hidden");

        return;

    }

    empty?.classList.add("hidden");


    result.forEach(
        (product, index) => {

            const card =
                document.createElement("article");

            card.className = "card";

            card.dataset.id =
                product.id;

            card.style.animationDelay =
                `${Math.min(index * 0.025, 0.35)}s`;

            card.innerHTML = `

                <div class="pic">

                    ${
                        product.popular
                            ? `<span class="tag">TOP</span>`
                            : ""
                    }

                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                        onerror="this.src='${productImage(product.category)}'"
                    >

                </div>

                <div class="info">

                    <span class="cat">
                        ${escapeHTML(
                            categoryNames[
                                product.category
                            ] || product.category
                        )}
                    </span>

                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>

                    <p class="spec">
                        ${escapeHTML(product.spec)}
                    </p>

                    <div class="stars">
                        ★ ${product.rating}
                    </div>

                    <div class="bottom">

                        <strong class="price">
                            ${formatPrice(product.price)}
                        </strong>

                        <button
                            class="add"
                            data-add="${product.id}"
                            aria-label="Добавить"
                        >
                            +
                        </button>

                    </div>

                </div>
            `;

            grid.appendChild(card);

        }
    );

}


/* =========================================================
   CATEGORY FILTERS
========================================================= */

function renderCategoryFilters() {

    const container =
        $("#catFilters");

    if (!container) return;

    const categories =
        Object.keys(categoryNames);

    container.innerHTML = "";

    categories.forEach(
        category => {

            const label =
                document.createElement("label");

            label.innerHTML = `

                <input
                    type="radio"
                    name="category"
                    value="${category}"
                    ${state.category === category ? "checked" : ""}
                >

                <span>
                    ${categoryNames[category]}
                </span>

            `;

            const input =
                label.querySelector("input");

            input.addEventListener(
                "change",
                () => {

                    state.category =
                        category;

                    renderAll();

                }
            );

            container.appendChild(label);

        }
    );

}


/* =========================================================
   BRAND FILTERS
========================================================= */

function renderBrandFilters() {

    const container =
        $("#brandFilters");

    if (!container) return;

    const brands =
        [...new Set(
            products.map(
                product => product.brand
            )
        )].sort();

    container.innerHTML = "";

    brands.forEach(
        brand => {

            const label =
                document.createElement("label");

            const checked =
                state.brands.includes(brand);

            label.innerHTML = `

                <input
                    type="checkbox"
                    value="${escapeHTML(brand)}"
                    ${checked ? "checked" : ""}
                >

                <span>
                    ${escapeHTML(brand)}
                </span>

            `;

            const input =
                label.querySelector("input");

            input.addEventListener(
                "change",
                () => {

                    if (input.checked) {

                        state.brands.push(
                            brand
                        );

                    } else {

                        state.brands =
                            state.brands.filter(
                                item =>
                                    item !== brand
                            );

                    }

                    renderProducts();

                    updateFilterCount();

                }
            );

            container.appendChild(label);

        }
    );

}


/* =========================================================
   CATEGORY CHIPS
========================================================= */

function renderChips() {

    const container =
        $("#chips");

    if (!container) return;

    container.innerHTML = "";

    Object.entries(categoryNames)
        .forEach(
            ([key, name]) => {

                const button =
                    document.createElement("button");

                button.className =
                    "chip" +
                    (
                        state.category === key
                            ? " active"
                            : ""
                    );

                button.textContent =
                    name;

                button.addEventListener(
                    "click",
                    () => {

                        state.category =
                            key;

                        renderAll();

                    }
                );

                container.appendChild(button);

            }
        );

}


/* =========================================================
   FILTER COUNT
========================================================= */

function updateFilterCount() {

    const element =
        $("#filterCount");

    if (!element) return;

    let count = 0;

    if (state.category !== "all") {
        count++;
    }

    count += state.brands.length;

    if (state.maxPrice < 40000000) {
        count++;
    }

    if (state.rating > 0) {
        count++;
    }

    if (state.search) {
        count++;
    }

    element.textContent =
        count;

}


/* =========================================================
   CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "upg-cart",
        JSON.stringify(state.cart)
    );

}


function addToCart(id) {

    const product =
        products.find(
            item => item.id === Number(id)
        );

    if (!product) return;

    const existing =
        state.cart.find(
            item => item.id === product.id
        );

    if (existing) {

        existing.qty++;

    } else {

        state.cart.push({

            id: product.id,

            qty: 1

        });

    }

    saveCart();

    renderCart();

    openCart();

    toast(
        `Добавлено: ${product.name}`
    );

}


function removeFromCart(id) {

    state.cart =
        state.cart.filter(
            item =>
                item.id !== Number(id)
        );

    saveCart();

    renderCart();

}


function changeQuantity(id, amount) {

    const item =
        state.cart.find(
            cartItem =>
                cartItem.id === Number(id)
        );

    if (!item) return;

    item.qty += amount;

    if (item.qty <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    renderCart();

}


function cartTotal() {

    return state.cart.reduce(
        (total, item) => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) {
                return total;
            }

            return total +
                product.price * item.qty;

        },
        0
    );

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    const container =
        $("#cartItems");

    const count =
        $("#cartCount");

    const total =
        $("#cartTotal");

    if (!container) return;

    container.innerHTML = "";

    let totalItems = 0;


    state.cart.forEach(
        item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) return;

            totalItems += item.qty;

            const element =
                document.createElement("div");

            element.className =
                "cart-item";

            element.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                    onerror="this.src='${productImage(product.category)}'"
                >

                <div>

                    <h4>
                        ${escapeHTML(product.name)}
                    </h4>

                    <p>
                        ${formatPrice(product.price)}
                    </p>

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:7px;
                            margin-top:7px;
                        "
                    >

                        <button
                            class="changeQty"
                            data-id="${product.id}"
                            data-change="-1"
                        >
                            −
                        </button>

                        <b>
                            ${item.qty}
                        </b>

                        <button
                            class="changeQty"
                            data-id="${product.id}"
                            data-change="1"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove"
                    data-remove="${product.id}"
                >
                    ×
                </button>
            `;

            container.appendChild(element);

        }
    );


    if (!state.cart.length) {

        container.innerHTML = `

            <div
                style="
                    padding:50px 15px;
                    text-align:center;
                    color:var(--muted);
                    font-size:12px;
                "
            >
                🛒<br><br>
                Корзина пуста
            </div>

        `;

    }


    if (count) {
        count.textContent =
            totalItems;
    }

    if (total) {
        total.textContent =
            formatPrice(cartTotal());
    }

}


/* =========================================================
   CART EVENTS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const add =
            event.target.closest("[data-add]");

        if (add) {

            addToCart(
                add.dataset.add
            );

            return;

        }


        const remove =
            event.target.closest("[data-remove]");

        if (remove) {

            removeFromCart(
                remove.dataset.remove
            );

            return;

        }


        const change =
            event.target.closest(".changeQty");

        if (change) {

            changeQuantity(
                change.dataset.id,
                Number(change.dataset.change)
            );

        }

    }
);


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCart() {

    $("#drawer")?.classList.add("open");

    $("#overlay")?.classList.add("show");

}


function closeCart() {

    $("#drawer")?.classList.remove("open");

    $("#overlay")?.classList.remove("show");

}


$("#cartBtn")?.addEventListener(
    "click",
    openCart
);

$("#closeCart")?.addEventListener(
    "click",
    closeCart
);

$("#overlay")?.addEventListener(
    "click",
    () => {

        closeCart();

        closeModal();

    }
);


/* =========================================================
   BUILDER
========================================================= */

const builderCategories = [

    {
        key: "gpu",
        title: "Видеокарта",
        icon: "GPU"
    },

    {
        key: "cpu",
        title: "Процессор",
        icon: "CPU"
    },

    {
        key: "ram",
        title: "ОЗУ",
        icon: "RAM"
    },

    {
        key: "ssd",
        title: "SSD",
        icon: "SSD"
    },

    {
        key: "motherboard",
        title: "Материнская плата",
        icon: "MB"
    },

    {
        key: "psu",
        title: "Блок питания",
        icon: "PSU"
    },

    {
        key: "case",
        title: "Корпус",
        icon: "CASE"
    },

    {
        key: "cooling",
        title: "Охлаждение",
        icon: "AIO"
    }

];


function getBuilderOptions(category) {

    return products
        .filter(
            product =>
                product.category === category
        )
        .slice(0, 20);

}


function renderBuilder() {

    const slots =
        $("#slots");

    if (!slots) return;

    slots.innerHTML = "";


    builderCategories.forEach(
        category => {

            const selected =
                state.builder[
                    category.key
                ];

            const element =
                document.createElement("div");

            element.className =
                "slot";

            element.innerHTML = `

                <div class="slot-icon">
                    ${category.icon}
                </div>

                <div>

                    <small>
                        ${category.title}
                    </small>

                    <b>
                        ${
                            selected
                                ? escapeHTML(selected.name)
                                : "Не выбрано"
                        }
                    </b>

                    ${
                        selected
                            ? `<small>
                                ${formatPrice(selected.price)}
                               </small>`
                            : ""
                    }

                </div>

                <button
                    class="change"
                    data-builder="${category.key}"
                >
                    Выбрать
                </button>

            `;

            slots.appendChild(element);

        }
    );


    updateBuilderTotal();

}


function updateBuilderTotal() {

    let total = 0;

    Object.values(
        state.builder
    ).forEach(
        product => {

            if (product) {
                total += product.price;
            }

        }
    );

    const element =
        $("#total");

    if (element) {

        element.textContent =
            formatPrice(total);

    }

}


function chooseBuilder(category) {

    const options =
        getBuilderOptions(category);

    if (!options.length) return;


    const modal =
        document.createElement("div");

    modal.className =
        "builder-selector";

    modal.innerHTML = `

        <div class="builder-modal">

            <button
                class="builder-close"
                id="builderClose"
            >
                ×
            </button>

            <label>
                UPG BUILDER
            </label>

            <h2>
                Выбери ${categoryNames[category] || category}
            </h2>

            <div class="builder-options">

                ${options.map(
                    product => `

                    <button
                        class="builder-option"
                        data-select-builder="${product.id}"
                    >

                        <img
                            src="${product.image}"
                            alt="${escapeHTML(product.name)}"
                            onerror="this.src='${productImage(product.category)}'"
                        >

                        <div>

                            <b>
                                ${escapeHTML(product.name)}
                            </b>

                            <small>
                                ${escapeHTML(product.spec)}
                            </small>

                            <strong>
                                ${formatPrice(product.price)}
                            </strong>

                        </div>

                    </button>

                `
                ).join("")}

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    modal
        .querySelector("#builderClose")
        .addEventListener(
            "click",
            () => modal.remove()
        );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                modal.remove();

            }

        }
    );


    modal
        .querySelectorAll(
            "[data-select-builder]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const product =
                            products.find(
                                p =>
                                    p.id ===
                                    Number(
                                        button.dataset
                                            .selectBuilder
                                    )
                            );

                        if (!product) return;

                        state.builder[
                            category
                        ] = product;

                        modal.remove();

                        renderBuilder();

                        update3DPreview(
                            product,
                            category
                        );

                    }
                );

            }
        );

}


/* =========================================================
   BUILDER EVENTS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-builder]"
            );

        if (!button) return;

        chooseBuilder(
            button.dataset.builder
        );

    }
);


/* =========================================================
   RESET BUILDER
========================================================= */

$("#resetBuild")?.addEventListener(
    "click",
    () => {

        Object.keys(
            state.builder
        ).forEach(
            key => {

                state.builder[key] = null;

            }
        );

        renderBuilder();

        toast("Сборка сброшена");

    }
);


/* =========================================================
   ADD BUILD TO CART
========================================================= */

$("#addBuild")?.addEventListener(
    "click",
    () => {

        const selected =
            Object.values(
                state.builder
            ).filter(Boolean);

        if (!selected.length) {

            toast(
                "Сначала выбери комплектующие"
            );

            return;

        }

        selected.forEach(
            product => {

                addToCart(product.id);

            }
        );

        toast(
            "Сборка добавлена в корзину"
        );

    }
);


/* =========================================================
   3D PREVIEW
========================================================= */

function update3DPreview(
    product,
    category
) {

    const gpu =
        $(".gpu-inside");

    if (!gpu) return;

    if (category === "gpu") {

        gpu.textContent =
            product.name
                .replace("GeForce ", "")
                .replace("Gaming ", "")
                .slice(0, 24);

    }

}


/* =========================================================
   COMPONENT CARDS
========================================================= */

function renderComponentCards() {

    const container =
        $("#componentCards");

    if (!container) return;

    const categories = [

        "gpu",
        "cpu",
        "ram",
        "ssd",
        "motherboard",
        "psu",
        "case",
        "cooling"

    ];

    container.innerHTML = "";


    categories.forEach(
        category => {

            const product =
                products.find(
                    p =>
                        p.category ===
                        category
                );

            if (!product) return;

            const card =
                document.createElement("article");

            card.className =
                "component";

            card.dataset.category =
                category;

            card.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${category}"
                    loading="lazy"
                    onerror="this.src='${productImage(category)}'"
                >

                <div>

                    <small>
                        ${categoryNames[category]}
                    </small>

                    <b>
                        ${escapeHTML(product.name)}
                    </b>

                </div>

            `;

            card.addEventListener(
                "click",
                () => {

                    state.category =
                        category;

                    document
                        .querySelector("#catalog")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    renderAll();

                }
            );

            container.appendChild(card);

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

$("#search")?.addEventListener(
    "input",
    event => {

        state.search =
            event.target.value;

        renderProducts();

        updateFilterCount();

    }
);


$("#clearSearch")?.addEventListener(
    "click",
    () => {

        const input =
            $("#search");

        if (input) {

            input.value = "";

        }

        state.search = "";

        renderProducts();

        updateFilterCount();

    }
);


/* =========================================================
   PRICE
========================================================= */

$("#maxPrice")?.addEventListener(
    "input",
    event => {

        state.maxPrice =
            Number(event.target.value);

        const label =
            $("#maxPriceLabel");

        if (label) {

            label.textContent =
                formatPrice(
                    state.maxPrice
                );

        }

        renderProducts();

        updateFilterCount();

    }
);


/* =========================================================
   RATING
========================================================= */

$("#rating")?.addEventListener(
    "change",
    event => {

        state.rating =
            Number(event.target.value);

        renderProducts();

        updateFilterCount();

    }
);


/* =========================================================
   SORT
========================================================= */

$("#sort")?.addEventListener(
    "change",
    event => {

        state.sort =
            event.target.value;

        renderProducts();

    }
);


/* =========================================================
   CLEAR FILTERS
========================================================= */

$("#clearAll")?.addEventListener(
    "click",
    resetFilters
);


function resetFilters() {

    state.category = "all";

    state.brands = [];

    state.maxPrice =
        40000000;

    state.rating = 0;

    state.sort = "popular";

    state.search = "";


    const search =
        $("#search");

    if (search) {

        search.value = "";

    }


    const price =
        $("#maxPrice");

    if (price) {

        price.value =
            40000000;

    }


    const rating =
        $("#rating");

    if (rating) {

        rating.value = "0";

    }


    const sort =
        $("#sort");

    if (sort) {

        sort.value =
            "popular";

    }


    const priceLabel =
        $("#maxPriceLabel");

    if (priceLabel) {

        priceLabel.textContent =
            "40 млн";

    }


    renderAll();

}


/* =========================================================
   LANGUAGE
========================================================= */

function applyLanguage() {

    const lang =
        translations[
            state.language
        ] || translations.ru;


    $$("[data-i18n]")
        .forEach(
            element => {

                const key =
                    element.dataset.i18n;

                if (
                    lang[key] !== undefined
                ) {

                    element.innerHTML =
                        lang[key];

                }

            }
        );


    $$("[data-i18n-placeholder]")
        .forEach(
            element => {

                const key =
                    element.dataset
                        .i18nPlaceholder;

                if (
                    lang[key] !== undefined
                ) {

                    element.placeholder =
                        lang[key];

                }

            }
        );


    const langBtn =
        $("#langBtn");

    if (langBtn) {

        langBtn.textContent =
            state.language.toUpperCase() +
            " ▾";

    }


    localStorage.setItem(
        "upg-language",
        state.language
    );

}


function setLanguage(language) {

    if (
        !translations[language]
    ) return;

    state.language =
        language;

    applyLanguage();

    $("#langMenu")
        ?.classList.remove("open");

}


/* =========================================================
   LANGUAGE MENU
========================================================= */

$("#langBtn")?.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        $("#langMenu")
            ?.classList.toggle("open");

    }
);


$$("[data-lang]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    setLanguage(
                        button.dataset.lang
                    );

                }
            );

        }
    );


document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(".lang")
        ) {

            $("#langMenu")
                ?.classList.remove("open");

        }

    }
);


/* =========================================================
   THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "upg-theme"
    );

if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

}


$("#theme")?.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        localStorage.setItem(
            "upg-theme",
            document.body.classList.contains(
                "light"
            )
                ? "light"
                : "dark"
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

$("#menu")?.addEventListener(
    "click",
    () => {

        $("#nav")
            ?.classList.toggle("open");

    }
);


$$("nav a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    $("#nav")
                        ?.classList.remove("open");

                }
            );

        }
    );


/* =========================================================
   HELP MODAL
========================================================= */

function openModal() {

    $("#modal")
        ?.classList.remove("hidden");

    $("#overlay")
        ?.classList.add("show");

}


function closeModal() {

    $("#modal")
        ?.classList.add("hidden");

    $("#overlay")
        ?.classList.remove("show");

}


$("#help")?.addEventListener(
    "click",
    openModal
);

$("#closeModal")?.addEventListener(
    "click",
    closeModal
);


$("#send")?.addEventListener(
    "click",
    () => {

        const budget =
            $("#budget")?.value.trim();

        if (!budget) {

            toast(
                "Напиши бюджет"
            );

            return;

        }

        closeModal();

        toast(
            "Запрос отправлен ✓"
        );

        if ($("#budget")) {

            $("#budget").value = "";

        }

    }
);


/* =========================================================
   CHECKOUT
========================================================= */

$("#checkout")?.addEventListener(
    "click",
    () => {

        if (!state.cart.length) {

            toast(
                "Корзина пуста"
            );

            return;

        }

        toast(
            "Заказ подготовлен ✓"
        );

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function toast(message) {

    const element =
        $("#toast");

    if (!element) return;

    element.textContent =
        message;

    element.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                element.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {

    renderCategoryFilters();

    renderBrandFilters();

    renderChips();

    renderProducts();

    renderBuilder();

    renderComponentCards();

    renderCart();

    updateFilterCount();

    applyLanguage();

}


/* =========================================================
   LOADER
========================================================= */

function hideLoader() {

    const loader =
        $("#loader");

    if (!loader) return;

    loader.style.opacity = "0";

    loader.style.visibility =
        "hidden";

    setTimeout(
        () => {

            loader.remove();

        },
        600
    );

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderAll();

        setTimeout(
            hideLoader,
            700
        );

    }
);


/* =========================================================
   SAFETY LOADER FALLBACK
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            hideLoader,
            500
        );

    }
);


/* Никогда не оставляем экран загрузки навсегда */

setTimeout(
    hideLoader,
    2500
);