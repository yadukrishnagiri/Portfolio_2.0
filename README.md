# Portfolio Project

A modern, responsive portfolio website built with Next.js 15, TypeScript, and shadcn/ui components.

## ✨ Features

- **Modern UI**: Built with shadcn/ui components and Radix UI primitives
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Dark/Light Theme**: Theme switching with next-themes
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Form Handling**: Robust forms with React Hook Form and Zod validation
- **Icons**: Beautiful icons from Lucide React and React Icons
- **Charts**: Data visualization with Recharts
- **Testing**: Unit testing setup with Vitest and Testing Library

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React, React Icons
- **Charts**: Recharts
- **Testing**: Vitest, Testing Library
- **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd port
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
port/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
├── .next/                # Next.js build output
└── node_modules/         # Dependencies
```

## 🎨 Components

This project includes a comprehensive set of shadcn/ui components:

- **Layout**: Accordion, Collapsible, Resizable Panels, Scroll Area, Separator, Tabs
- **Navigation**: Context Menu, Dropdown Menu, Hover Card, Menubar, Navigation Menu, Popover
- **Form**: Checkbox, Input OTP, Label, Radio Group, Select, Slider, Switch, Toggle
- **Feedback**: Alert Dialog, Dialog, Progress, Toast, Tooltip
- **Display**: Avatar, Aspect Ratio, Calendar, Carousel, Command, Date Picker
- **Data**: Charts (via Recharts)

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom animations and additional plugins:
- `tailwindcss-animate` for smooth animations
- `tw-animate-css` for enhanced animation utilities

### TypeScript
Full TypeScript support with strict type checking configured in `tsconfig.json`.

### ESLint
Code quality ensured with ESLint and Next.js recommended configuration.

## 🌟 Key Features

### Theme Support
Built-in dark/light theme switching powered by `next-themes`.

### Form Validation
Robust form handling with React Hook Form and Zod schema validation.

### Responsive Design
Mobile-first responsive design using Tailwind CSS utilities.

### Animations
Smooth animations and transitions using Framer Motion.

### Accessibility
Built with accessibility in mind using Radix UI primitives.

## 📝 Development

### Adding New Components
To add new shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Environment Variables
Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🧪 Testing

Run tests with:
```bash
npm run test
```

The project is configured with Vitest and Testing Library for unit testing.

## 📄 License

This project is for portfolio purposes.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📧 Contact Form Setup

The contact form supports two methods of sending emails:

### Method 1: EmailJS (Recommended for Production)

1. **Sign up for EmailJS**: Go to [https://emailjs.com](https://emailjs.com) and create a free account
2. **Create a Service**: 
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions for your email provider
   - Note down your **Service ID**

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use these variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     Message: {{message}}
     ```
   - Note down your **Template ID**

4. **Get your Public Key**:
   - Go to Account > General
   - Copy your **Public Key**

5. **Update Configuration**:
   - Open `components/ContactSection.tsx`
   - Replace the EmailJS configuration:
     ```typescript
     const EMAILJS_CONFIG = {
       serviceId: 'your_actual_service_id',
       templateId: 'your_actual_template_id', 
       publicKey: 'your_actual_public_key'
     }
     ```

### Method 2: Mailto Fallback (Default)

If EmailJS is not configured, the form will automatically use the mailto method, which opens the user's default email client with a pre-filled message.

## 🚀 Getting Started

---

Built with ❤️ using Next.js and shadcn/ui 