const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', menuController.getAllMenuItems);
router.post('/', auth, admin, menuController.addMenuItem);
router.put('/:id', auth, admin, menuController.updateMenuItem);
router.delete('/:id', auth, admin, menuController.deleteMenuItem);

module.exports = router;
