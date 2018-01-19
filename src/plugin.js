module.exports = function (imports) {
    const ext = imports.ext;

    ext.queues('core/nav').add({
        id: 'second-link',
        index: 200,
        render: function (createElement) {
            return createElement('li', [createElement('a', {
                attrs: { href: '#' },
                on: {
                    click: function () {
                        console.log('Clicked on second link');
                    },
                },
            }, 'Plugin link')]);
        },
    });
};
