const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''

if (isGithubActions) {
  assetPrefix = `https://cnc.joniky.com/`
}

module.exports = {
  images: {
        unoptimized: true
    },
   reactStrictMode: true,
   compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  assetPrefix: assetPrefix,
};