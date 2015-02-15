# libraries_javascript
 V 0.0.2 
##specification 
    htmlelement 
    math
     point 2D,3D
     vector 2D,3D
    array
    storage
### htmlelement
#### CSS
#####css
     * @syntax css(cssNames,operator)
     * @param {String} cssNames as p
     * @param {String} operator as v
     *  before operator optional("+="|"-="|"*="|"/=" )
     *  after operator optional("px")
     * @returns {Self}
#####addClass
     * @syntax addClass(classNames)
     * @param {String} classNames as n
     * accept multi string as array with space character
     * @returns {Boolean}
#####removeClass
     * @syntax removeClass(classNames)
     * @param {String} classNames as n
     * accept multi string as array with space character
     * @returns {Boolean}
#### DOM Insertion, Inside
#####append
     * @syntax append(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
#####prepend
     * @syntax prepend(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
#### DOM Insertion, Outside
#####after
     * @syntax after(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}
#####before
     * @syntax before(value)
     * @param {String | Object | Object Dom } value as d
     * @returns {Boolean}

### math
####Angle (.angle)
#####toRad
#####toDeg
####Point (.point)
#####rotation
     *3D to DO
#####distance
####Vecteur (.vecteur)
#####produitVectoriel
#####produitScalaire
#####cross 
     *to DO

###point2
###point3
###vecteur2
###vecteur3

### storage
#####setObject
     * @syntax setObject(key,obj,type)
     * @param {String} key
     * @param {Object | Object Array || String } obj
     * @param {String (optional)"{}"|"[]"} type
     * @returns {Boolean}
#####getObject
     * @syntax getObject(key,type)
     * @param {String} key
     * @param {String (optional)"{}"|"[]"} type
     * @returns {Boolean}
     
### array
#####shuffle
     * @syntax shuffle()
     * @returns {self}
#####limit
     * @syntax limit(maxLenght,isShift)
     * @param {Number} maxLenght as n
     * @param {Boolean (optional)shift|pop} isShift as shift
     * @returns {Boolean}
