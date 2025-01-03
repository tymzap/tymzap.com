const corsAnywhere = require("cors-anywhere");

const HOST = "localhost";

const PORT = 3001;

corsAnywhere.createServer().listen(PORT, HOST, () => {
  console.log(`Running CORS proxy server on ${HOST}:${PORT}`);
});
