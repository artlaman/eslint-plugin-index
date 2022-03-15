module.exports = {
  rules: {
    forbid: require("./rules/forbid/forbid"),
  },
  configs: {
    recommended: {
      rules: {
        "index/forbid": "error",
      },
    },
  },
};
