const mongoose = require('mongoose');

async function connectionDB () {
  try {
    const urlDB = process.env.URL_DB;
    const dbRun = await mongoose.connect(urlDB);
  if (dbRun) { 
      console.log(`connected to the database 🗃️`);
  }

  } catch (err) { 

    console.log(err);
  }

};

module.exports =  connectionDB; 