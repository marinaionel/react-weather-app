import mapboxgl from "mapbox-gl";

export default class ClickableMarker extends mapboxgl.Marker {
  private _handleClick?: () => void;

  onClick(handleClick: () => void): this {
    this._handleClick = handleClick;
    return this;
  }

  _onMapClick(e: { originalEvent: { target: any } }): void {
    const targetElement = e.originalEvent.target;
    const element = this.getElement();

    if (
      this._handleClick &&
      (targetElement === element || element.contains(targetElement))
    ) {
      this._handleClick();
    }
  }
}
