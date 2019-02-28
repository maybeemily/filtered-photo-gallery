import './html-equal.js';

const test = QUnit.test;

function filteredImages(images, filter) {
    return images.filter(image => {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;
        const hasAnimals = !filter.animalNumber || image.animalNumber >= filter.animalNumber;
        return hasKeyword && hasAnimals;
    });
}

const images = [
    { title: 'city', keyword: 'watercolor', animalNumber: '0' },
    { title: 'nature party', keyword: 'embroidery', animalNumber: '1' },
    { title: 'flower', keyword: 'watercolor', animalNumber: '0' }
];

test('if keyword watercolor is selected, show only watercolor images', assert => {
    const filterChoice = { keyword: 'watercolor' };

    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'city', keyword: 'watercolor', animalNumber: '0' },
        { title: 'flower', keyword: 'watercolor', animalNumber: '0' }
    ]);
});

test('if number of animals is 1, return the images with 1 animal', assert => {
    const filterChoice = { animalNumber: '1' };

    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'nature party', keyword: 'embroidery', animalNumber: '1' },
    ]);
});

test('if no keyword entered, show all images', assert => {
    const filterChoice = { keyword: '' };
    const filtered = filteredImages(images, filterChoice);

    assert.deepEqual(filtered, [
        { title: 'city', keyword: 'watercolor', animalNumber: '0' },
        { title: 'nature party', keyword: 'embroidery', animalNumber: '1' },
        { title: 'flower', keyword: 'watercolor', animalNumber: '0' }
    ]);
});