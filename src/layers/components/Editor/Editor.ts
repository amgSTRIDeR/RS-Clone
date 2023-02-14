import createElement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import Button from '../Button/Button';
import ButtonWithIcon from '../Button/ButtonWithIcon';
import { EditorSVG } from './EditorSVG';

export default class Editor {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const editor = createElement('div', ['editor']);

    const editorBody = createElement('div', ['editor__body', 'border']);
    const editorControlsPanel = createElement('div', ['editor__controls', 'flex', 'gap-6', 'px-4', 'py-3']);
    const editorControlsText = createElement('div', ['editor__text', 'flex', 'gap-1']);
    const editorControlsMaterials = createElement('div', ['editor__materials', 'flex', 'gap-1']);

    const ButtonTextBold = new ButtonWithIcon({
      className: ['button-only-icon'],
      onClick: testCLick,
      svg: EditorSVG.Bold,
    }).render();

    const ButtonTextItalic = new ButtonWithIcon({
      className: ['button-only-icon'],
      onClick: testCLick,
      svg: EditorSVG.Italic,
    }).render();

    const ButtonTextUnderline = new ButtonWithIcon({
      className: ['button-only-icon'],
      onClick: testCLick,
      svg: EditorSVG.Underline,
    }).render();

    const ButtonLink = new ButtonWithIcon({
      className: ['button-only-icon'],
      onClick: testCLick,
      svg: EditorSVG.Link,
    }).render();

    const ButtonImage = new ButtonWithIcon({
      className: ['button-only-icon'],
      onClick: testCLick,
      svg: EditorSVG.Img,
    }).render();

    const ButtonEditorAdd = new ButtonWithIcon({
      className: ['button-only-icon'],
      onClick: testCLick,
      svg: EditorSVG.Add,
    }).render();

    editorControlsText.append(
      ButtonTextBold,
      ButtonTextItalic,
      ButtonTextUnderline,
    );

    editorControlsMaterials.append(
      ButtonLink,
      ButtonImage,
      ButtonEditorAdd,
    );

    editorControlsPanel.append(
      editorControlsText,
      editorControlsMaterials,
    );

    const editorTextarea = createElement('textarea', [
      'editor__textarea',
      'block',
      'w-full',
      'h-[150px]',
      'px-4',
      'py-3',
      'border-t',
      'overflow-y-scroll',
      'resize-none',
    ]);

    const ButtonSave = new Button({
      value: 'Save',
      className: ['button-contrast'],
      onClick: testCLick,
    }).render();

    const ButtonDiscard = new Button({
      value: 'Discard',
      className: ['button-noncontrast'],
      onClick: testCLick,
    }).render();

    const editSaveOrDiscard = createElement('div', ['flex', 'gap-5', 'mt-5']);
    editSaveOrDiscard.append(ButtonSave, ButtonDiscard);

    editorBody.append(editorControlsPanel, editorTextarea);
    editor.append(editorBody, editSaveOrDiscard);

    this.container.append(editor);
    return editor;
  }
}
