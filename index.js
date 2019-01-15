require("dotenv").config();
const express = require("express");
const app = express();

function listen() {
    let { PORT } = process.env;
    app.listen(PORT, function() {
        console.log('Listen in port', PORT);
    });
}

require("./config/express")({ app, express });
require("./config/routes")({ app})
listen();
