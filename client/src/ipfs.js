const ipfsClient = require("ipfs-http-client");

const auth =
  "Basic " +
  Buffer.from(
    process.env.REACT_APP_INFURA_ID +
      ":" +
      process.env.REACT_APP_INFURA_SECRET_KEY
  ).toString("base64");

const client = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export default client;
