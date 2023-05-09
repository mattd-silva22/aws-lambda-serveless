module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "meu teste com serverless - GET",
        input: event,
      },
      null,
      2
    ),
  };
};
