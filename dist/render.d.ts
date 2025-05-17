export declare class Render {
    static rectangleFilled(ctx: CanvasRenderingContext2D, column: number, row: number, width: number, height: number, color: string): void;
    static squareFilledBordered(ctx: CanvasRenderingContext2D, column: number, row: number, side: number, color: string): void;
    static squareFilled(ctx: CanvasRenderingContext2D, column: number, row: number, side: number, color: string): void;
    static squareBordered(ctx: CanvasRenderingContext2D, column: number, row: number, side: number, color: string): void;
    static rectangleBordered(ctx: CanvasRenderingContext2D, column: number, row: number, width: number, height: number, color: string): void;
    static rectangleFilledBordered(ctx: CanvasRenderingContext2D, column: number, row: number, width: number, height: number, color: string): void;
    static circleFilled(ctx: CanvasRenderingContext2D, column: number, row: number, radius: number, color: string): void;
    static circleFilledBordered(ctx: CanvasRenderingContext2D, column: number, row: number, radius: number, color: string): void;
}
