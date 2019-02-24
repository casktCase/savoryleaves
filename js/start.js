
skel.init({
    prefix: 'css/style',
    resetCSS: true,
    boxModel: 'border',
    grid: {
        gutters: 50
    },
    breakpoints: {
        'mobile': {
            range: '-480',
            lockViewport: true,
            containers: 'fluid',
            grid: {
                collapse: true,
                gutters: 10
            }
        },
        'full': {
            range: '481-',
            containers: 1200
        }
    }
});