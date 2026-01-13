import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: boolean;
  component?: React.ElementType;
  style?: React.CSSProperties;
}

export function Container({ children, className = '', maxWidth = true, component: Component = 'div', style }: ContainerProps) {
  return (
    <Component className={`Container w-full ${maxWidth ? 'max-w-7xl mx-auto' : ''} px-6 lg:px-8 ${className}`} style={style}>
      {children}
    </Component>
  );
} 