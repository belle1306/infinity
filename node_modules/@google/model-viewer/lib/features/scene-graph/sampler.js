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
import { $correlatedObjects, $onUpdate, $sourceObject, ThreeDOMElement } from './three-dom-element.js';
const isMinFilter = (() => {
    const minFilterValues = [9728, 9729, 9984, 9985, 9986, 9987];
    return (value) => minFilterValues.indexOf(value) > -1;
})();
const isMagFilter = (() => {
    const magFilterValues = [9728, 9729];
    return (value) => magFilterValues.indexOf(value) > -1;
})();
const isWrapMode = (() => {
    const wrapModes = [33071, 33648, 10497];
    return (value) => wrapModes.indexOf(value) > -1;
})();
const isValidSamplerValue = (property, value) => {
    switch (property) {
        case 'minFilter':
            return isMinFilter(value);
        case 'magFilter':
            return isMagFilter(value);
        case 'wrapS':
        case 'wrapT':
            return isWrapMode(value);
        default:
            throw new Error(`Cannot configure property "${property}" on Sampler`);
    }
};
const $threeTextures = Symbol('threeTextures');
const $setProperty = Symbol('setProperty');
/**
 * Sampler facade implementation for Three.js textures
 */
export class Sampler extends ThreeDOMElement {
    get [$threeTextures]() {
        return this[$correlatedObjects];
    }
    constructor(onUpdate, sampler, correlatedTextures) {
        // These defaults represent a convergence of glTF defaults for wrap mode and
        // Three.js defaults for filters. Per glTF 2.0 spec, a renderer may choose
        // its own defaults for filters.
        // @see https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-sampler
        // @see https://threejs.org/docs/#api/en/textures/Texture
        if (sampler.minFilter == null) {
            sampler.minFilter = 9987;
        }
        if (sampler.magFilter == null) {
            sampler.magFilter = 9729;
        }
        if (sampler.wrapS == null) {
            sampler.wrapS = 10497;
        }
        if (sampler.wrapT == null) {
            sampler.wrapT = 10497;
        }
        super(onUpdate, sampler, correlatedTextures);
    }
    get name() {
        return this[$sourceObject].name || '';
    }
    get minFilter() {
        return this[$sourceObject].minFilter;
    }
    get magFilter() {
        return this[$sourceObject].magFilter;
    }
    get wrapS() {
        return this[$sourceObject].wrapS;
    }
    get wrapT() {
        return this[$sourceObject].wrapT;
    }
    setMinFilter(filter) {
        this[$setProperty]('minFilter', filter);
    }
    setMagFilter(filter) {
        this[$setProperty]('magFilter', filter);
    }
    setWrapS(mode) {
        this[$setProperty]('wrapS', mode);
    }
    setWrapT(mode) {
        this[$setProperty]('wrapT', mode);
    }
    [$setProperty](property, value) {
        const sampler = this[$sourceObject];
        if (isValidSamplerValue(property, value)) {
            sampler[property] = value;
            for (const texture of this[$threeTextures]) {
                texture[property] = value;
                texture.needsUpdate = true;
            }
        }
        this[$onUpdate]();
    }
}
//# sourceMappingURL=sampler.js.map