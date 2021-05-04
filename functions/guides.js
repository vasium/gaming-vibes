exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat", author: "mario" },
    { title: "Kart", author: "luigi" },
    { title: "Ultimate", author: "chun-li" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: "login to see this" }),
  };
};
