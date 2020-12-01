
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const collection = await dbService.getCollection('boards')
    try {
        const boards = await collection.find().toArray();
        return boards;
    } catch (err) {
        console.log('ERROR: cannot find boards')
        throw err;
    }
}

async function getById(boardId) {
    const collection = await dbService.getCollection('boards')
    try {
        const board = await collection.findOne({ '_id': ObjectId(boardId) })
        return board;
    } catch (err) {
        console.log(`ERROR: while finding toy ${boardId}`)
        throw err;
    }
}


async function remove(boardId) {
    const collection = await dbService.getCollection('boards')
    try {
        await collection.deleteOne({ '_id': ObjectId(boardId) })
    } catch (err) {
        console.log(`ERROR: cannot remove board ${boardId}`)
        throw err;
    }
}

async function update(board) {
    console.log('board----', board);
    const collection = await dbService.getCollection('boards')
    board._id = ObjectId(board._id);

    try {
        await collection.updateOne({ _id: board._id }, { $set: board })
        return board
    } catch (err) {
        console.log(`ERROR: cannot update board ${board._id}`)
        throw err;
    }
}

async function add(board) {
    const collection = await dbService.getCollection('boards')
    try {
        await collection.insertOne(board);
        return board;
    } catch (err) {
        console.log(`ERROR: cannot insert board`)
        throw err;
    }
}




