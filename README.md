<img src="https://res.cloudinary.com/dun4i32pe/image/upload/v1761040261/b_1589x396_gu4we9.jpg" />

# Frontal Brand Kit

A React component library providing official Frontal brand assets including the company mark and wordmark.

## Overview

This package contains the official Frontal brand assets as React components, ensuring consistent branding across all Frontal applications and products.

## Installation

```bash
pnpm add @frontal/brand-kit
```

## Components

### FrontalMark

The Frontal company mark - a geometric logo symbol.

```tsx
import { FrontalMark } from '@frontal/brand-kit';

function App() {
  return (
    <div>
      {/* Default size (22x22) */}
      <FrontalMark />
      
      {/* Custom size */}
      <FrontalMark width={44} height={44} />
      
      {/* With custom styling */}
      <FrontalMark className="text-blue-600" />
    </div>
  );
}
```

**Props:**
- Extends `SVGProps<SVGSVGElement>`
- Default dimensions: 22×22 pixels
- Uses `currentColor` for fill, inheriting text color

### FrontalWordmark

The Frontal wordmark - the company name in logo form.

```tsx
import { FrontalWordmark } from '@frontal/brand-kit';

function Header() {
  return (
    <header>
      {/* Default size (77x16) */}
      <FrontalWordmark />
      
      {/* Custom size */}
      <FrontalWordmark width={154} height={32} />
      
      {/* With custom styling */}
      <FrontalWordmark className="text-gray-800" />
    </header>
  );
}
```

**Props:**
- Extends `SVGProps<SVGSVGElement>`
- Default dimensions: 77×16 pixels
- Uses `currentColor` for fill, inheriting text color

## Usage Guidelines

### Accessibility

Both components include proper ARIA labels and are marked as decorative (`aria-hidden="true"`) by default. If the logo is the primary focus or interactive, you may need to adjust the accessibility attributes.

### Styling

The components use `currentColor` for their fill, which means they will inherit the text color of their parent element. This makes them easy to style with CSS:

```css
.frontal-logo {
  color: #1f2937; /* Dark gray */
}

.frontal-logo:hover {
  color: #3b82f6; /* Blue on hover */
}
```

### Responsive Design

The components are SVG-based and scale perfectly at any size. Use CSS to make them responsive:

```css
.responsive-logo {
  width: 100%;
  height: auto;
  max-width: 200px;
}
```

## Development

### Building

```bash
pnpm build
```

### Type Checking

```bash
pnpm type-check
```

### Linting

```bash
pnpm lint
pnpm lint:fix
```

### Formatting

```bash
pnpm format
```

## License

This package is private and proprietary to Frontal Labs. See [LICENSE.md](./LICENSE.md) for details.

## CI/CD Workflows

This package includes automated GitHub Actions workflows:

### Code Check (`code-check.yml`)
- **Triggers**: Push/PR to main, master, develop branches
- **Jobs**: Linting, formatting, type checking, and build verification
- **Purpose**: Ensures code quality on every change

### Build (`build.yml`)
- **Triggers**: Push to main/master, version tags (v*), manual dispatch
- **Jobs**: Clean builds, package building, artifact upload
- **Purpose**: Creates distributable package builds

### Release (`release.yml`)
- **Triggers**: Version tags (v*), manual dispatch with version input
- **Jobs**: Version extraction, GitHub release creation, NPM publishing
- **Purpose**: Automated package releases

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this package.

### Development Workflow

1. **Fork and clone** the repository
2. **Install dependencies**: `pnpm install`
3. **Make changes** to components in `src/`
4. **Run tests**: `pnpm lint && pnpm type-check && pnpm build`
5. **Create a pull request** with a clear description

### Release Process

1. **Create a version tag**: `git tag v1.0.0`
2. **Push the tag**: `git push origin v1.0.0`
3. **GitHub Actions** will automatically:
   - Build the package
   - Create a GitHub release
   - Publish to NPM (if not private)

## Repository Structure

```
packages/brand-kit/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── src/
│   ├── index.ts            # Main exports
│   ├── mark.tsx            # FrontalMark component
│   └── wordmark.tsx        # FrontalWordmark component
├── dist/                   # Built package (generated)
├── package.json
├── tsconfig.json
├── biome.json
└── README.md
```