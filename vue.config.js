const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath:'./',
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        renderAfterDocumentEvent: 'render-event'
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