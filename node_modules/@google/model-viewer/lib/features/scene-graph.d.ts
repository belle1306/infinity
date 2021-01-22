import ModelViewerElementBase from '../model-viewer-base.js';
import { Constructor } from '../utilities.js';
import { Model } from './scene-graph/model.js';
interface SceneExportOptions {
    binary?: boolean;
    trs?: boolean;
    onlyVisible?: boolean;
    embedImages?: boolean;
    maxTextureSize?: number;
    forcePowerOfTwoTextures?: boolean;
    includeCustomExtensions?: boolean;
}
export interface SceneGraphInterface {
    readonly model?: Model;
    variantName: string | undefined;
    readonly availableVariants: Array<string>;
    orientation: string;
    scale: string;
    exportScene(options?: SceneExportOptions): Promise<Blob>;
}
/**
 * SceneGraphMixin manages exposes a model API in order to support operations on
 * the <model-viewer> scene graph.
 */
export declare const SceneGraphMixin: <T extends Constructor<ModelViewerElementBase, object>>(ModelViewerElement: T) => {
    new (...args: any[]): SceneGraphInterface;
    prototype: SceneGraphInterface;
} & object & T;
export {};
