import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { InputSelect } from '../InputSelect'; // Certifique-se de ajustar o caminho
import data, { BrandOption, OptionsData } from '../InputSelect/data';

const CarSelector = () => {
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [selectedModel, setSelectedModel] = useState<string>('');

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
        setSelectedBrand('');
        setSelectedModel('');
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBrand(event.target.value);
        setSelectedModel('');
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(event.target.value);
    };

    const filteredBrands: OptionsData[] = selectedType
        ? data.filter((brand) => brand.type === selectedType).map((brand) => ({
              value: brand.value,
              label: brand.label
          }))
        : [];

    const filteredModels: OptionsData[] = selectedBrand
        ? data.find((brand) => brand.value === selectedBrand)?.models || []
        : [];

    return (
        <Box padding={0}>
            <InputSelect
                label="Tipo de Veículo"
                value={selectedType}
                onChange={handleTypeChange}
                options={[
                    { value: 'carro', label: 'Carro' },
                    { value: 'moto', label: 'Moto' }
                ]}
            />
            <InputSelect
                label="Marca"
                value={selectedBrand}
                onChange={handleBrandChange}
                options={filteredBrands}
                isDisabled={!selectedType}
            />
            <InputSelect
                label="Modelo"
                value={selectedModel}
                onChange={handleModelChange}
                options={filteredModels}
                isDisabled={!selectedBrand}
            />
        </Box>
    );
};

export default CarSelector;
