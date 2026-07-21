import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// Sub-components
import MenuHero from '../components/menu/MenuHero';
import CategoryCards from '../components/menu/CategoryCards';
import BuildPlate from '../components/menu/BuildPlate';
import LeafShowcase from '../components/menu/LeafShowcase';
import FAQ from '../components/menu/FAQ';

const makeDish = (id, name, subcategory, imgUrl) => ({
  id,
  name,
  subcategory,
  img: imgUrl
});

// Individual dishes for "Build Your Own Plate" from the new menus, ordered to match the sidebar sequence
const dishDatabase = {
  Veg: [
    // 1. Stimulating Drinks
    makeDish(128, 'Live Kumbakonam Degree Coffee', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80'),
    makeDish(129, 'Assam Tea', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&q=80'),
    makeDish(130, 'Milk', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80'),
    makeDish(301, 'Sulaimani Tea', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&q=80'),
    makeDish(302, 'Herbal Tea', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&q=80'),
    makeDish(303, 'Irani Tea', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1563887530665-c040409a897e?w=500&q=80'),
    makeDish(304, 'Delhi Special Badam Milk', 'Stimulating Drinks', 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80'),

    // 2. Welcome Drinks & Fresh Juices
    makeDish(131, 'Welcome Drink (Fruit Punch)', 'Welcome Drinks', 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80'),
    makeDish(132, 'Welcome Drink (Elaneer Mojito)', 'Welcome Drinks', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80'),
    makeDish(305, 'Pineapple Fresh Juice', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1589733901241-5e5148e8945e?w=500&q=80'),
    makeDish(306, 'Watermelon Fresh Juice', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80'),
    makeDish(307, 'Grape Fresh Juice', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1596379960756-241c597573b4?w=500&q=80'),
    makeDish(308, 'Sweet Lime Fresh Juice', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&q=80'),
    makeDish(309, 'Strawberry Milkshake', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1579954115545-a95591f28bec?w=500&q=80'),
    makeDish(310, 'Butterscotch Milkshake', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(311, 'Vanilla Milkshake', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1572490122820-218b40c8908f?w=500&q=80'),
    makeDish(312, 'Anjeer Milkshake', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1598908314732-07113901949e?w=500&q=80'),
    makeDish(313, 'Pistha Milkshake', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=500&q=80'),
    makeDish(314, 'Sitafal Milkshake', 'Fresh Juice Stall', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80'),

    // 3. Starters
    makeDish(106, 'Veg Prawn 65', 'Starters', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80'),
    makeDish(107, 'Cheese Balls', 'Starters', 'https://images.unsplash.com/photo-1548340748-6d2b7d7ca280?w=500&q=80'),
    makeDish(108, 'Paneer Tikka', 'Starters', 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80'),
    makeDish(122, 'Delhi Dahi Vada', 'Starters', 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&q=80'),
    makeDish(123, 'Pineapple Pachadi', 'Starters', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),
    makeDish(315, 'Hara Bhara Kebab', 'Starters', 'https://images.unsplash.com/photo-1542553458-71a1795c7395?w=500&q=80'),
    makeDish(316, 'Veg Tandoori Chicken', 'Starters', 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80'),
    makeDish(317, 'Veg Chicken', 'Starters', 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=500&q=80'),
    makeDish(318, 'Baby Corn Fritters', 'Starters', 'https://images.unsplash.com/photo-1562059390-a761a0847685?w=500&q=80'),
    makeDish(319, 'Paruppu Vada', 'Starters', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80'),
    makeDish(320, 'Keerai Vada', 'Starters', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(321, 'Special Vada', 'Starters', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80'),
    makeDish(322, 'Paneer Sukka', 'Starters', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=500&q=80'),
    makeDish(323, 'Mini Masala Urundai', 'Starters', 'https://images.unsplash.com/photo-1542553458-71a1795c7395?w=500&q=80'),

    // 4. Roti & Breads With Accompaniments
    makeDish(118, 'Shahi Kadai Paneer', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=500&q=80'),
    makeDish(119, 'Chettinad Veg Paya', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80'),
    makeDish(124, 'Chana Masala', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(324, 'Phulka', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80'),
    makeDish(325, 'Stuffed Parotta', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&q=80'),
    makeDish(326, 'Aloo Butter Sabji', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),
    makeDish(327, 'Veg Kurma', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80'),
    makeDish(328, 'Badam Poli', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?w=500&q=80'),
    makeDish(329, 'Cashew Mushroom Thokku', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),

    // 5. South Indian Tiffin
    makeDish(113, 'Ghee Pongal', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80'),
    makeDish(114, 'Medhu Vada', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80'),
    makeDish(115, 'Thattu Idli', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(116, 'Madurai Bun Parotta', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&q=80'),
    makeDish(117, 'Palak Poori', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80'),
    makeDish(330, 'Rava Idli', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(331, 'Idli', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(332, 'Mini Uthappam', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80'),
    makeDish(333, 'Mini Masala Dosa', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(334, 'Mini Idli Sambar', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(335, 'Chola Poori', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80'),
    makeDish(336, 'Appam', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80'),
    makeDish(337, 'Idiyappam', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80'),
    makeDish(338, 'Ghee Dosa', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(339, 'Garlic Podi Dosa', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(340, 'Seeraga Samba Ghee Pongal', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80'),
    makeDish(341, 'Potato Poori', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80'),
    makeDish(342, 'Chettinad Kari Dosa (Veg)', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),
    makeDish(343, 'Kara Kuzhi Paniyaram', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&q=80'),
    makeDish(344, 'Vadacurry', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80'),

    // 6. Rice & Main Course
    makeDish(109, 'Mushroom Biryani', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),
    makeDish(110, 'Jackfruit Biryani', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80'),
    makeDish(111, 'Bisi Bele Bath', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80'),
    makeDish(112, 'Coconut Pulav', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80'),
    makeDish(120, 'Malabar Aviyal', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80'),
    makeDish(121, 'Veg Fish Curry', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&q=80'),
    makeDish(345, 'Bagala Bath (Curd Rice)', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80'),
    makeDish(346, 'Mock Biryani', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),
    makeDish(347, 'Ghee Pulav', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80'),
    makeDish(348, 'White Rice', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&q=80'),
    makeDish(349, 'Sambar', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80'),
    makeDish(350, 'Rasam', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80'),
    makeDish(351, 'Vatha Kuzhambu', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80'),
    makeDish(352, 'Thick Curd & Mor', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80'),
    makeDish(353, 'Beans Paruppu Usili', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80'),
    makeDish(354, 'Senai Kizhangu Roast (Yam)', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),
    makeDish(355, 'Veg Kootu', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80'),
    makeDish(356, 'Beans Poriyal', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80'),
    makeDish(357, 'Potato Groundnut Podi Masala', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),
    makeDish(358, 'Cucumber Curd Pachadi', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),
    makeDish(359, 'Mango Sweet Pachadi', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),
    makeDish(360, 'Kathirikai Mookadalai Puli Mandi', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&q=80'),
    makeDish(361, 'Raw Banana Chips', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1588615419843-0808a3d3c7d6?w=500&q=80'),

    // 7. Desserts & Sweets
    makeDish(101, 'Malai Roll', 'Desserts', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80'),
    makeDish(102, 'Agra Petha Peda', 'Desserts', 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80'),
    makeDish(103, 'Badam Halwa', 'Desserts', 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?w=500&q=80'),
    makeDish(104, 'Kasi Halwa', 'Desserts', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80'),
    makeDish(105, 'Elaneer Payasam', 'Desserts', 'https://images.unsplash.com/photo-1517244465804-747da2008aa9?w=500&q=80'),
    makeDish(125, 'Matka Kulfi', 'Desserts', 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=500&q=80'),
    makeDish(126, 'Pan Ice Cream', 'Desserts', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(362, 'Litchi Sweet', 'Desserts', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80'),
    makeDish(363, 'Badam Kheer', 'Desserts', 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80'),
    makeDish(364, 'Malpua', 'Desserts', 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80'),
    makeDish(365, 'Ela Ada', 'Desserts', 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80'),
    makeDish(366, 'Shahi Tukda', 'Desserts', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80'),
    makeDish(367, 'Pineapple Pudding', 'Desserts', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80'),
    makeDish(368, 'Badam Katli', 'Desserts', 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?w=500&q=80'),
    makeDish(369, 'Ghee Mysore Pak', 'Desserts', 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80'),
    makeDish(370, 'Tirupati Laddu', 'Desserts', 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80'),
    makeDish(371, 'Karuppu Kavuni Arisi Halwa', 'Desserts', 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?w=500&q=80'),
    makeDish(372, 'Palm Candy Wheat Halwa', 'Desserts', 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?w=500&q=80'),

    // 8. Ice Creams Stall
    makeDish(373, 'Vanilla Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122820-218b40c8908f?w=500&q=80'),
    makeDish(374, 'Strawberry Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1579954115545-a95591f28bec?w=500&q=80'),
    makeDish(375, 'Black Currant Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(376, 'Butter Scotch Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(377, 'Honey Nuts Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=500&q=80'),
    makeDish(378, 'Tutty Frutty Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(379, 'Kesar Pistha Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=500&q=80'),
    makeDish(380, 'Gulkandh Anjeer Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=500&q=80'),
    makeDish(381, 'Chocolate Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(382, 'Cassata Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(383, 'Avocado Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(384, 'Choco Vanilla Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(385, 'Malai Kulfi', 'Ice Creams', 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=500&q=80'),
    makeDish(386, 'Orange Duet Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(387, 'Mango Duet Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(388, 'Raspberry Duet Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(389, 'Chocobar', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(390, 'Blueberry Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(391, 'Mini Falooda', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(392, 'Roller Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(393, 'Stone Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(394, 'Fried Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(395, 'Sandwich Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(396, 'Thai Tava Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(397, 'Real Orange Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(398, 'Real Mango Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(399, 'Custard Apple Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),
    makeDish(400, 'Jackfruit Ice Cream', 'Ice Creams', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80'),

    // 9. Chaat Stall
    makeDish(401, 'Pav Bhaji', 'Chaat Stall', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(402, 'Kachori', 'Chaat Stall', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(403, 'Pani Puri', 'Chaat Stall', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(404, 'Dahi Puri', 'Chaat Stall', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(405, 'Bhel Puri', 'Chaat Stall', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),
    makeDish(406, 'Dahi Papdi Chaat', 'Chaat Stall', 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80'),

    // 10. Live Stalls & Snacks
    makeDish(407, 'Popcorn', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80'),
    makeDish(408, 'Cotton Candy', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80'),
    makeDish(409, 'Chocolate Fountain', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80'),
    makeDish(410, 'Lassi Stall', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80'),
    makeDish(411, 'Italian Pasta', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),
    makeDish(412, 'Spring Potato', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80'),
    makeDish(413, 'Pizza Stall', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80'),
    makeDish(414, 'Burger Stall', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80'),
    makeDish(415, 'Sandwich Stall', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80'),
    makeDish(416, 'Malaysian Laksa Soup', 'Soup Stall', 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80'),
    makeDish(417, 'Mongolian Fried Rice', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),
    makeDish(418, 'Mongolian Noodles', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),
    makeDish(419, 'French Fries', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80'),
    makeDish(420, 'Lotus Stem Fries', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80'),
    makeDish(421, 'Kunafa', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80'),
    makeDish(422, 'Waffles', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80'),
    makeDish(423, 'Baklava', 'Evening Snacks Stall', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80'),

    // 11. Thamboolam Bags
    makeDish(127, 'Thamboolam Bag', 'Thamboolam Bags', 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=500&q=80')
  ],
  'Non-Veg': [
    // 1. Soup Stall
    makeDish(205, 'Chettinad Mutton Soup', 'Soup Stall', 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80'),

    // 2. Starters
    makeDish(211, 'Chicken 65 (Boneless)', 'Starters', 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=500&q=80'),
    makeDish(212, 'Chicken Lollipop', 'Starters', 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&q=80'),
    makeDish(213, 'Tandoori Chicken', 'Starters', 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80'),
    makeDish(214, 'Peri Peri Chicken', 'Starters', 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80'),
    makeDish(215, 'Hariyali Chicken Tikka', 'Starters', 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80'),
    makeDish(216, 'Mutton Kola Urundai', 'Starters', 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&q=80'),
    makeDish(217, 'Pichu Potta Kozhi Varuval', 'Starters', 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=500&q=80'),
    makeDish(218, 'Vanjaram Tawa Fish Fry', 'Starters', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80'),
    makeDish(219, 'Crab Lollipop', 'Starters', 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&q=80'),
    makeDish(220, 'Prawn 65', 'Starters', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80'),
    makeDish(221, 'Chicken Pepper Gravy', 'Starters', 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80'),
    makeDish(222, 'Chettinad Mutton Kuzhambu', 'Starters', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80'),
    makeDish(223, 'Malabar Fish Curry', 'Starters', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&q=80'),
    makeDish(224, 'Nattu Kozhi Pallipalayam', 'Starters', 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&q=80'),

    // 3. Roti With Accompaniments
    makeDish(209, 'Rumali Roti', 'Roti With Accompaniments', 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80'),

    // 4. South Indian Tiffin With Accompaniments
    makeDish(210, 'Bun Parotta', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&q=80'),
    makeDish(225, 'Madurai Kari Dosa', 'South Indian Tiffin With Accompaniments', 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80'),

    // 5. Rice With Accompaniments
    makeDish(206, 'Kongu Chicken Biryani', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80'),
    makeDish(207, 'Seeraga Samba Mutton Biryani', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&q=80'),
    makeDish(208, 'Ambur Special Mutton Biryani', 'Rice With Accompaniments', 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80'),

    // 6. Desserts
    makeDish(201, 'Bread Halwa', 'Desserts', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80'),
    makeDish(202, 'Double Ka Meetha', 'Desserts', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80'),
    makeDish(203, 'Arcot Makkan Peda', 'Desserts', 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&q=80'),
    makeDish(204, 'Rasmalai', 'Desserts', 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&q=80')
  ]
};

const Menu = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const location = useLocation();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showLeafPreview, setShowLeafPreview] = useState(false);

  useEffect(() => {
    if (categoryId && location.state?.preSelectedDishId) {
      const preSelectedId = location.state.preSelectedDishId;
      const dishes = dishDatabase[categoryId];
      const dish = dishes?.find(d => d.id === preSelectedId);
      if (dish && !selectedItems.find(i => i.id === preSelectedId)) {
        setSelectedItems(prev => [...prev, dish]);
      }
    }
  }, [categoryId, location.state]);

  const categoriesConfig = [
    { id: 'Veg', title: 'Vegetarian', img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' },
    { id: 'Non-Veg', title: 'Non Vegetarian', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' }
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
      name: `Custom ${categoryId === 'Veg' ? 'Vegetarian' : 'Non Vegetarian'} Plate`,
      price: Math.max(400, selectedItems.length * 50),
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
              showPreview={showLeafPreview}
              setShowPreview={setShowLeafPreview}
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
