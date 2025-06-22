# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev` - Start development server with Turbopack
- **Build**: `npm run build` - Create production build
- **Lint**: `npm run lint` - Run ESLint checks
- **Production**: `npm start` - Start production server (requires build first)

## Architecture

This is a **Ben Leichter portfolio website** built with Next.js 15, TypeScript, and Tailwind CSS. The architecture uses a **JSON-based content management system** for easy project updates without code changes.

### Content Management System

The portfolio uses a lightweight CMS approach with JSON files:

- **Data Layer**: `src/data/` contains JSON files for projects
  - `engineering-projects.json` - Software engineering projects
  - `music-projects.json` - Music production projects
- **Type Safety**: `src/types/projects.ts` defines TypeScript interfaces
- **Data Access**: `src/lib/projects.ts` provides utility functions for loading and filtering projects

### Component Architecture

- **Modular Design**: Each component is in its own file under `src/components/`
- **Section Components**: Hero, EngineeringSection, MusicSection, ContactSection
- **Card Components**: ProjectCard (engineering), MusicCard (music) for project display
- **Navigation**: Responsive navigation with mobile hamburger menu

### Key Design Patterns

1. **JSON-driven Content**: Projects are managed via JSON files, not hardcoded in components
2. **Dual Portfolio**: Separate sections for software engineering and music projects with different styling
3. **Type-safe Data Flow**: TypeScript interfaces ensure data consistency between JSON and components
4. **Responsive Design**: Tailwind CSS with mobile-first approach and responsive breakpoints

### Project Data Structure

Engineering projects include: title, description, technologies, URLs, dates, featured flag
Music projects include: title, description, genre, tools, audio platform links, duration, project type

To add new projects, edit the JSON files in `src/data/` - changes appear immediately in development mode.