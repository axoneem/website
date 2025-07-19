import React from 'react';
import paperStyles from '../styles/components/Paper.module.scss';
import clsx from 'clsx';

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  elevation?: number;
  square?: boolean;
}

export function Paper(props: PaperProps) {
  const {
    children,
    className,
    component,
    ...rest
  } = props;

  const Component = component ?? 'div';

  return (
    <Component
      className={clsx(paperStyles.root, className, paperStyles[`elevation${1}`])}
      {...rest}
    >
      {children}
    </Component>
  );
} 