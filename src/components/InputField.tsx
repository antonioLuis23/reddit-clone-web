import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useField } from "formik";

interface InputFieldProps {}

export const InputField: React.FC<InputFieldProps> = ({}) => {
  const [] = useField();
  return (
    <FormControl isInvalid={form.errors.name && form.touched.name}>
      <FormLabel htmlFor="name">First name</FormLabel>
      <Input {...field} id="name" placeholder="name" />
      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    </FormControl>
  );
};
