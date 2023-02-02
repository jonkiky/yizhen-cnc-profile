const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
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
  basePath: basePath,
};