import { CFormInput, CInputGroup, CInputGroupText, CCol, CButton, CAlert } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { agregarRestaurant } from '../services/Restaurant.service';
import { toast, Toaster } from 'react-hot-toast';
import { Restaurant } from '../interfaces/Restaurant';

export const InputGroup = () => {
    const [restaurant, setRestaurant] = useState<Restaurant>();

    useEffect(() => {
        agregarRestaurant()
            .then(() => {

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const guardarRestaurant = () => {
        toast('Restaurant Creado!', {
            icon: '🍲',
        })

    }
    return (
        <div>
            <h2>Creación de restaurant</h2>
            <CInputGroup className='p-2'>
                <CInputGroupText>Nombre del Restaurant</CInputGroupText>
                <CFormInput aria-label="First name" id='name' />
            </CInputGroup>
            <CInputGroup className='p-2'>
                <CInputGroupText>Edificio</CInputGroupText>
                <CFormInput aria-label="First name" id='building' />
                <CInputGroupText>Coordenadas</CInputGroupText>
                <CFormInput id='latitude' placeholder='Latitud' />
                <CFormInput id='longitude' aria-label="Last name" placeholder='Longitud' />
                <CInputGroupText>Calle</CInputGroupText>
                <CFormInput aria-label="Last name" id='street'/>
                <CInputGroupText>Codigo Postal</CInputGroupText>
                <CFormInput aria-label="Last name" id='zipcode'/>
            </CInputGroup>
            <CInputGroup className='p-2'>
                <CInputGroupText>Barrio </CInputGroupText>
                <CFormInput aria-label="First name" id='borough' />
                <CInputGroupText>Cocina </CInputGroupText>
                <CFormInput aria-label="First name" id='cuisine' />
            </CInputGroup>
            <CCol xs="auto">
                <CButton onClick={guardarRestaurant} type="submit" color='success'>
                    Agregar Restaurant
                </CButton>
            </CCol>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}
