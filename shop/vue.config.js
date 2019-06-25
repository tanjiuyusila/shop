const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    // 选项...
    lintOnSave:false,
    devServer:{
        open:true
    },
  productionSourceMap:false,
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){   //判断是否是生产环境
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,//超过10k，gzip压缩
            deleteOriginalAssets: false  //是否删除源文件
            })
          ]
        }
      }
  }
};
