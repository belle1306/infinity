import { Texture as ThreeTexture } from 'three';
import { Image as GLTFImage } from '../../three-components/gltf-instance/gltf-2.0.js';
import { Image as ImageInterface } from './api.js';
import { ThreeDOMElement } from './three-dom-element.js';
declare const $threeTextures: unique symbol;
declare const $uri: unique symbol;
declare const $bufferViewImages: unique symbol;
/**
 * Image facade implementation for Three.js textures
 */
export declare class Image extends ThreeDOMElement implements ImageInterface {
    private get [$threeTextures]();
    private [$uri];
    private [$bufferViewImages];
    constructor(onUpdate: () => void, image: GLTFImage, correlatedTextures: Set<ThreeTexture>);
    get name(): string;
    get uri(): string | undefined;
    get type(): 'embedded' | 'external';
    setURI(uri: string): Promise<void>;
}
export {};
