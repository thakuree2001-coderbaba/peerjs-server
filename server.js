const { PeerServer } = require('peer');

const port = process.env.PORT || 10000;
const peerServer = PeerServer({
  port: port,
  path: '/myapp'
});

console.log(`PeerJS server running on port ${port}`);
