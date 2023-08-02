import React, { useState } from 'react'
import { CButton,  CFormRange, CFormInput, CContainer} from '@coreui/react';

export const CalificacionComponent = () => {
    const [showNote, setshowNote] = useState(false);
  
    const showForme = () => {
      setshowNote(!showNote);
    }
  return (
    <div>
      <CButton onClick={showForme} href="#" shape="rounded-pill">Agregar Calificación</CButton>
      {showNote && (
        <div>
          <CContainer className='p-2'>
          <CFormRange min={0} max={5} defaultValue="3" id="calificación" className='py-1' />
          <CFormInput type="email" id="floatingInputValue" floatingLabel="Comenta algo del restaurante" />
          <CButton onClick={showForme} href="#" variant='outline' color="info" shape="rounded-pill">Mandar</CButton>
          </CContainer>
        </div>
        
      )}
    </div>
  )
}
