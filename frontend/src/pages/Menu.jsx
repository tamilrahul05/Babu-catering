import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { menuAPI } from '../services/api';

// Sub-components
import MenuHero from '../components/menu/MenuHero';
import CategoryCards from '../components/menu/CategoryCards';
import BuildPlate from '../components/menu/BuildPlate';
import LeafShowcase from '../components/menu/LeafShowcase';
import FAQ from '../components/menu/FAQ';

const Menu = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showLeafPreview, setShowLeafPreview] = useState(false);
  const [menuData, setMenuData] = useState({ Veg: [], 'Non-Veg': [], 'Special Event': [] });

  // Individual dishes for "Build Your Own Plate"
  const dishDatabase = {
    Veg: [
      { id: 101, name: 'Traditional Ponni Rice', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400' },
      { id: 102, name: 'Spicy Sambar', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },
      { id: 103, name: 'Garlic Rasam', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400' },
      { id: 104, name: 'Carrot Poriyal', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 105, name: 'Gobi Manchurian', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400' },
      { id: 106, name: 'Elaneer Payasam', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400' },
      { id: 107, name: 'Curd / Buttermilk', img: 'https://images.unsplash.com/photo-1552689486-f6773047d19f?w=400' },
      { id: 108, name: 'Assorted Pickle', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400' }
    ],
    'Non-Veg': [
      { id: 201, name: 'Seeraga Samba Mutton Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400' },
      { id: 202, name: 'Chicken 65 (Boneless)', img: 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=400' },
      { id: 203, name: 'Madurai Mutton Chukka', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400' },
      { id: 204, name: 'Fish Fry (Vanjaram)', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
      { id: 205, name: 'Egg Masala', img: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400' },
      { id: 206, name: 'Chicken Gravy', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400' }
    ],
    'Special Event': [
      { id: 301, name: 'Welcome Drink (Rose Milk)', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
      { id: 302, name: 'Premium Veg Buffet', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
      { id: 303, name: 'Assorted Sweets (5 types)', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400' },
      { id: 304, name: 'Ice Cream Stall', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=400' }
    ]
  };

  const categoriesConfig = [
    { id: 'Veg', title: 'Vegetarian Feast', img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800' },
    { id: 'Non-Veg', title: 'Non-Veg Delights', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800' },
    { id: 'Special Event', title: 'Grand Celebrations', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800' }
  ];

  const toggleItem = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleBooking = () => {
    const customPlate = {
      name: `Custom ${categoryId} Plate`,
      price: selectedItems.length * 50,
      description: selectedItems.map(i => i.name).join(', '),
      category: categoryId
    };
    navigate('/booking', { state: { selectedPlan: customPlate } });
  };

  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {!categoryId ? (
          <div key="selection-view" className="flex flex-col">
            <MenuHero />
            <CategoryCards categoriesConfig={categoriesConfig} />
            <FAQ />
          </div>
        ) : (
          <div key="build-view">
            <BuildPlate 
              categoryId={categoryId}
              dishDatabase={dishDatabase}
              selectedItems={selectedItems}
              toggleItem={toggleItem}
              setShowLeafPreview={setShowLeafPreview}
            />
            <LeafShowcase 
              showLeafPreview={showLeafPreview}
              setShowLeafPreview={setShowLeafPreview}
              categoryId={categoryId}
              selectedItems={selectedItems}
              handleBooking={handleBooking}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
