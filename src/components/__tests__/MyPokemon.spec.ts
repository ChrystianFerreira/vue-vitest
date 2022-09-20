import { render, screen, fireEvent }  from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "../MyPokemon.vue";

describe.concurrent("MyPokemon", () => {

  it.only("render span correctly", async () => {
    render(MyPokemon);

    const pokemon = await screen.findByText("Get Pokémon");
    await fireEvent.click(pokemon);
    const value = await screen.findByText("bulbasaur");
    
    expect(value.innerHTML === "bulbasaur");

  });
});