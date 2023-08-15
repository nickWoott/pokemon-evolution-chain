import { getEvolutionChainUrl } from '.';

describe('getEvolutionChainUrl', () => {
  test('returns the thing', () => {
    expect(getEvolutionChainUrl('bulbasaur')).toEqual('arse');
  });
});
