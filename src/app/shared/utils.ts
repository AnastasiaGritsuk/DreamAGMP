export class Utils {
    public static uniqueId() {
        let date = Date.now();
        let random = Math.random() * Math.random();
    
        return Math.floor(date * random).toString();
    }
}