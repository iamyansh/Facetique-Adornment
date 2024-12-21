import { GridItem, Image } from "@chakra-ui/react"


export const BigGridBox = ({source}) => {
    return (
        <GridItem
            colSpan={2}
            cursor={'pointer'}
            h={['200px', '200px', '400px', '500px', '600px']}
            borderRadius={'15px'}
            overflow={'hidden'}
        >
            <Image className="imgAnimation" src={source}></Image>
        </GridItem>
    )
}

export const SmallGridBox = ({source}) => {
    return (
        <GridItem
            cursor={'pointer'}
            borderRadius={'15px'}
            h={['100px', '100px', '200px', '250px', '300px']}
            overflow={'hidden'}
        >
            <Image className="imgAnimation" mt={'-30%'} src={source}></Image>
        </GridItem>
    )
}


export const GridBox = ({source}) => {
    return (
        <GridItem
            cursor={'pointer'}
            borderRadius={'15px'}
            overflow={'hidden'}
        >
            <Image className="imgAnimation" src={source} />
        </GridItem>
    )
}