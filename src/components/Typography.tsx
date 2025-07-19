import clsx from "clsx";
import { createElement, ElementType, ComponentPropsWithoutRef } from "react";
import typographyStyles from '../styles/base/typography.module.scss';
import { funnel, raleway } from '@/constants/font';

type TypographyVariant = 
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'link';

const variantTagMap: Record<TypographyVariant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    overline: 'p',
    caption: 'span',
    link: 'a'
};

// Base Typography props (without component-specific props)
interface BaseTypographyProps {
    /** The typography variant to use */
    variant?: TypographyVariant;
    /** Additional CSS class names */
    className?: string;
    /** Content to be rendered */
    children?: React.ReactNode;
}

// Polymorphic component type that accepts props based on the component
export type TypographyProps<C extends ElementType = ElementType> = BaseTypographyProps & {
    /** The HTML element or component to render */
    component?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof BaseTypographyProps>;

const typographyDefaultProps: Pick<TypographyProps, 'variant'> = {
    variant: 'body1',
}

/**
 * Typography component that renders text with predefined styles
 * Based on Material-UI typography system
 */
export default function Typography<C extends ElementType = 'p'>(
    props: TypographyProps<C>
) {
    const { variant, component, className, children, ...rest } = {
        ...typographyDefaultProps,
        ...props,
    };

    const Component = component ?? variantTagMap[variant!];

    const isHeading = ['h1', 'h2'].includes(variant!);

    return createElement(
        Component,
        {
            className: clsx(
                typographyStyles.root,
                typographyStyles[variant!],
                isHeading ? funnel.className : raleway.className,
                className
            ),
            ...rest
        },
        children
    );
}