const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// JID configuration with expiration and owner info
const JID_CONFIG = {
  "1234@newsletter": {
    owner: "99999999999",
    expires: "2025-01-01",
    emojis: ["🤧", "🤧", "🤧", "🤧", "🤧"]
  },

  "120363418537225451@newsletter": {
    owner: "94742274855", // ICT ❤️🧡💛💚💙
    expires: "2070-12-31",
    emojis: ["❤️", "🧡", "💛", "💚", "💙"]
  }
};

module.exports = {
    MONGODB: process.env.MONGODB || "mongodb+srv://manulofc555:manulofc555123@manudb.yiolvug.mongodb.net/",
    JSONS: process.env.JSONS || "testx.js",
    PREFIX: process.env.PREFIX || ".",
    CFOLLOW: process.env.CFOLLOW || "true",
    PLUGINS: process.env.PLUGINS || "plug.json",
    CJIDS: process.env.CJIDS || Object.keys(JID_CONFIG).join(","),
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "off",
    JID_CONFIG: JID_CONFIG
};
