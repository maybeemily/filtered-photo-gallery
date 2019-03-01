import pageArray from '../src/paging-array.js';

const test = QUnit.test;

QUnit.module('paging tests');

//create page, and per page
//start index and end index are based on these pages



const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
test('page 1 of 8 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 8
    };
    //act
    const paged = pageArray(testArray, pagingOptions);
    //assert
    assert.deepEqual(paged, [
        1, 2, 3, 4, 5, 6, 7, 8
    ]);

});