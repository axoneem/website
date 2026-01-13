import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type PolymorphicComponentProps<T extends ElementType> = {
  component?: T;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

type ButtonProps<T extends ElementType = "button"> = PolymorphicComponentProps<T>;

export default function Button<T extends ElementType = "button">(
  props: ButtonProps<T>
) {
  const { children, component, ...rest } = props;
  const Component = component || ("button" as ElementType);

  return (
    <Component className="bg-gray-100 rounded-full px-2 py-1 text-sm" {...rest}>
      {children}
    </Component>
  );
}
