const isGithubActions = process.env.GITHUB_ACTIONS || false

  // trim off `<owner>/`
  const repo = "yizhen-cnc-profile"
	const assetPrefix = `/${repo}`
	const basePath = `/${repo}`

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