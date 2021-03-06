import { render } from '@testing-library/react'
import React from 'react'
import { Comments, ICommentsProps } from '../../../src/views/Comments/Comments'

describe('Comments', () => {
  const props: ICommentsProps = {
    projectId: 'projectId',
    issueId: 1,
  }

  it('should set action url', () => {
    const { baseElement } = render(<Comments {...props} />)
    expect(baseElement.querySelector('form')).toHaveAttribute('action', '/project/projectId/comments/edit?issueId=1')
  })
})
