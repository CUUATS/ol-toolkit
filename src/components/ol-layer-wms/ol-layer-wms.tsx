import { Component, Method, Prop } from '@stencil/core';
import Image from 'ol/layer/image';
import ImageWMS from 'ol/source/imagewms';


@Component({
  tag: 'ol-layer-wms',
  styleUrl: 'ol-layer-wms.scss'
})
export class OLLayerWMS {
  @Prop() url: string;
  @Prop() layer: string;
  @Prop() serverType: string;
  private _layer: Image;
  private _source: ImageWMS;

  componentDidLoad() {
    this._layer = new Image({
      source: new ImageWMS({
        serverType: this.serverType,
        params: {
          LAYERS: this.layer
        },
        url: this.url
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
