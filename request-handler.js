/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */

var handleRequest = function(request, response) {
  if (request.method === 'GET') {
    
  } else if (request.method === 'POST') {
    var data = request;
  }
  return data;
};

module.exports.handleRequest = handleRequest;
