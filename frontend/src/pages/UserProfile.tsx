import { useAuthStore } from "../store/auth";
import { Token } from "../Interfaces";
import jwt_decode from "jwt-decode";

const UserProfile = () => {

    const token : string = useAuthStore.getState().access;

    const tokenDecoded : Token = jwt_decode(token)
    const is_admin = tokenDecoded.is_staff;
    const avatar = tokenDecoded.avatar;

    return (
    <p>Perfil de Usuario</p>
    )
};

export default UserProfile