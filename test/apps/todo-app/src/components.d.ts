/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { JSXElements } from '@stencil/core';




export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends JSXElements.HTMLAttributes {}

  interface TodoInput {}
  interface TodoInputAttributes extends JSXElements.HTMLAttributes {}

  interface TodoItem {}
  interface TodoItemAttributes extends JSXElements.HTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'TodoInput': Components.TodoInput;
    'TodoItem': Components.TodoItem;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'todo-input': Components.TodoInputAttributes;
    'todo-item': Components.TodoItemAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLTodoInputElement extends Components.TodoInput, HTMLElement {}
  var HTMLTodoInputElement: {
    prototype: HTMLTodoInputElement;
    new (): HTMLTodoInputElement;
  };

  interface HTMLTodoItemElement extends Components.TodoItem, HTMLElement {}
  var HTMLTodoItemElement: {
    prototype: HTMLTodoItemElement;
    new (): HTMLTodoItemElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'todo-input': HTMLTodoInputElement
    'todo-item': HTMLTodoItemElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'todo-input': HTMLTodoInputElement;
    'todo-item': HTMLTodoItemElement;
  }

}
