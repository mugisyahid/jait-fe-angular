import {ActivationModule} from './activation.module';

describe('SignupModule', () => {
    let activationModule: ActivationModule;

    beforeEach(() => {
        activationModule = new ActivationModule();
    });

    it('should create an instance', () => {
        expect(activationModule).toBeTruthy();
    });
});
