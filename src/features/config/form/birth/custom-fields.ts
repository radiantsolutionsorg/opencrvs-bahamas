/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors. OpenCRVS and the OpenCRVS
 * graphic logo are (registered/a) trademark(s) of Plan International.
 */

import { SerializedFormField } from '../types/types'

// this is a custom field for type: NUMBER which is not used in the original form
export const lifeExpectency: SerializedFormField = {
  name: 'lifeExpectency',
  customQuesstionMappingId: 'birth.child.child-view-group.lifeExpectency',
  custom: true,
  required: false,
  type: 'NUMBER',
  label: {
    id: 'form.customField.label.lifeExpectency',
    description: 'Custom field attribute',
    defaultMessage: 'Life expectency'
  },
  initialValue: '',
  validator: [],
  mapping: {
    mutation: {
      operation: 'customFieldToQuestionnaireTransformer'
    },
    query: {
      operation: 'questionnaireToCustomFieldTransformer'
    },
    template: {
      fieldName: 'birthChildLifeExpectency',
      operation: 'questionnaireToTemplateFieldTransformer'
    }
  },
  conditionals: [],
  placeholder: {
    id: 'form.customField.placeholder.lifeExpectency',
    description: 'Custom field attribute',
    defaultMessage: '75'
  }
}

// this is a custom field for type: TEXT which is not used in the original form
export const secondaryName: SerializedFormField = {
  name: 'secondaryName',
  customQuesstionMappingId:
    'birth.informant.informant-view-group.secondaryName',
  custom: true,
  required: true,
  type: 'TEXT',
  label: {
    id: 'form.customField.label.secondaryName',
    description: 'Custom field attribute',
    defaultMessage: 'Secondary Name'
  },
  initialValue: '',
  validator: [],
  mapping: {
    mutation: {
      operation: 'customFieldToQuestionnaireTransformer'
    },
    query: {
      operation: 'questionnaireToCustomFieldTransformer'
    },
    template: {
      fieldName: 'birthInformantSecondaryName',
      operation: 'questionnaireToTemplateFieldTransformer'
    }
  },
  conditionals: [],
  maxLength: 250
}

// this is a custom field for type: TEXTAREA which is not used in the original form
export const comment: SerializedFormField = {
  name: 'comment',
  customQuesstionMappingId: 'birth.informant.informant-view-group.comment',
  custom: true,
  required: false,
  type: 'TEXTAREA',
  label: {
    id: 'form.customField.label.comment',
    description: 'Custom field attribute',
    defaultMessage: 'Comment'
  },
  initialValue: '',
  validator: [],
  mapping: {
    mutation: {
      operation: 'customFieldToQuestionnaireTransformer'
    },
    query: {
      operation: 'questionnaireToCustomFieldTransformer'
    },
    template: {
      fieldName: 'birthInformantComment',
      operation: 'questionnaireToTemplateFieldTransformer'
    }
  },
  conditionals: [],
  maxLength: 250
}

// this is a custom field for type: TEL which is not used in the original form
export const secondaryPhoneNumber: SerializedFormField = {
  name: 'secondaryPhoneNumber',
  customQuesstionMappingId:
    'birth.mother.mother-view-group.secondaryPhoneNumber',
  custom: true,
  required: true,
  type: 'TEL',
  label: {
    id: 'form.customField.label.secondaryPhoneNumber',
    description: 'Custom field attribute',
    defaultMessage: 'Secondary phone number'
  },
  initialValue: '',
  validator: [
    {
      operation: 'phoneNumberFormat'
    }
  ],
  mapping: {
    mutation: {
      operation: 'customFieldToQuestionnaireTransformer'
    },
    query: {
      operation: 'questionnaireToCustomFieldTransformer'
    },
    template: {
      fieldName: 'birthMotherSecondaryPhoneNumber',
      operation: 'questionnaireToTemplateFieldTransformer'
    }
  },
  conditionals: [
    {
      action: 'hide',
      expression: `(!values.detailsExist && draftData.informant.informantType !== 'MOTHER')`
    }
  ]
}

