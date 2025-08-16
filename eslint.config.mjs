import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import unusedImports from "eslint-plugin-unused-imports";
import neostandard from "neostandard";

export default [
  // Configuración base con neostandard
  ...neostandard({
    ts: true, // Habilitar soporte para TypeScript
    noStyle: true, // Deshabilitar reglas de estilo para usar Prettier
    semi: true
  }),
  prettierRecommended,
  // Configuración específica para archivos .astro
  {
    plugins: {
      "unused-imports": unusedImports,
      prettier,
      import: importPlugin,
      "@stylistic": stylistic
    },
    rules: {
      "react/jsx-handler-names": "off",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "{@,@shared}/**",
              group: "internal"
            }
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      "@stylistic/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: false,
          multiline: "ignore",
          reservedFirst: true,
          noSortAlphabetically: true
        }
      ]
    }
  },
  // Ignores
  {
    ignores: [".next/**", "out/**", "build/**"]
  }
];
