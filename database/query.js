const pool = require('./pool')

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(message, user){
    await pool.query("INSERT INTO messages (message, author) VALUES ($1, $2)", [message, user])
}

module.exports = {
    getAllMessages,
    insertMessage
}