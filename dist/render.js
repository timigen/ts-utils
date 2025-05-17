export class Render {
    static rectangleFilled(ctx, column, row, width, height, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(column, row, width, height);
        ctx.closePath();
    }
    static squareFilledBordered(ctx, column, row, side, color) {
        this.rectangleFilledBordered(ctx, column, row, side, side, color);
    }
    static squareFilled(ctx, column, row, side, color) {
        this.rectangleFilled(ctx, column, row, side, side, color);
    }
    static squareBordered(ctx, column, row, side, color) {
        this.rectangleBordered(ctx, column, row, side, side, color);
    }
    static rectangleBordered(ctx, column, row, width, height, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.rect(column, row, width, height);
        ctx.stroke();
        ctx.closePath();
    }
    static rectangleFilledBordered(ctx, column, row, width, height, color) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.fillStyle = color;
        ctx.rect(column, row, width, height);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    static circleFilled(ctx, column, row, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(column, row, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    static circleFilledBordered(ctx, column, row, radius, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(column, row, radius, 0, 2 * Math.PI);
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}
