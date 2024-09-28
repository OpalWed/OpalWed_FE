import useProfile from "../../hooks/useProfile"

const ProfilePage = () => {
    const { data } = useProfile();

    console.log(data);

    return (
        <>This is profile page</>
    )
}

export default ProfilePage