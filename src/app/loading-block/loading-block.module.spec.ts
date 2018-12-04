import { LoadingBlockModule } from './loading-block.module';

describe('LoadingBlockModule', () => {
  let loadingBlockModule: LoadingBlockModule;

  beforeEach(() => {
    loadingBlockModule = new LoadingBlockModule();
  });

  it('should create an instance', () => {
    expect(loadingBlockModule).toBeTruthy();
  });
});
