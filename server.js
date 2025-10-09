// server.js (à la racine du projet, PAS dans .next)
process.env.PORT = process.env.PORT || '3000';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// Démarre le serveur Next standalone généré par `next build`
require('.next/standalone/server.js');