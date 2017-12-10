export class LatLngModel {
  public lat: number;
  public lng: number;
}

export class PlaceModel {
  public position: LatLngModel;
  public zoom: number;
}
