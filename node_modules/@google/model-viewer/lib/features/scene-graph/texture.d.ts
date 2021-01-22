import { Texture as ThreeTexture } from 'three';
import { GLTF, Texture as GLTFTexture } from '../../three-components/gltf-instance/gltf-2.0.js';
import { Texture as TextureInterface } from './api.js';
import { Image } from './image.js';
import { Sampler } from './sampler.js';
import { ThreeDOMElement } from './three-dom-element.js';
declare const $source: unique symbol;
declare const $sampler: unique symbol;
/**
 * Material facade implementation for Three.js materials
 */
export declare class Texture extends ThreeDOMElement implements TextureInterface {
    private [$source];
    private [$sampler];
    constructor(onUpdate: () => void, gltf: GLTF, texture: GLTFTexture, correlatedTextures: Set<ThreeTexture>);
    get name(): string;
    get sampler(): Sampler;
    get source(): Image;
}
export {};
