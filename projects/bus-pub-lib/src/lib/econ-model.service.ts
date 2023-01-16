import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { GgbApi } from './geogebra';

// up to 5 models per interactive are possible
declare var applet1: GgbApi;
declare var applet2: GgbApi;
declare var applet3: GgbApi;
declare var applet4: GgbApi;
declare var applet5: GgbApi;
declare function GGBApplet(arg1: object, arg2: boolean): any;


@Injectable({
  providedIn: 'root'
})
export class EconModelService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2,
    private announcer: LiveAnnouncer) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private _getModel(id: number) {
    let model: GgbApi = applet1;

    if (id === 1) {
      model = applet1;
    } else if (id === 2) {
      model = applet2;
    } else if (id === 3) {
      model = applet3;
    } else if (id === 4) {
      model = applet4;
    } else { model = applet5; }
    return model;

  }

  public renderModels(container: string | string[], graph: object[]) {

    const numberModels = graph.length;

    for (let i = 0; i < numberModels; i++) {
      let nextContainer: any;
      const applet = GGBApplet(graph[i], true);
      applet.inject(container[i]);
      nextContainer = document.getElementById(container[i]);
      this.renderer.listen(nextContainer, 'keyup', (event) => {
        if (event.key == 'Escape') {
          this.evaluateCommand([i + 1], 'SelectObjects()');
          this.announcer.announce('Graph frame layer.');
        }
      });

    }
  }

  public updateModels(id: number[], object: string[], value: any[]) {
    let model: GgbApi;
    const numberModels = id.length;

    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      if (typeof value[i] === 'object') value[i] = value[i].target.value;
      model.setValue(object[i], value[i]);
    }

  }

  public resetModels(id: number[]) {
    const numberModels = id.length;
    let model: GgbApi;
    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      model.reset();

    }
  }

  public evaluateCommand(id: number[], command: string) {
    const numberModels = id.length;
    let model: GgbApi;
    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      model.evalCommand(command);

    }

  }


  public getValues(id: number[], object: string[]) {
    let model: GgbApi;
    const numberModels = id.length;
    const data = [];

    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      data.push(model.getValue(object[i]));
    }
    return data;
  }

  public setVisible(id: number[], object: string[], state: boolean[]) {
    let model: GgbApi;
    const numberModels = id.length;

    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      model.setVisible(object[i], state[i]);
    }

  }

  public setLayerVisible(id: number[], layer: number[], state: boolean[]) {
    let model: GgbApi;
    const numberModels = id.length;

    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      model.setLayerVisible(layer[i], state[i]);
    }

  }

  public modelAnimation(id: number[], object: string[], start: boolean[]) {
    let model: GgbApi;
    const numberModels = id.length;
    for (let i = 0; i < numberModels; i++) {
      const nextModel = id[i];
      model = this._getModel(nextModel);
      model.setAnimating(object[i], start[i]);
      if (start[i]) {
        model.startAnimation();
      } else { model.stopAnimation(); }

    }

  }

}
