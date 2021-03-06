import * as ko from "knockout";

import "./color.scss";
import { SurveyColorPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./color.html");

export class PropertyEditorColor {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public koMaxValue: any,
    public koMinValue: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-color", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyColorPropertyEditor = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorColor(
        model.koValue,
        model.readOnly,
        model.koMaxValue,
        model.koMinValue,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
