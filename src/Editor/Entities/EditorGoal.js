import { TheRenderer } from '../../Renderer'
import { EditorEntity } from './EditorEntity'

export class EditorGoal extends EditorEntity {
  constructor (x, y) {
    super(x, y, 1, 1)
  }

  render () {
    TheRenderer.drawRectangle('#f80', this.x * 8, this.y * 8, 8, 8)
  }
}