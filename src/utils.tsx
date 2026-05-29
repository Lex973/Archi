import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function priceChangeDecor(criteria: boolean){
    const color =  criteria ? 'success' : 'error';
    const decor = criteria ? <ArrowDropUpIcon color='success'/> : <ArrowDropDownIcon color='error'/>
    return {color, decor}
}

export function numBeautify(num: number){
    const arr = Array.from(String(num));
    const newArr = [];
    while(arr.length>0){
        const partOfArr = arr.splice(-3);
        newArr.unshift(partOfArr);
    }
    const result = newArr.map(num => num.join('')).join(',')
    return result
}

export function calculateTotalPages(coinsAmount: number){
    const coinsPerPage = 100;
    return Math.ceil(coinsAmount / coinsPerPage)   
}