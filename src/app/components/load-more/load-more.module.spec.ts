import { LoadMoreModule } from './load-more.module';

describe('LoadMoreModule', () => {
  let loadMoreModule: LoadMoreModule;

  beforeEach(() => {
    loadMoreModule = new LoadMoreModule();
  });

  it('should create an instance', () => {
    expect(loadMoreModule).toBeTruthy();
  });
});
