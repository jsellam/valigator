import isEmpty from './util/isEmpty'
export default {

    
    toNumber(value)
    {
        if(isEmpty(value)) return null
        value = Number(value)
        if(isNaN(value)) return null
        return value
    },


    toHexColor(value)
    {
        if(isEmpty(value)) return null
        value = value.toString()
        let isValidHexColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
        if(!isValidHexColor) return null
        return value
    },

    toBoolean(value)
    {
        if(isEmpty(value)) return null
        if(value.toString().toLowerCase() ==="true" || value.toString()==="1" || value === true) return true;
        if(value.toString().toLowerCase() ==="false" || value.toString()==="0" || value === false) return false;
        return null
    }



}