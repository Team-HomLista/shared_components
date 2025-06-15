# Property Feature Cards - Modular Architecture

## Overview

This module provides a modular and extensible system for displaying property details based on the building type. The architecture follows a parent-child component pattern that makes it easy to maintain and extend.

## Architecture

### Parent Component: `PropertyBuildingDetails`

- **Purpose**: Orchestrates the rendering of appropriate detail components based on property type
- **Props**: Receives the full `DetailedProperty` object
- **Responsibility**: Maps property data to the appropriate child component

### Child Components

#### `HouseDetails`

- **Purpose**: Displays details specific to houses
- **Features Shown**:
  - Área del terreno (building_size)
  - Habitaciones (rooms)
  - Baños (bathrooms)
  - Construcción (land_size)
  - Año (year_built)
  - Estacionamiento (parking_slots)

#### `ApartmentDetails`

- **Purpose**: Displays details specific to apartments/departments
- **Features Shown**:
  - Área del terreno (building_size)
  - Habitaciones (rooms)
  - Baños (bathrooms)
  - Piso (floor)

#### `LandDetails`

- **Purpose**: Displays details specific to land properties
- **Features Shown**:
  - Área del terreno (building_size)

#### `CommercialDetails`

- **Purpose**: Displays details specific to commercial properties
- **Features Shown**:
  - Área del terreno (building_size)
  - Piso (floor)
  - Estacionamiento (parking_slots)

### Shared Components

#### `FeatureGrid`

- **Purpose**: Renders a consistent grid layout for all feature items
- **Props**: Array of `FeatureItem` objects
- **Styling**: 2-column responsive grid with consistent spacing

## Usage

### Basic Usage

```tsx
import { PropertyBuildingDetails } from "./feature-card-new";

// In your component
<PropertyBuildingDetails property={property} />;
```

### Legacy Support

The original `PropertyFeatureCard` component is still available for backward compatibility:

```tsx
import { PropertyFeatureCard } from "./feature-card-new";

// Legacy usage (still works)
<PropertyFeatureCard property={property} />;
```

## Extending the System

### Adding a New Property Type

1. **Update the enum** (if needed):

```typescript
// In building-type.ts
export enum BuildingType {
  // ... existing types
  WAREHOUSE = "WAREHOUSE",
}
```

2. **Create a new detail component**:

```tsx
const WarehouseDetails: FC<FeatureDetailProps> = ({
  buildingSize,
  parkingSlots,
}) => {
  const features = [
    createFeature(
      <RulerDimensionLineIcon className="text-primary h-4 w-4" />,
      "Área del almacén",
      buildingSize,
    ),
    createFeature(
      <CarIcon className="text-primary h-4 w-4" />,
      "Estacionamiento",
      parkingSlots,
    ),
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};
```

3. **Add the case to the switch statement**:

```tsx
const renderDetails = () => {
  switch (property.building_type) {
    // ... existing cases
    case "WAREHOUSE":
      return <WarehouseDetails {...detailProps} />;
    // ...
  }
};
```

### Adding New Features

To add a new feature to an existing property type:

1. **Add the property to `FeatureDetailProps`** (if needed)
2. **Update the specific detail component**:

```tsx
const HouseDetails: FC<FeatureDetailProps> = ({
  // ... existing props
  newFeature,
}) => {
  const features = [
    // ... existing features
    createFeature(
      <NewIcon className="text-primary h-4 w-4" />,
      "Nueva Característica",
      newFeature,
    ),
  ].filter(Boolean) as FeatureItem[];

  return <FeatureGrid features={features} />;
};
```

## Design Principles

### 1. **Modularity**

Each property type has its own dedicated component, making the code easier to understand and maintain.

### 2. **Reusability**

Shared utilities like `createFeature` and `FeatureGrid` promote code reuse and consistency.

### 3. **Type Safety**

All components are fully typed with TypeScript, providing compile-time error checking.

### 4. **Extensibility**

The architecture makes it easy to add new property types or modify existing ones without affecting other components.

### 5. **Accessibility**

- Semantic HTML structure
- Proper ARIA labels (can be enhanced further)
- Keyboard navigation support
- Screen reader friendly

### 6. **Performance**

- Efficient filtering of null/undefined values
- Minimal re-renders through proper component structure
- Lazy loading potential for child components

## Styling

All components use Tailwind CSS classes with a consistent design system:

- **Primary color**: Applied to icons (`text-primary`)
- **Grid layout**: 2-column responsive grid (`grid grid-cols-2 gap-3`)
- **Typography**: Consistent text sizing and colors
- **Spacing**: Consistent padding and margins

## Testing Considerations

When testing these components:

1. **Test each property type independently**
2. **Test with null/undefined values**
3. **Test the filtering logic**
4. **Test accessibility features**
5. **Test responsive behavior**

## Future Enhancements

Potential improvements to consider:

1. **Internationalization**: Make text labels configurable
2. **Custom Icons**: Allow custom icons per property type
3. **Conditional Display**: More complex logic for showing/hiding features
4. **Animation**: Smooth transitions when switching between property types
5. **Validation**: Client-side validation of property data
6. **Theme Support**: Dark/light mode compatibility