// this is a custom field for type: SELECT_WITH_OPTIONS which is not used in the original form
export const origin: SerializedFormField = {
  name: 'origin',
  customQuesstionMappingId: 'birth.mother.mother-view-group.origin',
  custom: true,
  required: false,
  type: 'SELECT_WITH_OPTIONS',
  label: {
    id: 'form.customField.label.origin',
    description: 'Custom field attribute',
    defaultMessage: 'Origin'
  },
  placeholder: {
    defaultMessage: 'Select',
    description: 'Placeholder text for a select',
    id: 'form.field.select.placeholder'
  },
  initialValue: '',
  validator: [],
  options: [
    {
      value: 'ab93d5a5-c078-4dfa-b4ca-d54d1e57bca0',
      label: {
        id: 'ab93d5a5-c078-4dfa-b4ca-d54d1e57bca0',
        defaultMessage: 'Ibombo'
      }
    },
    {
      value: '68802d74-8341-41b9-b01b-7da7d23f227e',
      label: {
        id: '68802d74-8341-41b9-b01b-7da7d23f227e',
        defaultMessage: 'Ilanga'
      }
    },
    {
      value: 'dfdfe347-7a50-4fe2-a1aa-299c153e93b6',
      label: {
        id: 'dfdfe347-7a50-4fe2-a1aa-299c153e93b6',
        defaultMessage: 'Embe'
      }
    },
    {
      value: '7971e4b6-d750-430b-812d-bcfdfba432b7',
      label: {
        id: '7971e4b6-d750-430b-812d-bcfdfba432b7',
        defaultMessage: 'Ama'
      }
    },
    {
      value: '4209c316-3851-49f2-8557-42e04f0378b7',
      label: {
        id: '4209c316-3851-49f2-8557-42e04f0378b7',
        defaultMessage: 'Isamba'
      }
    },
    {
      value: 'bcbc338f-2442-4f9a-8851-fcda90da0987',
      label: {
        id: 'bcbc338f-2442-4f9a-8851-fcda90da0987',
        defaultMessage: 'Irundu'
      }
    },
    {
      value: 'c3316f49-30b7-4497-8944-adeafb30a541',
      label: {
        id: 'c3316f49-30b7-4497-8944-adeafb30a541',
        defaultMessage: 'Ienge'
      }
    },
    {
      value: '9a8bf747-b538-42d2-a098-8d16d5c81b30',
      label: {
        id: '9a8bf747-b538-42d2-a098-8d16d5c81b30',
        defaultMessage: 'Nsali'
      }
    },
    {
      value: '2e62789a-5d90-453d-9eef-bca02169ef5f',
      label: {
        id: '2e62789a-5d90-453d-9eef-bca02169ef5f',
        defaultMessage: 'Itambo'
      }
    },
    {
      value: '82594d1b-228c-4033-acf2-0a5d86e585a4',
      label: {
        id: '82594d1b-228c-4033-acf2-0a5d86e585a4',
        defaultMessage: 'Zobwe'
      }
    },
    {
      value: '26e11b26-b298-4c46-a408-87c349b39503',
      label: {
        id: '26e11b26-b298-4c46-a408-87c349b39503',
        defaultMessage: 'Funabuli'
      }
    },
    {
      value: '6e912829-9eaf-4ee4-8bc1-a2f747530e3b',
      label: {
        id: '6e912829-9eaf-4ee4-8bc1-a2f747530e3b',
        defaultMessage: 'Soka'
      }
    },
    {
      value: '24ee0ec0-dd41-4b50-aba5-ba066d8d45fb',
      label: {
        id: '24ee0ec0-dd41-4b50-aba5-ba066d8d45fb',
        defaultMessage: 'Ezhi'
      }
    },
    {
      value: '9b13bd61-a34e-4858-a5ab-8fddafdf2c43',
      label: {
        id: '9b13bd61-a34e-4858-a5ab-8fddafdf2c43',
        defaultMessage: 'Afue'
      }
    },
    {
      value: 'cc23196b-e129-4a7b-a39e-8c745affcec3',
      label: {
        id: 'cc23196b-e129-4a7b-a39e-8c745affcec3',
        defaultMessage: 'Pili'
      }
    },
    {
      value: 'a187cb62-a9b4-4a2c-ad2a-f67dd2fee7d6',
      label: {
        id: 'a187cb62-a9b4-4a2c-ad2a-f67dd2fee7d6',
        defaultMessage: 'Chibiya'
      }
    }
  ],
  mapping: {
    mutation: {
      operation: 'customFieldToQuestionnaireTransformer'
    },
    query: {
      operation: 'questionnaireToCustomFieldTransformer'
    },
    template: {
      fieldName: 'birthMotherOrigin',
      operation: 'questionnaireToTemplateFieldTransformer'
    }
  },
  conditionals: [
    {
      action: 'hide',
      expression: `(!values.detailsExist && draftData.informant.informantType !== 'MOTHER')`
    }
  ]
}
