/** Client customization starts here. All photographs are Unsplash demonstration assets.
 * Replace external URLs with locally licensed client imagery before launch. */
const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const salon = {
  name: "Webora Studio",
  initials: "W",
  tagline: "BEAUTY, CONSIDERED.",
  locale: "en",
  direction: "ltr" as "ltr" | "rtl",
  // DEMO PLACEHOLDER ONLY. Set a real international number, digits only, then set false.
  whatsappNumber: "96500000000",
  isDemo: true,
  whatsappMessage: "Hello! I would like to book an appointment.",
  instagramUrl: "https://www.instagram.com/",
  instagramHandle: "@your.salon",
  address: ["Your salon address", "Salmiya, Kuwait"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Salmiya+Kuwait",
  openingHours: [
    { days: "Saturday – Thursday", hours: "10:00 AM – 9:00 PM" },
    { days: "Friday", hours: "2:00 PM – 9:00 PM" },
  ],
  images: {
    hero: {
      src: photo("photo-1600948836101-f9ffda59d250", 2000),
      alt: "Warm, light-filled salon interior with elegant styling stations",
    },
    about: {
      src: photo("photo-1560066984-138dadb4c035"),
      alt: "Beautifully appointed hair salon with mirrors and comfortable styling chairs",
    },
  },
  services: [
    {
      name: "Hair Styling",
      description:
        "Effortless shape. Beautiful movement. A look that feels entirely your own.",
      detail: "Cuts · Blow-dries · Styling",
      image: photo("photo-1562322140-8baeececf3df"),
      alt: "Long, softly styled brunette hair",
    },
    {
      name: "Hair Coloring",
      description:
        "From subtle dimension to a fresh perspective, color crafted just for you.",
      detail: "Balayage · Highlights · Color",
      image: photo("photo-1527799820374-dcf8d9d4a388"),
      alt: "Professional hair coloring and styling at a salon",
    },
    {
      name: "Manicure & Pedicure",
      description:
        "Considered care and a flawless finish, right down to the smallest detail.",
      detail: "Nail care · Gel · Polish",
      image: photo("photo-1604654894610-df63bc536371"),
      alt: "Elegant manicured nails with a soft polished finish",
    },
    {
      name: "Makeup",
      description:
        "Your features, beautifully enhanced. A little glow for every occasion.",
      detail: "Soft glam · Evening · Occasion",
      image: photo("photo-1487412947147-5cebf100ffc2"),
      alt: "Refined beauty makeup with carefully defined eyes",
    },
    {
      name: "Facial Treatments",
      description:
        "A moment to reset, with thoughtful rituals for fresh, luminous skin.",
      detail: "Cleansing · Hydration · Glow",
      image: photo("photo-1570172619644-dfd03ed5d881"),
      alt: "Relaxing facial treatment applied by a beauty specialist",
    },
    {
      name: "Bridal Beauty",
      description:
        "A calm beginning to an unforgettable day. Beauty that is unmistakably you.",
      detail: "Consultation · Trial · Wedding day",
      image: photo("photo-1596462502278-27bfdc403348"),
      alt: "A curated collection of professional beauty products",
    },
  ],
  gallery: [
    {
      src: photo("photo-1524504388940-b1c1722653e1"),
      alt: "Softly lit portrait with natural beauty styling",
      label: "Natural radiance",
    },
    {
      src: photo("photo-1604654894610-df63bc536371"),
      alt: "Delicate nail art and a polished manicure",
      label: "The finer details",
    },
    {
      src: photo("photo-1562322140-8baeececf3df"),
      alt: "Glossy flowing brunette hair",
      label: "Beautiful movement",
    },
    {
      src: photo("photo-1570172619644-dfd03ed5d881"),
      alt: "Restorative facial care ritual",
      label: "Time to restore",
    },
  ],
};
export const whatsappUrl = `https://wa.me/${salon.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(salon.whatsappMessage)}`;
