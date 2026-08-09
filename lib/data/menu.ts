export type DayMenu = {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
};

export const weeklyMenu: DayMenu[] = [
  {
    day: "Sunday",
    breakfast: "Chiya, roti tarkari & boiled eggs",
    lunch: "Dal bhat, seasonal tarkari, saag & pickle",
    dinner: "Dal bhat, chicken curry (veg: paneer), salad",
  },
  {
    day: "Monday",
    breakfast: "Oats porridge, banana & milk tea",
    lunch: "Dal bhat, aloo cauli, saag & curd",
    dinner: "Veg pulao, chana masala & papad",
  },
  {
    day: "Tuesday",
    breakfast: "Chiya, sel roti & aloo achar",
    lunch: "Dal bhat, bodi tama, greens & pickle",
    dinner: "Dal bhat, fish curry (veg: mushroom), salad",
  },
  {
    day: "Wednesday",
    breakfast: "Toast, omelette (veg: paneer bhurji) & juice",
    lunch: "Dal bhat, rajma, seasonal veg & curd",
    dinner: "Chowmein / thukpa with vegetables",
  },
  {
    day: "Thursday",
    breakfast: "Chiya, chana & puri tarkari",
    lunch: "Dal bhat, pharsi, saag & pickle",
    dinner: "Dal bhat, egg curry (veg: soy curry), salad",
  },
  {
    day: "Friday",
    breakfast: "Muesli, fruits & milk tea",
    lunch: "Dal bhat, mixed veg, saag & curd",
    dinner: "Momo night! Steamed veg & chicken momos",
  },
  {
    day: "Saturday",
    breakfast: "Special brunch: aloo paratha, curd & chiya",
    lunch: "Biryani (veg & chicken), raita & salad",
    dinner: "Dal bhat, seasonal tarkari & kheer",
  },
];

export const foodHighlights = [
  "Fresh vegetables sourced daily from local markets",
  "Filtered & purified water throughout the hostel",
  "Vegetarian options at every single meal",
  "Special festival feasts — Dashain, Tihar, Teej & more",
  "Hygienic kitchen, cleaned and inspected daily",
  "Monthly menu feedback from residents",
];
