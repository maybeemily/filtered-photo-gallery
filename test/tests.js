import './html-equal.js';

const test = QUnit.test;

function filteredImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        return hasKeyword;
    });
}

const images = [
    { title: 'city', keyword: 'watercolor' },
    { title: 'cloud', keyword: 'gouache' },
    { title: 'flower', keyword: 'watercolor' }
];

test('if keyword watercolor is selected, show only watercolor images', assert => {
    const filterChoice = { keyword: 'watercolor' };

    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'city', keyword: 'watercolor' },
        { title: 'flower', keyword: 'watercolor' }
    ]);
});

test('if no keyword entered, show all images', assert => {
    const filterChoice = { keyword: '' };
    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'city', keyword: 'watercolor' },
        { title: 'cloud', keyword: 'gouache' },
        { title: 'flower', keyword: 'watercolor' }
    ]);
});