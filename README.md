# EditHub - AI Creator Platform

A modern, premium AI-powered content creation platform built with Next.js, React, and Tailwind CSS.

## Features

- 🎬 AI Thumbnail Generator
- ✍️ AI Caption Writer
- 🖼️ AI Image Generator
- 📊 Creator Dashboard
- 💰 Pricing Page
- 👤 User Profiles
- 🔐 Authentication System
- 📱 Mobile Responsive
- ✨ Smooth Animations
- 🌙 Dark Premium UI

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Authentication**: Next-Auth

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/navadeepmini369-cell/EditHub.git
cd EditHub
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file from `.env.example`:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
EditHub/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── dashboard/         # Creator dashboard
│   ├── thumbnail-generator/
│   ├── caption-writer/
│   ├── image-generator/
│   ├── pricing/
│   ├── profile/
│   ├── settings/
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Layout.tsx
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   └── Notifications.tsx
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## Pages

- **Home** - Landing page with hero section and features
- **Login** - User authentication
- **Signup** - Account creation
- **Dashboard** - Main creator dashboard with stats and tools
- **Thumbnail Generator** - AI-powered thumbnail creation
- **Caption Writer** - Generate captions for different platforms
- **Image Generator** - Create images from text descriptions
- **Pricing** - Subscription plans
- **Profile** - User profile management
- **Settings** - Account settings and preferences

## Color Palette

- **Dark**: `#0a0e27`
- **Darker**: `#050810`
- **Primary (Cyan)**: `#00d4ff`
- **Secondary (Purple)**: `#7c3aed`
- **Accent (Pink)**: `#ff006e`

## Building for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For support, open an issue on GitHub or contact us at support@edithub.com
