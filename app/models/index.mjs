import mongoose from "mongoose";
import dbConfigUrl from "../config/db.config.mjs";
mongoose.Promise = global.Promise


const db = {
      mongoose, url:dbConfigUrl,
      
}

export default db