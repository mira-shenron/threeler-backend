const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getBoard, getBoards, deleteBoard, updateBoard, addBoard} = require('./board.controller')
const router = express.Router()

// middleware that is specific to this router
//router.use(requireAuth)

router.get('/', getBoards)
router.get('/:id', getBoard)
router.put('/:id', updateBoard)
router.delete('/:id', deleteBoard)
router.post('/', addBoard)
// router.put('/:id',  requireAuth, requireAdmin, updateBoard)
// router.delete('/:id',  requireAuth, requireAdmin, deleteBoard)
// router.post('/',  requireAuth, requireAdmin, addBoard)


module.exports = router