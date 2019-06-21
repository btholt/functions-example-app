module.exports = async function(context, req) {
  context.res = {
    body: JSON.stringify({
      status: "ok",
      cloud: "azure",
      platform: "functions"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };
};
