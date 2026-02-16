import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

type IngredientItem = {
  text: string;
  value: number;
};

interface ReturnProps {
  items: IngredientItem[];
  loading: boolean;
  selectedIngredients?: Set<string>;
  onAddId?: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<ReturnProps["items"]>(
    [],
  );

  const [loading, setLoading] = React.useState(true);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingedients = await Api.ingredients.getAll();
        setIngredients(
          ingedients.map((ingedient) => ({
            value: ingedient.id,
            text: ingedient.name,
          })),
        );
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return {
    items: ingredients,
    loading,
    onAddId: toggle,
    selectedIngredients: selectedIds,
  };
};
