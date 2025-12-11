#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "How's everyone doing today?",
        user: "Maria",
        added: new Date("2024-02-10T10:23:00")
    },
    {
        text: "Just finished my project!",
        user: "Liam",
        added: new Date("2024-02-11T14:45:30")
    },
    {
        text: "Anyone free to help me with Express routes?",
        user: "Sophia",
        added: new Date("2024-02-12T09:15:00")
    },
    {
        text: "Good morning!",
        user: "Noah",
        added: new Date("2024-02-12T08:03:20")
    }
];

const createSQLTable = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  "user" VARCHAR ( 255 ),
  added TIMESTAMPTZ
);`;

function populateSQL(messages) {
  let query = `INSERT INTO messages (text, "user", added) VALUES `;
  let values = [];
  let placeholders = [];

  messages.forEach((msg, i) => {
    const baseIndex = i * 3;

    // Each row: ($1, $2, $3), ($4, $5, $6), ...
    placeholders.push(`($${baseIndex + 1}, $${baseIndex + 2}, $${baseIndex + 3})`);

    values.push(msg.text, msg.user, msg.added);
  });

  query += placeholders.join(", ") + ";";

  return { query, values };
}

const { query, values } = populateSQL(messages);


async function main() {
  console.log("seeding...");
  console.log("ENV:", {
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE
  });
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(createSQLTable);
  await client.query(query, values);
  await client.end();
  console.log("done");
}

main();