import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
  const params = {
    TableName: "Users",
    Item: {
      userId: "123", // Aquí puedes usar un valor dinámico
      name: "John Doe",
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User added!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not add userrrr" }),
    };
  }
};
