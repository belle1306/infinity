import '../types/webxr.js';
import { Event as ThreeEvent, EventDispatcher, PerspectiveCamera, Vector3, WebGLRenderer } from 'three';
import { ModelScene } from './ModelScene.js';
import { Renderer } from './Renderer.js';
export declare type ARStatus = 'not-presenting' | 'session-started' | 'object-placed' | 'failed';
export declare const ARStatus: {
    [index: string]: ARStatus;
};
export interface ARStatusEvent extends ThreeEvent {
    status: ARStatus;
}
export declare class ARRenderer extends EventDispatcher {
    private renderer;
    threeRenderer: WebGLRenderer;
    camera: PerspectiveCamera;
    currentSession: XRSession | null;
    placeOnWall: boolean;
    private placementBox;
    private lastTick;
    private turntableRotation;
    private oldShadowIntensity;
    private oldBackground;
    private rafId;
    private refSpace;
    private viewerRefSpace;
    private frame;
    private initialHitSource;
    private transientHitTestSource;
    private inputSource;
    private _presentedScene;
    private resolveCleanup;
    private exitWebXRButtonContainer;
    private initialModelToWorld;
    private initialized;
    private oldTarget;
    private placementComplete;
    private isTranslating;
    private isRotating;
    private isScaling;
    private lastDragPosition;
    private lastScalar;
    private goalPosition;
    private goalYaw;
    private goalScale;
    private xDamper;
    private yDamper;
    private zDamper;
    private yawDamper;
    private scaleDamper;
    private damperRate;
    private onExitWebXRButtonContainerClick;
    constructor(renderer: Renderer);
    resolveARSession(scene: ModelScene): Promise<XRSession>;
    /**
     * The currently presented scene, if any
     */
    get presentedScene(): ModelScene | null;
    /**
     * Resolves to true if the renderer has detected all the necessary qualities
     * to support presentation in AR.
     */
    supportsPresentation(): Promise<boolean>;
    /**
     * Present a scene in AR
     */
    present(scene: ModelScene): Promise<void>;
    /**
     * If currently presenting a scene in AR, stops presentation and exits AR.
     */
    stopPresenting(): Promise<void>;
    /**
     * True if a scene is currently in the process of being presented in AR
     */
    get isPresenting(): boolean;
    get target(): Vector3;
    updateTarget(): void;
    onUpdateScene: () => void;
    private postSessionCleanup;
    private updateCamera;
    private placeInitially;
    private getHitPoint;
    /**
     * This sets the initial model placement based on the input hit point. The
     * bottom of the model will be placed on the floor (the shadow will rest on
     * the input's y-coordinate). The XZ placement is found by first putting the
     * scene's target at the hit point, drawing a ray from the camera to the
     * target, and finding the XZ-intersection of this ray with the model's
     * bounding box. The scene is then translated on the XZ plane to position this
     * intersection point at the input hit point. If the ray does not intersect,
     * the target is left at the hit point.
     *
     * This ensures the model is placed according to the chosen target, is not
     * reoriented, and does not intersect the camera even when the model
     * is large (unless the target is chosen outside of the model's bounding box).
     *
     * Only a public method to make it testable.
     */
    placeModel(hit: Vector3): void;
    private onSelectStart;
    private onSelectEnd;
    private fingerSeparation;
    private processInput;
    private moveScene;
    private tick;
    /**
     * Only public to make it testable.
     */
    onWebXRFrame(time: number, frame: XRFrame): void;
}
