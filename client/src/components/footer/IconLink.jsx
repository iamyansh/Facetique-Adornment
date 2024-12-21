import { Icon, Link } from "@chakra-ui/react"

export const IconLink = ({link, icon}) => {
    return (
        <Link
            target="_blank"
            href={link}
        >
            <Icon
                as={icon}
                w={'38px'}
                h={'38px'}
            />
        </Link>
    )
}