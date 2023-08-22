import { CCard as Card, CCardBody, CCardTitle, CCardText, CForm, CFormInput, CContainer, CRow, CCol, CCardImage, CButton, CFormRange } from '@coreui/react';
import { useEffect, useState } from 'react';
import { listarRestaurantes } from '../services/Restaurant.service';
import { Restaurant } from '../interfaces/Restaurant';
import { InputGroup } from './InputGroup';


export const ListRestaurants = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showCreation, setShowCreation] = useState(false);
    const [showNote, setshowNote] = useState(false);

    
    const showForme = () => {
      setshowNote(!showNote);
      { showNote ? setNombre("Enviar comentarios") : setNombre("Cancelar envío") }
    }

    const handleSearchChange = (e:any) => {
        setSearchTerm(e.target.value);
      };

    const [nombre, setNombre] = useState<string>('Capturar Restaurant ');

    const showCreations = () => {
        { showCreation ? setNombre("Capturar Restaurant") : setNombre("Cerrar Formulario") }
        setShowCreation(!showCreation);
    }

    useEffect(() => {
        listarRestaurantes(searchTerm)
            .then((restaurants) => {
                console.log(restaurants)
                setRestaurants(restaurants);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [searchTerm]);



    return (
        <CContainer>
            <CRow className="p-4" color="success">
                <h1>Chefy: Buscador de restaurantes</h1>
                <CCol>
                    <CForm>
                        <CFormInput
                            type="text"
                            id="searchInput"
                            placeholder="Escribe aquí para buscar..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </CForm>
                </CCol>
                <CCol xs={2}>
                    <CButton color="primary" onClick={showCreations}>
                        {nombre}
                    </CButton>

                </CCol>
                {showCreation && (
                    <CContainer fluid className="align-items-center p-4">
                        <CCol xs={10}>
                            <InputGroup />
                        </CCol>
                    </CContainer>

                )}
            </CRow>



            <CRow className="align-items-center py-4">
                {restaurants
                    ? restaurants
                        .map((restaurant) => (
                            <CCol xs={{ span: 3 }} id={restaurant._id} className="py-4">
                                <CCardImage orientation="top" src={"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"} />

                                <Card>
                                    <CCardBody>
                                        <CCardTitle>{restaurant.name}</CCardTitle>
                                        <CCardText>Dirección: {restaurant.address.building}  {restaurant.address.street} {restaurant.address.zipcode}</CCardText>
                                        {showNote && (
                                            <div>
                                                <CContainer className='p-2'>
                                                    <CFormRange min={0} max={5} defaultValue="3" id="calificación" className='py-1' label="Elije una calificación del 0 al 5" />
                                                    <CFormInput type="email" id="floatingInputValue" floatingLabel="Comenta algo del restaurante" />
                                                </CContainer>
                                                <CButton onClick={showForme} href="#" variant='outline' color="info" shape="rounded-pill">Mandar comentarios</CButton>
                                            </div>

                                        )}
                                        <CButton onClick={showForme} href="#" shape="rounded-pill">{nombre}</CButton>
                                        <CButton href="#" shape="rounded-pill">Ver Comentarios</CButton>
                                    </CCardBody>
                                </Card>
                            </CCol>
                        ))
                    :
                    <CCol xs={{ span: 3 }} className="py-4">
                        <Card>
                            <CCardBody>
                                <CCardText>Componente no encontrado</CCardText>
                            </CCardBody>
                        </Card>
                    </CCol>

                }

            </CRow>
        </CContainer>
    )
}
