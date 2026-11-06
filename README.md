# M. Arhab Ahamed - Personal Portfolio Website

A modern, responsive, developer-themed personal portfolio website built for **M. Arhab Ahamed**, Physical Science undergraduate at the **South Eastern University of Sri Lanka (SEUSL)** and Bachelor of Information Technology (BIT - External) undergraduate at the **University of Moratuwa**.

Designed with a crisp **white and blue professional theme**, modern typography, smooth animations, an interactive code editor mockup, and mobile-friendly layouts.

---

## 🚀 Live Preview & Features

- **Professional White & Blue Palette**: High-contrast, clean slate typography, subtle shadows, and royal blue accents.
- **Interactive Developer Hero Section**:
  - Dynamic typewriter effect cycling through developer roles.
  - Realistic VS Code style code editor illustration with macOS controls, file tabs, line numbers, and syntax highlighting.
  - One-click **"Copy Code"** button with real-time feedback.
  - Floating academic & tech stack badges.
- **About Me**:
  - Highlights dual academic pathways (Physical Science at SEUSL + BIT External at UoM).
  - Analytical and software engineering core pillars.
  - Quick-facts card with location and contact details.
- **Technical Skills**:
  - **HTML5**, **CSS3**, **JavaScript (ES6+)**, **Java**, and **Python**.
  - Supporting developer tools (Git, GitHub, VS Code, Terminal).
  - Visual competency meters and feature tags.
- **Featured Projects**:
  - *Student Academic & Grade Management System* (Java, OOP)
  - *Computational Physics & Math Solver Toolkit* (Python, Algorithms)
  - *Modern Developer Showcase Portfolio* (HTML5, CSS3, JavaScript)
  - *Study Planner & Productivity Tracker* (JavaScript, LocalStorage)
  - Interactive hover animations, tags, GitHub repository links, and demo buttons.
- **Education Timeline**:
  - Dual-track academic cards for **SEUSL** and **University of Moratuwa**.
  - Degree titles, undergraduate status badges, and key module highlights.
- **Interactive Contact Section**:
  - Direct email card with a 1-click **"Copy Email"** button.
  - **"Send Direct Email"** mailto trigger.
  - Responsive contact form with live input validation (Name, Email, Subject, Message) and friendly feedback alerts.
  - Social profile links for **LinkedIn** and **GitHub**.
- **Responsive Navigation & Footer**:
  - Sticky glassmorphic navbar with active section scroll-spy.
  - Mobile hamburger slide-down drawer.
  - Back-to-top floating button.

---

## 📂 Project Structure

```text
Arhab-Portfolio/
├── index.html        # Semantic HTML5 markup, structured sections, and meta tags
├── style.css         # Custom CSS3 styles, CSS variables, layout, animations & responsive media queries
├── script.js         # Vanilla JavaScript (mobile drawer, typewriter, copy handlers, form validation)
└── README.md         # Documentation & local setup instructions
```

---

## 💻 How to Run the Website Locally

You can run this website on your local computer using any of the following simple methods:

### Method 1: Double-Click (Easiest - No Installation Needed)
1. Navigate to the folder:
   `c:\Users\Asus\OneDrive\Desktop\portfolio\Arhab-Portfolio`
2. Double-click `index.html` to open it in your default web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, etc.).

---

### Method 2: VS Code "Live Server" Extension (Recommended for Development)
1. Open Visual Studio Code.
2. Go to **File** -> **Open Folder...** and select `Arhab-Portfolio`.
3. Install the **Live Server** extension by *Ritwick Dey* (from the Extensions tab `Ctrl + Shift + X`).
4. Right-click `index.html` and choose **"Open with Live Server"** (or click **Go Live** at the bottom-right status bar).
5. Your browser will automatically open at `http://127.0.0.1:5500/`. Any changes saved in the code will hot-reload immediately!

---

### Method 3: Using Python Built-in HTTP Server
If you have Python installed:
1. Open PowerShell or Command Prompt.
2. Change into the project directory:
   ```powershell
   cd "c:\Users\Asus\OneDrive\Desktop\portfolio\Arhab-Portfolio"
   ```
3. Run the local server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and visit:
   ```
   http://localhost:8000
   ```

---

### Method 4: Using Node.js `npx serve` or `http-server`
If you have Node.js installed:
```powershell
cd "c:\Users\Asus\OneDrive\Desktop\portfolio\Arhab-Portfolio"
npx serve .
```

---

## ⚙️ Customization & Personalization

1. **Add Your Profile Picture**:
   - Simply copy your photo into the `images/` folder and name it **`profile.jpg`** (or `profile.png`).
   - The website will automatically detect and display your photo inside both:
     - The **About Me** section (in a crisp circular card with blue glowing borders and developer badge).
     - The **Hero** greeting badge (as a mini avatar next to the active status dot).
   - If no image is provided yet, it will automatically fallback to the modern SVG developer illustration provided in `images/profile.svg`.

2. **Profile Links & Email**:
   - In `index.html`, replace placeholders:
     - `https://github.com/arhab-ahamed` with your actual GitHub username.
     - `https://linkedin.com/in/arhab-ahamed` with your actual LinkedIn profile handle.
     - `arhab.ahamed@example.com` with your active email address.
   - In `script.js` (line 197), update the email string in `copyEmailBtn` to match your actual email.

3. **Color Palette & Theme**:
   - In `style.css`, customize the CSS variables under `:root` (e.g. `--blue-600`, `--blue-800`, etc.) to adjust shades of blue to your preference.

4. **Projects**:
   - Add new cards or edit descriptions inside `<section class="section projects-section" id="projects">` in `index.html`.

---

## 📄 License
This portfolio template is open for personal use and portfolio customization.
