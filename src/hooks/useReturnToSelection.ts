import { useNavigate } from "react-router-dom";
import useDebouncedCallback from "./useDebouncedCallback";
import { useCurrentCryptoPrice } from "store";

export const useReturnToSelection = () => {
    const navigate = useNavigate();
    const returnToSelection = useDebouncedCallback<HTMLButtonElement>(navigate, "/");
    return returnToSelection;
};

export default useReturnToSelection;
