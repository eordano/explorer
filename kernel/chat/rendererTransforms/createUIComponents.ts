import { Color4, UIText } from '@dcl/scene-api'
import { ChatMessage, ChatState, SYSTEM_MESSAGE } from '../types'

export function createUIComponents(state: ChatState) {
  return [
    createMainContainer('a', 'b'),
    createChatInnerTopContainer(),
    messagesLogScrollContainer(),
    messagesLogStackContainer(),
    textInputContainer(),
    textInput(),
    state.messages.map(createChatMessage)
  ]
}

const PRIMARY_TEXT_COLOR = Color4.White()
const COMMAND_COLOR = Color4.FromHexString('#ffd7a9ff')

function createChatMessage(message: ChatMessage) {
  return {
    id: '?',
    classId: UIText,
    color: message.from === SYSTEM_MESSAGE ? COMMAND_COLOR : PRIMARY_TEXT_COLOR,
    value: `<b>${message.from}:</b> ${message.message}`,
    fontSize: 14,
    vAlign: 'top',
    hAlign: 'left',
    vTextAlign: 'top',
    hTextAlign: 'left',
    width: '350px',
    adaptWidth: false,
    adaptHeight: true,
    textWrapping: true,
    outlineColor: Color4.Black()
  }
}

function createMainContainer(id: string, parentId: string) {
  return {
    id,
    classId: 111 /* FIXME */,
    name: 'chat-container',
    color: Color4.Clear(),
    vAlign: 'bottom',
    hAlign: 'left',
    width: '400px',
    height: '300px',
    positionX: 10,
    positionY: 10,
    thickness: 0
  }
}

function createChatInnerTopContainer() {}
function messagesLogScrollContainer() {}
function messagesLogStackContainer() {}
function textInputContainer() {}
function textInput() {}

