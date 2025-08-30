"use client";

import { FC, useState } from "react";

import { Button, Input, Textarea } from "@/shared/components/ui";

export const ExperienceTab: FC = () => {
  const [about, setAbout] = useState("");
  const maxChars = 2000;

  const [experience, setExperience] = useState(1);

  const handleIncrement = () => setExperience((prev) => prev + 1);
  const handleDecrement = () => setExperience((prev) => (prev > 0 ? prev - 1 : 0));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setExperience(value);
    }
  };

  return (
    <form className="space-y-6">
      {/* Acerca de */}
      <div>
        <label htmlFor="about" className="mb-1.5 block text-sm font-medium">
          Acerca de
        </label>
        <Textarea
          id="about"
          name="about"
          placeholder="Describe la experiencia del agente en el sector inmobiliario"
          value={about}
          maxLength={maxChars}
          className="w-full"
          rows={4}
          onChange={(e) => setAbout(e.target.value)}
        />
        <p className="mt-1 text-xs text-gray-500">{maxChars - about.length} caracteres restantes</p>
      </div>

      {/* Experiencia */}
      <div>
        <label className="mb-1.5 block text-sm font-medium">Experiencia</label>
        <div className="flex items-center gap-1">
          <Button type="button" variant="outline" onClick={handleDecrement}>
            -
          </Button>
          <Input
            type="number"
            value={experience}
            className="w-20 text-center"
            onChange={handleChange}
          />
          <Button type="button" variant="outline" onClick={handleIncrement}>
            +
          </Button>
          <span className="text-sm text-gray-700">años</span>
        </div>
      </div>

      {/* Idiomas */}
      <div>
        <label htmlFor="languages" className="mb-1.5 block text-sm font-medium">
          Idiomas
        </label>
        <Input id="languages" name="languages" placeholder="Agrega un idioma" className="w-full" />
      </div>

      {/* Botón */}
      <Button type="submit" className="mt-2">
        Guardar información
      </Button>
    </form>
  );
};
