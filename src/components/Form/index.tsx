import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

type InputProps = {
  name: string
  label?: string
}

type TotalProps = InputProps & ChakraInputProps // intersecção de tipos

export function Input({ name, label, ...rest }: TotalProps) {
    return (
        <FormControl>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : ''}
          <ChakraInput
            type={"email"}
            name={name}
            id={name}
            focusBorderColor="teal.400"
            bg={"gray.900"}
            variant={"filled"}
            _hover={{ bg: "gray.900" }}
            size={"lg"}
            {...rest}
          />
        </FormControl>
    )
}