/**
let Cb = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true
}
Cb = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true
}
let Cc = {
  name: 'chat-container',
  visible: true,
  opacity: 1,
  hAlign: 'left',
  vAlign: 'bottom',
  width: { type: 1, value: 400 },
  height: { type: 1, value: 300 },
  positionX: { type: 1, value: 10 },
  positionY: { type: 1, value: 10 },
  isPointerBlocker: true,
  parentComponent: 'Cb',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cc = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cb',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
let Cd = {
  name: 'inner-top-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 84 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0.2 },
  alignmentUsesSize: true
}
Cd = {
  name: 'inner-top-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 84 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0.2 },
  alignmentUsesSize: true
}
Cd = {
  name: 'inner-top-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 84 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cd = {
  name: 'inner-top-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 84 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cd = {
  name: 'inner-top-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 84 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cd = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
let Ce = {
  name: 'messages-log-scroll-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 90 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: -10 },
  isPointerBlocker: true,
  parentComponent: 'Cd',
  valueX: 0,
  valueY: 0,
  borderColor: { r: 1, g: 1, b: 1, a: 1 },
  backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
  isHorizontal: false,
  isVertical: false,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onChanged: null
}
Ce = {
  name: 'messages-log-scroll-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 90 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: -10 },
  isPointerBlocker: true,
  parentComponent: 'Cd',
  valueX: 0,
  valueY: 0,
  borderColor: { r: 1, g: 1, b: 1, a: 1 },
  backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
  isHorizontal: false,
  isVertical: false,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onChanged: null
}
Ce = {
  name: 'messages-log-scroll-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 90 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: -10 },
  isPointerBlocker: true,
  parentComponent: 'Cd',
  valueX: 0,
  valueY: 0,
  borderColor: { r: 1, g: 1, b: 1, a: 1 },
  backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
  isHorizontal: false,
  isVertical: false,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onChanged: null
}
Ce = {
  name: 'messages-log-scroll-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 90 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: -10 },
  isPointerBlocker: true,
  parentComponent: 'Cd',
  valueX: 0,
  valueY: 0,
  borderColor: { r: 1, g: 1, b: 1, a: 1 },
  backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
  isHorizontal: false,
  isVertical: true,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onChanged: null
}
Ce = {
  name: 'messages-log-scroll-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'top',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 90 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: -10 },
  isPointerBlocker: true,
  parentComponent: 'Cd',
  valueX: 0,
  valueY: 0,
  borderColor: { r: 1, g: 1, b: 1, a: 1 },
  backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
  isHorizontal: false,
  isVertical: true,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onChanged: null
}
Ce = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cd',
  valueX: 0,
  valueY: 0,
  borderColor: { r: 1, g: 1, b: 1, a: 1 },
  backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
  isHorizontal: false,
  isVertical: false,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onChanged: null
}
let Cf = {
  name: 'messages-log-stack-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'bottom',
  width: { type: 0, value: 90 },
  height: { type: 0, value: 100 },
  positionX: { type: 1, value: -10 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Ce',
  adaptWidth: true,
  adaptHeight: true,
  color: { r: 0, g: 0, b: 0, a: 0 },
  stackOrientation: 0,
  spacing: 10
}
Cf = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Ce',
  adaptWidth: true,
  adaptHeight: true,
  color: { r: 0, g: 0, b: 0, a: 0 },
  stackOrientation: 0,
  spacing: 0
}
let Cg = {
  name: 'input-text-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'bottom',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 15 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0.2 },
  alignmentUsesSize: true
}
Cg = {
  name: 'input-text-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'bottom',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 15 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0.2 },
  alignmentUsesSize: true
}
Cg = {
  name: 'input-text-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'bottom',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 15 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cg = {
  name: 'input-text-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'bottom',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 15 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cg = {
  name: 'input-text-container',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'bottom',
  width: { type: 0, value: 100 },
  height: { type: 0, value: 15 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
Cg = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cc',
  adaptWidth: false,
  adaptHeight: false,
  thickness: 0,
  color: { r: 0, g: 0, b: 0, a: 0 },
  alignmentUsesSize: true
}
let Ch = {
  name: 'input-text',
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 0, value: 90 },
  height: { type: 0, value: 100 },
  positionX: { type: 1, value: -5 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cg',
  outlineWidth: 0,
  outlineColor: { r: 0, g: 0, b: 0, a: 1 },
  color: { r: 0.5, g: 0.5, b: 0.5, a: 1 },
  thickness: 0,
  fontSize: 14,
  fontWeight: 'normal',
  value: '',
  placeholderColor: { r: 1, g: 1, b: 1, a: 1 },
  placeholder: 'Press enter and start talking...',
  margin: 10,
  maxWidth: 100,
  hTextAlign: 'left',
  vTextAlign: 'center',
  autoStretchWidth: false,
  background: { r: 0, g: 0, b: 0, a: 0 },
  focusedBackground: { r: 0, g: 0, b: 0, a: 0 },
  textWrapping: true,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: { r: 1, g: 1, b: 1, a: 1 },
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onTextSubmit: 'UUIDk',
  onChanged: null,
  onFocus: 'UUIDi',
  onBlur: 'UUIDj'
}
Ch = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cg',
  outlineWidth: 0,
  outlineColor: { r: 0, g: 0, b: 0, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 0 },
  thickness: 1,
  fontSize: 10,
  fontWeight: 'normal',
  value: '',
  placeholderColor: { r: 1, g: 1, b: 1, a: 1 },
  placeholder: '',
  margin: 10,
  maxWidth: 100,
  hTextAlign: 'left',
  vTextAlign: 'bottom',
  autoStretchWidth: true,
  background: { r: 0, g: 0, b: 0, a: 1 },
  focusedBackground: { r: 0, g: 0, b: 0, a: 1 },
  textWrapping: false,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: { r: 1, g: 1, b: 1, a: 1 },
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  onTextSubmit: null,
  onChanged: null,
  onFocus: null,
  onBlur: null
}
let Cl = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cf',
  outlineWidth: 0,
  outlineColor: { r: 1, g: 1, b: 1, a: 1 },
  color: { r: 1, g: 1, b: 1, a: 1 },
  fontSize: 10,
  fontAutoSize: false,
  fontWeight: 'normal',
  value: '',
  lineSpacing: 0,
  lineCount: 0,
  adaptWidth: false,
  adaptHeight: false,
  textWrapping: false,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: { r: 0, g: 0, b: 0, a: 1 },
  hTextAlign: 'left',
  vTextAlign: 'bottom',
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0
}
Cl = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'left',
  vAlign: 'top',
  width: { type: 1, value: 350 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cf',
  outlineWidth: 0,
  outlineColor: { r: 0, g: 0, b: 0, a: 1 },
  color: { r: 1, g: 0.8431372549019608, b: 0.6627450980392157, a: 1 },
  fontSize: 14,
  fontAutoSize: false,
  fontWeight: 'normal',
  value: '<b>Decentraland:</b> Type /help for info about controls',
  lineSpacing: 0,
  lineCount: 0,
  adaptWidth: false,
  adaptHeight: true,
  textWrapping: true,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: { r: 0, g: 0, b: 0, a: 1 },
  hTextAlign: 'left',
  vTextAlign: 'top',
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0
}
let Cn = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'center',
  vAlign: 'center',
  width: { type: 1, value: 100 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cf',
  outlineWidth: 0,
  outlineColor: { r: 1, g: 1, b: 1, a: 1 },
  color: { r: 1, g: 1, b: 1, a: 1 },
  fontSize: 10,
  fontAutoSize: false,
  fontWeight: 'normal',
  value: '',
  lineSpacing: 0,
  lineCount: 0,
  adaptWidth: false,
  adaptHeight: false,
  textWrapping: false,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: { r: 0, g: 0, b: 0, a: 1 },
  hTextAlign: 'left',
  vTextAlign: 'bottom',
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0
}
Cn = {
  name: null,
  visible: true,
  opacity: 1,
  hAlign: 'left',
  vAlign: 'top',
  width: { type: 1, value: 350 },
  height: { type: 1, value: 50 },
  positionX: { type: 1, value: 0 },
  positionY: { type: 1, value: 0 },
  isPointerBlocker: true,
  parentComponent: 'Cf',
  outlineWidth: 0,
  outlineColor: { r: 0, g: 0, b: 0, a: 1 },
  color: { r: 1, g: 1, b: 1, a: 1 },
  fontSize: 14,
  fontAutoSize: false,
  fontWeight: 'normal',
  value: '<b>eordano:</b> hey​',
  lineSpacing: 0,
  lineCount: 0,
  adaptWidth: false,
  adaptHeight: true,
  textWrapping: true,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: { r: 0, g: 0, b: 0, a: 1 },
  hTextAlign: 'left',
  vTextAlign: 'top',
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0
}

 * 
 */