export class toolsAngle {
    /**
     * @syntax toRad(deg)
     * @param {Float} deg
     * @returns {Float}
     */
    static toRad(deg) {
        return  Math.PI * (deg) / 180;
    }
    /**
     * @syntax toDeg(rad)
     * @param {Float} rad
     * @returns {Float}
     */
    static toDeg(rad) {
        return 180 * (rad) / Math.PI;
    }

}
