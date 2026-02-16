import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

type IngredientItem = {
  text: string;
  value: number;
};

interface ReturnProps {
  items: IngredientItem[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<ReturnProps["items"]>(
    [],
  );
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingedients = await Api.ingredients.getAll();
        setIngredients(
          ingedients.map((ingedient) => ({
            value: ingedient.id,
            text: ingedient.name,
          })),
        );
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    }

    fetchIngredients();
  }, []);

  return { items: ingredients };
};
