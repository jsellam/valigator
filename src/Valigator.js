export default class Valigator {
    constructor(data,fields)
    {
        this.data = data
        this.fields = fields
    }


    isValid()
    {
        let isValid = true
        this.result = {}

        Object.keys(this.fields).forEach(key =>{
            let value = this.data[key]
           
            let valigatorProp = this.fields[key]

            if(!valigatorProp._evaluate(value))
            {
                isValid = false
            }
            else
            {
                this.result[valigatorProp.newName || key] = valigatorProp.value
            }
        })
        return isValid
    }

    getResult()
    {
        return this.result
    }




}