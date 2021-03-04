// https://umijs.org/config/
import { defineConfig } from 'umi';
export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  proxy: {
    '/api/': {
      target: 'https://www.fastmock.site/mock/442064042e97a0c297e8f16ecd0845e6/api',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
