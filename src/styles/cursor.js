import styled from "styled-components"

export const Cursor = styled.div`
  cursor: none;
  position: fixed;
  top: 0 px;
  left: 0 px;
  width: 30px;
  height: 30px;
  background: #20356B ;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 1111;
  opacity: 0.75;
  @media (max-width: 414px) {
        display: none;
    }
`
