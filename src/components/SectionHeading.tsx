import React, { ReactNode } from "react";
import clsx from "clsx";
import sectionHeadingStyles from "@/styles/components/SectionHeading.module.scss";
import Typography from "./Typography";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  headingText: ReactNode;
  descriptionText: ReactNode;
}

export default function SectionHeading(props: SectionHeadingProps) {
  const { headingText, descriptionText, className, ...rest } = props;

  return (
    <header className={clsx(sectionHeadingStyles.root, className)} {...rest}>
      <Typography className={sectionHeadingStyles.title} variant="h2" component="h2">
        {headingText}
      </Typography>
      <Typography className={sectionHeadingStyles.description} variant="h4" component="p">
        {descriptionText}
      </Typography>
    </header>
  )
}
