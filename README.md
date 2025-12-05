# SaaSpal - SaaS Landing Page with Express.js

A modern, responsive SaaS landing page built with Node.js, Express, and EJS templating. This project demonstrates a dynamic web application structure deployed on Netlify using Serverless Functions.

## 🚀 Features

*   **Dynamic Routing:** Express.js handles routing for Home, Pricing, and Checkout pages.
*   **Templating Engine:** Uses EJS (Embedded JavaScript) for modular views and dynamic content rendering.
*   **Data Driven:** Pricing plans are loaded dynamically from a JSON data source.
*   **Responsive Design:** Built with Bootstrap 5 for a mobile-first approach.
*   **Serverless Ready:** Configured to run on Netlify Functions using `serverless-http`.

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Templating:** EJS
*   **Styling:** CSS3, Bootstrap 5
*   **Deployment:** Netlify (Serverless Functions)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd ExpressProj.js
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run locally**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## ☁️ Deployment

This project is configured for deployment on **Netlify**.

1.  Connect your GitHub repository to Netlify.
2.  Netlify will automatically detect the `netlify.toml` configuration.
3.  The build command and publish directory are handled automatically.

## 📂 Project Structure

```
├── data/               # JSON data files (e.g., pricings.json)
├── functions/          # Serverless function entry point (api.js)
├── public/             # Static assets (CSS, Images, JS)
├── src/
│   ├── router/         # Express routers
│   └── views/          # EJS templates
├── app.js              # Main Express application
└── netlify.toml        # Netlify configuration
```

## 📝 License

This project is open source and available under the [ISC License](LICENSE).
