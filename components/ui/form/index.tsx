import { FormProvider } from "react-hook-form";

import { FormItem } from "@shared/components/ui/form/elements/fomr-item";
import { FormAvatar } from "@shared/components/ui/form/elements/form-avatar";
import { FormControl } from "@shared/components/ui/form/elements/form-control";
import { FormDescription } from "@shared/components/ui/form/elements/form-description";
import { FormField } from "@shared/components/ui/form/elements/form-field";
import { FormIdentitySelector } from "@shared/components/ui/form/elements/form-identity-selector";
import { FormInput } from "@shared/components/ui/form/elements/form-input";
import { FormInputWithSelector } from "@shared/components/ui/form/elements/form-input-with-selector";
import { FormLabel } from "@shared/components/ui/form/elements/form-label";
import { FormMapMarker } from "@shared/components/ui/form/elements/form-map-marker";
import {
  DisplayErrorMessage,
  FormHideErrorMessage,
  FormMessage,
  FormMultiFormMessage,
} from "@shared/components/ui/form/elements/form-message";
import { FormMultiInput } from "@shared/components/ui/form/elements/form-multi-input";
import { FormPhone } from "@shared/components/ui/form/elements/form-phone";
import { FormRadioGroup } from "@shared/components/ui/form/elements/form-radio-group";
import { FormSelector } from "@shared/components/ui/form/elements/form-selector";
import { FormSwitchProminent } from "@shared/components/ui/form/elements/form-switch-prominent";
import { useFormField } from "@shared/components/ui/form/hooks/use-form-field";

const Form = FormProvider as typeof FormProvider & {
  Item: typeof FormItem;
  Label: typeof FormLabel;
  Control: typeof FormControl;
  Description: typeof FormDescription;
  DisplayErrorMessage: typeof DisplayErrorMessage;
  Message: typeof FormMessage;
  MultiMessages: typeof FormMultiFormMessage;
  Field: typeof FormField;
  Avatar: typeof FormAvatar;
  HideErrorMessage: typeof FormHideErrorMessage;
  Input: typeof FormInput;
  InputWithSelector: typeof FormInputWithSelector;
  MapMarker: typeof FormMapMarker;
  MultiInput: typeof FormMultiInput;
  Phone: typeof FormPhone;
  RadioGroup: typeof FormRadioGroup;
  IdentitySelector: typeof FormIdentitySelector;
  Selector: typeof FormSelector;
  SwitchProminent: typeof FormSwitchProminent;
};

Form.Item = FormItem;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Description = FormDescription;
Form.DisplayErrorMessage = DisplayErrorMessage;
Form.Message = FormMessage;
Form.MultiMessages = FormMultiFormMessage;
Form.Field = FormField;
Form.Avatar = FormAvatar;
Form.HideErrorMessage = FormHideErrorMessage;
Form.Input = FormInput;
Form.InputWithSelector = FormInputWithSelector;
Form.MultiInput = FormMultiInput;
Form.MapMarker = FormMapMarker;
Form.Phone = FormPhone;
Form.RadioGroup = FormRadioGroup;
Form.Selector = FormSelector;
Form.IdentitySelector = FormIdentitySelector;
Form.SwitchProminent = FormSwitchProminent;

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
