#
👗 Personalized Style Assistant
###
24bce0786
A modern, responsive React application that serves as a digital fashion consultant. Users can build outfit combinations, evaluate color harmony for specific occasions, and receive tailored accessory recommendations.

Developed by: Vidushi Negi (24BCE0786)
#
✨ Features#
Outfit Evaluator: An interactive interface where users can select clothing items, colors (Black, White, Blue, Red, Pink, Beige, Green), and occasions to receive a compatibility rating.
###
Accessory Recommendations: Provides automated suggestions for accessories based on the selected outfit and occasion.

Style Tips Hub: A dedicated section offering fashion advice and "Pro-Tips" for elevating personal style.

Responsive Design: Optimized for all screen sizes, from large desktops to mobile devices, using CSS Grid and Flexbox.

Glassmorphic UI: A premium aesthetic featuring backdrop blurs, radial gradients, and soft pastel color palettes.

Developer Portfolio: Integration of a personal portfolio and about section to showcase the developer's information.
#
🛠️ Tech Stack
###
Frontend Library: React.js

Routing: React Router DOM (v6+)

Styling: CSS3 (Custom properties, Gradients, Media Queries, and Glassmorphism)

Icons/Images: Emoji-based visual cues and CSS-based components.
#

📂 Project Structure
```
Plaintext
src/
├── components/
│   └── Navbar.js         # Navigation component with sticky positioning
├── pages/
│   ├── HomePage.js       # Landing page with project overview
│   ├── EvaluatePage.js   # Main outfit builder and evaluation logic
│   ├── StyleTipsPage.js  # Grid of fashion tips and banners
│   ├── AboutPage.js      # Information about the application
│   └── PortfolioPage.js  # Developer's professional showcase
├── App.js                # Main application component & routing logic
├── App.css               # Global styles and component-specific styling
├── index.js              # Entry point for the React application
└── index.css             # Base resets and global box-sizing
```