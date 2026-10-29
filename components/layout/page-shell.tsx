import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { AmbientLayer } from "@/components/autoelevate/ambient-layer";

type PageShellProps = {
  children: React.ReactNode;
};

export const PageShell = ({ children }: PageShellProps): React.ReactElement => (
  <>
    <AmbientLayer />
    <SiteNav variant="inner" />
    <main id="main-content" className="inner-main">
      {children}
    </main>
    <SiteFooter variant="inner" />
  </>
);
