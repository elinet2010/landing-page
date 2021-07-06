import React from 'react'
import { Col } from 'styled-bootstrap-grid'
import { Row } from './styles'
import Button from "../Button/index"

const Views = () => {
  return (
    <Row> 
      <Col className="text-center">
          <Button views>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                id="Block_Icon"
                data-name="Block Icon"
                d="M933,1078h6v-6h-6Zm8-6v6h6v-6Zm-8,14h6v-6h-6Zm8,0h6v-6h-6Z"
                transform="translate(-933 -1072)"
                fill="#ff5672"
              />
            </svg>
          </Button>
          <Button views>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                id="Column_Icon"
                data-name="Column Icon"
                d="M971,1072v5h14v-5Zm0,14h14v-5H971Z"
                transform="translate(-971 -1072)"
                fill="#ff5672"
              />
            </svg>
          </Button>
      </Col>
    </Row>
  )
}

export default Views
