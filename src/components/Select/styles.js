import theme from '../Theme/theme'
const color = theme.colors

export const customStyles = {
  control: (styles, state) => ({
    ...styles,
    borderRadius: 20,
    backgroundColor: 'blue',
    color: '#6C7284',
    maxHeight: '32px',
    margin: 0,
    padding: 0,
    border: 'none',
    boxShadow: 'none',
    ':hover': {
      borderColor: color.zircon,
      cursor: 'pointer',
      overflow: 'hidden',
    },
  }),
  // rest of the styles...
}

export const customStylesMobile = {
  control: (styles, state) => ({
    ...styles,
    borderRadius: 12,
    backgroundColor: 'blue',
    color: '#6C7284',
    maxHeight: '32px',
    margin: 0,
    padding: 0,
    boxShadow: 'none',
    ':hover': {
      borderColor: color.zircon,
      cursor: 'pointer',
    },
  }),
  // rest of the styles...
}

export const customStylesTime = {
  control: (styles, state) => ({
    ...styles,
    borderRadius: 20,
    backgroundColor: 'blue',
    color: '#6C7284',
    maxHeight: '32px',
    margin: 0,
    padding: 0,
    border: 'none',
    boxShadow: 'none',
    ':hover': {
      borderColor: color.zircon,
      cursor: 'pointer',
    },
  }),
  // rest of the styles...
}

export default customStyles