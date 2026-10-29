import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConceptDetailPage } from "@/components/pages/concept-detail";
import {
  getAutomotiveConcept,
  getConceptSlugs,
} from "@/data/portfolio";
import { SITE_CONFIG } from "@/data/site-config";
import { buildPageMetadata } from "@/lib/seo";
import { primaryNicheLabel } from "@/lib/portfolio-labels";

type ConceptPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = (): { slug: string }[] =>
  getConceptSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: ConceptPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const concept = getAutomotiveConcept(slug);
  if (!concept) {
    return { title: "Concept not found" };
  }

  const niche = primaryNicheLabel(concept);
  const locationBit = concept.location ? ` (${concept.location})` : "";
  const title = `${concept.name}${locationBit} Website Concept`;
  const description = concept.detail.metaDescription;
  const ogImage = concept.screenshot ?? SITE_CONFIG.ogImage;

  return buildPageMetadata(
    {
      path: concept.href,
      title,
      description,
      primaryKeyword: `${niche} website concept`,
      h1: concept.name,
    },
    { ogImage },
  );
};

export default async function WorkConceptPage({
  params,
}: ConceptPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const concept = getAutomotiveConcept(slug);
  if (!concept) {
    notFound();
  }

  return <ConceptDetailPage concept={concept} />;
}
