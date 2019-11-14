const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath:'./',
    configureWebpack: config => {
        // if (process.env.NODE_ENV == 'test' || process.env.NODE_ENV == 'development') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/'],
                    // executablePath: '../chromium/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
                    // executablePath: '/usr/bin/chromium-browser',
                    minify:{
                        minifyCSS:true,
                        removeComments:true
                    },
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        // injectProperty:'__PRERENDER_INJECTED',
                        // renderAfterTime: 5000,
                        // headless: false,
                        renderAfterDocumentEvent: 'render-event',
                        // args: ['--no-sandbox', '--disable-setuid-sandbox'],
                    })
                }),
            ],
        };
    },
    chainWebpack:config=>{
        config.resolve.alias
        .set('@',resolve('src'))
        .set('style', resolve('src/assets'))
    }
}