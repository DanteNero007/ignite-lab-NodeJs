import { Content } from './content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('dan')).toThrow();
  });

  it('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('d'.repeat(241))).toThrow();
  });
});
