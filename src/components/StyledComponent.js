import styled from 'styled-components'

const StyledComponent = styled.header`
  height: 350px;
  width:250px;
  background: url(${props=>props.image}) center/cover no-repeat;
  margin-top:2rem
`
export default StyledComponent;