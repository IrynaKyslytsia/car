import { Button } from "./MainButton.styled";

const MainButton = ({children, size, onClick}) => {
    return (
        <Button type="submit" size={size} onClick={onClick}>{children}</Button>
    )
};

export default MainButton;