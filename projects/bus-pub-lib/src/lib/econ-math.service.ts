import { Injectable } from "@angular/core";
import { Subject, ReplaySubject, Observable } from "rxjs";

interface MathJaxConfig {
  source: string;
  id: string;
}

declare global {
  interface Window {
    MathJax: {
      defaultReady: any;
      typesetPromise: (value: any) => Promise<any>;
      typeset: () => any;
      startup: {
        promise: Promise<any>;
        ready: any;
      };
    };
  }
}

@Injectable({
  providedIn: "root"
})
export class EconMathService {
  private signal: Subject<boolean>;
  private mathJax: MathJaxConfig = {
    source: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.min.js",
    id: "MathJaxScript"
  };

  constructor() {
    this.signal = new ReplaySubject<boolean>();
    void this.registerMathJaxAsync(this.mathJax)
      .then( () => this.signal.next(false))
      .catch(error => {
          console.log(error);
      });
  }

  private async registerMathJaxAsync(config: MathJaxConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement("script");
      script.id = config.id;
      script.type = "text/javascript";
      script.src = config.source;
      script.crossOrigin = "anonymous";
      script.async = true;
      script.onload = () => resolve(1);
      script.onerror = error => reject(error);
      document.head.appendChild(script);
    });
  }

  ready(): Observable<boolean> {
    return this.signal;
  }

  render(element: HTMLElement, math: string) {
    // Take initial typesetting which MathJax performs into account
    window.MathJax.startup.promise = window.MathJax.startup.promise.then(() => {
      if (math === '') {
        return window.MathJax.typeset();
      } else {
        element.innerHTML = math;
        return window.MathJax.typesetPromise([element]);
      }

    });
  }
}
