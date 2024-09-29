import { useEffect, useState } from "react";
import useProfile from "../../hooks/useProfile"
import Profile, { ProfileInit } from "../../types/Profile";

const ProfilePage = () => {
    const { data } = useProfile();
    const [profile, setProfile] = useState<Profile>(ProfileInit);

    useEffect(() => {
        if (data) {
            setProfile(data);
        }
    }, [data])

    console.log(data);


    return (
        <>This is profile page</>
    )
}

export default ProfilePage