import { useRef } from "react";
import { useMessage } from "hooks";

const useCheckApiKey = () => {
    const showMessage = useMessage();

    const isAPIKeyAvailable = useRef(false);

    if (!process.env.REACT_APP_API_KEY) {
        showMessage.error(`No API key available for application`);
    } else {
        isAPIKeyAvailable.current = true;
    }
    return isAPIKeyAvailable.current;
};

export default useCheckApiKey;
