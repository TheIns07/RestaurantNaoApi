import { CFormInput, CInputGroup, CInputGroupText, CCol, CButton } from '@coreui/react'
import React from 'react'

export const InputGroup = () => {
    return (
        <div>
            <h2>Creación de restaurant</h2>
            <CInputGroup className='p-2'>
                <CInputGroupText>Nombre del Restaurant</CInputGroupText>
                <CFormInput aria-label="First name" />
            </CInputGroup>
            <CInputGroup className='p-2'>
                <CInputGroupText>Edificio</CInputGroupText>
                <CFormInput aria-label="First name" />
                <CInputGroupText>Coordenadas</CInputGroupText>
                <CFormInput aria-label="Last name" />
                <CInputGroupText>Calle</CInputGroupText>
                <CFormInput aria-label="Last name"/>
                <CInputGroupText>Codigo Postal</CInputGroupText>
                <CFormInput aria-label="Last name" />
            </CInputGroup>
            <CInputGroup className='p-2'>
                <CInputGroupText>Barrio </CInputGroupText>
                <CFormInput aria-label="First name" />
                <CInputGroupText>Cocina </CInputGroupText>
                <CFormInput aria-label="First name" />
            </CInputGroup>
            <CCol xs="auto">
                    <CButton type="submit" color='success'>
                        Agregar Restaurant
                    </CButton>
                </CCol>
        </div>
    )
}
