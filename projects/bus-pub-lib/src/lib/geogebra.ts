export interface GgbApi {
    // commonly used methods
    setValue(arg1: string | string[], arg2: number | number[]): void;
    getValue(objName: string | string[]): number;
    reset(): void;
    setVisible(objName: string | string[], visible: boolean | boolean[]): void;
    setLayerVisible(layer: number | number[], visible: boolean | boolean[]): void;

    // animaion methods
    setAnimating(objName: string, animate: boolean): void;
    setAnimationSpeed(objName: string, speed: number): void;
    startAnimation(): void;
    stopAnimation(): void;
    isAnimationRunning(): boolean;
// model utilities
  evalCommand(sriptCommand: string): void;

}
