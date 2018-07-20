export default class ValigatorProp {
    constructor(transformer)
    {
        this.transformer = transformer
        this.isRequired = false
        this.newName = null
        this.defaultValue = null
        this.value = null
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
        this.value = this.transformer(value)
        if(this.isRequired && this.value === null) return false
        return true
    }



}