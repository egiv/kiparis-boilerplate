const config = {
    "*.(js|jsx|ts|tsx|mjs)": async (files) => {
        return ["npm run test", "npm run check", "npm run pre-push"];
    },
};

export default config;
