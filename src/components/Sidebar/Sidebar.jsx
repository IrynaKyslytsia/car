import { useState } from 'react';
import { Input, InputLeft, InputTitle, InputWrapper, SidebarWrapper } from './Sidebar.styled';
import Select from 'react-select';
import MainButton from '../MainButton/MainButton';

const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const carBrandOptions = [
        { value: 'Buick', label: 'Buick' },
        { value: 'Volvo', label: 'Volvo' },
        { value: 'HUMMER', label: 'HUMMER' },
    ];
    
    const priceOptions = [
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '30', label: '30' },
    ];

    return (
        <SidebarWrapper>
            <div>
                <InputTitle>Car brand</InputTitle>
                <Select
                styles={{
                    control: () => ({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F7F7FB",
                        borderColor: "transparent",
                        width: "224px",
                        height: "48px",
                        borderRadius: "14px",
                    }),
                    indicatorsContainer: () => ({
                        border: "none",
                    }),
                 }}
                closeMenuOnSelect={true}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={carBrandOptions} />
            </div>
            <div>
                <InputTitle>Price/ 1 hour</InputTitle>
                <Select
                styles={{
                    control: () => ({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F7F7FB",
                        borderColor: "transparent",
                        width: "224px",
                        height: "48px",
                        borderRadius: "14px",
                    }),
                    indicatorsContainer: () => ({
                        border: "none",
                    }),
                 }}
                closeMenuOnSelect={true}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={priceOptions} />
            </div>
            <div>
                <InputTitle>Сar mileage / km</InputTitle>
                <InputWrapper>
                    <InputLeft
                        type='number'
                        name='mileage'
                        placeholder='from' />
                    <Input
                        type='number'
                        name='mileage'
                        placeholder='to' />
                </InputWrapper>
            </div>
            <MainButton size="small">Search</MainButton>
        </SidebarWrapper>
    )
};

export default Sidebar;