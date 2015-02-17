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
         * @syntax toRad(deg)
         * @param {Float} deg
         * @returns {Float}
#####toDeg
        * @syntax toDeg(rad)
         * @param {Float} rad
         * @returns {Float}


####Point (.point)
#####rotation
        * @syntax rotation(p,pCenter angle, plan)
         * @param {Point} p
         * @param {Point} pCenter 
         * @param {String} angle
         *  after operator optional("deg|rad")
         * @param {String} plan (optional) xy|xz
         * @returns {Point}
#####vector
         * @syntax vector(p1,p2)
         * @param {Point} p1
         * @param {Point} p2
         * @returns {Vector}
#####distance
         * @syntax distance(p1,p2)
         * @param {Point} p1
         * @param {Point} p2
         * @returns {Float}


####Vector (.vector)
#####vectorProduct
         * @syntax vectorProduct(v1,v2 )
         * @param {Vector} v1
         * @param {Vector} v2
         * @returns {Float}
#####scalarProduct
         * @syntax scalarProduct(v1,v2 )
         * @param {Vector} v1
         * @param {Vector} v2
         * @returns {Vector}
#####angle
         * @syntax angle(v1,v2,type)
         * @param {Vector} v1
         * @param {Vector} v2
         * @param {String} optionnal(deg|rad) type
         * @returns {Float}
#####normalize 
         * @syntax normalize( v1)
         * @param {Vector} v1
         * @returns {Vector}
#####cross 
         * @syntax cross(v1,v2)
         * @param {Vector} v1
         * @param {Vector} v2
         * @returns {Point}

###Number
#####sign
     * @syntax sign()
     * @returns {integer} 1|0|-1

###point
#####constructor
     * @syntax point()
#####toString
     * @syntax toString()
     * @returns {String} [object point]
#####rotation
     * @syntax rotation(point2, angle, plan)
     * @param {Point} point2
     * @param {String} angle
     *  after operator optional("deg|rad")
     * @param {String} plan (optional)xy|xz
     * @returns {Self}
#####distance
     * @syntax distance(p2)
     * @param {Point} p2
     * @returns {Float}
#####vector
     * @syntax vector(p2)
     * @param {Point} p2
     * @returns {vector}
     * vector with points
####zTriangle
     * @syntax zTriangle(p1,p2,p3)
     * @param {Point} p1
     * @param {Point} p2
     * @param {Point} p3
     * @returns {Self }
     * + self z

###vector
#####constructor
     * @syntax vector()
#####toString
     * @syntax toString()
     * @returns {String} [object vector]
#####setPoint
     * @syntax setPoint(p1,p2 )
     * @param {Point} p1
     * @param {Point} p2 
     * @returns {Self} + p1 + p2
#####vectorProduct
     * @syntax vectorProduct(v2 )
     * @param {Vector} v2
     * @returns {Float}
#####scalarProduct
     * @syntax scalarProduct(v2 )
     * @param {Vector} v2
     * @returns {Vector}
#####normalize
     * @syntax normalize( )
     * @returns {Vector}
#####cross
     * @syntax cross(v2)
     * @param {Vector} v2
     * @returns {Point}
#####angle
     * @syntax angle(v2,type)
     * @param {Vector} v2
     * @param {String} optionnal(deg|rad) type
     * @returns {Float}

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
