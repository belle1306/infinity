/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Image } from './image.js';
import { Sampler } from './sampler.js';
import { $sourceObject, ThreeDOMElement } from './three-dom-element.js';
const $source = Symbol('source');
const $sampler = Symbol('sampler');
/**
 * Material facade implementation for Three.js materials
 */
export class Texture extends ThreeDOMElement {
    constructor(onUpdate, gltf, texture, correlatedTextures) {
        super(onUpdate, texture, correlatedTextures);
        const { sampler: samplerIndex, source: imageIndex } = texture;
        const sampler = (gltf.samplers != null && samplerIndex != null) ?
            gltf.samplers[samplerIndex] :
            {};
        this[$sampler] = new Sampler(onUpdate, sampler, correlatedTextures);
        if (gltf.images != null && imageIndex != null) {
            const image = gltf.images[imageIndex];
            if (image != null) {
                this[$source] = new Image(onUpdate, image, correlatedTextures);
            }
        }
    }
    get name() {
        return this[$sourceObject].name || '';
    }
    get sampler() {
        return this[$sampler];
    }
    get source() {
        return this[$source];
    }
}
//# sourceMappingURL=texture.js.map