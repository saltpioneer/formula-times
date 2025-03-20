# Formula 1 Live Timings & Telemetry Web App

Welcome to my Formula 1 Live Timings & Telemetry Web App! This is a personal project I built to explore my passion for motorsport and web development. It leverages real-time data from the OpenF1.org API to deliver live race timings, telemetry, and other exciting Formula 1 insights directly to your browser. I created this app using modern web technologies like Next.js, TypeScript, JavaScript, and Vercel, with a REST API integration to fetch and process the data.

## Features

- **Live Timings**: Real-time updates of driver positions, lap times, and session status.
- **Telemetry Data**: Visualizations of speed, throttle, brake, and gear data (where available from the API).
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **REST API Integration**: Seamless connection to the OpenF1.org API for up-to-date race information.
- **Fast & Scalable**: Deployed on Vercel for a smooth and reliable user experience.

## Tech Stack

- **Frontend**: Next.js (React framework) for server-side rendering and an optimized UI.
- **Languages**: TypeScript and JavaScript for type-safe, maintainable code.
- **API**: [OpenF1.org](https://openf1.org) REST API for live Formula 1 data.
- **Deployment**: [Vercel](http://vercel.com/) for hosting and automatic scaling.
- **Styling**: [RadixUI Themes and Radix Primitives](https://www.radix-ui.com) and CSS modules for scoped, reusable styles.

## Getting Started

Want to run this project locally or contribute to it? Follow the steps below!

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- An internet connection (to fetch live data from OpenF1.org)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/f1-live-timings.git
   cd f1-live-timings
```

1. **Install Dependencies**
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```
2. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open <http://localhost:3000> in your browser to see the app in action.

### Deployment

This app is deployed on Vercel. To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel via the dashboard.
3. Vercel will automatically build and deploy the app with zero configuration!

## API Usage

This project uses the [OpenF1.org API](https://openf1.org/), an open-source resource providing real-time Formula 1 data. The app fetches data via RESTful endpoints and processes it for display. No API key is required, but please respect their usage guidelines.

## Project Motivation

As a huge Formula 1 fan and a developer, I wanted to combine my interests into a practical, real-world application. This project allowed me to dive deep into Next.js, TypeScript, and real-time data handling while creating something I’d genuinely enjoy using during race weekends. It’s been a fun challenge to ensure the app is both functional and fast—much like the sport itself!

## Future Enhancements

- Add historical race data and comparisons.
- Improve telemetry visualizations with interactive charts.
- Implement caching for better performance during high-traffic race moments.
- Add support for multiple languages.

## Contributing

I’d love feedback or contributions! Feel free to open an issue or submit a pull request. Here’s how:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-idea`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-idea`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the <LICENSE> file for details.

## Acknowledgments

- [OpenF1.org](https://openf1.org/) for providing an awesome API.
- The Next.js and Vercel teams for their amazing tools.
- The Formula 1 community for endless inspiration.

-----

Built with 🏎️ and ☕ by Arush Mittal
Check it out live at: [formula-times.com](https:formula-times)
GitHub: [github.com/saltpioneer](https://github.com/saltpioneer)
