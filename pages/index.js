import React, { useState, useEffect } from 'react';

const CoastalDelivery = () => {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/vendors');
                if (!response.ok) throw new Error('Failed to fetch vendors');
                const data = await response.json();
                setVendors(data);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching vendors:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchVendors();
    }, []);

    return (
        <div className="container-main">
            {/* Navigation */}
            <nav>
                <div className="logo">
                    <div className="logo-icon">🌊</div>
                    <span className="logo-text">Breeze</span>
                </div>

                <div className="nav-links">
                    <a href="#">Restaurants</a>
                    <a href="#">Beach Rentals</a>
                    <a href="#">Offers</a>
                </div>

                <div className="nav-icons">
                    <button className="icon-btn">
                        🔍
                    </button>
                    <div className="cart-badge icon-btn">
                        🛍️
                        <span className="cart-badge-number">2</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-section-inner">
                    <div className="hero-grid">
                        <div className="hero-text">
                            <span>Fresh & Local</span>
                            <h1>
                                Coastal flavors <br />
                                <span className="italic-serif">delivered to your towel.</span>
                            </h1>
                            <div className="search-box">
                                <div className="search-input-wrapper">
                                    <span style={{ fontSize: '1.25rem' }}>📍</span>
                                    <input
                                        type="text"
                                        placeholder="Enter beach or hotel name..."
                                    />
                                </div>
                                <button className="search-button">
                                    Find Food
                                </button>
                            </div>
                        </div>

                        <div className="hero-image">
                            <div className="image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800"
                                    alt="Seafood Platter"
                                />
                            </div>
                            <div className="rating-card">
                                <div className="rating-number">4.9</div>
                                <div className="rating-text">
                                    <p>Fastest Catch</p>
                                    <p>Top rated in Malibu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories-section">
                <div className="categories-container">
                    <h2>Ride the wave of flavor</h2>
                    <div className="category-buttons no-scrollbar">
                        {['Poke Bowls', 'Oysters', 'Acai', 'Iced Coffee', 'Local Beer'].map((item) => (
                            <button key={item} className="category-btn">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vendors Section */}
            <section className="vendors-section">
                <div className="vendors-container">
                    <h2>Recommended Vendors</h2>
                    {loading && <div className="loading">Loading vendors...</div>}
                    {error && <div className="error">Error: {error}</div>}
                    {!loading && !error && (
                        <div className="vendors-grid">
                            {vendors.map((vendor) => (
                                <div key={vendor.id} className="vendor-card">
                                    <div className="vendor-card-header">
                                        <div className="vendor-card-name">{vendor.name}</div>
                                        <div className="vendor-card-category">{vendor.category}</div>
                                    </div>
                                    <div className="vendor-card-body">
                                        <div className="vendor-location">
                                            📍 Lat: {vendor.latitude.toFixed(4)}, Lng: {vendor.longitude.toFixed(4)}
                                        </div>
                                        <button className="vendor-button">View Menu</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CoastalDelivery;
