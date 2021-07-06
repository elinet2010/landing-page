import React from 'react'
import { connect } from 'react-redux'
import menuItems from '../../../Constants/menuItems'
import { Scroll, Container, List, ListItem } from './styles'
import Search from './../../Search/index'
import Button from './../Button/index'
import { setCategory } from '../../../Redux/slice'

const Nav = ({ gallery, activeCategory, setCategory }) => {
  const scrollBy = () => {
    const gallery = document.getElementById('gallery')
    if (typeof window !== 'undefined') {
      window.scroll({
        top: gallery.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  const handleChange = (id) => {
    setCategory(id)
    scrollBy()
  }

  return (
    <Scroll>
      <Container gallery>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id}>
              <Button
                active={activeCategory === item.id}
                onClick={() => handleChange(item.id)}
              >
                {item.label}
              </Button>
            </ListItem>
          ))}
          {!gallery && <Search />}
        </List>
      </Container>
    </Scroll>
  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.Category.category,
})

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
