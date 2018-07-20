import ValigatorProp from './ValigatorProp'
import Transformers from './Transformers'
import ShapeValidator from './ShapeValidator'
export default {

    hexColor:new ValigatorProp(Transformers.toHexColor),
    shape:new ShapeValidator(),
    number:new ValigatorProp(Transformers.toNumber)



}