import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Col } from 'styled-bootstrap-grid'
import { Row, Grid, GridItem } from './styles'
import Button from './../Common/Button/index'
import listAll from './listAll'

const Results = ({ selectedCategory }) => {
  const [alls, setAlls] = useState(listAll)
  const [showItems, setShowItems] = useState(9)
  const filteredResults = listAll.filter(
    (item) => item.category === selectedCategory
  )
  const showButton = alls.length >= showItems

  const handleChange = () => {
    setShowItems(showItems + 10)
  }
  
  useEffect(() => {
    setAlls(filteredResults.length > 0 ? filteredResults : listAll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory])

  return (
    <Container>
      <Row>
        <Col>
          <Grid>
            {alls.slice(0, showItems).map((item) => (
              <GridItem key={item.id}>
                <span>{item.category}</span>
                <img src={item.img} alt={item.category} />
              </GridItem>
            ))}
          </Grid>
        </Col>
      </Row>
      <Row>
        <Col col className="text-center">
          {showButton && (
            <Button onClick={handleChange} active>
              Show Me More
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  selectedCategory: state.Category.category,
})

export default connect(mapStateToProps)(Results)
