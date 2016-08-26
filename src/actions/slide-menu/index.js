import * as Action from '../../action-type/slide-menu'

export function openMenu() {
    return { type: Action.openMenu }
}

export function moveSlide(left) {
    return { type: Action.moveSlide, left }
}
