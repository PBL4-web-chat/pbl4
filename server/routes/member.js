const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Member = require('../models/Group_member');

router.post('/add', async(req, res) => {
    const { user_id, conversation_id } = req.body;

    if(!user_id || !conversation_id) {
        return res
            .status(400)
            .json({ success: false, message: "missing context" });
    }

    try {
        const user = await User.findOne({ _id: user_id })

        if(!user) {
            return res.status(400).json({ success: false, message: "user not found" });
        }

        const member = new Member({
            user: user_id,
            conversation: conversation_id,
            nickname: user.username
        });

        await member.save();

        res.status(200).json({success: true, message: "member added"})
    } catch(err) {
        res.status(500).json({ success: false, message: "unexpected error" });
    }
})

module.exports = router;