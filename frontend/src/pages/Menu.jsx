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
      { id: 101, name: 'Malai raj bhog', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 102, name: 'Badam halwa', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 103, name: 'Suzhiyan', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 104, name: 'Adai pradhaman', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 105, name: 'Aval payasam', img: 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 106, name: 'Gobi 65', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 107, name: 'Parvan paneer', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 108, name: 'Vendakai cashew fry', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 109, name: 'Pineapple pachadi', img: 'https://images.unsplash.com/photo-1555244162-833832eb1c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 110, name: 'Coconut tomato pachadi', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 111, name: 'Gongura pachadi', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 112, name: 'Raitha', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 113, name: 'Potato double beans poriyal', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 114, name: 'Stuffed brinjal curry', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 115, name: 'Aviyal', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 116, name: 'Potato chips', img: 'https://images.unsplash.com/photo-1566478989037-e924e50cb7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 117, name: 'Vadaam', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 118, name: 'More milagai', img: 'https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 119, name: 'Mango pickle', img: 'https://images.unsplash.com/photo-1586511925558-a4ba62bb0d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 120, name: 'Thick curd', img: 'https://images.unsplash.com/photo-1605295982823-38038f8dbca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 121, name: 'Delhi spl curd vadai bhoondi', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 122, name: 'Methi chamman stuffed parotta', img: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 123, name: 'Coconut pulav', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 124, name: 'Puliyodharai', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 125, name: 'White rice', img: 'https://images.unsplash.com/photo-1591814448473-7052737150a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 126, name: 'Kadhamba sambhar', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 127, name: 'Vathakuzhambu', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 128, name: 'Rasam', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 129, name: 'More kulambu', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 130, name: 'Appalam', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    'Non-Veg': [
      { id: 201, name: 'Seeraga Samba Mutton Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 202, name: 'Chicken 65 (Boneless)', img: 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 203, name: 'Madurai Mutton Chukka', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 204, name: 'Fish Fry (Vanjaram)', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 205, name: 'Egg Masala', img: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 206, name: 'Chicken Gravy', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    'Special Event': [
      { id: 301, name: 'Welcome Drink (Rose Milk)', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 302, name: 'Premium Veg Buffet', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 303, name: 'Assorted Sweets (5 types)', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 304, name: 'Ice Cream Stall', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
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
    <div className="bg-zinc-950 min-h-screen">
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
