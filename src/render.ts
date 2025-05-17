export class Render {
  public static rectangleFilled(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    width: number,
    height: number,
    color: string
  ): void {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(column, row, width, height);
    ctx.closePath();
  }

  public static squareFilledBordered(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    side: number,
    color: string
  ) {
    this.rectangleFilledBordered(ctx, column, row, side, side, color);
  }

  public static squareFilled(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    side: number,
    color: string
  ) {
    this.rectangleFilled(ctx, column, row, side, side, color);
  }

  public static squareBordered(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    side: number,
    color: string
  ) {
    this.rectangleBordered(ctx, column, row, side, side, color);
  }

  public static rectangleBordered(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    width: number,
    height: number,
    color: string
  ) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.rect(column, row, width, height);
    ctx.stroke();
    ctx.closePath();
  }

  public static rectangleFilledBordered(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    width: number,
    height: number,
    color: string
  ): void {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillStyle = color;
    ctx.rect(column, row, width, height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  public static circleFilled(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    radius: number,
    color: string
  ) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(column, row, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  public static circleFilledBordered(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number,
    radius: number,
    color: string
  ) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(column, row, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}
