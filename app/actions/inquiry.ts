"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Field-level validation errors keyed by input name. */
  errors?: Record<string, string>;
};

/**
 * Handles booking inquiries. Currently validates and logs server-side;
 * wire this up to email (Resend/Nodemailer), a database, or a Google Sheet
 * when going live — the form UI needs no changes.
 */
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const get = (key: string) => (formData.get(key) as string | null)?.trim() ?? "";

  const data = {
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    college: get("college"),
    occupation: get("occupation"),
    room: get("room"),
    moveInDate: get("moveInDate"),
    message: get("message"),
    intent: get("intent"), // "visit" | "reserve"
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!/^[+\d][\d\s-]{6,}$/.test(data.phone))
    errors.phone = "Please enter a valid phone number.";
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.room) errors.room = "Please choose a room type.";
  if (!data.moveInDate) errors.moveInDate = "Please pick a move-in date.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "Please fix the highlighted fields." };
  }

  // TODO(production): send notification email / persist to database here.
  console.log("[inquiry]", data);

  return {
    status: "success",
    message:
      data.intent === "visit"
        ? "Your visit request has been received! We'll call you within a few hours to confirm a time."
        : "Your reservation inquiry has been received! We'll confirm availability and call you shortly.",
  };
}
