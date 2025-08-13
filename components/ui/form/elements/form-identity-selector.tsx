"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@shared/components/ui/avatar";
import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMessage } from "@shared/components/ui/form/elements/form-message";
import { Input } from "@shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@shared/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormIdentitySelectorProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  description?: string;
  name: FieldPath<TFieldValues>;
  title: string;
  placeholder: string;
  items: Array<{
    value: number | string;
    label: string;
    image?: string | null;
    initials: string;
  }>;
}

export const FormIdentitySelector = <TFieldValues extends FieldValues>({
  control,
  description,
  name,
  title,
  placeholder,
  items
}: FormIdentitySelectorProps<TFieldValues>) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const results = items.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);

  // Function to handle the search term change
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value?.toString() ?? undefined}
            onOpenChange={() => {
              inputRef?.current?.focus();
            }}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>

            <SelectContent side="bottom">
              <div className="bg-popover sticky top-0 z-50 -translate-y-1 py-1">
                <Input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  ref={inputRef}
                />
              </div>

              {filteredItems.map((item) => (
                <SelectItem key={item.value} value={String(item.value)}>
                  <Avatar>
                    {item.image ? (
                      <AvatarImage src={item.image} alt={name} />
                    ) : (
                      <AvatarFallback>{item.initials}</AvatarFallback>
                    )}
                  </Avatar>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
