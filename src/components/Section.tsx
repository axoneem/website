import clsx from "clsx";
import sectionStyles from "@/styles/components/Section.module.scss";
import { forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  disableBleed?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  function Section(props, ref) {
    const { children, className, disableBleed, ...rest } = props;

    return (
      <section ref={ref} className={clsx(sectionStyles.root, className, { [sectionStyles.disableBleed]: disableBleed })} {...rest}>
        {children}
      </section>
    );
  }
);

export default Section;