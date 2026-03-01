import './js/render.js';

import { RenderDoors } from './js/render';

const doors = Object.entries(
    import.meta.glob('./assets/images/*.jpeg', {eager: true})
).map(([path, module]) => ({
    img: module.default
}));

RenderDoors(doors);
