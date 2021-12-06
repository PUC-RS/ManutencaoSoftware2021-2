const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "semi": [ERROR],
        "no-empty": [WARN],
        "for-direction": [WARN],
        "dot-location": [WARN, "property"],
        "comma-style": [WARN,"last"],
        "comma-spacing": [WARN],
        "arrow-spacing": [ERROR]
    }
};