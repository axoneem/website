import type { Config } from 'postcss-load-config'

const config: Config = {
  plugins: {
          cssnano: {
            preset: [
              'default',
              {
                // Preserve CSS custom properties (CSS variables)
                cssDeclarationSorter: false,
                // Don't remove unused CSS (handled by other tools if needed)
                discardUnused: false,
                // Merge longhand properties into shorthand when possible
                mergeIdents: false,
                // Reduce calc() expressions
                calc: true,
                // Optimize z-index values
                zindex: false,
                // Safe minification options
                normalizeWhitespace: true,
                colormin: true,
                minifySelectors: true,
                minifyFontValues: true,
                normalizeUrl: true,
              },
            ],
          },
        }
}

export default config 