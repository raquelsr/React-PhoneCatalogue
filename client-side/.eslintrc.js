module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "no-debugger": "error",
        "no-console": "error",
        "eqeqeq": "error",
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
};