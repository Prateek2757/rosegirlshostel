export type RuleGroup = { title: string; rules: string[] };

export const ruleGroups: RuleGroup[] = [
  {
    title: "Entry & Exit",
    rules: [
      "Main gate closes at 9:00 PM; late entry requires prior warden approval.",
      "Residents must sign in/out through the biometric system.",
      "Overnight stays outside the hostel require a parent-approved leave form.",
    ],
  },
  {
    title: "Visitors",
    rules: [
      "Visitors are welcome in the reception lounge from 8:00 AM to 7:00 PM.",
      "All visitors are registered with a valid ID at the gate.",
      "Only registered family members may visit resident floors, escorted by staff.",
    ],
  },
  {
    title: "Rooms & Common Areas",
    rules: [
      "Keep rooms tidy; housekeeping cleans daily but personal items are your care.",
      "Quiet hours are 10:00 PM – 6:00 AM across all floors.",
      "Electrical appliances beyond the provided list need warden approval.",
      "Smoking, alcohol and illegal substances are strictly prohibited.",
    ],
  },
  {
    title: "Meals & Kitchen",
    rules: [
      "Meal timings: breakfast 6:30–9:00, lunch 11:30–2:00, dinner 7:00–9:00.",
      "Inform the kitchen a day ahead if you will miss a meal or need a packed one.",
      "The self-use pantry is open 24/7; clean up after use.",
    ],
  },
  {
    title: "Payments",
    rules: [
      "Monthly fees are due by the 5th of each month (cash, bank, eSewa or Khalti).",
      "One month's notice is required before vacating; deposit refunded at checkout.",
    ],
  },
];
