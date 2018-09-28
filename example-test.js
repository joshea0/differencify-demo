const Differencify = require('differencify');
const differencify = new Differencify({
    debug: true,
    imageSnapshotPath: '/screenshots' 
});

(async () => {
    const result = await differencify
        .init()
        .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
        .newPage()
        .setViewport({ width: 1600, height: 1200 })
        .goto('https://www.amazon.com/')
        .waitFor(1000)
        .type('#twotabsearchtextbox', 'computer')
        .$eval('form.nav-searchbar', form => form.submit())
        .waitFor(1000)
        .screenshot()
        .toMatchSnapshot()
        .result((result) => {
            console.log(result);
        })
        .close()
        .end();
})();