module.exports = {
  rules: {
    "only-import-export": require("./rules/only-import-export/only-import-export"),
    forbid: require("./rules/forbid/forbid"),
  },
  configs: {
    recommended: {
      plugins: ["index"],
      rules: {
        "index/only-import-export": "error",
        "index/forbid": "off",
      },
    },
  },
};
