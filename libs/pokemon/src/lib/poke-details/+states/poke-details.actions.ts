import { createActionGroup, emptyProps } from "@ngrx/store";

export const pokemonDetailsActions = createActionGroup({
    source: "Pokemon Details Page",
    events: {
      pageOpened: emptyProps(),
    },
  });
  