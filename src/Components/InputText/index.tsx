import { useState } from 'react';
import { Flex, Text, Input, Box } from '@chakra-ui/react';

interface InputTextProps {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ label, value, onChange, ...props }: InputTextProps) => {
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
                top={isFocused || value ? '8px' : '50%'}
                left="10px"
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
            <Input
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                fontWeight="500"
                pt={isFocused || value ? 6 : 2}
                pb={2}
                px={3}
                height="40px"
            />
        </Box>
    );
};
