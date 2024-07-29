import { Image } from "@chakra-ui/react"

interface Props {
    width: string;
    height: string;
}

const Logo = ({ width, height }: Props) => {
    return (
        <Image
            src="/opalwed_logo.svg"
            objectFit="contain"
            h={height}
            w={width}
        />
    )
}

export default Logo