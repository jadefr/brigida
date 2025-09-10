# Brigida

A modern React-based website built with Create React App.

## 🚀 Features

- ⚛️ React 18.2.0 with modern hooks
- 🎨 React Icons for beautiful iconography
- 🛣️ React Router DOM for client-side routing
- 🧪 Testing setup with Jest and React Testing Library
- 📱 Responsive design
- ⚡ Fast development with hot reloading

## 📋 Prerequisites

- **Node.js**: >= 22.0.0 (see `.nvmrc` file)
- **npm**: Comes with Node.js

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brigida
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (⚠️ irreversible) |

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Node.js version from `package.json`
3. Deploy with zero configuration

### Other Platforms
The `build` folder contains static files that can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## 🧪 Testing

```bash
npm test
```

Runs the test suite using Jest and React Testing Library.

## 📁 Project Structure

```
brigida/
├── public/                 # Static assets
├── src/                   # Source code
├── build/                 # Production build (generated)
├── package.json           # Dependencies and scripts
├── .nvmrc                 # Node.js version specification
└── README.md             # This file
```

## 🔧 Technology Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.4.3
- **Icons**: React Icons 4.6.0
- **Testing**: Jest, React Testing Library
- **Build Tool**: Create React App
- **Node.js**: >= 22.0.0

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.