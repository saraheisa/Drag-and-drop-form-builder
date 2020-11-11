import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrls: ['./form-builder-page.component.css']
})
export class FormBuilderPageComponent implements OnInit {

  field = {};
  sectionIds = [];
  form;
  categories = [
    {
      name: 'General',
      fields: [
        {
          type: 'input',
          visible: true,
          id: '',
          name: 'input 3',
          text: '',
          dataConcept: '',
          fieldLbl: '',
          value: '',
          inputType: 'Text',
          customCssClass: [],
          readonly: false,
          required: false,
          conditionalLogic: [],
          range: '',
          inputMask: '',
          errorMsg: '',
          isPastDate: false,
          min: null,
          max: null
        },
        {
          type: 'textarea',
          visible: true,
          id: '',
          name: '',
          text: '',
          dataConcept: '',
          fieldLbl: '',
          value: '',
          customCssClass: [],
          readonly: false,
          required: false,
          conditionalLogic: [],
          errorMsg: '',
          rows: 5,
          columns: 100
        },
        {
          type: 'checkbox',
          visible: true,
          id: '',
          dataConcept: '',
          fieldLbl: '',
          value: '',
          checked: false
        },
        {
          type: 'radio',
          visible: true,
          id: '',
          name: '',
          dataConcept: '',
          fieldLbl: '',
          value: '',
          checked: false
        },
        {
          type: 'select',
          visible: true,
          id: '',
          name: '',
          readonly: false,
          required: true,
          fieldLbl: 'Label',
          options: [
            {
              value: 'val',
              label: 'lbl'
            }
          ]
        },
        {
          type: 'fieldset',
          options: [
            {
              label: 'LBL',
              value: 'value',
              checked: false,
              hasFreeTxt: false,
              onlyChoice: false
            },
            {
              label: 'LBL',
              value: 'value',
              checked: false,
              hasFreeTxt: false,
              onlyChoice: false
            },
            {
              label: 'LBL',
              value: 'value',
              checked: false,
              hasFreeTxt: false,
              onlyChoice: false
            }
          ],
          fieldsetType: 'checkbox',
          fieldLbl: '',
          min: 0,
          max: 0,
          dataConcept: ''
        }
      ]
    },
    {
      name: 'Wrapper',
      section : true,
      fields: [
        {
          type: 'section',
          title: '',
          dataConcept: '',
          id: '',
          fields: [],
          repeat: false
        }
      ]
    },
    {
      name: 'Media',
      fields: [
        {
          type: 'image',
          id: '',
          dataConcept: '',
          dataName: '',
          fieldLbl: '',
          text: '',
          repeat: false,
          required: false,
          caption: 'Image Caption'
        },
        {
          type: 'video',
          id: '',
          dataConcept: '',
          dataName: '',
          fieldLbl: '',
          text: '',
          repeat: false,
          required: false,
          caption: 'Video Caption'
        },
        {
          type: 'audio',
          id: '',
          dataConcept: '',
          dataName: '',
          fieldLbl: '',
          text: '',
          repeat: false,
          required: false,
          caption: 'Audio Caption'
        }
      ]
    },
    {
      name: 'Advanced',
      fields: [
        {
          type: 'BarCode Scanner',
          dataGroup: '',
          id: '',
          fieldLbl: ''
        }
      ]
    }
  ];

  constructor( private formService: FormService) { }

  ngOnInit() {
    this.form = this.formService.getForm();
  }

  setSelectedField(field) {
    this.field = field;
  }

  addSection() {
    const id = 'formFieldsList#' + this.sectionIds.length;
    this.sectionIds.push(id);
    if ( this.form.sections ) {
      this.form.sections.push({
        type: 'section',
        title: '',
        dataConcept: '',
        id: id,
        fields: [],
        repeat: false
      });
    }
  }

}
