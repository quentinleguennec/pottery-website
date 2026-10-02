export type SeriesId = "glitch" | "flowers";
export type ShapeId = "shift" | "reversal";

export interface Piece {
  slug: string;
  title: string;
  /** Temporary labels taken from the photo filenames. Replace with your glaze names. */
  glaze?: string;
  series?: SeriesId;
  shape?: ShapeId;
  /** Primary filename in src/assets/pieces. */
  image?: string;
  /** Further views of the same piece, shown on its page. */
  images?: string[];
  order: number;
}

export interface Series {
  id: SeriesId;
  title: string;
  summary: string;
  intro: string;
  /** Filename in src/assets/pieces, used on the home and work pages. */
  image?: string;
  /** Wider photograph shown at the top of the series page. */
  groupImage?: string;
}

export interface Shape {
  id: ShapeId;
  title: string;
  summary: string;
}

export const series: Series[] = [
  {
    id: "glitch",
    title: "Glitch",
    summary: "Question the nature of reality",
    intro:
      "Breaking symmetries to challenge expectations.",
    image: "ReversalWhiteAndCobalt1.jpg",
    groupImage: "ShiftTrio3Slim.jpg",
  },
  {
    id: "flowers",
    title: "Flowers",
    summary: "Add colors to your life, even in the dead of winter",
    intro:
      "Several flower designs, made to sit outside and bring color to a garden in winter.",
    image: "FlowerStarBlue2.jpg",
    groupImage: "FlowerBouquet3.jpg",
  },
];

export const shapes: Record<ShapeId, Shape> = {
  shift: {
    id: "shift",
    title: "Shift",
    summary: "",
  },
  reversal: {
    id: "reversal",
    title: "Reversal",
    summary: "",
  },
};

export const pieces: Piece[] = [
  {
    slug: "shift-splashes",
    title: "Shift",
    glaze: "Splashes",
    series: "glitch",
    shape: "shift",
    image: "ShiftSplashes1.jpg",
    order: 1,
  },
  {
    slug: "shift-floating-blue",
    title: "Shift",
    glaze: "Floating blue",
    series: "glitch",
    shape: "shift",
    image: "ShiftFloatingBlue1.jpg",
    images: ["ShiftProfile1.jpg"],
    order: 2,
  },
  {
    slug: "shift-green",
    title: "Shift",
    glaze: "Green",
    series: "glitch",
    shape: "shift",
    image: "ShiftGreen1.jpg",
    order: 3,
  },
  {
    slug: "shift-red",
    title: "Shift",
    glaze: "Red",
    series: "glitch",
    shape: "shift",
    image: "ShiftRed1.jpg",
    order: 4,
  },
  {
    slug: "shift-red-and-floating-blue",
    title: "Shift",
    glaze: "Red and floating blue",
    series: "glitch",
    shape: "shift",
    image: "ShiftRedAndFloatingBlue1.jpg",
    order: 5,
  },
  {
    slug: "shift-black-and-cobalt",
    title: "Shift",
    glaze: "Black and cobalt",
    series: "glitch",
    shape: "shift",
    image: "ShiftBlackAndCobalt1.jpg",
    order: 6,
  },

  {
    slug: "reversal-white-and-cobalt",
    title: "Reversal",
    glaze: "White and cobalt",
    series: "glitch",
    shape: "reversal",
    image: "ReversalWhiteAndCobalt1.jpg",
    order: 1,
  },
  {
    slug: "reversal-floating-blue",
    title: "Reversal",
    glaze: "Floating blue",
    series: "glitch",
    shape: "reversal",
    image: "ReversalFloatingBlue1.jpg",
    images: ["ReversalProfile1.jpg"],
    order: 2,
  },
  {
    slug: "reversal-green",
    title: "Reversal",
    glaze: "Green",
    series: "glitch",
    shape: "reversal",
    image: "ReversalGreen1.jpg",
    order: 3,
  },
  {
    slug: "reversal-red",
    title: "Reversal",
    glaze: "Red",
    series: "glitch",
    shape: "reversal",
    image: "ReversalRed1.jpg",
    order: 4,
  },

  {
    slug: "flower-calla-lily",
    title: "Calla lily",
    series: "flowers",
    image: "FlowerCatalily3.jpg",
    order: 1,
  },
  {
    slug: "flower-poppy",
    title: "Poppy",
    series: "flowers",
    image: "FlowerPoppy1.jpg",
    order: 2,
  },
  {
    slug: "flower-star-blue",
    title: "Star",
    glaze: "Blue",
    series: "flowers",
    image: "FlowerStarBlue2.jpg",
    order: 3,
  },
  {
    slug: "flower-star-yellow",
    title: "Star",
    glaze: "Yellow",
    series: "flowers",
    image: "FlowerStarYellow1.jpg",
    order: 4,
  },
  {
    slug: "flower-bee-pool",
    title: "Bee pool",
    series: "flowers",
    image: "FlowerBeePool1.jpg",
    images: ["FlowerBeePool2.jpg"],
    order: 5,
  },
  {
    slug: "flower-honeycomb",
    title: "Honeycomb",
    series: "flowers",
    image: "FlowerHoneyComb2.jpg",
    images: ["FlowerHoneyComb1.jpg"],
    order: 6,
  },

  {
    slug: "teapot-blue",
    title: "Teapot",
    glaze: "Blue",
    image: "TeapotBlue1.jpg",
    images: ["TeapotBlue2.jpg", "TeapotBlue3.jpg"],
    order: 1,
  },
  {
    slug: "jar-red",
    title: "Jar",
    glaze: "Red",
    image: "JarRed2.jpg",
    order: 2,
  },
];

export const heroImage = "ShiftProfile2.jpg";

export function getSeries(id: SeriesId): Series {
  const match = series.find((item) => item.id === id);
  if (!match) throw new Error(`Unknown series: ${id}`);
  return match;
}

export function getPiece(slug: string): Piece | undefined {
  return pieces.find((item) => item.slug === slug);
}

export function piecesInShape(shape: ShapeId): Piece[] {
  return pieces
    .filter((item) => item.shape === shape)
    .sort((a, b) => a.order - b.order);
}

export function piecesInSeries(id: SeriesId): Piece[] {
  return pieces
    .filter((item) => item.series === id)
    .sort((a, b) => a.order - b.order);
}

export function individualPieces(): Piece[] {
  return pieces
    .filter((item) => !item.series)
    .sort((a, b) => a.order - b.order);
}

export function siblingGlazes(piece: Piece): Piece[] {
  if (!piece.shape) return [];
  return piecesInShape(piece.shape).filter((item) => item.slug !== piece.slug);
}

export function pieceImages(piece: Piece): string[] {
  return [piece.image, ...(piece.images ?? [])].filter((file): file is string => Boolean(file));
}
