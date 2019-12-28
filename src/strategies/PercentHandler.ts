import { Ticker } from "../interfaces";

class PercentHandler {
  public canHandle(index: any, value: Ticker): boolean {
    return value.percentChange < "-0.12291480";
  }

  public handle(index: any, value: Ticker): any {
    return {
      pair: index,
      order: `Percent says: Buy ${index}!`
    };
  }
}
export default new PercentHandler();
