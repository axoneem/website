import React, { ReactNode } from 'react';
import styles from '../styles/components/Container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  disableGutters?: boolean;
  component?: React.ElementType;
  style?: React.CSSProperties;
}

export function Container(props: ContainerProps) {
  const { children, className, disableGutters, component, ...rest } = props;

  const Component = component ?? 'div';

  const containerClasses = [
    styles.root,
    disableGutters ? styles.disableGutters : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={containerClasses} {...rest}>
      {children}
    </Component>
  );
} 