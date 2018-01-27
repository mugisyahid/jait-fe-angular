import {ProductModule} from './product.module';

describe('TablesModule', () => {
    let tablesModule: ProductModule;

    beforeEach(() => {
        tablesModule = new ProductModule();
    });

    it('should create an instance', () => {
        expect(tablesModule).toBeTruthy();
    });
});
