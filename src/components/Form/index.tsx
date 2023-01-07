import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  name: string
  label?: string
  error?: FieldError
}

type TotalProps = InputProps & ChakraInputProps // intersecção de tipos

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TotalProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : ''}
          <ChakraInput
            type={"email"}
            name={name}
            id={name}
            autoComplete="none"
            focusBorderColor="teal.400"
            bg={"gray.900"}
            variant={"filled"}
            _hover={{ bg: "gray.900" }}
            size={"lg"}
            {...rest}
            ref={ref}
          />
          {!!error && (
            <FormErrorMessage>{error.message}</FormErrorMessage>
          )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)