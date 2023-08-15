import * as api from './api';
import { createChainDto } from './dto';

const getPokemonEvolutionChain = async () => {
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

    const evolutionChainUrl = await api.getEvolutionChainUrl(pokemonName);

    const evolutionChain = await api.getPokemonEvolutionChain(
      evolutionChainUrl
    );

    console.log(JSON.stringify(createChainDto(evolutionChain)));
  } catch (error: any) {
    console.error('An error occurred:', error.message);
  }
};

getPokemonEvolutionChain();
