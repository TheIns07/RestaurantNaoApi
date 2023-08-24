import { useEffect, useState } from 'react'
import { CButton, CFormRange, CFormInput, CContainer } from '@coreui/react';
import { agregarCalificacion, obtenerGradesRestaurante } from '../services/Restaurant.service';
import { useParams } from 'react-router-dom';

export const CalificacionComponent = () => {
  const [showNote, setshowNote] = useState(false);
  const [nombre, setNombre] = useState<string>('Capturar Restaurant ');

  const [calificacion, setcalificacion] = useState({
    comentario: '',
    note: 0,
    fecha: new Date().toISOString()
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setcalificacion({
      ...calificacion,
      [name]: value
    });
  };

  const { id } = useParams();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        obtenerGradesRestaurante(`${id}`).then()
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  
  const showForme = () => {
    setshowNote(!showNote);
    { showNote ? setNombre("Enviar comentarios") : setNombre("Cancelar envío") }
  }


  return (
    <div>

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
      <CButton onClick={showForme} href="#" shape="rounded-pill">Ver Comentarios</CButton>
    </div>
  )
}
