import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();


export const handler = async (event) => {

  console.log("*************************************************LAMBDA")

  const { eventType } = event.requestContext;

  if (eventType === 'CONNECT') {
    // Handle $connect event
    console.log("Client connected", event.requestContext.connectionId);
    // You can store the connectionId in a database if needed
  } else if (eventType === 'DISCONNECT') {
    // Handle $disconnect event
    console.log("Client disconnected", event.requestContext.connectionId);
    // Cleanup resources or remove the connectionId from a database
  }

  return {
    statusCode: 200
  };
};
