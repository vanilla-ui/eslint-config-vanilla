module.exports = {
  parser: "babel-eslint",
  plugins: [
    "babel",
  ],
  extends: "airbnb",
  env: {
    browser: true,
  },
  rules: {
    quotes: ["error", "double"],
    "no-plusplus": "off",
    "no-implicit-coercion": ["error", { boolean: true }],
    "babel/no-invalid-this": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-else-return": "off",
    "no-cond-assign": ["error", "except-parens"],
    "no-unmodified-loop-condition": "error",
    "no-implicit-globals": "error",
    camelcase: ["error", { properties: "always" }],
    "prefer-reflect": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "react/self-closing-comp": ["error", { html: false }],
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": "off",
  },
};
