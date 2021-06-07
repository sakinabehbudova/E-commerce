import styled from 'styled-components'

const StyledComponent = styled.header`
  height: 480px;
  width:350px;
  background: url(${props=>props.image}) center/cover no-repeat;
`
export default StyledComponent;