import clsx from "clsx";
import sectionStyles from "@/styles/components/Section.module.scss";
import { forwardRef } from "react";

const Section = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Section(props, ref) {
    const { children, className, ...rest } = props;

    return (
      <section ref={ref} className={clsx(sectionStyles.root, className)} {...rest}>
        {children}
      </section>
    );
  }
);

export default Section;