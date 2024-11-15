export type Service = {
  documentId: string;
  title: string;
  shortDescription: string;
  introduction: string;
  badge: string;
  estimatedTime: string;
  clientSatisfaction: string;
  rating: string;
  cost: string;
  content: string;
  createdAt: string;
  slug: string;
  cover: string;
};

export type DisplayCardProps = {
  title: string;
  shortDescription: string;
  badge: string;
  slug: string;
  cover: string;
};

export type DisplayCardAdaptiveProps = {
  title: string;
  shortDescription: string;
  badge: string;
  slug: string;
  cover: string;
};
