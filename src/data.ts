export interface ResultCard {
  id: number;
  name: string;
  badge: string;
  before: string;
  after: string;
  imageUrl?: string;
  altText?: string;
  objectPosition?: string;
}

export interface ProblemBlock {
  id: number;
  subheadline: string;
  bodyBefore: string; // text before key phrase
  keyPhrase: string;  // key emotional phrase in PRIMARY COLOR
  bodyAfter: string;  // text after key phrase
}

export interface FeatureCard {
  id: number;
  title: string;
  body: string;
  iconName: "MessageSquare" | "Receipt" | "ShieldCheck";
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const RESULT_CARDS: ResultCard[] = [
  {
    id: 1,
    name: "Mark",
    badge: "PROPERTY MANAGER",
    before: "3 emergency leaks on a Saturday night. Someone had to call every plumber by hand.",
    after: "The system messaged all three plumbers, got their timings, and logged the jobs. Not one phone call made.",
    imageUrl: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/indranil%20chakraborty.jpeg",
    altText: "Mark"
  },
  {
    id: 2,
    name: "Akash",
    badge: "PROPERTY OWNER",
    before: "Tenant messages and plumber follow-ups ate up half the team's day. Staff became a full-time messaging team.",
    after: "Sociazy automated it all on the same WhatsApp everyone already uses. No new app. No training.",
    imageUrl: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Akash%20verma.jpeg",
    altText: "Akash",
    objectPosition: "center top"
  },
  {
    id: 3,
    name: "Aman",
    badge: "LANDLORD",
    before: "3 to 4 days every month spent matching rent payments to tenants by hand.",
    after: "Reminders went out automatically. The system read payment screenshots and marked them paid. Month closing done in hours.",
    imageUrl: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/happy.jpeg",
    altText: "Aman"
  },
  {
    id: 4,
    name: "Rahul",
    badge: "PROPERTY OWNER",
    before: "40+ broker messages a day asking about flat availability. The manager replied to all of them by hand.",
    after: "Every broker now gets an instant reply. The manager spends his day on site visits, not typing.",
    imageUrl: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Rashmi%20Dhankar.jpeg",
    altText: "Rahul"
  }
];

export const PROBLEM_BLOCKS: ProblemBlock[] = [
  {
    id: 1,
    subheadline: "Brokers asking the same question all day.",
    bodyBefore: "“Koi flat available hai kya?” Same message, ",
    keyPhrase: "forty different brokers, every single day.",
    bodyAfter: " You answer manually or you miss them and lose the tenant. During admission season it gets worse."
  },
  {
    id: 2,
    subheadline: "Tenants who pay rent when they feel like it.",
    bodyBefore: "The 1st arrives. Some tenants pay. Most go quiet. You chase on the 3rd. You chase again on the 7th. Partial payments come in as ",
    keyPhrase: "blurry screenshots you have to match by hand.",
    bodyAfter: " Forty tenants. Every month. No end."
  },
  {
    id: 3,
    subheadline: "Vendors who disappear after taking advance.",
    bodyBefore: "Plumber takes money on Monday. Nothing happens by Thursday. You call. “Sir kal pakka.” Tenant is frustrated. ",
    keyPhrase: "You are the one who looks bad.",
    bodyAfter: " This repeats every week."
  }
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    title: "Broker queries answered without you.",
    body: "A broker messages your number asking what is available. In 30 seconds they get a reply with every available unit, the rent, the size, and what is included. You did not read the message. You did not type anything. The bot replies from your live property list — always accurate, day and night.",
    iconName: "MessageSquare"
  },
  {
    id: 2,
    title: "Rent collected and matched without chasing.",
    body: "On the 1st, every tenant gets a personal WhatsApp reminder with their name, their flat, and the exact amount. Tenant pays via UPI and sends the screenshot. The system reads the screenshot, checks the amount, and marks that tenant as paid. You open one clean report on the 12th and see exactly who paid and who did not.",
    iconName: "Receipt"
  },
  {
    id: 3,
    title: "Vendors held accountable without calls.",
    body: "Every morning, each vendor gets a WhatsApp with their jobs for the day. When they finish, they send a photo. That photo is the proof before any payment goes out. No photo, the job stays open. The kal aaunga excuse stops working.",
    iconName: "ShieldCheck"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Will my tenants and brokers have to download anything?",
    answer: "No. This is the most important thing. Your tenants keep using the same WhatsApp they use today. Your brokers keep using the same number they already message. Your vendors do not change anything. Estate Desk works inside WhatsApp — invisible to everyone except you, and only visible to you because it is doing the work automatically."
  },
  {
    id: 2,
    question: "What if a tenant sends a wrong screenshot or the amount does not match?",
    answer: "The system flags it separately. You see a clear list of confirmed payments and a separate list of anything that needs your attention. Partial payments, wrong amounts, unmatched transactions — all flagged for your review. Nothing gets marked paid unless the amount matches."
  },
  {
    id: 3,
    question: "My tenants are not tech-savvy. Will they be able to use this?",
    answer: "If they can send a WhatsApp message, they can use this. All they do is send a UPI screenshot the same way they already do. There is nothing new to learn, no form to fill, no app to open. It works because it uses behavior they already have."
  },
  {
    id: 4,
    question: "How long does it take to go live?",
    answer: "30 days from the day you sign. Our team builds everything. You have one onboarding call where you tell us how your properties work. After that we handle the full setup. You do not configure anything. We do it all and show you when each part is live."
  },
  {
    id: 5,
    question: "What if a vendor marks a job done but the photo shows it is not finished?",
    answer: "You receive the photo. You review it. If the work is not acceptable you mark it incomplete and the vendor gets notified. Payment does not release until you approve the photo. You are always the final check on quality — the system just makes sure you have the proof to make that decision."
  },
  {
    id: 6,
    question: "We already use a property management app and it is not working. How is this different?",
    answer: "The reason most property apps stop working is that they require tenants and brokers to use a new platform. They do not. This runs on WhatsApp they already use, so there is no adoption problem. The automation actually sticks because nobody has to change their behavior."
  },
  {
    id: 7,
    question: "What happens if something breaks or a tenant is confused?",
    answer: "Our team is on WhatsApp support. Not a ticketing system. Not email. You message us and a real person responds the same day. The first 30 days after go-live includes daily check-ins from our team to make sure everything runs exactly as it should."
  }
];
