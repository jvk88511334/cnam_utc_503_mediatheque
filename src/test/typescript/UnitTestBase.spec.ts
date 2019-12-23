import { hello } from '../../main/tools/UnitTestBase';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

    it('should return hello world', () => {
        const result = hello();
        console.log(result);
        expect(result).to.equal('Hello world!');
    });

});