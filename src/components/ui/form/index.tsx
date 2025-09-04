"use client";

import { FormProvider } from "react-hook-form";

import { FormItem } from "@/components/ui/form/elements/fomr-item";
import { FormAvatar } from "@/components/ui/form/elements/form-avatar";
import { FormControl } from "@/components/ui/form/elements/form-control";
import { FormDescription } from "@/components/ui/form/elements/form-description";
import { FormField } from "@/components/ui/form/elements/form-field";
import { FormIdentitySelector } from "@/components/ui/form/elements/form-identity-selector";
import { FormInput } from "@/components/ui/form/elements/form-input";
import { FormInputWithSelector } from "@/components/ui/form/elements/form-input-with-selector";
import { FormLabel } from "@/components/ui/form/elements/form-label";
import { FormMapMarker } from "@/components/ui/form/elements/form-map-marker";
import {
  DisplayErrorMessage,
  FormHideErrorMessage,
  FormMessage,
  FormMultiFormMessage
} from "@/components/ui/form/elements/form-message";
import { FormMultiInput } from "@/components/ui/form/elements/form-multi-input";
import { FormPhone } from "@/components/ui/form/elements/form-phone";
import { FormRadioGroup } from "@/components/ui/form/elements/form-radio-group";
import { FormSelector } from "@/components/ui/form/elements/form-selector";
import { FormSwitchProminent } from "@/components/ui/form/elements/form-switch-prominent";
import { useFormField } from "@/components/ui/form/hooks/use-form-field";

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
  useFormField
};
