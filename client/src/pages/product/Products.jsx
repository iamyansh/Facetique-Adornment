import { Box, Button, Center, Flex, Grid, Spacer, Text, useColorMode, useToast } from "@chakra-ui/react"
import { getItemSession, setItemSession } from "../../utils/sessionStorage"
import { IoOptionsOutline } from "react-icons/io5"
import { SortFilter } from "../../components/products/SortFilter";
import { LeftSideFilter } from "../../components/products/LeftSideFilter";
import { Loading } from "../../components/loading/Loading";
import { ProductDisplayBox } from "../../components/products/ProductDisplayBox";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../components/loading/Error";
import { useEffect, useState } from "react";
import { getRequest, resetFilters } from "../../redux/features/products/actions";
import { setToast } from "../../utils/extraFunctions";
import { useNavigate } from "react-router-dom";

export const Products = () => {

    const {colorMode} = useColorMode();
    const path = getItemSession("path");
    const dispatch = useDispatch();
    const {products, isLoading, isError} = useSelector((state) => state.prodReducer);

    const [isFilter, setIsFilter] = useState(true);

    const toast = useToast();
    const navigate = useNavigate();

    const resetFilter = () => {
        setIsFilter(!isFilter);
        dispatch(resetFilters());
        setToast(toast, "Filter Reset Successfully", "success");
    }


    const handleSingleProduct = (product) => {
        setItemSession('singleProduct',product);
        navigate(`/description`);
    }

    useEffect(()=>{
        dispatch(getRequest(path));
    },[path])

    return <>
        <Flex
            dir={['column', 'column', 'row', 'row', 'row']}
            h={['100px', '100px', '60px', '60px', '60px']}
            pos={'sticky'}
            mt={'20px'}
            top={'0px'}
            bg={colorMode==='light' ? "white" : '#1a202c'}
            zIndex={1}
        >
            <Center>
                <Text w={'100%'} ml={['20px', '20px', '30px', '40px', '50px']} fontSize={['18px', '23px']} fontWeight={500}>
                    {path === 'bracelet' ? 'Bracelet Products' : 
                     path === 'earing' ? 'Earing Products' : 
                     path === 'chain' ? 'Chain Products' : 'All Products'} {products.length}
                </Text>
            </Center>
            <Spacer/>
            <Center>
                <Flex
                    gap={['4px']}
                    w={'100%'}
                    my={['10px', '10px', '0px', '0px', '0px']}
                    px={['8px', '8px', '20px', '20px', '20px']}
                >
                    <Button onClick={()=>{setIsFilter(!isFilter)}} ml={'5px'} fontSize={['13px', '16px']} rightIcon={<IoOptionsOutline />}>
                        Show filter
                    </Button>
                    <Spacer/>
                    <Button onClick={resetFilter} fontSize={['13px', '16px']}>
                        Reset Filter
                    </Button>
                    <Spacer/>
                    <SortFilter/>
                </Flex>
            </Center>
        </Flex>
        
        <Grid
            gap={['20px', '20px', '2%', '2%', '2%']}
            templateColumns={['100%', '100%', isFilter ? '32% 66%' : '100%', isFilter ? '28% 70%' : '100%', isFilter ? '20% 78%' : '100%']}
            // justifyContent={'center'}
        >
            {isFilter && <Box
                minH={['120px', '120px', '600px', '600px', '600px']}
                maxH={['900px', '600px']}
                position={['none', 'none', 'sticky', 'sticky', 'sticky']}
                top={['0px', '70px']}
                overflowY={'scroll'}
                className='scroll'
                zIndex={0}
                mt={['10px', '10px', '20px', '20px', '20px']}
            >
                <LeftSideFilter/>
            </Box>}

            <Box minH={'400px'}>

                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <Error />
                    ) : (
                        <Grid
                            gap={[2, 4]}
                            p={['10px', '10px', '20px', '20px', '20px']}
                            templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                        >
                            {products.map((product, index) => (
                                <ProductDisplayBox
                                    {...product}
                                    key={index}
                                    onClick={() => { handleSingleProduct(product) }}
                                />
                            ))}
                        </Grid>
                    )}

                </Box>

        </Grid>
    </>
    
}