/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const million = require('million/compiler');

const nextConfig = {
  reactStrictMode: false
};

const millionConfig = {
  auto: { rsc: true }
};

module.exports = million.next(nextConfig, millionConfig);
