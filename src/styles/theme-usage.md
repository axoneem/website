# Theme Usage Guide

This theme module provides functions for consistent spacing and breakpoints throughout your SCSS files.

## Setup

Import the theme in your SCSS file:

```scss
@import '../theme.scss';
```

## Spacing Function

Use `spacing()` to get consistent spacing values:

```scss
.example {
  padding: spacing(4);           // 1rem
  margin-left: spacing(6);       // 1.5rem
  margin-right: spacing(8);      // 2rem
  gap: spacing(2);              // 0.5rem
}
```

### Available Spacing Values
- `spacing(0)` ? 0
- `spacing(1)` ? 0.25rem
- `spacing(2)` ? 0.5rem
- `spacing(3)` ? 0.75rem
- `spacing(4)` ? 1rem
- `spacing(5)` ? 1.25rem
- `spacing(6)` ? 1.5rem
- `spacing(8)` ? 2rem
- `spacing(10)` ? 2.5rem
- `spacing(12)` ? 3rem
- And more... (see theme.scss for full list)

## Breakpoint Function

Use `breakpoint()` to get consistent breakpoint values:

```scss
.example {
  max-width: breakpoint(7xl);    // 80rem
  
  @media (min-width: breakpoint(lg)) {
    padding: spacing(8);
  }
}
```

### Available Breakpoints
- `breakpoint(sm)` ? 640px
- `breakpoint(md)` ? 768px
- `breakpoint(lg)` ? 1024px
- `breakpoint(xl)` ? 1280px
- `breakpoint(2xl)` ? 1536px
- `breakpoint(7xl)` ? 80rem

## Responsive Mixin

Use the `responsive()` mixin for cleaner responsive code:

```scss
.example {
  padding: spacing(4);
  
  @include responsive(md) {
    padding: spacing(6);
  }
  
  @include responsive(lg) {
    padding: spacing(8);
  }
}
```

## Example Usage

```scss
@import '../theme.scss';

.container {
  max-width: breakpoint(7xl);
  margin: 0 auto;
  padding: spacing(6);
  
  @include responsive(lg) {
    padding: spacing(8);
  }
}

.card {
  padding: spacing(4);
  margin-bottom: spacing(6);
  border-radius: spacing(2);
  
  @include responsive(md) {
    padding: spacing(6);
  }
}
``` 