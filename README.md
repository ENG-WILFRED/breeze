# Breeze - Coastal Food Delivery App

A Next.js-based food delivery application for coastal areas with geolocation-based vendor discovery.

## Features

- Vendor discovery based on geolocation
- Order management system
- Responsive UI with Tailwind CSS
- PostgreSQL database with Prisma ORM
- Geolocation-based search

## Project Structure

```
├── pages/                 # Next.js pages and API routes
│   ├── api/              # API endpoints
│   │   ├── vendors.js    # Vendor endpoints
│   │   └── orders.js     # Order endpoints
│   ├── _app.js           # App wrapper
│   ├── _document.js      # Document wrapper
│   └── index.js          # Home page
├── lib/                  # Utility functions
│   └── geolocation.js    # Geolocation logic
├── prisma/              # Prisma configuration
│   ├── schema.prisma    # Database schema
│   ├── seed.js          # Database seeding
│   └── migrations/      # Database migrations
├── styles/              # CSS files
│   └── globals.css      # Global styles
├── public/              # Static assets
└── package.json         # Dependencies
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables in `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/breeze"
   ```

4. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

5. Seed the database:
   ```bash
   npm run prisma:seed
   ```

## Running the Application

### Development
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

### Production
```bash
npm run build
npm start
```

## Database

The application uses PostgreSQL with Prisma ORM. The schema includes:

- **Vendor**: Stores restaurant/vendor information with geographic coordinates
- **Order**: Stores customer orders with delivery location and status

## API Endpoints

- `GET /api/vendors` - Get list of vendors
- `GET /api/orders` - Get list of orders
- `POST /api/orders` - Update order status

## Technologies

- Next.js 14
- React 18
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Lucide React (icons)
