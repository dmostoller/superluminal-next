# Superluminal Website

A modern, responsive website built with Next.js for Superluminal - a psychedelic trance music project. The site showcases music releases, videos, learning resources, and more.

![Superluminal Website](public/sl5.jpg)

## Features

- 🎵 Music Release Browser with streaming previews
- 🎥 Video Section with tutorials and performances
- 📚 Learning Platform for music production
- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Server-side rendering and static generation
- 🔍 Dynamic search functionality
- 🗃️ PostgreSQL database integration

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Authentication**: Built-in Next.js authentication
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/superluminal-website.git
cd superluminal-website
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/superluminal"
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_YOUTUBE_API_KEY="your_youtube_api_key"
```

4. Set up the database:

```bash
npm run prisma generate
npm run prisma db push
```

5. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/         # Reusable components
│   ├── lib/               # Utility functions and configs
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── providers/        # React context providers
├── public/              # Static assets
├── prisma/             # Database schema and migrations
└── components.json    # shadcn/ui configuration
```

## Key Features Explained

### Music Release System

- Infinite scroll implementation for releases
- Dynamic filtering by artist
- Audio preview integration
- Sharing functionality

### Learning Platform

- Course catalog with rich media support
- Interactive tutorials integration
- Contact form for private lessons
- Testimonials carousel

### Video Integration

- YouTube playlist integration
- Custom video player
- Performance optimizations

### Design System

- Custom theme implementation
- Consistent component library
- Responsive design patterns
- Accessibility considerations

### Performance Optimizations

- Image optimization with Next.js Image component
- Dynamic imports for heavy components
- Server-side rendering where beneficial
- Efficient data fetching with React Query
- Asset preloading for critical resources

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - @yourusername
Project Link: https://github.com/yourusername/superluminal-website

## Acknowledgments

- shadcn/ui for the excellent component library
- Vercel for hosting
- TanStack Query for data fetching
- Prisma for database management

Built with ❤️ using Next.js and TypeScript
