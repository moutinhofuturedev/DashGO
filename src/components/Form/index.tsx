import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = {
  name: string
  label?: string
}

type TotalProps = InputProps & ChakraInputProps // intersecção de tipos

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TotalProps> = ({ name, label, ...rest }, ref) => {
    return (
        <FormControl>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : ''}
          <ChakraInput
            type={"email"}
            name={name}
            id={name}
            required
            autoComplete="none"
            focusBorderColor="teal.400"
            bg={"gray.900"}
            variant={"filled"}
            _hover={{ bg: "gray.900" }}
            size={"lg"}
            {...rest}
            ref={ref}
          />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)