import { Accordion, useToast } from "@chakra-ui/react"
import { FilterSection, PriceFilter } from "./LeftSideFilterComponents"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPriceRange, setAllFilters } from "../../redux/features/products/actions"
import { setToast } from "../../utils/extraFunctions"

export const LeftSideFilter = () => {

    const init = {
        
        Category : {Bracelet: false, Earing: false, Chain: false},
        Size : {Small: false, Medium: false, Large: false},
        Color: {Black: false, White: false, Gold: false, Blue: false}
    }

    const [priceRange, setPriceRange] = useState({minPrice: 0, maxPrice: Infinity});
    const [manageFilter, setManageFilter] = useState(init);

    const dispatch = useDispatch();
    const toast = useToast();

    const handleFilterChange = ({target: {name, value, checked}}) => {
        setManageFilter({
            ...manageFilter,
            [name]: {
                ...manageFilter[name],
                [value]: checked
            }
        })
    }

    const handleFilterApply = () => {
        dispatch(setAllFilters(manageFilter));
        setToast(toast, 'Filter Applied Successfully', 'success', 1000);
    }

    const handleChange = ({target: {value, name}}) => {
        setPriceRange({...priceRange, [name]: value})
    }

    const handleSubmit = () => {
        console.log(priceRange);
        dispatch(getPriceRange(priceRange));
        setToast(toast,'Price Range Applied Successfully', 'success', 1000);
    }


    return <>
        <Accordion allowMultiple>
            <PriceFilter handleChange={handleChange} handleSubmit={handleSubmit} />
            {<FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Category'} item={['Bracelet', 'Earing','Chain']} />}
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Size'} item={['Small', 'Medium', 'Large']} />
            <FilterSection change={handleFilterChange} apply={handleFilterApply} title={'Color'} item={['Black', 'White', 'Gold', 'Blue']} />
        </Accordion>
    </>
}