import { Component, Method, Prop } from '@stencil/core';
import Tile from 'ol/layer/tile';
import Stamen from 'ol/source/stamen';


@Component({
  tag: 'ol-layer-stamen',
  styleUrl: 'ol-layer-stamen.scss'
})
export class OLLayerStamen {
  @Prop() layer: string;
  private _layer: Tile;
  private _source: Stamen;

  componentDidLoad() {
    this._layer = new Tile({
      source: new Stamen({
        layer: this.layer
      })
    });
    this._source = this._layer.getSource();
  }

  @Method()
  getLayer() {
    return this._layer;
  }

  @Method()
  getSource() {
    return this._source;
  }
}
