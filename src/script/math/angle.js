 (function() {
 var toolsAngle = function() {
        var toolsAngle = {
            toRad: toRad,
            toDeg: toDeg
        };
        return toolsAngle;

        /**
         * @syntax toRad(deg)
         * @param {Float} deg
         * @returns {Float}
         */
        function toRad(deg) {
            return  Math.PI * (deg) / 180;
        }
        ;
        /**
         * @syntax toDeg(rad)
         * @param {Float} rad
         * @returns {Float}
         */
        function toDeg(rad) {
            return 180 * (rad) / Math.PI;
        }
        ;
    };
    Math.angle = toolsAngle();
    
 })();