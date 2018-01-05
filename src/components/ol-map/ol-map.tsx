import { Component, Element, Prop } from '@stencil/core';
import Map from 'ol/map';
import View from 'ol/view';
import proj4 from 'proj4/dist/proj4-src.js';


@Component({
  tag: 'ol-map',
  styleUrls: [
    '../../../node_modules/ol/ol.css',
    'ol-map.scss'
  ]
})
export class OLMap {
  @Element() el: HTMLElement;
  @Prop() latitude: number;
  @Prop() longitude: number;
  @Prop() zoom: number;
  private _map: Map;

  componentDidLoad() {
    if (this._map) return;
    this._map = new Map({
      view: new View({
        center: proj4(
          'EPSG:4326', 'EPSG:3857', [this.longitude, this.latitude]),
        zoom: this.zoom
      }),
      layers: this.getLayers(),
      target: this.el
    });
  }

  getLayers() {
    let layers = [];
    let children = this.el.childNodes;
    for (let i=0; i < children.length; i++) {
      let child = (children[i] as any);
      if (child.getLayer) layers.push(child.getLayer());
    }
    layers.reverse();
    return layers;
  }
}
