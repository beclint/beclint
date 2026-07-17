export interface Folktale {
  id: string;
  title: string;
  origin: string;
  region: string;
  culture: string;
  description: string;
  moral: string;
  readingTime: string;
  featured?: boolean;
}

export const folktales: Folktale[] = [
  {
    id: "anansi-the-spider",
    title: "Anansi and the Wisdom of the World",
    origin: "Ghana",
    region: "West Africa",
    culture: "Akan",
    description:
      "The trickster spider Anansi sets out to collect all the world's wisdom in a single pot. But the journey to keep it for himself teaches a humbling lesson about the nature of knowledge.",
    moral: "No one person can hold all wisdom — knowledge grows when it is shared.",
    readingTime: "4 min",
    featured: true,
  },
  {
    id: "the-lion-and-the-hare",
    title: "The Lion and the Clever Hare",
    origin: "Kenya",
    region: "East Africa",
    culture: "Kikuyu",
    description:
      "A ferocious lion terrorizes the animals of the savanna, demanding one of them each day to eat. When it's the hare's turn, she uses her wits where strength would fail.",
    moral: "Brains always triumph over brute force.",
    readingTime: "3 min",
    featured: true,
  },
  {
    id: "why-the-sun-and-moon",
    title: "Why the Sun and Moon Live in the Sky",
    origin: "Nigeria",
    region: "West Africa",
    culture: "Igbo",
    description:
      "Long ago, the Sun and the Moon lived on Earth among the people. But when their friendship with water brings an unexpected flood, they are forced to rise into the heavens.",
    moral: "Sometimes the greatest gifts come from letting go.",
    readingTime: "3 min",
  },
  {
    id: "the-hunter-and-the-ancestors",
    title: "The Hunter Who Heard the Ancestors",
    origin: "South Africa",
    region: "Southern Africa",
    culture: "Zulu",
    description:
      "A young hunter dismisses the old stories as nonsense — until a night lost in the wilderness forces him to listen to the voices of those who came before.",
    moral: "Respect your elders; their stories carry the wisdom of a lifetime.",
    readingTime: "5 min",
    featured: true,
  },
  {
    id: "the-tortoise-and-the-birds",
    title: "The Tortoise and the Feast in the Sky",
    origin: "Nigeria",
    region: "West Africa",
    culture: "Igbo",
    description:
      "Tortoise tricks the birds into letting him borrow their feathers to fly to a great feast in the sky. But his greed and selfishness lead to a fall that changes him forever.",
    moral: "Greed, selfishness, and ingratitude bring their own downfall.",
    readingTime: "4 min",
  },
  {
    id: "water-spirit-of-the-river",
    title: "The Water Spirit of the Niger River",
    origin: "Mali",
    region: "West Africa",
    culture: "Songhai",
    description:
      "A drought-stricken village is saved by a mysterious woman who rises from the river. But her help comes with a sacred promise that must never be broken.",
    moral: "Nature provides for those who honour their promises.",
    readingTime: "4 min",
  },
  {
    id: "the-girl-who-married-a-lion",
    title: "The Girl Who Married a Lion",
    origin: "Zimbabwe",
    region: "Southern Africa",
    culture: "Shona",
    description:
      "A curious young woman follows a mysterious stranger into the wilderness, only to discover he is a lion in human form. Their love tests the boundaries between two worlds.",
    moral: "True love requires trust, but wisdom demands seeing clearly.",
    readingTime: "5 min",
  },
  {
    id: "the-magic-drum",
    title: "The Magic Drum of the Village",
    origin: "Senegal",
    region: "West Africa",
    culture: "Wolof",
    description:
      "A poor boy discovers a magical drum that makes everyone dance when he plays it. But when a greedy chief steals it, he learns the drum only answers to a pure heart.",
    moral: "Greed cannot possess what only a pure heart can command.",
    readingTime: "3 min",
  },
  {
    id: "the-silent-queen",
    title: "The Silent Queen of Kush",
    origin: "Sudan",
    region: "Northeast Africa",
    culture: "Kushite",
    description:
      "In the ancient kingdom of Kush, a queen who has not spoken a word in years must find her voice to save her people from an invading army.",
    moral: "The voice of a leader is a weapon — use it wisely and at the right moment.",
    readingTime: "5 min",
  },
  {
    id: "the-moon-and-the-hare",
    title: "The Moon and the Hare",
    origin: "Tanzania",
    region: "East Africa",
    culture: "Swahili",
    description:
      "The Moon chooses a companion to travel with her across the night sky. The hare, kind and humble, is chosen — and to this day, you can see his shape in the moon.",
    moral: "Kindness and humility are remembered long after strength is forgotten.",
    readingTime: "3 min",
  },
  {
    id: "the-chiefs-daughters",
    title: "The Chief's Two Daughters",
    origin: "Ethiopia",
    region: "Northeast Africa",
    culture: "Amhara",
    description:
      "A chief sends his two daughters on a journey to prove their worth. One is proud and selfish, the other humble and generous. The river crossing reveals their true natures.",
    moral: "Humility and generosity are the true marks of nobility.",
    readingTime: "4 min",
  },
  {
    id: "the-secret-of-fire",
    title: "The Secret of Fire",
    origin: "DRC",
    region: "Central Africa",
    culture: "Kongo",
    description:
      "In the beginning, only the gods had fire. A brave young woman ventures to the top of the sacred mountain to steal it for her people — and pays a great price for their warmth.",
    moral: "Courage and sacrifice light the way for all of humanity.",
    readingTime: "4 min",
  },
];

export const featuredFolktales = folktales.filter((f) => f.featured);
export const getFolktaleById = (id: string) =>
  folktales.find((f) => f.id === id);