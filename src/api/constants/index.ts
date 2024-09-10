import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;

/*

    "rewrites": [{
      "source": "/api/(.*)", "destination": "/api/index.js"
    }]*/
