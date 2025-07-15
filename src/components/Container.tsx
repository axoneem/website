import React, { ReactNode } from 'react';
import styles from '../styles/components/Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  disableGutters?: boolean;
  component?: React.ElementType;
  style?: React.CSSProperties;
}

export function Container({ children, className = '', disableGutters = false, component: Component = 'div', style }: ContainerProps) {
  const containerClasses = [
    styles.root,
    disableGutters ? styles.disableGutters : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={`Container ${containerClasses}`} style={style}>
      {children}
    </Component>
  );
} 