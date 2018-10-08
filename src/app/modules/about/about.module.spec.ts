import { AboutModule } from './about.module';

describe('AboutModule', () => {
  let aboutModule: AboutModule;

  beforeEach(() => {
    aboutModule = new AboutModule();
  });

  it('should create an instance', () => {
    expect(aboutModule).toBeTruthy();
  });
});
