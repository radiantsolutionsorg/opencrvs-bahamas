import React from 'react'
import {
  Text,
  TextInput,
  Button,
  OpenCRVSFormField as Field,
  OpenCRVSFormSection as Section,
  OpenCRVSFormGroup as Group,
  OpenCRVSForm as Form,
  OpenCRVSInput as Input
} from '@opencrvs/components'

function isValidName(value: string) {
  if (value.length < 3) {
    return {
      message: {
        id: 'validation.invalidName',
        defaultMessage: 'Name must be at least 3 characters long'
      }
    }
  }
}

export default function MyForm() {
  return (
    <Form>
      <Section
        id="applicant"
        viewType="form"
        hasDocumentSection={true}
        name={{ id: 'customForm.name', defaultMessage: 'Applicant details' }}
        title={{
          id: 'customForm.sections.applicantDetails.title',
          defaultMessage: 'Applicant details'
        }}
      >
        <Text variant="h2" element="h2">
          Driver's license application
        </Text>

        <Group id="basic-details">
          {/* First name */}
          <Field
            section="applicant"
            group="basic-details"
            name="applicant-firstname"
            label={{
              id: 'customForm.fields.firstname',
              defaultMessage: 'First name'
            }}
            validate={isValidName}
          >
            <Input>
              <TextInput placeholder="John" />
            </Input>
          </Field>

          <br />

          {/* Last name */}
          <Field
            section="applicant"
            group="basic-details"
            name="applicant-lastname"
            label={{
              id: 'customForm.fields.lastname',
              defaultMessage: 'Last name'
            }}
            validate={isValidName}
          >
            <Input>
              <TextInput placeholder="Smith" />
            </Input>
          </Field>
        </Group>

        <br />

        <Button size="medium" type="primary">
          Submit
        </Button>
      </Section>
    </Form>
  )
}
