"use client";

import { useEffect, useRef, useState } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMessage } from "@/components/ui/form/elements/form-message";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

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
            defaultValue={field.value?.toString() ?? undefined}
            onValueChange={field.onChange}
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
                  ref={inputRef}
                  placeholder="Buscar..."
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
              </div>

              {filteredItems.map((item) => (
                <SelectItem key={item.value} value={String(item.value)}>
                  <Avatar>
                    {item.image ? (
                      <AvatarImage alt={name} src={item.image} />
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
