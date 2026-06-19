# 🎨 Basir Khan | MERN Full-Stack Developer Portfolio

Welcome to my personal portfolio codebase! This is a modern, responsive, and high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. It is designed with smooth micro-animations, dark/light theme support, and a premium glassmorphic UI.

---

## ✨ Features

- 📱 **iOS-Style Glassmorphism**: Transparent, blurred navigation bar that matches Apple's design language in both dark and light modes.
- 🌙 **Adaptive Dark Mode**: Quick theme toggle with local storage persistence to remember the user's preference.
- 💼 **Consolidated Career Journey**: Unified section (`Work & Freelancing`) displaying professional experience, freelance projects, and personal projects in one clean timeline.
- 🛠️ **All Projects Filtering Tabs**: Renamed the projects grid to *All Projects(Personal, Work & Free Launching)* with interactive category filter tabs (All, Work, Freelance, Personal) and a collapsible "Show More" grid.
- ⚙️ **Refactored Skill Profiles**: Structured skill cards in the About section divided cleanly into **Languages**, **Databases**, and **Frameworks & Tools**.
- 📄 **Latest Resume Download**: Directly download the most recent CV (`Bachir_Khan_MERN_Developer_1Year_US_project_19-06-2026.pdf`) from the header.
- ✉️ **Interactive Contact**: Interactive click-to-copy email chip in the footer with dynamic tooltip feedback ("Click to copy" ➔ "Copied!").
- ⚡ **Lightning Fast**: Built on Vite for near-instantaneous Hot Module Replacement (HMR) and optimized build chunks.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 18, HTML5, Tailwind CSS |
| **Build Tool** | Vite, PostCSS, Autoprefixer |
| **Fonts** | Google Fonts (Outfit, Ovo) |
| **Icons** | Custom icons & inline SVGs |

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, developer icons)
├── src/
│   ├── assets/             # Images, SVGs, and icon resources
│   ├── components/
│   │   ├── About.jsx       # Personal biography, categorized skills, and education
│   │   ├── Contact.jsx     # Contact form component
│   │   ├── Experience.jsx  # Career timeline featuring LeviSoft, Sylheti Archive, and personal projects
│   │   ├── Footer.jsx      # Clean footer with GitHub & LinkedIn links (copy email button)
│   │   ├── Header.jsx      # Hero section with avatar and CV download button
│   │   ├── Navbar.jsx      # Dynamic sticky navbar with theme switcher and scroll blur effects
│   │   └── Services.jsx    # Offerings (Web Dev, Mobile App, UI/UX, etc.)
│   ├── App.jsx             # Main application layout and routing
│   ├── index.css           # Global Tailwind directives
│   └── main.jsx            # React DOM mounting code
├── package.json            # Scripts & dependencies
└── tailwind.config.js      # Custom theme tokens & styles (e.g., darkTheme, Outfit font)
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Engineer-BK/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser to the URL displayed in your terminal (usually `http://localhost:5173`).

### Building for Production

To build the project for production, run:
```bash
npm run build
```
This generates a highly optimized production bundle in the `dist/` directory.

---

## 🔗 Profile Links

- **GitHub**: [Engineer-BK](https://github.com/Engineer-BK)
- **LinkedIn**: [Bachir Khan](https://www.linkedin.com/in/bachirkhan/)
