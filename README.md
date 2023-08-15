# pokemon-evolution-chain

This repository contains api functions written in Typescript, which interact with the pokemon api (found here https://pokeapi.co/) to retrieve an evolution chain for a specified pokemon.

## installing dependencies

npm i - this will install all dependencies

## running the script

npm run get-chain

This will run a script to compile all TypeScript files, running the main.js file and allowing entry of a pokemon in the terminal. The evolution chain of the specified pokemon will be logged to the terminal.

## testing

npm t

This will run all unit tests for the api functions and dto functions.

## developer notes

I have separated the functions which call the api into two separate api functions. Data transformation is handled by a recursive data transfer object function. These functions are accrued in main.ts in the form of the getPokemonEvolutionChain function.

In main.ts you can also find the terminal prompt function, which allows the code to run in the terminal and for a user to enter a pokemon which is passed into the getPokemonEvolutionChain function.

Running tests and running the beginTerminalPrompt script will transpile the code to Javascript. You can also do this with the script npm run build.

Unit tests have been written for the DTO and API functions but as of yet, there is no integration testing.
