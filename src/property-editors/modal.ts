import * as ko from "knockout";

import "./modal.scss";
import { SurveyPropertyModalEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./modal.html");

export class PropertyEditorModal {
  constructor(
    public isEditable: boolean,
    public onShowModal: any,
    public modalNameTarget: string,
    public koText: any,
    public getLocString: any,
    public koValue: ko.Observable<any>,
    public readOnly: any,
    public modalName: string,
    public koIsShowingModal: any,
    public onResetClick: any,
    public koTitleCaption: any,
    public koShowApplyButton: any,
    public onApplyClick: any,
    public onOkClick: any,
    public model: SurveyPropertyModalEditor,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-modal", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyModalEditor = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorModal(
        model.isEditable,
        model.onShowModal,
        model.modalNameTarget,
        model.koText,
        model.getLocString,
        model.koValue,
        model.readOnly,
        model.modalName,
        model.koIsShowingModal,
        model.onResetClick,
        model.koTitleCaption,
        model.koShowApplyButton,
        model.onApplyClick,
        model.onOkClick,
        model, //TODO need to break on props,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
