module.exports = {
    rules: {
        "comma-dangle": ["warn", "always-multiline"],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "curly": ["warn", "multi-line", "consistent"],
        "eqeqeq": ["error", "always"],
        "no-var": ["warn"],
        "brace-style": ["warn", "1tbs"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "no-unneeded-ternary": ["warn"],
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["error", "never"],
        "max-len": ["warn", { "code": 120 }],
        "padded-blocks": ["error", "never"],
        "block-spacing": ["warn", "always"],
    },
};
