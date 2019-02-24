
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
}, {
        overlays: {
            titleBar: {
                breakpoints: 'mobile',
                position: 'top-left',
                height: 44,
                width: '100%',
                html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span>' +
                    '<span class="title" data-action="copyHTML" data-args="headerimg"></span>'
            }
        }
    });