export class Color {
    private colorInHex: string;

    constructor(hex: string) {
        this.colorInHex = hex;
    }

    static rgbToHex(red: number, green: number, blue: number): string {
        const componentToHex = (c: number) => {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        return '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    }

    static hexToRgb(hex: string): { red: number, green: number, blue: number } {
        hex = hex.replace('#', '');
        return {
            red: parseInt(hex.substring(0, 2), 16),
            green: parseInt(hex.substring(2, 4), 16),
            blue: parseInt(hex.substring(4, 6), 16)
        };
    }

    public getRGB(): { red: number, green: number, blue: number } {
        return Color.hexToRgb(this.colorInHex);
    }

    public setRGB(red: number, green: number, blue: number): void {
        this.colorInHex = Color.rgbToHex(red, green, blue);
    }

    public getHex(): string {
        return this.colorInHex;
    }

    public setHex(hex: string): void {
        this.colorInHex = hex;
    }

}
