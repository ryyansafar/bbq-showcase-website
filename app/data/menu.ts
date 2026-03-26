export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    image?: string;
    popular?: boolean;
};

export type MenuCategory = {
    title: string;
    items: MenuItem[];
};

export const menuData: MenuCategory[] = [
    {
        title: "From the Pit",
        items: [
            {
                id: "brisket",
                name: "Signature Smoked Brisket (Half Pound)",
                description:
                    "The King of BBQ. 16-hour slow-smoked prime beef brisket, seasoned with our signature rub. Served by the half-pound with pickles and bread.",
                price: "₹800",
                popular: true,
                image: "/images/beef_brisket_platter_1770874110943.png",
            },
            {
                id: "pork-ribs",
                name: "St. Louis Spare Ribs (Half Rack)",
                description:
                    "Meaty pork ribs smoked for 6 hours, glazed with our house sweet & spicy BBQ sauce. Fall-off-the-bone tender.",
                price: "₹800",
                image: "/images/pork_ribs_glazed_1770874135277.png",
            },
            {
                id: "pork-belly",
                name: "Smoked Pork Belly (Half Pound)",
                description:
                    "Succulent slices of pork belly with crispy skin and tender meat. Rich, smoky, and melt-in-your-mouth.",
                price: "₹800",
                image: "/images/smoked_pork_belly_1770874172825.png",
            },
            {
                id: "pulled-pork",
                name: "Zesty Pulled Pork",
                description:
                    "Tender smoked pork shoulder, hand-pulled and tossed in a tangy vinegar-based sauce.",
                price: "₹650",
            },
            {
                id: "sausage",
                name: "House-Made Jalapeño Cheddar Sausage",
                description:
                    "Spicy, cheesy, and smoky. Made fresh daily and smoked to perfection.",
                price: "₹450",
            },
        ],
    },
    {
        title: "Sandwiches",
        items: [
            {
                id: "truffle-beef",
                name: "Gourmet Brisket Sandwich",
                description:
                    "Slow-smoked pulled beef with truffle mayo, caramelized onions, and melted cheese on a toasted brioche bun.",
                price: "₹550",
                popular: true,
                image: "/images/truffle_beef_sandwich_1770874153954.png",
            },
            {
                id: "brisket-sandwich",
                name: "The Pitmaster",
                description:
                    "Sliced brisket, house pickles, onions, and BBQ sauce on a brioche bun.",
                price: "₹600",
            },
            {
                id: "smash-burger",
                name: "Smokehouse Smash Burger",
                description:
                    "Two smashed beef patties, smoked gouda, bacon jam, and garlic aioli.",
                price: "₹450",
            },
            {
                id: "pulled-pork-sandwich",
                name: "Pulled Pork Sandwich",
                description:
                    "Our signature Carolina pulled pork piled high on a brioche bun with coleslaw.",
                price: "₹450",
            },
        ],
    },
    {
        title: "Sides",
        items: [
            {
                id: "mac-cheese",
                name: "Smoked Gouda Mac & Cheese",
                description: "Creamy, cheesy, and finished in the smoker.",
                price: "₹250",
            },
            {
                id: "potato-salad",
                name: "Special Potato Salad",
                description: "Red potatoes, crispy bacon, grainy mustard, and herbs.",
                price: "₹200",
            },
            {
                id: "fries",
                name: "Seasoned Fries",
                description: "Crispy skin-on fries tossed in our house rub.",
                price: "₹150",
            },
            {
                id: "slaw",
                name: "Apple Cider Slaw",
                description: "Crunchy cabbage offering a crisp, tangy contrast to the rich meat.",
                price: "₹150",
            },
            {
                id: "brioche",
                name: "Toasted Brioche Bread",
                description: "Two thick slices of butter-toasted brioche.",
                price: "₹100",
            },
        ],
    },
    {
        title: "Drinks",
        items: [
            {
                id: "craft-soda",
                name: "Craft Sodas",
                description: "Selection of artisanal sodas.",
                price: "₹150",
            },
            {
                id: "lemonade",
                name: "Smoked Lemonade",
                description: "Freshly squeezed lemons with a hint of grilled citrus.",
                price: "₹120",
            },
            {
                id: "iced-tea",
                name: "Southern Sweet Tea",
                description: "Brewed strong and sweetened just right.",
                price: "₹100",
            },
        ],
    },
];
