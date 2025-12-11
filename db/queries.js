const pool = require("./pool");

async function getAllMessages() {
  const {rows} = await pool.query("SELECT * FROM messages");
  return rows;
}


async function insertMessage(message) {
  await pool.query(`INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3)`, [message.text, message.user, message.added]);
}

async function getMessage(message_id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1",
    [message_id]
  );
  return rows[0];
}

async function deleteAllMessages() {
  await pool.query("DELETE FROM messages");
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
  deleteAllMessages
};