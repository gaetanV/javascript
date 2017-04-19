export class toolsNumber {
    /**
     * @syntax sign()
     * @returns {integer} 1|0|-1
     */
    static sign (val) {
        return val > 0 ? 1 : val < 0 ? -1 : 0;
    };
}
