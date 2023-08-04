import { CCard as Card, CCardBody, CCardTitle, CCardText, CForm, CFormInput, CContainer, CRow, CCol, CCardImage, CButton } from '@coreui/react';
import { useEffect, useState } from 'react';
import { listarRestaurantes } from '../services/Restaurant.service';
import { Restaurant } from '../interfaces/Restaurant';
import { CalificacionComponent } from './CalificacionComponent';
import { InputGroup } from './InputGroup';


export const ListRestaurants = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showCreation, setShowCreation] = useState(false);
    
    const [nombre, setNombre] = useState<string>('Capturar Restaurant ');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const showCreations = () => {
        { showCreation ? setNombre("Capturar Restaurant") : setNombre("Cerrar Formulario") }
        setShowCreation(!showCreation);
    }

    useEffect(() => {
        listarRestaurantes()
            .then((restaurants) => {
                console.log(restaurants)
                setRestaurants(restaurants);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



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
                            onChange={handleSearch}
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
                        .filter(
                            (restaurant) =>
                                restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((restaurant) => (
                            <CCol xs={{ span: 3 }} id={restaurant._id} className="py-4">
                                <CCardImage orientation="top" src={"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"} />

                                <Card>
                                    <CCardBody>
                                        <CCardTitle>{restaurant.name}</CCardTitle>
                                        <CCardText>Dirección: {restaurant.address.building}  {restaurant.address.street} {restaurant.address.zipcode}</CCardText>

                                        <CalificacionComponent />
                                    </CCardBody>
                                </Card>
                            </CCol>
                        ))
                    : null}

            </CRow>
        </CContainer>
    )
}
