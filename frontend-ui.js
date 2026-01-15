import React from 'react';
import { Search, ShoppingBag, MapPin, Wind, Star } from 'lucide-react';

const CoastalDelivery = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E50] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-blue-50">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-600 p-2 rounded-full">
            <Wind className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-cyan-900">Breeze</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="hover:text-cyan-600 transition-colors">Restaurants</a>
          <a href="#" className="hover:text-cyan-600 transition-colors">Beach Rentals</a>
          <a href="#" className="hover:text-cyan-600 transition-colors">Offers</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-cyan-50 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <div className="relative p-2 hover:bg-cyan-50 rounded-full transition-colors cursor-pointer">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 bg-orange-400 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-600 font-semibold tracking-widest uppercase text-sm">Fresh & Local</span>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mt-4">
              Coastal flavors <br />
              <span className="italic font-serif">delivered to your towel.</span>
            </h1>
            <div className="mt-8 flex items-center bg-white p-2 rounded-2xl shadow-xl shadow-cyan-900/5 border border-blue-50">
              <div className="flex items-center gap-2 px-4 flex-1">
                <MapPin className="text-cyan-500" size={20} />
                <input 
                  type="text" 
                  placeholder="Enter beach or hotel name..." 
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <button className="bg-cyan-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-cyan-800 transition-all active:scale-95">
                Find Food
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[450px] bg-blue-100 rounded-[40px] overflow-hidden">
               {/* Replace with actual coastal food photography */}
               <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800" 
                alt="Seafood Platter" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-lg flex items-center gap-4 border border-blue-50">
               <div className="bg-orange-100 p-3 rounded-2xl text-orange-600 font-bold">4.9</div>
               <div>
                 <p className="font-bold">Fastest Catch</p>
                 <p className="text-sm text-gray-500 underline">Top rated in Malibu</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-12 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Ride the wave of flavor</h2>
          <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
            {['Poke Bowls', 'Oysters', 'Acai', 'Iced Coffee', 'Local Beer'].map((item) => (
              <button key={item} className="flex-shrink-0 bg-white px-8 py-4 rounded-full border border-blue-100 hover:border-cyan-400 hover:text-cyan-600 transition-all font-medium">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoastalDelivery;