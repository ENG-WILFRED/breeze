-- Enable PostGIS extension for geographic calculations
CREATE EXTENSION postgis;

-- Restaurants table
CREATE TABLE vendors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50), -- e.g., 'Seafood', 'Swahili Dishes'
    location GEOGRAPHY(POINT) -- Stores Longitude/Latitude
);

-- Orders table with specific Kilifi-context fields
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    order_details JSONB,
    -- Location can be a specific coordinate (for the beach) 
    -- or a general point (for Kilifi Town/Mtwapa)
    delivery_point GEOGRAPHY(POINT) NOT NULL,
    delivery_address_note TEXT, -- e.g., "Near Silver Palm Resort"
    sub_county VARCHAR(50), -- Kilifi North, Kilifi South, Magarini, etc.
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for fast distance calculations (Essential for 'Find nearest' logic)
CREATE INDEX vendor_location_idx ON vendors USING GIST (location);


