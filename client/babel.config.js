// module.exports = function (api) {
//   api.cache(true);

//     return {
//     presets: [
//       ['@babel/preset-env', {targets: {node: 'current'}}],
//       ['@babel/preset-react', {targets: {node: 'current'}}] 
//     ],
//     plugins: [
//         ['@babel/plugin-syntax-jsx', {targets: {node: 'current'}}]
//     ]
//   };
// }

module.exports = function (api) {
  const presets = [
      '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-syntax-jsx',
  ];

  /** this is just for minimal working purposes,
     * for testing larger applications it is
     * advisable to cache the transpiled modules in
     * node_modules/.bin/.cache/@babel/register* */
  api.cache(false);

  return {
    presets,
    plugins
  };
};

// module.exports = function (api) {
//   api.cache(true);

//   return {
//   presets: [
//     ["@babel/preset-env"],
//     ["@babel/preset-react"]]
//   };
// }

// module.exports = api => {
//   api.cache(true);

//   return {
//     presets: ["@babel/preset-env", "@babel/preset-react"],
//     plugins: [
//       // "@babel/plugin-transform-runtime",
//       ['@babel/plugin-syntax-jsx', {targets: {node: 'current'}}]
//       // ["@babel/plugin-proposal-class-properties", { loose: true }],
//     ],
//     env: {
//       testing: {
//         presets: [
//           [ "@babel/preset-env", { targets: { node: "current" }}],
//         ],
//       },
//     },
//   };
// };

module.exports = function (api) {
    const presets = [
        '@babel/preset-env',
      '@babel/preset-react',
      
    ];
    const plugins = [
      '@babel/plugin-syntax-jsx',
    ];
  
    /** this is just for minimal working purposes,
       * for testing larger applications it is
       * advisable to cache the transpiled modules in
       * node_modules/.bin/.cache/@babel/register* */
    api.cache(false);
  
    return {
      presets,
      plugins
    };
  };
  
