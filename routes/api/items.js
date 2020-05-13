const express = require("express");
const Item = require("../../models/item");
const router = express.Router();


router.get("/", async (req, res) => {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
});

router.post("/", async (req, res) => {
    const item = await new Item({ name: req.body.name });
    try {
        const newItem = await item.save();
        res.json(newItem);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    try {
        if (!item) return res.json({ message: "Cannot find item!" });
        await item.remove();
        res.json({ message: "Item has deleted!" });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});






module.exports = router;













