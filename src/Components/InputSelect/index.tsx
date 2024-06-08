import { useState } from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import { OptionsData } from './data';

interface Option {
    label: string;
    value: string;
}

interface InputSelectProps<T extends Option> {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: T[];
    isDisabled?: boolean;
}

export const InputSelect = <T extends Option>({ label, value, onChange, options, isDisabled, ...props }: InputSelectProps<T>) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!value) {
            setIsFocused(false);
        }
    };

    return (
        <Box position="relative" width="full" {...props}>
            <Text
                position="absolute"
                top={isFocused || value ? '32px' : '50%'}
                left="12px"
                transform={isFocused || value ? 'translateY(-50%) scale(0.85)' : 'translateY(-50%) scale(1)'}
                transformOrigin="left top"
                transition="all 0.2s ease-in-out"
                fontSize={isFocused || value ? 'xs' : 'md'}
                fontWeight="600"
                color="gray.500"
                pointerEvents="none"
            >
                {label}
            </Text>
            <Select
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                fontWeight="500"
                pt={isFocused || value ? 6 : 2}
                pb={2}
                height="40px"
            >
                <option value="" disabled hidden></option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </Box>
    );
};
