fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
const rootPath='../res'
fis.match('*.styl', {
    parser: 'stylus',
    rExt: '.css',
    postprocessor: fis.plugin('autoprefixer', {
        browsers: ['IE >= 8', 'Chrome >= 30', 'last 2 versions'] // pc
            // browsers: ['Android >= 4', 'ChromeAndroid > 1%', 'iOS >= 6'] // wap
    })
});
fis.match('*.{js,css,jpg,png,styl}', {
  useHash: true,
  useMap: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: rootPath
    })
})
fis.util.del(rootPath)

