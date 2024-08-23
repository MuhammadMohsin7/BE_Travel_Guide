const express = require('express');
const sequelize = require('./config/database'); 
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Import and use admin routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
    try {
        // Test the database connection
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Sync the database models
        await sequelize.sync({ force: false  }); // force: false ensures that the database schema is not dropped and recreated each time

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();
