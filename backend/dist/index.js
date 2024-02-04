import app from './app.js';
import { connectToDatabase } from './db/connection.js';
const PORT = process.env.BACKEND_PORT || 5002;
//connections and listeners
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log('Server Open'));
})
    .catch((error) => {
    console.log(`Error while connecting to MongoDB - error: ${error}`);
});
//# sourceMappingURL=index.js.map