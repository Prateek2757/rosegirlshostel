export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  type: "student" | "parent" | "professional";
};

export const testimonials: Testimonial[] = [
  {
    name: "Pratiksha Sharma",
    role: "MBBS Student, KMC",
    rating: 5,
    type: "student",
    quote:
      "I've lived here for two years while studying medicine. The study hall is genuinely quiet, the food is like home, and I've never once felt unsafe — even coming back late from hospital postings.",
  },
  {
    name: "Rajendra Adhikari",
    role: "Parent, from Pokhara",
    rating: 5,
    type: "parent",
    quote:
      "As a father sending my daughter to Kathmandu for the first time, safety was everything. The visitor system, the female staff, the way the warden calls us — we finally sleep peacefully.",
  },
  {
    name: "Sneha Maharjan",
    role: "Software Engineer",
    rating: 5,
    type: "professional",
    quote:
      "The WiFi actually holds up on video calls, power backup means I never miss a deadline, and the deluxe room feels like a serviced apartment at half the price.",
  },
  {
    name: "Anisha Gurung",
    role: "BBA Student, TU",
    rating: 4,
    type: "student",
    quote:
      "What I love most is the community — festival celebrations, rooftop evenings, seniors helping with exams. It's not just a hostel, it genuinely feels like home.",
  },
  {
    name: "Sarita Koirala",
    role: "Parent, from Biratnagar",
    rating: 5,
    type: "parent",
    quote:
      "Clean rooms, hygienic kitchen, and staff who treat the girls like family. We visited unannounced twice and it was spotless both times. Highly recommended to every parent.",
  },
  {
    name: "Mei Tanaka",
    role: "Exchange Student, Japan",
    rating: 5,
    type: "student",
    quote:
      "Moving to Nepal alone was scary, but the staff helped me with everything — SIM cards, buses, even Nepali lessons. The vegetarian food options are wonderful.",
  },
];
