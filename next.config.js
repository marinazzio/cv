// Base path for GitHub Pages project sites (e.g. /cv). Set via PATH_PREFIX at
// build time in the deploy workflow; empty for local dev and the dev server.
const prefix = process.env.PATH_PREFIX || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: prefix,
  assetPrefix: prefix,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
