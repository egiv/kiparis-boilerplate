module.exports = {
    plugins: ["stylelint-scss", "stylelint-no-unresolved-module"],
    extends: ["stylelint-config-recommended", "stylelint-config-prettier"],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "scss/selector-no-union-class-name": true,

        "no-descending-specificity": true,
        /* TODO: enable
        "max-nesting-depth": [
            2,
        ],
        "selector-max-specificity": "0,2,2",
        "no-descending-specificity": true,
        */

        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"],
            },
        ],
        "plugin/no-unresolved-module": {
            modules: ["node_modules"],
        },
    },
};
