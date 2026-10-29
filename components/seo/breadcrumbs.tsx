import Link from "next/link";

import type { BreadcrumbItem } from "@/lib/structured-data";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({
  items,
}: BreadcrumbsProps): React.ReactElement => (
  <nav className="breadcrumbs" aria-label="Breadcrumb">
    <ol className="breadcrumbs-list">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.path}-${item.name}`} className="breadcrumbs-item">
            {isLast ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
