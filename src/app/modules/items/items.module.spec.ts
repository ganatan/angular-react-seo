import { ItemsModule } from './items.module';

describe('ItemsModule', () => {
  let itemsModule: ItemsModule;

  beforeEach(() => {
    itemsModule = new ItemsModule();
  });

  it('should create an instance', () => {
    expect(itemsModule).toBeTruthy();
  });
});
