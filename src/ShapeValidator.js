import Valigator from './Valigator'
export default class ShapeValidator {
    

    constructor()
    {
        this.isRequired = false
        this.newName = null
        this.defaultValue = null
        this.value = null
    }

    of(fields)
    {
       this.fields = fields
       return this
    }

    get required()
    {
        this.isRequired = true
        return this
    }

    default(value=null)
    {
        this.defaultValue = value
        this.isRequired = false
        return this
    }

    rename(newName)
    {
        this.newName = newName
        return this
    }

    _evaluate(value)
    {
        let valigator = new Valigator(value,this.fields)
        let isValid = valigator.isValid()
        if(isValid) this.value = valigator.getResult()
        if(!isValid && this.isRequired) return false
        return true
   
    }
}