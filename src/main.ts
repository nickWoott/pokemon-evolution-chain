import * as api from './api';
import { createChainDto } from './dto';

export const getPokemonEvolutionChain = async (
  pokemonName: string
): Promise<string> => {
  const evolutionChainUrl = await api.getEvolutionChainUrl(pokemonName);
  const evolutionChain = await api.getPokemonEvolutionChain(evolutionChainUrl);
  return JSON.stringify(createChainDto(evolutionChain));
};

export const beginTerminalPrompt = async (): Promise<void> => {
  const inquirer = await import('inquirer');

  try {
    const questions = [
      {
        type: 'input',
        name: 'pokemonName',
        message: 'Enter a Pokémon name:',
        validate: (input: any) =>
          !!input || 'Please provide a valid Pokémon name.',
      },
    ];

    const answers = await inquirer.default.prompt(questions);
    const { pokemonName } = answers;
    const evolutionChain = await getPokemonEvolutionChain(pokemonName);
    console.log(evolutionChain);
  } catch (error: any) {
    console.error('An error occurred:', error.message);
  }
};

beginTerminalPrompt();
