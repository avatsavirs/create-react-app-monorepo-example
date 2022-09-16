process.env.NODE_ENV = 'production';

require('../config/env');
const browserslist = require('browserslist');
const { resolveToEsbuildTarget } = require('esbuild-plugin-browserslist');
const path = require('path');
const fs = require('fs-extra');
const esbuild = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const svgrLoader = require('esbuild-plugin-svgr') // imports image as react component
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');
const paths = require('../config/paths');

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => ![paths.appHtml, paths.appHtmlEsbuild].includes(file),
  });
}

function buildWithEsBuild() {
  if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
  }
  fs.emptyDirSync(paths.appBuild);
  copyPublicFolder();
  esbuild.build({
    entryPoints: [
      /*
       * Note that bundling is different than file concatenation.
       * Passing esbuild multiple input files with bundling enabled
       * will create multiple separate bundles instead of joining
       * the input files together. To join a set of files together
       * with esbuild, import them all into a single entry point
       * file and bundle just that one file with esbuild.
      */
      paths.appIndexJs,
    ],
    bundle: true,
    minify: true, // https://esbuild.github.io/api/#minify
    metafile: true, // required for htmlPlugin
    sourcemap: true, // https://esbuild.github.io/api/#sourcemap
    write: true, // allow esbuild to write to the file system. This is true by default
    target: resolveToEsbuildTarget(browserslist('>0.25%, not dead'), {
      printUnknownTargets: false,
    }),
    outdir: paths.appBuild,
    entryNames: '[dir]/[name]-[hash]',
    format: 'esm', // code splitting is only available for esm format
    splitting: true, // https://esbuild.github.io/api/#splitting
    plugins: [
      htmlPlugin({
        files: [{
          entryPoints: [path.relative('.', paths.appIndexJs)], // for some reason absolute path doesn't work here.
          filename: 'index.html',
          title: 'Esbuild React App',
          favicon: paths.favicon,
          define: {
            PUBLIC_URL: '',
          },
          htmlTemplate: paths.appHtmlEsbuild
        }],
      }),
      lessLoader({
        javascriptEnabled: true,
      }),
      // svgrLoader(),
    ],
    loader: {
      '.js': 'jsx',
      '.svg': 'dataurl', // imports svgs as dataurl for the svg, this gets overridden by svgrLoader plugin
    },
    inject: ['config/polyfills.js']
  })
    .then((result) => {
      return esbuild.analyzeMetafile(result.metafile);
    })
    .then((result) => {
      console.info(result)
    })
    .catch(() => {
      process.exit(1)
    })
}

buildWithEsBuild();
