export const handler = async (event) => {

    

    const { eventType, connectionId } = event.requestContext;
  
    // Handle connection and disconnection events
    if (eventType === 'CONNECT') {
      // Logic for when a client connects
      console.log(`Client connected: ${connectionId}`);
      return { statusCode: 200, body: 'Connected' };
    } 
    
    if (eventType === 'DISCONNECT') {
      // Logic for when a client disconnects
      console.log(`Client disconnected: ${connectionId}`);
      return { statusCode: 200, body: 'Disconnected' };
    }
  
    // Handle WebSocket messages based on the action in the request body
    const body = JSON.parse(event.body);
    const { action, message } = body;  // action and message are sent from the client
  
    switch (action) {
      case 'sendMessage':
        // Logic to handle sending messages to other connected clients
        await sendMessageToClients(connectionId, message);
        return { statusCode: 200, body: 'Message sent' };
  
      case 'receiveMessage':
        // Logic to handle receiving messages (could be a placeholder or processing logic)
        console.log(`Message received from client: ${message}`);
        return { statusCode: 200, body: 'Message received' };
  
      default:
        return { statusCode: 400, body: 'Invalid action' };
    }
  };
  
  // Mock function to simulate message sending to other connected clients
  const sendMessageToClients = async (connectionId, message) => {
    // Here you would normally use the API Gateway Management API to send messages
    // to other connected clients. This is a mock implementation.
    console.log(`Sending message to clients from connection ${connectionId}: ${message}`);
  
    // Example of sending message using AWS SDK (uncomment when using actual logic)
    /*
    const apigatewaymanagementapi = new AWS.ApiGatewayManagementApi({
      endpoint: `${event.requestContext.domainName}/${event.requestContext.stage}`
    });
    
    try {
      await apigatewaymanagementapi.postToConnection({
        ConnectionId: otherConnectionId,
        Data: message
      }).promise();
    } catch (error) {
      console.error(`Failed to send message to ${otherConnectionId}`, error);
    }
    */
  };
  