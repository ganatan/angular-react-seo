import { ContactModule } from './contact.module';

describe('ContactModule', () => {
  let contactModule: ContactModule;

  beforeEach(() => {
    contactModule = new ContactModule();
  });

  it('should create an instance', () => {
    expect(contactModule).toBeTruthy();
  });
});
