export class Utils {
    public static uniqueId(): string {
        let date = Date.now();
        let random = Math.random() * Math.random();

        return Math.floor(date * random).toString();
    }
}