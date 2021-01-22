import { MeshStandardMaterial } from 'three';
import { GLTF, Material as GLTFMaterial } from '../../three-components/gltf-instance/gltf-2.0.js';
import { Material as MaterialInterface, RGB } from './api.js';
import { PBRMetallicRoughness } from './pbr-metallic-roughness.js';
import { TextureInfo } from './texture-info.js';
import { ThreeDOMElement } from './three-dom-element.js';
declare const $pbrMetallicRoughness: unique symbol;
declare const $normalTexture: unique symbol;
declare const $occlusionTexture: unique symbol;
declare const $emissiveTexture: unique symbol;
/**
 * Material facade implementation for Three.js materials
 */
export declare class Material extends ThreeDOMElement implements MaterialInterface {
    private [$pbrMetallicRoughness];
    private [$normalTexture];
    private [$occlusionTexture];
    private [$emissiveTexture];
    constructor(onUpdate: () => void, gltf: GLTF, material: GLTFMaterial, correlatedMaterials: Set<MeshStandardMaterial> | undefined);
    get name(): string;
    get pbrMetallicRoughness(): PBRMetallicRoughness;
    get normalTexture(): TextureInfo | null;
    get occlusionTexture(): TextureInfo | null;
    get emissiveTexture(): TextureInfo | null;
    get emissiveFactor(): RGB;
    setEmissiveFactor(rgb: RGB): void;
}
export {};
