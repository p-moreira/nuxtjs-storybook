module.exports = {

    root: true,

    env: {
        browser: true,
        node: true
    },

    parserOptions: {
        parser: "babel-eslint"
    },

    extends: ["@nuxtjs", "plugin:nuxt/recommended"],

    // add your custom rules here
    rules: {

        "vue/multiline-html-element-content-newline": [
            "error",
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true
            }
        ],

        "vue/html-indent": [
            "error",
            4
        ],

        "indent": ["error", 4],

        "semi": ["error", "never", { "beforeStatementContinuationChars": "never"}]
    }

}
