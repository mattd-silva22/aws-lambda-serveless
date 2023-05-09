module.exports.handler = async (event) => {
  const req = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "meu teste com serverless - POST" + req.name,
        name: req.name,
        input: event,
      },
      null,
      2
    ),
  };
};
