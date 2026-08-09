export type ComparisonRow = {
  aspect: string;
  ours: string;
  others: string;
};

export const comparison: ComparisonRow[] = [
  {
    aspect: "Security",
    ours: "24/7 female guards, CCTV, biometric entry & visitor logs",
    others: "A single caretaker, often unmonitored at night",
  },
  {
    aspect: "Cleanliness",
    ours: "Daily housekeeping & sanitized common areas",
    others: "Weekly or on-request cleaning only",
  },
  {
    aspect: "Food",
    ours: "3 fresh home-cooked meals with veg options & menu feedback",
    others: "Repetitive menu, outsourced or extra-cost meals",
  },
  {
    aspect: "Location",
    ours: "2 min to bus stop, walking distance to colleges & hospitals",
    others: "Cheap but remote lanes with long, unsafe commutes",
  },
  {
    aspect: "Support",
    ours: "On-call warden, parent updates & emergency tie-ups",
    others: "No structured support after office hours",
  },
  {
    aspect: "Facilities",
    ours: "Study hall, lounge, garden, terrace, laundry & library",
    others: "Room and shared bathroom — little else",
  },
  {
    aspect: "Maintenance",
    ours: "Same-day repairs via resident app / warden",
    others: "Complaints pending for weeks",
  },
  {
    aspect: "Internet",
    ours: "100 Mbps fiber with backup line & full coverage",
    others: "Shared slow connection, dead zones in rooms",
  },
];
