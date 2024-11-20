import { useNavigate } from "../hooks/useNavigate";
import { InitialModel } from "../models";

export const InitialViewModel = (): InitialModel => {
    const { navigate } = useNavigate();

    const skip = () => {
        navigate('home')
    }

    return { skip };
}